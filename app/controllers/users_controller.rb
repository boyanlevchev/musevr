class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :index]

  def show
    @user = User.find(params[:id])
    @spaces = Space.where('user_id = ?', @user.id)
  end

  def index
    @users = User.all
    # @spaces = []
    # @users.each do |user|
    #   space = Space.where('user_id = ?', user.id).first
    #   @spaces << space
    # end

  end
end
