Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :edit]
  end

  root to: "static_pages#root"
end
