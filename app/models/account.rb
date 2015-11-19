class Account < ActiveRecord::Base
  has_many :projects
  has_many(
    :members,
    through: :account_memberships,
    source: :person
  )
end
