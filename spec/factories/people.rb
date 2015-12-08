FactoryGirl.define do
  factory :person do
    name  { Faker::Name.name}
    email { Faker::Internet.email }
    password  { Faker::Internet.password }

    trait :oauth do
      provider  "google"
      uid { Faker::Number.number(12) }
    end

  end
end
