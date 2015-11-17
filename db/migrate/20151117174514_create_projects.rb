class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.boolean :public, default: false
      t.datetime :start_time, null: false
      t.integer :account_id, null: false
      t.string :description
      t.string :profile_content

      t.timestamps null: false
    end

    add_index :projects, :account_id
  end
end
