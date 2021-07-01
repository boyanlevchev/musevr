class Space < ApplicationRecord
  belongs_to :user
  belongs_to :public_space_template, optional: true
  belongs_to :user_space_template, optional: true

  before_create :clean_template_choice

  # has_many :artworks, dependent: :destroy
  has_many :artwork_in_spaces, dependent: :destroy
  has_one_attached :photo, service: :s3_free
  has_one_attached :fast_photo, service: :s3_paid

  PUBLIC_OR_CUSTOM_OPTIONS = [[:public, "Public"], [:custom, "Custom"]]

  attr_accessor :public_or_custom

  validates :name, presence: true
  validates :photo, presence: true, if: -> { user.subscription == 'free' }
  validates :fast_photo, presence: true, if: -> { user.subscription == 'paid' }
  validates :public_space_template, presence: { message: "You must choose a gallery template from the left" }, if: -> { public_or_custom != 'Custom' } #public_or_custom set to NOT custom, so that it can also catch values that are neither custom nor public i.e. if somebody tinkers with what is sent from the frontend
  validates :user_space_template, presence: { message: "You must choose a gallery template from the left" }, if: -> { public_or_custom != 'Public' } #public_or_custom set to NOT public, so that it can also catch values that are neither custom nor public i.e. if somebody tinkers with what is sent from the frontend

  include PgSearch::Model
  pg_search_scope :search,
    against: [ :name, :description ],
    using: {
      tsearch: { prefix: true }
    }

  def attachment
    if :photo
      return :photo
    elsif :fast_photo
      return :fast_photo
    end
  end

  def clean_template_choice
    if public_or_custom == 'Public'
      self.user_space_template_id = nil
    else
      self.public_space_template_id = nil
    end
  end

  def getSpaceModel
    if self.user.subscription == "free"
      return "https://musegallerytemplatesfree.s3.eu-west-2.amazonaws.com/#{self.public_space_template.model_url}"
    elsif self.user.subscription == "paid"
      return "https://d270od7aj4kefu.cloudfront.net/#{self.public_space_template.model_url}"
    end
  end

end
