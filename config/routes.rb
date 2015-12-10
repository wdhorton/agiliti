Rails.application.routes.draw do
  root to: "static_pages#index"

  get "/auth/google_oauth2/callback", to: "omniauth#google"

  namespace :api, defaults: { format: :json } do
    resources :projects, only: [:index, :create, :show, :update, :destroy] do
      resources :stories, only: [:index]
    end
    resources :stories, only: [:create, :update, :destroy]
    resources :accounts, only: [:index]
    resource :session, only: [:show, :create, :destroy]
    resources :people, only: [:create, :update]
  end

  get "*url", to: "static_pages#index"
end
