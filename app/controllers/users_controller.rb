class UsersController < ApplicationController
  skip_before_action :redirect_to_home_if_not_logged_in, only: [:show, :index]

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
      @users = User.where.not(id: 0)
    else
      @users = User.search_users(params[:search])
    # raise
    end

  end
end
