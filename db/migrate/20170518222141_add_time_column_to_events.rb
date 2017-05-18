class AddTimeColumnToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :time, 'timestamp without time zone'
  end
end
