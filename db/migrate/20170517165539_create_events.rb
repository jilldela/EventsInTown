class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :organizer_id, null: false
      t.string :title, null: false
      t.string :location, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.text :description
      t.string :image, null: false
      t.integer :ticket_price, null: false
      t.integer :ticket_quantity, null: false

      t.timestamps
    end

    add_index :events, :organizer_id
    add_index :events, :title
    add_index :events, :date
  end
end
