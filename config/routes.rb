Rails.application.routes.draw do

  namespace :api do
    get 'tickets/index'
  end

  namespace :api do
    get 'tickets/create'
  end

  namespace :api do
    get 'tickets/destroy'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :events, only: [:index, :create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index]
    get '/categories/:name', to: 'categories#show'
  end

  root to: "static_pages#root"
end
