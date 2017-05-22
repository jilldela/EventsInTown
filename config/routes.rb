Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :events, only: [:index, :create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]
  end

  root to: "static_pages#root"
end
