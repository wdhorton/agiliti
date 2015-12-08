FactoryGirl.define do
  factory :person do
    name  { FFaker::Name.name }
    email { FFaker::Internet.email }
    password  { FFaker::Internet.password }
  end
end
