class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :index]

  def show
    @user = User.find(params[:id])
    if params[:search] == "" || params[:search].nil?
      @spaces = Space.all
    else
      @spaces = Space.search(params[:search])
    # raise
    end
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
