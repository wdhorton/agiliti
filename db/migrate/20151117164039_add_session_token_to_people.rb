class AddSessionTokenToPeople < ActiveRecord::Migration
  def change
    add_column :people, :session_token, :string
  end
end
