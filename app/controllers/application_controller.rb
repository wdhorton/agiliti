class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def current_user
    @current_user || Person.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in!(person)
    session[:session_token] = person.reset_session_token!
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def ensure_signed_in
    unless (logged_in?)
      redirect_to signin_url
    end
  end

end
