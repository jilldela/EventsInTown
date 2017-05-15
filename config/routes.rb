Rails.application.routes.draw do

  get 'sessions/create'

  get 'sessions/destroy'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :edit]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
