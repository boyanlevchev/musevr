class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :index]

  def show
    @user = User.find(params[:id])
    if params[:search] == "" || params[:search].nil?
      @spaces = Space.where("user_id = ?", params[:id])
    else
      @spaces = Space.where("user_id = ?", params[:id]).search(params[:search])
    # raise
    end
  end

  def index
    if params[:search] == "" || params[:search].nil?
      @users = User.all
    else
      @users = User.search_users(params[:search])
    # raise
    end

    # @spaces = []
    # @users.each do |user|
    #   space = Space.where('user_id = ?', user.id).first
    #   @spaces << space
    # end

  end
end
