class ChangeTimeColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :time
  end
end
