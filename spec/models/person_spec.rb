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

  describe '.find_or_create_by_auth_hash' do

    it "finds a person if provider and uid are in the database" do
      person = create(:person, :oauth)
      auth_hash = { provider: person.provider, uid: person.uid }
      result = Person.find_or_create_by_auth_hash(auth_hash)
      expect(result).to eq(person)
    end

    describe "when provider and uid are not in the database" do
      before(:all) do
        @count = Person.count
        fname = Faker::Name.first_name
        lname = Faker::Name.last_name
        email = Faker::Internet.email

        @auth_hash = {
          info: {
            first_name: fname,
            last_name: lname,
            email: email,
            name: fname + " " + lname
          },
          provider: "google",
          uid: Faker::Number.number(12)
        }

        @person = Person.find_or_create_by_auth_hash(@auth_hash)
      end

      it "adds a person to the database" do
        expect(Person.count).to eq(@count + 1)
      end

      it "returns a new person" do
        expect(@person).to be_a(Person)
      end
    end

  end

end
