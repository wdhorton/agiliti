class Api::SessionsController < ApplicationController

  def show
    if current_user
      @person = current_user
      render json: @person
    else
      render json: {}
    end
  end

  def create
    @person = Person.find_by_credentials(
      params[:username_or_email],
      params[:password]
    )

    if @person
      sign_in!(@person)
      render json: @person
    else
      render json: {errors: @user.errors.full_messages }
    end
  end

  def destroy
    sign_out!
    render json: {}
  end

end
