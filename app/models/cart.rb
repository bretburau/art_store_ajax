class Cart < ApplicationRecord
  has_many :line_items
  has_many :pieces, through: :line_items
  belongs_to :user
  scope :submitted, -> { where(status: 'submitted') }
  scope :by_customer, ->(user) { where(user_id: user.id) }
  scope :most_valuable, -> { all.sort {|x,y| x.total <=> y.total}.last}
  scope :recent_sale_by, ->(artist) { carts_that_include?(artist) }

  def add_item(new_item_id)
    item_in_cart = self.line_items.find_by(piece_id: new_item_id)
    if item_in_cart
      item_in_cart.quantity += 1
      item_in_cart.save
      self.save
    else
      item = self.line_items.build(piece_id: new_item_id, quantity: 1)
      item.save
      self.save
    end
  end

  def total
    final_total = 0
    self.line_items.each do |line_item|
      piece = Piece.find(line_item.piece_id)
      final_total += piece.price * line_item.quantity
    end
    final_total
  end

  def self.carts_that_include?(artist) ##I don't really like this
    carts_with_artist = []
    all.each do |cart|
      cart.line_items.each do |item|
        @piece = Piece.find(item.piece_id)
        if @piece.artist_id == artist.id
          carts_with_artist << cart unless carts_with_artist.include?(cart)
        end
      end
    end
    carts_with_artist
  end
end
