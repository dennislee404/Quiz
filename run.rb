# Quiz Data: Prepare a set of quiz questions on different topics. You can use Ruby data structures like arrays or hashes to store quiz questions and their multiple-choice options, along with the correct answers.
# User Interface: Create an interactive command-line interface (CLI) that welcomes users and presents them with a list of available quiz topics to choose from.
# Quiz Logic: Implement the core logic of the quiz game. The program should randomly select questions from the chosen topic, present them one by one with multiple-choice options, and prompt the user to select an answer.
# Scoring: Keep track of the user's score throughout the quiz. Award points for correct answers and display the final score at the end of the quiz.
# Quiz Completion: Allow users to play multiple quizzes if they wish. After each quiz, display their score and ask if they want to play another quiz or exit the game.
# Error Handling: Implement error handling to ensure that user input is valid and within the expected range.
# Documentation: Provide clear instructions on how to navigate and play the game. Include examples of quiz data formats and how to add new quizzes.

require './datamanager.rb'

def get_name()
	puts "\nPlease enter your name."
	gets.chomp
end

def select_category(quiz)
	puts "\nPlease select your category"
	quiz.each do |key, value|
		puts "#{key}"
	end

	gets.chomp
end

def display_question(questions,num)
	puts "\nQ#{num}. #{questions[num-1]}"
end

def display_options(options,num)
	options[num-1].each_with_index do |option, index|
		puts "#{index+1}. #{option}"
	end
end

def check_answer(options,answer,num,score)
	loop do	
		begin
		ans = Integer(gets.chomp)
		rescue ArgumentError
			puts "Please enter a number between 1-4"
			next
		end

		unless ans < 5 and ans > 0
			puts "Please enter a number between 1-4"
			next
		end

		if options[num-1][ans-1] == answer[num-1]
			puts "Correct. The answer is #{answer[num-1]}"
			score += 1
		else
			puts "Wrong. The correct answer is #{answer[num-1]}"
		end
		return score
	end
end

def update_leaderboard(leaderboard,category,player_name,score)
	if leaderboard[category] == nil
		leaderboard[category][player_name] = score
	else
		if leaderboard[category].has_key?(player_name)
			if leaderboard[category][player_name] < score
				leaderboard[category][player_name] = score
			end
		else
			leaderboard[category][player_name] = score
		end
	end
end

def print_leaderboard(leaderboard,category)
	puts "\nHIGHSCORE - #{category}"
	leaderboard[category].sort_by(&:last).reverse.each do |player, score|
		puts "#{player}: #{score}"
	end	
end

def restart_game(quiz,leaderboard)
	puts "\nEnter 'Y' to play again"
	restart = gets.chomp.downcase
	if restart == "y"
		run_game(quiz,leaderboard)
	else
		DataManager.save_leaderboard('leaderboard.csv',leaderboard)
		exit
	end
end

def run_game(quiz,leaderboard)
	puts "Welcome to Elevate Quiz"
	
	loop do
		category = select_category(quiz)
		unless quiz.include?(category)
			puts "No such category. Please select again"
			next
		end

		player_name = get_name()	
		
		loop do
			score = 0
			(1..5).each do |num|
				display_question(quiz[category][0],num)
				display_options(quiz[category][1],num)
				score = check_answer(quiz[category][1],quiz[category][2],num,score)
				puts "Current score: #{score}"
			end
			puts "Final score: #{score}"
			update_leaderboard(leaderboard,category,player_name,score)
			print_leaderboard(leaderboard,category)
			restart_game(quiz,leaderboard)
		end
	end
end

quiz = DataManager.load_quiz('quiz.csv')
leaderboard = DataManager.load_leaderboard('leaderboard.csv')

run_game(quiz,leaderboard)