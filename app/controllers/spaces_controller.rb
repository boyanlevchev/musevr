class SpacesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_space, only: [:show, :edit, :destoy, :update]

  def index
    @spaces = Space.all
    @users = User.all
  end

  def show
    @artwork = Artwork.new
    respond_to do |format|
      format.html
      format.js
    end
  end

  def new
    @space = Space.new
  end

  def create
    @space = Space.new(space_params)
    @space.user = current_user
    if @space.save!
      redirect_to @space
    else
      render :new
    end
  end

  def edit
  end

  def destroy
    @user = @space.user
    @space.destroy
    redirect_to user_path(@user)
  end

  def update
    @space.update(space_params)
  end

  private

  def set_space
    @space = Space.find(params[:id])
  end

  def space_params
    params.require(:space).permit(:name, :description, :user_id, :photo)
  end
end
