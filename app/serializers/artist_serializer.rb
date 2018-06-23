class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :email, :name
  has_many :pieces
  has_many :categories, through: :pieces
end
