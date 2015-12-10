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

  describe("#password=") do

    before(:each) do
      @person = build(:person)
      @person.password=("password")
    end

    it "sets an instance variable @password" do
      expect(@person.password).to eq("password")
    end

    it "sets an attribute password_digest" do
      expect(@person.password_digest).to_not be_nil
    end

    it "makes password_digest different from password" do
      expect(@person.password_digest).not_to eq(@person.password)
    end

  end

  describe "#reset_session_token!" do

    before(:each) do
      @person = build(:person)
    end

    it "changes the session token" do
      old_token = @person.session_token
      @person.reset_session_token!
      expect(@person.session_token).not_to eq(old_token)
    end

    it "persists changes to the database" do
      expect(@person).to receive(:save!)
      @person.reset_session_token!
    end
  end

  describe "#valid_password?" do

    before(:all) do
      @person = build(:person)
      @password = @person.password
    end

    it "returns true when give correct password" do
      expect(@person.valid_password?(@password)).to be true
    end

    it "returns false when given incorrect password" do
      expect(@person.valid_password?("wrong password")).to be false
    end

    it "returns false when given nil" do
      expect(@person.valid_password?(nil)).to be false
    end

  end

end
