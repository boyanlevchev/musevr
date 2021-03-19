class AddLiveToSpaces < ActiveRecord::Migration[6.1]
  def change
    add_column :spaces, :live, :boolean, default: false
  end
end
