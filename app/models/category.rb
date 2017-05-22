class Category < ApplicationRecord
  validates :name, presence: true

  has_many :event_categories

  has_many :events,
    through: :event_categories,
    source: :event

end
