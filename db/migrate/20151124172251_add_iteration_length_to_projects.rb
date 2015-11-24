class AddIterationLengthToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :iteration_length, :integer, default: 1
  end
end
