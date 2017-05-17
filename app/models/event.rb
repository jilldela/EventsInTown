class Event < ApplicationRecord
  validates :organizer_id, :title, :location, :date, :time,
            :image, :ticket_price, :ticket_quantity, presence: true

  belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :User

  has_many :tickets
  has_many :event_categories
  has_many :bookmarks

end
