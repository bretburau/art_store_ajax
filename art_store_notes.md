User
  has_secure_password
  authentication...
  login
  Admin/seller/user
    admin can do it all, and edit users
  Has current cart
  has many carts

Artist
  inhereits from user, has higher permissions
  seller has many categories through pieces
  seller can add pieces, with nested categories
  has many categories through pieces
  has many pieces




Piece
  belongs to user(artist/author)
  has many categories
  prints_available?

Categories
  has many pieces
  has many users(artists) through pieces
  

Favorites/Likes?...Shares?
  if provider = "facebook" then have share button

LineItem

Cart

Class method to filter users categories?

START Sever: rails s -b 'ssl://localhost:3000?key=localhost.key&cert=localhost.crt'

##Dynamic dispatch
##Dynamic definition

Cart.LineItem.piece_id.artist_id?

kill server: kill -9 $(lsof -i tcp:3000 -t)