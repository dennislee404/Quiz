# Quiz Data: Prepare a set of quiz questions on different topics. You can use Ruby data structures like arrays or hashes to store quiz questions and their multiple-choice options, along with the correct answers.
# User Interface: Create an interactive command-line interface (CLI) that welcomes users and presents them with a list of available quiz topics to choose from.
# Quiz Logic: Implement the core logic of the quiz game. The program should randomly select questions from the chosen topic, present them one by one with multiple-choice options, and prompt the user to select an answer.
# Scoring: Keep track of the user's score throughout the quiz. Award points for correct answers and display the final score at the end of the quiz.
# Quiz Completion: Allow users to play multiple quizzes if they wish. After each quiz, display their score and ask if they want to play another quiz or exit the game.
# Error Handling: Implement error handling to ensure that user input is valid and within the expected range.
# Documentation: Provide clear instructions on how to navigate and play the game. Include examples of quiz data formats and how to add new quizzes.



def select_category
	puts "Please select your category"
	puts "1. Chemistry"
	puts "2. Mathematics"

	@cat = gets.chomp.to_i-1	
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
	ans = gets.chomp.to_i
	if options[num-1][ans-1] == answer[num-1]
		puts "correct"
		score += 1
	else
		puts "wrong"
	end
	return score
end

def score_tracking
end

# select_category
# score = 0
# (1..3).each do |num|
# 	display_question(category[@cat][0],num)
# 	display_options(category[@cat][1],num)
# 	score = check_answer(category[@cat][1],category[@cat][2],num,score)
# 	puts "Current score: #{score}"
# end
# puts "Final score: #{score}"
