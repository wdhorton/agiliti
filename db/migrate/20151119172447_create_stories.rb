class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :name, null: false
      t.string :story_type, null: false
      t.string :current_state
      t.integer :project_id, null: false

      t.timestamps null: false
    end

    add_index :stories, :project_id
  end
end
