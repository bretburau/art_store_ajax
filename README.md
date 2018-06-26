# Art Store
This is a an app built in Ruby on Rails where artists' can upload their work and users can view and add them to a shopping cart.

## Installation

To install, clone this repo, install dependencies, then migrate and seed the database:
```
bundle install
rake db:migrate
rake db:seed
```
Seeding isn't totally necessary, but it will populate the database with some placeholder artists, pieces, and categories to browse.

Start a local server:
```
rails s
```
For the Social Login buttons to work properyly on a local development server, follow this guide to start the server with https:
https://www.devmynd.com/blog/rails-local-development-https-using-self-signed-ssl-certificate/

## Usage

Navigate your browser to your localhost server, probably on localhost:3000. The home page displays all of the art pieces currently available. On the left side of the navigation bar are links to display the different artists, categores, and art pieces.
If you set your user to be an 'Artist' either during creation or on the edit user page, you can add new pieces to your library. Navigate to your profile and there's an "Upload a new image." This will let you create a new piece. The "View Reports" button on this page displays a report of the most valuable shopping cart containing your items.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bretburau/rails_art_store.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
