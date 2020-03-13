class AddColumnSavedHtmlToTableSpaces < ActiveRecord::Migration[6.0]
  def change
    add_column :spaces, :savedHTML, :text
  end
end
