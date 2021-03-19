class RemoveModelUrlColumnFromSpaces < ActiveRecord::Migration[6.1]
  def change
    remove_column :spaces, :modelURL, :string
    remove_column :spaces, :savedHTML, :string
  end
end
