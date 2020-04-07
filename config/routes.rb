Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth',
                                    sessions: 'users/sessions',
                                    registrations: 'users/registrations',
                                    passwords: 'users/passwords'
                                  }

  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :spaces do
    resources :artworks, only: [:create, :update]

    get 'vr', to: 'spaces#vr'
  end

  resources :artworks, only: :destroy
  resources :users, only: [:show, :index]

end
