class Api::PeopleController < ApplicationController

  def create
    @person = Person.new(person_params)

    Account.create!()

    if @person.save
      sign_in!(@person)
      render json: @person
    else
      render json: { errors: @person.errors.full_messages }
    end
  end

  private

  def person_params
    params.require(:person).permit(:username, :password, :email, :company, :name)
  end

end
