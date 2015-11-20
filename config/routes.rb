Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :projects, only: [:index, :create, :update, :destroy]
    resources :stories, only: [:index, :create, :update, :destroy]
    resources :accounts, only: [:index]
    resource :session, only: [:show, :create, :destroy]
  end

  resources :people, only: [:create, :update, :destroy]

  get 'signup/new', to: 'people#new', as: 'signup'

  get 'signin', to: 'sessions#new', as: 'signin'

  resource :session, only: [:create, :destroy]
end
