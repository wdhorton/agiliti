class Project < ActiveRecord::Base
  belongs_to :account
  has_many :members, through: :account
end
