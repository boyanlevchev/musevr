class ArtworksController < ApplicationController
  def create
    @artwork = Artwork.new(artwork_params)
    @space = Space.find(params[:space_id])
    @artwork.user = current_user
    @artwork.space = @space
    if @artwork.save!
      redirect_to space_path(@space)
    else
      render 'spaces/show'
    end
  end

  def update
    @artwork = Artwork.find(params[:id])
    @space = @artwork.space
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

  def artwork_params
    params.require(:artwork).permit(:name, :description, :user_id, :photo)
  end

end
