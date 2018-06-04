class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :email, :name
  has_many :pieces
end
