class ChangeStatusInAccount < ActiveRecord::Migration
  def change
    change_column :accounts, :status, :string, default: "active"
  end
end
