require 'rails_helper'

RSpec.describe Person, :type => :model do

  describe ".find_by_credentials" do

    before(:all) do
      @person = create(:person)
    end

    it "returns the correct person given an email and password" do
      result = Person.find_by_credentials(@person.email, @person.password)
      expect(result).to eq(@person)
    end

    it "returns nil with incorrect password" do
      result = Person.find_by_credentials(@person.email, "notyourpassword")
      expect(result).to be_nil
    end

    it "returns nil if email is not in the database" do
      result = Person.find_by_credentials("wrongemail", @person.password)
      expect(result).to be_nil
    end

  end

end
