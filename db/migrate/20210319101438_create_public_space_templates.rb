class CreatePublicSpaceTemplates < ActiveRecord::Migration[6.1]
  def change
    create_table :public_space_templates do |t|
      t.string :model_url
      t.string :image_url
      t.string :name

      t.timestamps
    end
  end
end
