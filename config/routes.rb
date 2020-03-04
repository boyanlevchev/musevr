Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :spaces do
    resources :artworks, only: [:create, :update]
  end

  resources :artworks, only: :destroy
  resources :users, only: [:show, :index]
end
