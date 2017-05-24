class AddColumnToTickets < ActiveRecord::Migration[5.0]
  def change
    add_column :tickets, :quantity, :integer
  end
end
