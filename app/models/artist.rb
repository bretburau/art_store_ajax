class Artist < User
  ##TODO set permissions somehow?
  has_many :pieces
  has_many :categories, through: :pieces
end