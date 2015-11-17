class SessionsController < ApplicationController

  def new
    @person = Person.new
    render :new
  end

  def create
    @person = Person.find_by_credentials(
      params[:person][:username_or_email],
      params[:person][:password]
    )

    if @person
      login(@person)
      redirect_to "/"
    else
      redirect_to signin_url
    end
  end

  def destroy
    logout
    redirect_to signin_url
  end

end
