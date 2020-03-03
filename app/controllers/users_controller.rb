class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @spaces = Space.where('user_id = ?', @user.id)
  end
end
