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
      # we skip the 0 user, as this is just a temp user until user registers
      @users = User.where.not(id: 0)
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
