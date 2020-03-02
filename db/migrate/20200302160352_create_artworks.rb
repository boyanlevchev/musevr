class CreateArtworks < ActiveRecord::Migration[6.0]
  def change
    create_table :artworks do |t|
      t.string :name
      t.text :description
      t.references :space, null: false, foreign_key: true

      t.timestamps
    end
  end
end
