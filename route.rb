require 'sinatra'
enable :sessions
require './datamanager.rb'

get '/' do 
	erb :index
end

get '/leaderboard' do
	session[:leaderboard] = DataManager.load_leaderboard('leaderboard.csv')

	erb :leaderboard
end

post '/leaderboard-category' do
	@category = params[:category]
	erb :leaderboard_category
end

post '/start' do
	@quiz = DataManager.load_quiz('quiz.csv')

	session[:player_name] = params[:name]
	session[:category] = params[:category]
	session[:results] = [] 

	session[:questions] = @quiz[session[:category]][0]
	session[:options] = @quiz[session[:category]][1]
	session[:answers] = @quiz[session[:category]][2]
	
	erb :start
end

post '/result' do 
	@user_choice = params[:choice]

	if @user_choice == session[:answers][session[:results].length]
		session[:results] << "correct"
	else
		session[:results] << "wrong"
	end

	if session[:results].length < 5 
		erb :start
	else
		@score = session[:results].count("correct")

		erb :result
	end

end