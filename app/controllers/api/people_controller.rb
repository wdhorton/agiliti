class Api::PeopleController < ApplicationController

  def create
    @person = Person.new(person_params)


    if @person.save
      @account = Account.create!(name: @person.company)
      AccountMembership.create!(person_id: @person.id, account_id: @account.id, owner: true)
      sign_in!(@person)
      render json: @person
    else
      render json: { errors: @person.errors.full_messages }
    end
  end

  def update
    @person = Person.find(params[:id])

    @person.update_attributes(person_params)
    render json: @person
  end

  private

  def person_params
    params.require(:person).permit(:username, :password, :email, :company, :name)
  end

end
