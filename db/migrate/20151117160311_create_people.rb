class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :username
      t.string :password_digest
      t.timestamps null: false
    end
  end
end
