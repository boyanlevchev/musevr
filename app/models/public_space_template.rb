class PublicSpaceTemplate < ApplicationRecord
  has_many :spaces

  validates :name, uniqueness: {scope: :name}
  validates :model_url, uniqueness: {scope: :model_url}
  validates :image_url, uniqueness: {scope: :image_url}

  def self.get_all_templates
    PublicSpaceTemplate.all.map { |space| ["https://d270od7aj4kefu.cloudfront.net/#{space.model_url}", "https://d270od7aj4kefu.cloudfront.net/#{space.image_url}"] }
  end
end
