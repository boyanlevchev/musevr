class Artwork < ApplicationRecord
  belongs_to :space

  validates :name, presence: true
end
