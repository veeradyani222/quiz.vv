//NOW THE SPORTS QUIZ

function sportsQuiz() {
    const sportsQuestions = [

        
            {
                question: "Who is known as the 'God of Cricket'?",
                a: "Sachin Tendulkar",
                b: "Virat Kohli",
                c: "MS Dhoni",
                d: "Rahul Dravid",
                correct: "a",
            },
            {
                question: "Which sport is associated with the term 'checkmate'?",
                a: "Football",
                b: "Chess",
                c: "Cricket",
                d: "Tennis",
                correct: "b",
            },
            {
                question: "In which sport would you find terms like 'stroke', 'forehand', and 'backhand'?",
                a: "Badminton",
                b: "Hockey",
                c: "Table Tennis",
                d: "Tennis",
                correct: "d",
            },
            {
                question: "Which Indian athlete won a silver medal in badminton at the Rio Olympics 2016?",
                a: "P. V. Sindhu",
                b: "Saina Nehwal",
                c: "Jwala Gutta",
                d: "Ashwini Ponnappa",
                correct: "a",
            },
            {
                question: "Which sport does Mahendra Singh Dhoni play?",
                a: "Football",
                b: "Cricket",
                c: "Tennis",
                d: "Hockey",
                correct: "b",
            },
            {
                question: "Which city hosted the Commonwealth Games 2010?",
                a: "Delhi",
                b: "Mumbai",
                c: "Kolkata",
                d: "Chennai",
                correct: "a",
            },
            {
                question: "Who is the captain of the Indian women's cricket team?",
                a: "Mithali Raj",
                b: "Harmanpreet Kaur",
                c: "Smriti Mandhana",
                d: "Jhulan Goswami",
                correct: "a",
            },
            {
                question: "Which sport is known as 'the sport of kings'?",
                a: "Golf",
                b: "Polo",
                c: "Fencing",
                d: "Boxing",
                correct: "b",
            },
            {
                question: "Which team has won the most IPL titles?",
                a: "Mumbai Indians",
                b: "Chennai Super Kings",
                c: "Kolkata Knight Riders",
                d: "Rajasthan Royals",
                correct: "a",
            },
            {
                question: "Who is the first Indian female gymnast to compete in the Olympics?",
                a: "Dipa Karmakar",
                b: "Sakshi Malik",
                c: "Mary Kom",
                d: "P. V. Sindhu",
                correct: "a",
            },
            {
                question: "Which country is known for its dominance in field hockey?",
                a: "India",
                b: "Australia",
                c: "Germany",
                d: "Netherlands",
                correct: "a",
            },
            {
                question: "Who won the FIFA World Cup in 2018?",
                a: "Brazil",
                b: "Germany",
                c: "France",
                d: "Spain",
                correct: "c",
            },
            {
                question: "Which Indian cricketer is known as 'The Wall'?",
                a: "Rahul Dravid",
                b: "Sachin Tendulkar",
                c: "Virender Sehwag",
                d: "Anil Kumble",
                correct: "a",
            },
            {
                question: "Which tennis player has won the most Grand Slam titles?",
                a: "Roger Federer",
                b: "Rafael Nadal",
                c: "Novak Djokovic",
                d: "Serena Williams",
                correct: "d",
            },
            {
                question: "Which sport does Lionel Messi play?",
                a: "Football",
                b: "Cricket",
                c: "Tennis",
                d: "Hockey",
                correct: "a",
            },
            {
                question: "Which country has won the most FIFA World Cups?",
                a: "Germany",
                b: "Brazil",
                c: "Argentina",
                d: "Italy",
                correct: "b",
            },
            {
                question: "Which sport is associated with the terms 'try', 'scrum', and 'lineout'?",
                a: "Basketball",
                b: "Rugby",
                c: "Baseball",
                d: "Golf",
                correct: "b",
            },
            {
                question: "Who won the ICC Cricket World Cup in 2011?",
                a: "Australia",
                b: "India",
                c: "England",
                d: "West Indies",
                correct: "b",
            },
            {
                question: "Which city hosted the 2016 Summer Olympics?",
                a: "Tokyo",
                b: "Rio de Janeiro",
                c: "London",
                d: "Beijing",
                correct: "b",
            },
            {
                question: "Which sport is played on a rink and involves sweeping?",
                a: "Basketball",
                b: "Curling",
                c: "Volleyball",
                d: "Rugby",
                correct: "b",
            },
            {
                question: "Who won the Wimbledon Men's Singles title in 2021?",
                a: "Roger Federer",
                b: "Rafael Nadal",
                c: "Novak Djokovic",
                d: "Andy Murray",
                correct: "c",
            },
            {
                question: "Which country won the ICC T20 World Cup in 2007?",
                a: "India",
                b: "Pakistan",
                c: "Australia",
                d: "West Indies",
                correct: "d",
            },
            {
                question: "Which sport is played with a shuttlecock?",
                a: "Table Tennis",
                b: "Badminton",
                c: "Golf",
                d: "Rugby",
                correct: "b",
            },
            {
                question: "Which athlete is known as 'The Flying Sikh'?",
                a: "P. T. Usha",
                b: "Milkha Singh",
                c: "Dipa Karmakar",
                d: "Sakshi Malik",
                correct: "b",
            },
            {
                question: "Which team won the NBA Championship in 2020?",
                a: "Golden State Warriors",
                b: "Toronto Raptors",
                c: "Los Angeles Lakers",
                d: "Chicago Bulls",
                correct: "c",
            },
            {
                question: "Which country is known for its dominance in cricket?",
                a: "England",
                b: "South Africa",
                c: "India",
                d: "New Zealand",
                correct: "c",
            },
            {
                question: "Which player has won the most Grand Slam singles titles in tennis history?",
                a: "Steffi Graf",
                b: "Serena Williams",
                c: "Martina Navratilova",
                d: "Margaret Court",
                correct: "b",
            },
            {
                question: "Which country hosted the FIFA World Cup in 2014?",
                a: "Germany",
                b: "Brazil",
                c: "Argentina",
                d: "Spain",
                correct: "b",
            },
            {
                question: "Which sport is associated with Wankhede Stadium?",
                a: "Football",
                b: "Cricket",
                c: "Tennis",
                d: "Hockey",
                correct: "b",
            },
            {
                question: "Who is the captain of the Indian men's cricket team?",
                a: "Virat Kohli",
                b: "Rohit Sharma",
                c: "Ajinkya Rahane",
                d: "Shikhar Dhawan",
                correct: "a",
            },
            {
                question: "Which team won the UEFA Champions League in 2021?",
                a: "Real Madrid",
                b: "Manchester City",
                c: "Bayern Munich",
                d: "Chelsea",
                correct: "d",
            },
            {
                question: "Which athlete is known as 'Pistol Pete'?",
                a: "Pete Sampras",
                b: "Michael Phelps",
                c: "Usain Bolt",
                d: "Michael Jordan",
                correct: "a",
            },
            {
                question: "Which sport uses a cue stick and balls on a table covered with green cloth?",
                a: "Snooker",
                b: "Golf",
                c: "Chess",
                d: "Bowling",
                correct: "a",
            },
            {
                question: "Who won the ICC Women's T20 World Cup in 2020?",
                a: "Australia",
                b: "England",
                c: "India",
                d: "West Indies",
                correct: "a",
            },
            {
                question: "Which city hosted the 2012 Summer Olympics?",
                a: "Sydney",
                b: "Athens",
                c: "Beijing",
                d: "London",
                correct: "d",
            },
            {
                question: "Which sport involves a 'free throw'?",
                a: "Basketball",
                b: "Baseball",
                c: "Golf",
                d: "Rugby",
                correct: "a",
            },
            {
                question: "Who won the French Open Women's Singles title in 2021?",
                a: "Simona Halep",
                b: "Serena Williams",
                c: "Ashleigh Barty",
                d: "Naomi Osaka",
                correct: "c",
            },
            {
                question: "Which country won the ICC Cricket World Cup in 1983?",
                a: "India",
                b: "West Indies",
                c: "Australia",
                d: "England",
                correct: "a",
            },
            {
                question: "Which sport is associated with the term 'home run'?",
                a: "Football",
                b: "Cricket",
                c: "Baseball",
                d: "Tennis",
                correct: "c",
            },
            {
                question: "Which athlete is known as 'The Great One'?",
                a: "Wayne Gretzky",
                b: "Michael Phelps",
                c: "Muhammad Ali",
                d: "Pele",
                correct: "a",
            },
            {
                question: "Which country won the ICC Champions Trophy in 2017?",
                a: "India",
                b: "Pakistan",
                c: "Australia",
                d: "England",
                correct: "b",
            },
            {
                question: "Which sport is played with a 'shuttle'?",
                a: "Basketball",
                b: "Badminton",
                c: "Hockey",
                d: "Rugby",
                correct: "b",
            },
            {
                question: "Who won the Formula 1 World Drivers' Championship in 2021?",
                a: "Lewis Hamilton",
                b: "Max Verstappen",
                c: "Sebastian Vettel",
                d: "Charles Leclerc",
                correct: "b",
            },
            {
                question: "Which country won the UEFA Euro 2020 football tournament?",
                a: "Italy",
                b: "England",
                c: "Spain",
                d: "Germany",
                correct: "a",
            },
            {
                question: "Which athlete won the most gold medals in a single Olympic Games?",
                a: "Michael Phelps",
                b: "Usain Bolt",
                c: "Simone Biles",
                d: "Larisa Latynina",
                correct: "a",
            },
            {
                question: "Which team won the 2021 Copa America?",
                a: "Argentina",
                b: "Brazil",
                c: "Uruguay",
                d: "Colombia",
                correct: "b",
            },
            {
                question: "Which sport is associated with the term 'tee-off'?",
                a: "Cricket",
                b: "Golf",
                c: "Tennis",
                d: "Boxing",
                correct: "b",
            },
            {
                question: "Who is considered the fastest man in the world?",
                a: "Usain Bolt",
                b: "Carl Lewis",
                c: "Justin Gatlin",
                d: "Yohan Blake",
                correct: "a",
            },
            {
                question: "Which country won the most medals in the Tokyo Olympics 2020?",
                a: "United States",
                b: "China",
                c: "Japan",
                d: "Russia",
                correct: "a",
            },
            {
                question: "Which sport involves a 'stump'?",
                a: "Football",
                b: "Cricket",
                c: "Tennis",
                d: "Hockey",
                correct: "b",
            },
            {
                question: "Who won the Australian Open Men's Singles title in 2021?",
                a: "Roger Federer",
                b: "Rafael Nadal",
                c: "Novak Djokovic",
                d: "Dominic Thiem",
                correct: "c",
            },
            {
                question: "Which country has won the most Olympic gold medals?",
                a: "United States",
                b: "China",
                c: "Russia",
                d: "Germany",
                correct: "a",
            },
            {
                question: "Which sport is associated with the term 'slam dunk'?",
                a: "Football",
                b: "Basketball",
                c: "Tennis",
                d: "Golf",
                correct: "b",
            },
            {
                question: "Who won the ICC Men's T20 World Cup in 2007?",
                a: "India",
                b: "Pakistan",
                c: "Australia",
                d: "West Indies",
                correct: "d",
            },
            {
                question: "Which athlete is known as 'The Black Pearl'?",
                a: "Diego Maradona",
                b: "Pele",
                c: "Lionel Messi",
                d: "Cristiano Ronaldo",
                correct: "b",
            },
            {
                question: "Which country won the ICC Women's Cricket World Cup in 2017?",
                a: "India",
                b: "Australia",
                c: "England",
                d: "West Indies",
                correct: "b",
            },
            {
                question: "Which sport involves a 'ring'?",
                a: "Football",
                b: "Cricket",
                c: "Boxing",
                d: "Basketball",
                correct: "d",
            },
            {
                question: "Who won the FIFA World Cup in 2006?",
                a: "Italy",
                b: "France",
                c: "Brazil",
                d: "Argentina",
                correct: "a",
            },
            {
                question: "Which player has won the most Olympic gold medals in tennis?",
                a: "Steffi Graf",
                b: "Serena Williams",
                c: "Martina Navratilova",
                d: "Venus Williams",
                correct: "b",
            }
        ];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    // Randomly shuffle and select 10 questions
    const selectedQuestions = shuffleArray(sportsQuestions).slice(0, 10);
    
    // Initialize user answers and submission state
    selectedQuestions.forEach(question => {
        question.userAnswer = '';
        question.submitted = false;
    });
    
    let index = 0;
    let correct = 0;
    const total = selectedQuestions.length;
    const questionBox = document.getElementById("questionBox");
    const allInputs = document.querySelectorAll(".options");
    
    const loadQuestion = () => {
        if (index >= total) {
            return quizEnd();
        }
        reset();
        const data = selectedQuestions[index];
        questionBox.innerHTML = `${index + 1}) ${data.question}`;
        allInputs[0].nextElementSibling.innerText = data.a;
        allInputs[1].nextElementSibling.innerText = data.b;
        allInputs[2].nextElementSibling.innerText = data.c;
        allInputs[3].nextElementSibling.innerText = data.d;
    
        allInputs.forEach((input) => {
            const colBox = input.closest('.colBox');
            if (input.value === data.userAnswer) {
                input.checked = true;
                if (data.submitted) {
                    if (data.userAnswer === data.correct) {
                        colBox.style.backgroundColor = 'lightgreen';
                    } else {
                        
                        colBox.style.backgroundColor = 'lightcoral';
                    }
                } else {
                    
                    colBox.style.backgroundColor = '';
                }
            } else {
                colBox.style.backgroundColor = '';
            }
        });
    
        // Enable inputs if not yet submitted
        if (!data.submitted) {
            allInputs.forEach(input => {
                input.disabled = false;
            });
        } else {
            // Disable inputs if already submitted
            allInputs.forEach(input => {
                input.disabled = true;
            });
        }
    };
    
    document.getElementById("submitBtn").onclick = function () {
        const data = selectedQuestions[index];
        const ans = getAnswer();
        if (ans !== undefined) {
            data.userAnswer = ans; // Store user answer
            data.submitted = true; // Mark as submitted
            if (ans === data.correct) {
                allInputs.forEach((input) => {
                    if (input.checked) {
                        const colBox = input.closest('.colBox');
                        colBox.style.backgroundColor = 'lightgreen';
                        
                    }
                });
                correct++;
            } else {
                allInputs.forEach((input) => {
                    if (input.checked) {
                        const colBox = input.closest('.colBox');
                        colBox.style.backgroundColor = 'lightcoral';
                    }
                    if (input.value === data.correct) {
                        const colBox = input.closest('.colBox');
                        colBox.style.backgroundColor = 'lightgreen';
                    }
                });
            }
            // Disable further changes after submission
            allInputs.forEach((input) => {
                input.disabled = true;
            });
        } else {
            alert("Please select an answer before submitting.");
        }
    };
    
    document.getElementById("nextButton").onclick = function () {
        if (index < total - 1) {
            index++;
            loadQuestion();
        } else {
            quizEnd();
        }
    };
    
    document.getElementById("prevBtn").onclick = function () {
        if (index > 0) {
            const data = selectedQuestions[index];
            const ans = getAnswer();
            if (ans !== undefined) {
                data.userAnswer = ans; // Store user answer before moving back
            }
            index--;
            loadQuestion();
        }
    };
    
    const getAnswer = () => {
        let ans;
        allInputs.forEach((input) => {
            if (input.checked) {
                ans = input.value;
            }
        });
        return ans;
    };
    
    const reset = () => {
        allInputs.forEach((input) => {
            input.checked = false;
            const colBox = input.closest('.colBox');
            colBox.style.backgroundColor = '';
            input.disabled = false; // Re-enable inputs
        });
    };
    
    const quizEnd = () => {
        let percentage = (correct / total) * 100;
        percentage = percentage.toFixed(1);
    
        document.querySelector(".quizBox").innerHTML = `
            <div class="col" style="display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                text-transform: capitalize;
                font-family: 'Poppins', serif;
                flex-direction: column;
                gap: 1vh;
                border: 3px solid black;
                padding: 2vh 2vh;">
                <h1 style="width: 15vw;
                    font-family: 'Poppins', serif;
                    color: black;
                    background-color: lightcyan;
                    border: 2px solid black;
                    border-radius: 50px;
                    cursor: pointer;">${percentage}%</h1>
                <br>
                <h3 class="w-100">Oh, you've scored ${correct} / ${total}</h3>
                <div class="reloadButton" id="reloadButton" onclick="reloadButton()"
                    style="width: 5vw;
                        font-family: 'Poppins', serif;
                        color: black;
                        background-color: lightgreen;
                        border: 2px solid black;
                        border-radius: 20px;
                        cursor: pointer;">
                    Okay
                </div>
            </div>`;
            document.getElementById("reloadButton").onclick = reloadButton; // Bind reloadButton function to reloadButton element
    };
    
    const scrollToQuizBox = () => {
        const quizBox = document.querySelector('.quizBox');
        quizBox.style.display = "block";
        quizBox.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Scroll to the quiz box and display it when the quiz starts
    scrollToQuizBox();
    loadQuestion();
    
    function reloadButton() {
        location.reload();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}    