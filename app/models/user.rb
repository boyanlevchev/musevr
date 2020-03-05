class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  has_many :spaces, dependent: :destroy
  has_many :artworks, through: :spaces
  has_one_attached :photo

  validates :username, presence: true, uniqueness: true
  before_create :set_color_to_random_value

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
