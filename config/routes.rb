Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      resources :messages
    end
  end

  root 'static#index'
end
