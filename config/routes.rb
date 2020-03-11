Rails.application.routes.draw do
  root 'static_pages#home'
  get '/home', to: 'static_pages#home'
  get '/show', to: 'static_pages#show'
  get '/help', to: 'static_pages#help'

end
