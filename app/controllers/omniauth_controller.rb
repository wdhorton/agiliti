class OmniauthController < ApplicationController

  def google
    @person = Person.find_or_create_by_auth_hash(request.env['omniauth.auth'])

    sign_in!(@person)
    redirect_to root_url + "#/"
  end
end
