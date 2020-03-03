class Artwork < ApplicationRecord
  belongs_to :space
  has_one_attached :photo

  validates :name, presence: true
  validates :photo, presence: true
end
