class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show]
  def show
    @user = User.find(params[:id])
    @spaces = Space.where('user_id = ?', @user.id)
  end
end
