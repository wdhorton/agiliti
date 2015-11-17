class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def current_user
    @current_user || Person.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(person)
    session[:session_token] = person.reset_session_token!
  end

  def logout
    person.reset_session_token!
    session[:session_token] = nil
  end

  def ensure_logged_in
    unless (logged_in?)
      redirect_to signin_url
    end
  end

end
