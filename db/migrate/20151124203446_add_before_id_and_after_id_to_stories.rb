class AddBeforeIdAndAfterIdToStories < ActiveRecord::Migration
  def change
    add_column :stories, :before_id, :integer
    add_column :stories, :after_id, :integer
  end
end
