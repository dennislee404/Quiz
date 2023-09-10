require 'csv'

class DataManager
	def self.load_quiz(filename)
		category = {}

		CSV.foreach(filename, headers: true) do |row|
			if category.include?(row[0])
				category[row[0]][0] << row[1]
				category[row[0]][1] << [row[2],row[3],row[4],row[5]]
				category[row[0]][2] << row[6]
			else
				category[row[0]] = [[row[1]],[[row[2],row[3],row[4],row[5]]],[row[6]]]
			end
		end
		category
	end

	def self.load_leaderboard(filename)
		leaderboard = {}
		
		CSV.foreach(filename, headers: true) do |row|
			if leaderboard.include?(row[0])
				leaderboard[row[0]].merge!({row[1] => row[2].to_i})
			else
				leaderboard[row[0]] = {row[1] => row[2].to_i}
			end
		end
		leaderboard
	end
end

# leaderboard = DataManager.load_leaderboard('leaderboard.csv')
# puts leaderboard.class #Hash
# puts leaderboard['Movies'].has_key?('Dennis')