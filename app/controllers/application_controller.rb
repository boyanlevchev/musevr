class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  before_action :redirect_to_home_if_not_logged_in, unless: :devise_controller?

  before_action :configure_permitted_parameters, if: :devise_controller?

  helper_method :resource_name, :resource, :devise_mapping, :resource_class

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: [:photo, :bio, :username])
    # For additional in app/views/devise/registrations/edit.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: [:bio, :photo, :username])
  end

  def default_url_options
    { host: ENV["www.musei.io"] || "localhost:3000" }
  end

  def after_sign_in_path_for(resource)
    request.referrer
  end

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def resource_class
    User
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

  def redirect_to_home_if_not_logged_in
    unless user_signed_in?
      flash.alert = "Before you can access that page, you must first sign up or log in"
      redirect_to root_path
    end
  end

end
