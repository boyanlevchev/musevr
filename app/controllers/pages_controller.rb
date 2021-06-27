class PagesController < ApplicationController
  skip_before_action :redirect_to_home_if_not_logged_in, only: [:home]

  def home
    # ADD ARTISTS AND SPACES FOR FEATURED STUFF
  end

  def about; end
end
