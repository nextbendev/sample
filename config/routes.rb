Rails.application.routes.draw do
  get 'users/new'
  root 'static_pages#home'
  get '/home', to: 'static_pages#home'
  get '/show', to: 'static_pages#show'
  get '/help', to: 'static_pages#help'
  get  '/signup',  to: 'users#new'

end
