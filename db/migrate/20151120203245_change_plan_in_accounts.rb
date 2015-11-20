class ChangePlanInAccounts < ActiveRecord::Migration
  def change
    change_column :accounts, :plan, :string, default: "free"
  end
end
