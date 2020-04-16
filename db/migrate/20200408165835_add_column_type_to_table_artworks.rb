class AddColumnTypeToTableArtworks < ActiveRecord::Migration[6.0]
  def change
    add_column :artworks, :artwork_type, :string
  end
end
