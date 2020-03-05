class Space < ApplicationRecord
  belongs_to :user
  has_many :artworks, dependent: :destroy
  has_one_attached :photo

  validates :name, presence: true

  include PgSearch::Model
  pg_search_scope :search,
    against: [ :name, :description ],
    using: {
      tsearch: { prefix: true }
    }

end
