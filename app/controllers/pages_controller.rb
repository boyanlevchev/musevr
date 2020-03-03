class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    # ADD ARTISTS AND SPACES FOR FEATURED STUFF
  end
end
