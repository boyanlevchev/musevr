class AddUserSpaceTemplateReferenceToSpaces < ActiveRecord::Migration[6.1]
  def change
    add_reference :spaces, :user_space_template
  end
end
