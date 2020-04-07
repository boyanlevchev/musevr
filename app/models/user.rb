class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :timeoutable,
         :omniauthable, omniauth_providers: [:facebook, :github]


  has_many :spaces, dependent: :destroy
  has_many :artworks, through: :spaces
  has_one_attached :photo

  validates :username, presence: true, uniqueness: true
  before_create :set_color_to_random_value

  include PgSearch::Model
  pg_search_scope :search_users,
    against: [ :username, :bio ],
    using: {
      tsearch: { prefix: true }
    }

  def self.create_from_provider_data(provider_data)
    where(provider: provider_data.provider, uid: provider_data.uid).first_or_create do | user |
      user.email = provider_data.info.email
      user.password = Devise.friendly_token[0, 20]
      user.skip_confirmation!
    end
  end

  COLORS = ['#fce2db', '#DE7800', '#FFFFDD']

  private

  def set_color_to_random_value
    if User.all.empty?
      self.color = COLORS.sample
    else
      self.color = COLORS.reject {|color| color == User.last.color}.sample
    end
  end
end
