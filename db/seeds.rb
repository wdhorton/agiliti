# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

william = Person.create!(name: "William H", email: "william@example.com", username: "wdh", password: "password", company: "App Academy")
personal = Account.create!(name: "William Personal", plan: "free", status: "active")
AccountMembership.create!(person_id: william.id, account_id: personal.id, owner:true)
Project.create!(name: "Test project", start_time: "2015-11-18 09:21:37 -0500", account_id: personal.id)
