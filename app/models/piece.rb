class Piece < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  has_many :pieces_categories
  has_many :categories, through: :pieces_categories
  has_many :line_items
  belongs_to :artist
  has_many :carts, through: :line_items
  
  def categories=(categories)
    if !categories[:name].empty?
      new_category = Category.find_or_create_by(name: categories[:name])
      self.categories << new_category
    end
  end
  
end
