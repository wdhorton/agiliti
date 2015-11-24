class AddEstimateToStories < ActiveRecord::Migration
  def change
    add_column :stories, :estimate, :integer, default: -1

    change_column :stories, :current_state, :string, default: "unscheduled"
  end
end
