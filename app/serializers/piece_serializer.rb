class PieceSerializer < ActiveModel::Serializer
  attributes :id, :prints_available, :original_available, :price
end
