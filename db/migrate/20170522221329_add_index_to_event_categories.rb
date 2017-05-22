class AddIndexToEventCategories < ActiveRecord::Migration[5.0]
  def change
    add_index :event_categories, :event_id
    add_index :event_categories, :category_id
  end
end
