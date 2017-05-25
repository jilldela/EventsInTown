class CreateBookmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmarks do |t|
      t.integer :user_id
      t.integer :event_id

      t.timestamps
    end
    add_index :bookmarks, :user_id
    add_index :bookmarks, :event_id
  end
end
