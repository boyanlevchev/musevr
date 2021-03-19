# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  respond_to :html, :js

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   raise
  # end
  def create
    resource = User.find_for_database_authentication(email: params[:user][:email])
    unless resource
      @success = "false"
      respond_with resource and return
    end

    if resource.valid_password?(params[:user][:password])
      # puts "no error"
      sign_in :user, resource
      @success = "true"
      respond_with resource and return
    else
      @success = "false"
      respond_with resource and return
    end
   end

 #  # DELETE /resource/sign_out
 #  # def destroy
 #  #   super
 #  # end

 #  protected

 #  def invalid_login_attempt
 #    set_flash_message(:alert, :invalid)
 #    render json: flash[:alert], status: 401
 #  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
