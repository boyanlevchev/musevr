class UserSpaceTemplatesController < ApplicationController
  def create
    userSpace = UserSpaceTemplate.new(user_space_template_params)
    userSpace.user = current_user
    if userSpace.save
      redirect_to new_space_path
    else
      render 'spaces/new'
    end
  end

  def destroy
  end

  private

  def user_space_template_params
    params.require(:user_space_template).permit(:name, :photo, :model)
  end
end
