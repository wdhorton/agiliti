class OmniauthController < ApplicationController

  def google
    @person = Person.find_by_auth_hash(request.env['omniauth.auth'])

    if @person
      sign_in!(@person)
      redirect_to root_url + "#/"
    else
      # render another form
    end
  end
end
