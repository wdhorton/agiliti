Rails.application.routes.draw do
  root to: "static_pages#index"

  resources :people, only: [:create, :update, :destroy]

  get 'signup/new', to: 'people#new', as: 'signup'

  get 'signin', to: 'sessions#new', as: 'signin'

  resource :session, only: [:create, :destroy]
end
