class PeopleController < ApplicationController

  def new
    @person = Person.new
    render :new
  end

  def create
    @person = Person.new(person_params)

    if @person.save
      login(@person)
      redirect_to "/"
    else
      flash.now[:errors] = @person.errors.full_messages
      render :new
    end
  end

  def update
  end

  def destroy
  end

  private

  def person_params
    params.require(:person).permit(:username, :password, :email, :company, :name)
  end

end
