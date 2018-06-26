Rails.application.routes.draw do
  get '/carts/thanks', to: 'carts#thanks', as: 'thanks'

  resources :carts
  resources :categories 
  resources :pieces
  resources :users 
  resources :line_items, only: [:create]
  get '/artists/:id/reports', to: 'artists#reports', as: 'artist_reports'
  get '/artists/:id/cp', to: 'artists#cp', as: 'artist_cp'

  resources :artists do 
    resources :pieces, only: [:show, :index, :new]
  end
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  root 'pages#show'
  get '/auth/facebook/callback', to: 'sessions#create'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  post 'carts/:id/checkout', to: 'carts#checkout', as: 'checkout'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
