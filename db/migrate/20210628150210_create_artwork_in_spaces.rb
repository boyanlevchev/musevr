class CreateArtworkInSpaces < ActiveRecord::Migration[6.1]
  def change
    create_table :artwork_in_spaces do |t|
      t.references :artwork, null: false, foreign_key: true
      t.references :space, null: false, foreign_key: true

      t.timestamps
    end
  end
end
