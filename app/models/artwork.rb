class Artwork < ApplicationRecord
  belongs_to :space
  has_one_attached :photo

  OPTIONS = ["Image", "Audio", "Video", "3D Model"]

  validates :name, presence: true
  validates :photo, presence: true
  validates :artwork_type, inclusion: OPTIONS
end
