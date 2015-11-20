Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :projects, only: [:index, :create, :update, :destroy] do
      resources :stories, only: [:index]
    end
    resources :stories, only: [:create, :update, :destroy]
    resources :accounts, only: [:index]
    resource :session, only: [:show, :create, :destroy]
    resources :people, only: [:create]
  end


  get 'signup/new', to: 'people#new', as: 'signup'

  get 'signin', to: 'sessions#new', as: 'signin'

  resource :session, only: [:create, :destroy]
end
