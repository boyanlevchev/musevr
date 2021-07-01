class RemoveImageUrlFromUserSpaceTemplates < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_space_templates, :image_url, :string
  end
end
