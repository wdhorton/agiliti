class Person < ActiveRecord::Base
  attr_reader :password

  has_many :accounts, through: :account_memberships
  has_many :projects, through: :accounts
  has_many :account_memberships

  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token

  def self.find_by_credentials(username_or_email, password)
    person = Person.find_by_email(username_or_email)
    person && person.valid_password?(password) ? person : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    provider = auth_hash[:provider]
    uid = auth_hash[:uid]

    person = Person.find_by(provider: provider, uid: uid)
    return person if person

    fname = auth_hash[:info][:first_name]
    lname = auth_hash[:info][:last_name]

    Person.create(
      email: auth_hash[:info][:email],
      name: auth_hash[:info][:name],
      username: (fname + lname).downcase,
      initials: (fname[0] + lname[0]).upcase,
      provider: provider,
      uid: uid,
    )
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = Person.generate_session_token
    save!
    self.session_token
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= Person.generate_session_token
  end

end
