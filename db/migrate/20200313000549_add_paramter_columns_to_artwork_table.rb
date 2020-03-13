class AddParamterColumnsToArtworkTable < ActiveRecord::Migration[6.0]
  def change
    add_column :artworks, :posx, :float
    add_column :artworks, :posy, :float
    add_column :artworks, :posz, :float
    add_column :artworks, :rotx, :float
    add_column :artworks, :roty, :float
    add_column :artworks, :rotz, :float
    add_column :artworks, :scale, :float
  end
end
