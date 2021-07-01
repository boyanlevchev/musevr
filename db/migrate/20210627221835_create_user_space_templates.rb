class CreateUserSpaceTemplates < ActiveRecord::Migration[6.1]
  def change
    create_table :user_space_templates do |t|
      t.string :image_url
      t.string :name
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
