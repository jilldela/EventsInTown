Rails.application.routes.draw do

  namespace :api do
    get 'bookmarks/index'
  end

  namespace :api do
    get 'bookmarks/create'
  end

  namespace :api do
    get 'bookmarks/destroy'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :events, only: [:index, :create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :tickets, only: [:index, :create, :destroy]
    resources :bookmarks, only: [:index, :create, :destroy]
    resources :categories, only: [:index]
    get '/categories/:name', to: 'categories#show'
  end

  root to: "static_pages#root"
end
