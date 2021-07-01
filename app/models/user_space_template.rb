class UserSpaceTemplate < ApplicationRecord
  belongs_to :user
  has_one_attached :model
  has_one_attached :photo

  validates :model, presence: true
  validates :name, presence: true
  validates :photo, presence: true

  def image_url
    photo.url
  end


end
