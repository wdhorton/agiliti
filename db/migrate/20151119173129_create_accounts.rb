class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.string :name, null: false
      t.string :plan
      t.string :status

      t.timestamps null: false
    end
  end
end
