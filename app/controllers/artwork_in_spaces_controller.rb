class ArtworksInSpaceController < ApplicationController
  def create
    artwork_in_space = ArtworkInSpace.new(artwork_in_spaces_params)
    space = Space.find(:space_id)
    artwork_in_space.space = space
    if artwork_in_space.save
      redirect_to space_path(space)
    else
      render 'spaces/show'
    end

  end

  def destroy
  end

  private


  def artwork_in_spaces_params
    params.require(:artworks_in_space).permit(:artwork_id)
  end

end
