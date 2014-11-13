# myapp.rb
require 'sinatra'

get '/' do
  'Simple'
  erb :index
end
