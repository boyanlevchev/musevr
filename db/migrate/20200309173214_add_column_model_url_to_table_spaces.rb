class AddColumnModelUrlToTableSpaces < ActiveRecord::Migration[6.0]
  def change
    add_column :spaces, :modelURL, :string
  end
end
