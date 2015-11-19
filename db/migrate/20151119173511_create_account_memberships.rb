class CreateAccountMemberships < ActiveRecord::Migration
  def change
    create_table :account_memberships do |t|
      t.integer :person_id, null: false
      t.integer :account_id, null: false
      t.boolean :owner, default: false
      t.boolean :admin, default: false
      t.boolean :project_creator, default: false

      t.timestamps null: false
    end

    add_index :account_memberships, :person_id
    add_index :account_memberships, :account_id
  end
end
