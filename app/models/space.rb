class Space < ApplicationRecord
  belongs_to :user
  has_many :artworks, dependent: :destroy

  validates :name, presence: true

end
