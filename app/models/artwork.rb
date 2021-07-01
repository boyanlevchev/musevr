class Artwork < ApplicationRecord
  belongs_to :user
  has_one_attached :photo, service: :s3_free
  has_one_attached :fast_photo, service: :s3_paid

  has_many :artwork_in_spaces

  OPTIONS = ["Image", "Audio", "Video", "3D Model"]

  validates :name, presence: true
  validates :photo, presence: true, if: -> (attrs){ Space.find(attrs["space_id"]).user.subscription == "free"}
  validates :fast_photo, presence: true, if: ->  (attrs) { Space.find(attrs["space_id"]).user.subscription == "paid"}
  validates :artwork_type, inclusion: OPTIONS

  def url_for(item)
    return url_for = Rails.application.routes.url_helpers.url_for(item)
  end

  def getArtworkURL

    if self.space.user.subscription == "free"
      if self.photo.attached?
        return url_for(self.photo)
      elsif self.fast_photo.attached?
        return url_for(self.fast_photo)
      end
    elsif self.space.user.subscription == "paid"
      if self.photo.attached?
        return url_for(self.photo)
      elsif self.fast_photo.attached?
        return "https://d22uta7428nor7.cloudfront.net/#{self.fast_photo.key}"
      end
    end
  end
end
