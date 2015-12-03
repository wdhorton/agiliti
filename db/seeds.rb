demo = Person.create!(name: "Demo User", email: "demo_user@example.com", username: "demouser", password: "password", company: "App Academy")
personal = Account.create!(name: "Demo Personal", plan: "free", status: "active")
AccountMembership.create!(person_id: demo.id, account_id: personal.id, owner:true)
business = Account.create!(name: "Demo Business", plan: "free", status: "active")
AccountMembership.create!(person_id: demo.id, account_id: business.id, owner:true)
project = Project.create!(name: "Test project", start_time: "2015-11-18 09:21:37 -0500", account_id: personal.id)

["accepted", "started", "unstarted", "unscheduled"].each.with_index do |state, i|
  5.times do |j|
    Story.create!(
      name: "Story #{5 * i + j}",
      story_type: "feature",
      current_state: state,
      project_id: project.id
    )
  end
end
