class ArtworksController < ApplicationController
  # respond_to :html, :js
  # before_action :set_aws

  def create
    @artwork = Artwork.new(artwork_params)
    @space = Space.find(params[:space_id])
    @artwork.space = @space

    if @artwork.save   # Note that save() only returns false on validation errors (when valid? returns false). If other errors occur at the database level, like a database deadlock or trying to insert null into a column that doesn’t allow it, that will still raise an exception.
    # if @artwork.valid?
      # @artwork.save!
      redirect_to space_path(@space)
    else
      # respond_with resource and return
      # render :json => { :success => false, :data => resource.errors.full_messages }
      # respond_to do |format|
      #     format.js
      #   end
      # render 'spaces/show'
      redirect_to space_path(@space)
    end
  end

  def update

    @artwork = Artwork.find(params[:id])
    if params[:space_id]
      @artwork.space.id = params[:space_id]
    else
      @artwork.space = @space
    end
    # @artwork.update!(artwork_params)
    if @artwork.update!(artwork_params)
      redirect_to space_path(@artwork.space)
    else
      render 'spaces/show'
    end
  end

  def destroy
    @artwork = Artwork.find(params[:id])
    @space = @artwork.space
    @artwork.destroy
    redirect_to @space
  end

  private

  # def set_aws
  #   if user_signed_in?
  #     current_user.subscription == "paid" ? s3_service.set_bucket(ENV['S3_BUCKET_PAID']) : s3_service.set_bucket(ENV['S3_BUCKET'])
  #   end
  # end

  def artwork_params
    params.require(:artwork).permit(:name, :description, :user_id, :fast_photo, :photo, :posx, :posy, :posz, :rotx, :roty, :rotz, :scale, :artwork_type)
  end
end
