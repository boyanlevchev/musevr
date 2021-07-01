Rails.application.routes.draw do
  get 'artworks_in_space/create'
  get 'artworks_in_space/destroy'
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth',
                                    sessions: 'users/sessions',
                                    registrations: 'users/registrations',
                                    passwords: 'users/passwords'
                                  }

  root to: 'pages#home'
  get 'about', to: 'pages#about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :spaces do
    resources :artworks, only: [:create, :update]

    get 'vr', to: 'spaces#vr'
  end

  resources :user_space_templates, only: [:create, :destroy, :edit, :update]

  resources :artworks, only: :destroy
  resources :users, only: [:show, :index]

end
