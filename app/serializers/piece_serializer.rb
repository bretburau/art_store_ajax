class PieceSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :artist
  has_many :categories
end
