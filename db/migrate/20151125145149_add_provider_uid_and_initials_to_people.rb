class AddProviderUidAndInitialsToPeople < ActiveRecord::Migration
  def change
    add_column :people, :provider, :string
    add_column :people, :uid, :string
    add_column :people, :initials, :string
  end
end
