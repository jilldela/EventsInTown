class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  before_validation :ensure_session_token

  attr_reader :password

  has_many :ticket_events,
    through: :tickets, #registered events
    source: :event
  has_many :events,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :Event
  has_many :bookmarks #saved events
  has_many :tickets #registration

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
