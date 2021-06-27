class ChangeSpaceReferenceToUserReferenceInArtworks < ActiveRecord::Migration[6.1]
  def change
    remove_reference :artworks, :space
    add_reference :artworks, :user
  end
end
