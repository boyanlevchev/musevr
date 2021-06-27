class Space < ApplicationRecord
  belongs_to :user
  belongs_to :public_space_template, optional: true
  belongs_to :user_space_template, optional: true

  has_many :artworks, dependent: :destroy
  has_one_attached :photo, service: :s3_free
  has_one_attached :fast_photo, service: :s3_paid

  validates :name, presence: true
  validates :photo, presence: true, if: -> { user.subscription == 'free' }
  validates :fast_photo, presence: true, if: -> { user.subscription == 'paid' }
  # validates :modelURL, presence: { message: "You must choose a gallery template from the left" }

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

  def getSpaceModel
    if self.user.subscription == "free"
      return "https://musegallerytemplatesfree.s3.eu-west-2.amazonaws.com/#{self.public_space_template.model_url}"
    elsif self.user.subscription == "paid"
      return "https://d270od7aj4kefu.cloudfront.net/#{self.public_space_template.model_url}"
    end
  end
end
