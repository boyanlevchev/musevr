class SpacesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :vr]
  before_action :set_space, only: [:show, :edit, :destoy, :update]
  # before_action :set_aws

  def index
    if params[:search] == "" || params[:search].nil?
      @spaces = Space.where.not(user_id: 0)
    else
      @spaces = Space.search(params[:search])
    # raise
    end
    # @users = User.all
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
    @images = Dir.chdir(Rails.root.join('app/assets/images')) do
      Dir.glob("spaces/*.png")
    end
  end

  def create
    @space = Space.new(space_params)
    @space.user = current_user

    if @space.save
      redirect_to space_path(@space)
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
    # @space.photo.attach(params[:photo])
    if @space.update!(space_params)
      redirect_to space_path(@space)
    else
      render 'spaces/show'
    end
  end


  def vr
    @space = Space.find(params[:space_id])
  end

  private

  def set_space
    @space = Space.find(params[:id])
  end

  def space_params
    params.require(:space).permit(:name, :description, :user_id, :fast_photo, :photo, :modelURL)
  end
end
