Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api do
    resources :projects, only: [:index, :create, :update, :destroy]
  end

  resources :people, only: [:create, :update, :destroy]

  get 'signup/new', to: 'people#new', as: 'signup'

  get 'signin', to: 'sessions#new', as: 'signin'

  resource :session, only: [:create, :destroy]
end
