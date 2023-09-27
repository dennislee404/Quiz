// const questions = [
// 	{ 
// 		question: "What is the capital of Japan?",
// 		options: ["Tokyo","Kyoto","Osaka","Seoul"],
// 		answer: "Tokyo"
// 	},
// 	{
// 		question: "Who painted the Mona Lisa?",
// 		options: ["Pablo Picasso","Vincent van Gogh","Leonardo da Vinci","Michelangelo"],
// 		answer: "Leonardo da Vinci"		
// 	}
// ]

const quizCSV = `Category,Question,Option1,Option2,Option3,Option4,Answer
General Knowledge,What is the capital of Japan?,Tokyo,Kyoto,Osaka,Seoul,Tokyo
General Knowledge,Who painted the Mona Lisa?,Pablo Picasso,Vincent van Gogh,Leonardo da Vinci,Michelangelo,Leonardo da Vinci
General Knowledge,Which gas do plants absorb from the atmosphere?,Oxygen,Carbon dioxide,Nitrogen,Hydrogen,Carbon dioxide
General Knowledge,Who wrote the novel '1984'?,J.K. Rowling,George Orwell,Ernest Hemingway,F. Scott Fitzgerald,George Orwell
General Knowledge,What is the largest planet in our solar system?,Earth,Venus,Mars,Jupiter,Jupiter
History,Who was the first President of the United States?,John Adams,Thomas Jefferson,Benjamin Franklin,George Washington,George Washington
History,In which year did Christopher Columbus first arrive in the Americas?,1492,1521,1607,1776,1492
History,Who was the leader of the Soviet Union during the Cuban Missile Crisis?,Joseph Stalin,Vladimir Putin,Nikita Khrushchev,Mikhail Gorbachev,Nikita Khrushchev
History,The Great Wall of China was primarily built to defend against which group?,Mongols,Romans,Vikings,Aztecs,Mongols
History,What year did World War I begin?,1905,1914,1939,1945,1914
Science,What is the chemical symbol for gold?,Go,GoLd,Au,GoD,Au
Science,What is the process by which plants make their own food using sunlight?,Photosynthesis,Respiration,Fermentation,Decomposition,Photosynthesis
Science,Which planet is known as the 'Red Planet'?,Venus,Earth,Mars,Jupiter,Mars
Science,What is the chemical formula for water?,CO2,H2O,O2,H2O2,H2O
Science,What is the smallest prime number?,0,1,2,3,2
Geography,Which ocean is the largest by surface area?,Atlantic Ocean,Indian Ocean,Arctic Ocean,Pacific Ocean,Pacific Ocean
Geography,What is the highest mountain in the world?,Mount Kilimanjaro,Mount Everest,Mount McKinley,Mount Fuji,Mount Everest
Geography,In which country can you find the Amazon Rainforest?,Brazil,Australia,Canada,Russia,Brazil
Geography,Which desert is often called the 'Sahara of North America'?,Sahara Desert,Gobi Desert,Atacama Desert,Mojave Desert,Mojave Desert
Geography,What is the capital of South Africa?,Cape Town,Pretoria,Johannesburg,Durban,Pretoria
Technology,Who co-founded Microsoft alongside Bill Gates?,Steve Jobs,Steve Wozniak,Mark Zuckerberg,Paul Allen,Paul Allen
Technology,What does 'www' stand for in a website URL?,World Wide Web,Web World Wonders,Wonderful World of Web,Web World Wide,World Wide Web
Technology,Which company developed the first commercially successful computer mouse?,IBM,Apple,Xerox,Logitech,Xerox
Technology,What does 'HTML' stand for in web development?,Hyperlink Text Markup Language,High-Level Text Markup Language,HyperText Markup Language,Hyper Transfer Markup Language,HyperText Markup Language
Technology,Who is often referred to as the 'father of the computer' for his work on the Analytical Engine?,Alan Turing,Charles Babbage,John von Neumann,Grace Hopper,Charles Babbage
Mathematics,What is the value of p (pi) to three decimal places?,3.142,3.141,3.14,3.139,3.141
Mathematics,What is the sum of all the angles in a triangle?,90 degrees,180 degrees,270 degrees,360 degrees,180 degrees
Mathematics,"If a rectangle has a length of 10 units and a width of 5 units, what is its area?",10 square units,15 square units,20 square units,25 square units,20 square units
Mathematics,What is the square root of 144?,10,12,14,16,12
Mathematics,"If a train travels at a speed of 60 miles per hour, how far will it travel in 2 hours?",30 miles,60 miles,120 miles,240 miles,120 miles
Movies,Who played the role of Neo in the movie 'The Matrix'?,Keanu Reeves,Brad Pitt,Tom Cruise,Will Smith,Keanu Reeves
Movies,Which film won the Academy Award for Best Picture in 2020?,Parasite,1917,Joker,The Irishman,Parasite
Movies,Who directed the 'Lord of the Rings' film trilogy?,Christopher Nolan,Quentin Tarantino,Peter Jackson,James Cameron,Peter Jackson
Movies,Which Disney movie features a character named Simba?,Aladdin,The Lion King,Beauty and the Beast,Cinderella,The Lion King
Movies,Who won the Academy Award for Best Actor for his role in 'The Revenant'?,Leonardo DiCaprio,Brad Pitt,Johnny Depp,Robert Downey Jr.,Leonardo DiCaprio
Sports,In which sport would you perform a slam dunk?,Tennis,Golf,Basketball,Soccer,Basketball
Sports,Which country won the FIFA World Cup in 2018?,Germany,Argentina,Brazil,France,France
Sports,Who holds the record for the most home runs in Major League Baseball (MLB) history?,Babe Ruth,Hank Aaron,Barry Bonds,Willie Mays,Barry Bonds
Sports,"How many players are there on a standard soccer team, including substitutes?",9,11,7,13,11
Sports,Which athlete is often referred to as 'The Greatest' in the sport of boxing?,Floyd Mayweather Jr.,Mike Tyson,Muhammad Ali,Manny Pacquiao,Muhammad Ali
Literature,Who wrote the novel 'To Kill a Mockingbird'?,Charles Dickens,Mark Twain,Harper Lee,J.K. Rowling,Harper Lee
Literature,In which Shakespearean play does the character Hamlet appear?,Macbeth,Romeo and Juliet,Othello,Hamlet,Hamlet
Literature,Which novel features a character named Jay Gatsby?,Moby-Dick,The Great Gatsby,Pride and Prejudice,The Catcher in the Rye,The Great Gatsby
Literature,Who is the author of the 'Harry Potter' book series?,George Orwell,Roald Dahl,J.R.R. Tolkien,J.K. Rowling,J.K. Rowling
Literature,Which Greek poet wrote 'The Iliad' and 'The Odyssey'?,Sappho,Homer,Aesop,Sophocles,Homer
Music,Who is often referred to as the 'King of Pop'?,Michael Jackson,Elvis Presley,Madonna,Prince,Michael Jackson
Music,Which rock band released the album 'The Wall' in 1979?,The Beatles,Led Zeppelin,Pink Floyd,The Rolling Stones,Pink Floyd
Music,Who sang the hit song 'Hello' in 2015?,Adele,Taylor Swift,Beyonce,Rihanna,Adele
Music,Which musical instrument is also known as the 'king of instruments'?,Piano,Violin,Guitar,Trumpet,Piano
Music,Who is the lead guitarist of the band Queen?,John Deacon,Roger Taylor,Brian May,Freddie Mercury,Brian May
Nature,What is the world's largest mammal?,Elephant,Blue whale,Giraffe,Rhinoceros,Blue whale
Nature,Which animal is known for its black and white stripes and is native to Africa?,Zebra,Cheetah,Kangaroo,Panda,Zebra
Nature,What is the process by which plants make their own food using sunlight?,Respiration,Photosynthesis,Digestion,Fermentation,Photosynthesis
Nature,What is the largest species of shark?,Hammerhead shark,Tiger shark,Great white shark,Whale shark,Whale shark
Nature,Which bird is known for its ability to mimic human speech?,Penguin,Parrot,Owl,Eagle,Parrot
Food,What is the main ingredient in traditional Japanese miso soup?,Tofu,Seaweed,Rice,Miso paste,Miso paste
Food,Which fruit is known as the 'king of fruits' and has a strong odor?,Banana,Pineapple,Durian,Mango,Durian
Food,What is the primary ingredient in guacamole?,Tomatoes,Onions,Avocado,Cilantro,Avocado
Food,What type of pasta is shaped like small rice grains and is often used in soups?,Spaghetti,Penne,Orzo,Fusilli,Orzo
Food,Which spice is often referred to as 'black gold'?,Cinnamon,Saffron,Paprika,Turmeric,Saffron
Language,What is the official language of Brazil?,Portuguese,Spanish,English,French,Portuguese
Language,Which alphabet is used in the Russian writing system?,Cyrillic,Latin,Greek,Arabic,Cyrillic
Language,How many official languages are there in Switzerland?,1,2,3,4,2
Language,In which language is 'Bonjour' a common greeting?,Spanish,Italian,French,German,French
Language,What is the most widely spoken language in the world?,English,Spanish,Chinese,Hindi,Chinese
Art,Who painted the 'Starry Night'?,Pablo Picasso,Vincent van Gogh,Leonardo da Vinci,Michelangelo,Vincent van Gogh
Art,Which artist is known for his iconic 'Campbell's Soup Cans' artwork?,Jackson Pollock,Andy Warhol,Salvador Dali,Pablo Picasso,Andy Warhol
Art,Who sculpted the statue of David?,Leonardo da Vinci,Donatello,Michelangelo,Raphael,Michelangelo
Art,What is the famous painting of a woman with a mysterious smile?,The Persistence of Memory,Guernica,The Last Supper,Mona Lisa,Mona Lisa
Art,Which art movement is characterized by bold colors and geometric shapes?,Impressionism,Cubism,Surrealism,Abstract Expressionism,Cubism
World Capitals,What is the capital of Canada?,Toronto,Vancouver,Ottawa,Montreal,Ottawa
World Capitals,Which city serves as the capital of Australia?,Sydney,Melbourne,Canberra,Brisbane,Canberra
World Capitals,What is the capital of Argentina?,Buenos Aires,Santiago,Rio de Janeiro,Bogota,Buenos Aires
World Capitals,Which city is the capital of Egypt?,Alexandria,Luxor,Giza,Cairo,Cairo
World Capitals,What is the capital of Japan?,Tokyo,Kyoto,Osaka,Seoul,Tokyo
Famous Inventors,Who is credited with inventing the telephone?,Alexander Graham Bell,Thomas Edison,Nikola Tesla,Isaac Newton,Alexander Graham Bell
Famous Inventors,Which inventor is known for the development of the light bulb?,Benjamin Franklin,Albert Einstein,Thomas Edison,Isaac Newton,Thomas Edison
Famous Inventors,Who is the inventor of the World Wide Web (WWW)?,Steve Jobs,Bill Gates,Tim Berners-Lee,Mark Zuckerberg,Tim Berners-Lee
Famous Inventors,Who developed the theory of relativity?,Isaac Newton,Galileo Galilei,Albert Einstein,Marie Curie,Albert Einstein
Famous Inventors,Which inventor is known for the creation of the first practical telephone?,Alexander Graham Bell,Thomas Edison,Nikola Tesla,Samuel Morse,Alexander Graham Bell
Celebrities,Who played the character of Jack Dawson in the movie 'Titanic'?,Leonardo DiCaprio,Brad Pitt,Johnny Depp,Tom Hanks,Leonardo DiCaprio
Celebrities,Which singer is known as the 'Queen of Pop'?,Madonna,Beyonce,Lady Gaga,Adele,Madonna
Celebrities,Who is the creator of the 'Harry Potter' book series?,George Orwell,Roald Dahl,J.R.R. Tolkien,J.K. Rowling,J.K. Rowling
Celebrities,Which actor portrayed the character of Iron Man in the Marvel Cinematic Universe?,Chris Hemsworth,Mark Ruffalo,Robert Downey Jr.,Chris Evans,Robert Downey Jr.
Celebrities,Who is the famous talk show host known for 'The Oprah Winfrey Show'?,Ellen DeGeneres,Jimmy Fallon,Oprah Winfrey,Conan O'Brien,Oprah Winfrey
Mythology,Who is the Greek god of the sea?,Zeus,Apollo,Poseidon,Hermes,Poseidon
Mythology,What is the name of the Norse god associated with thunder?,Thor,Loki,Odin,Freyja,Thor
Mythology,Which mythological figure is known for having wings and flying too close to the sun?,Hercules,Daedalus,Icarus,Perseus,Icarus
Mythology,Who is the Egyptian god of the afterlife and the dead?,Osiris,Anubis,Ra,Horus,Anubis
Mythology,"In Hindu mythology, who is the god of destruction and transformation?",Vishnu,Brahma,Shiva,Durga,Shiva
Space,Which planet is known as the 'Red Planet'?,Venus,Earth,Mars,Jupiter,Mars
Space,What is the largest moon in our solar system?,Europa,Ganymede,Titan,Triton,Ganymede
Space,What is the name of the closest galaxy to the Milky Way?,Andromeda,Orion,Draco,Pegasus,Andromeda
Space,What is the term for a shooting star that reaches the Earth's surface?,Meteoroid,Meteor,Meteorite,Asteroid,Meteorite
Space,Who was the first human to travel into space?,Yuri Gagarin,Neil Armstrong,John Glenn,Alan Shepard,Yuri Gagarin
Politics,Who is the current President of the United States?,Joe Biden,Donald Trump,Barack Obama,George W. Bush,Joe Biden
Politics,What is the name of the leader of the United Kingdom's government?,Boris Johnson,Theresa May,David Cameron,Tony Blair,Boris Johnson
Politics,Who is the Chancellor of Germany?,Angela Merkel,Gerhard Schroder,Helmut Kohl,Ludwig Erhard,Angela Merkel
Politics,Which country is known as the world's largest democracy?,Russia,China,India,United States,India
Politics,What is the official residence of the President of France?,Elysee Palace,Buckingham Palace,White House,Kremlin,Elysee Palace`

const quiz = []

const lines = quizCSV.split('\n')
const headers = lines[0].split(',')

for (let i = 1; i < lines.length; i++) {
	const category = lines[i].split(',')[0]
	const rowData = lines[i].split(',')
	quiz[i] = {question: lines[i].split(',')[1],options: [lines[i].split(',')[2],lines[i].split(',')[3],lines[i].split(',')[4],lines[i].split(',')[5]], answer: lines[i].split(',')[6]}


	for (let j = 0; j < rowData.length; j++) {
		quiz[i][headers[j]] = rowData[j]
	}
}

let num = 0
let questionIndex = 0
const categoriesElement = document.getElementById('categories')
const displayElement = document.getElementById('display')
const questionElement = document.getElementById('question')
const optionsElement = document.querySelectorAll('.option')
const feedbackElement = document.getElementById('feedback')
const nextElement = document.getElementById('next')

function displayQuestion(questionIndex) {
	questionElement.textContent = quiz[questionIndex].question
	optionsElement.forEach(displayOptions)
}

function displayOptions(option,index) {
	option.textContent = quiz[questionIndex].options[index]
	option.addEventListener('click',checkAnswer)
}

function checkAnswer(event) {
	const selectedOption = event.target.textContent
	console.log(selectedOption)
	console.log(quiz[questionIndex].answer)
	if (selectedOption === quiz[questionIndex].answer) {
		feedbackElement.textContent = "Correct!"
	} else {
		feedbackElement.textContent = "Wrong!"
	}
}

function nextQuestion() {
	questionIndex += 1
	num += 1
	if (num < 5) {
		displayQuestion(questionIndex)
		feedbackElement.textContent = ''
	}else{
		feedbackElement.textContent = 'You have finished the quiz'
	}
}

function selectCategory() {
	questionIndex = categoriesElement.value*5-4
	console.log(questionIndex)
	displayQuestion(questionIndex)
	nextElement.addEventListener('click',nextQuestion)	
}

categoriesElement.addEventListener('change',selectCategory)

// displayQuestion()
// nextElement.addEventListener('click',nextQuestion)







