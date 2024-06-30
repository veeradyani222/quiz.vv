//NOW FOR cAffairs quiz

function cAffairsQuiz() {
    const cAffairsQuestions = [

      
            {
                question: "Who is the Prime Minister of India?",
                a: "Narendra Modi",
                b: "Rahul Gandhi",
                c: "Amit Shah",
                d: "Manmohan Singh",
                correct: "a",
            },
            {
                question: "Which country recently hosted the G20 summit?",
                a: "India",
                b: "France",
                c: "Saudi Arabia",
                d: "Japan",
                correct: "c",
            },
            {
                question: "Who won the ICC Men's T20 World Cup recently?",
                a: "India",
                b: "Australia",
                c: "England",
                d: "Pakistan",
                correct: "b",
            },
            {
                question: "Which Indian state recently announced free electricity for farmers?",
                a: "Maharashtra",
                b: "Punjab",
                c: "Uttar Pradesh",
                d: "Haryana",
                correct: "c",
            },
            {
                question: "Which city in India recently hosted the 2023 Cricket World Cup final?",
                a: "Mumbai",
                b: "Delhi",
                c: "Kolkata",
                d: "Chennai",
                correct: "a",
            },
            {
                question: "Who is the current President of the United States?",
                a: "Donald Trump",
                b: "Joe Biden",
                c: "Barack Obama",
                d: "Hillary Clinton",
                correct: "b",
            },
            {
                question: "Which country recently became the third to land a rover on Mars?",
                a: "Russia",
                b: "China",
                c: "India",
                d: "Japan",
                correct: "b",
            },
            {
                question: "Who won the Nobel Peace Prize in the year 2023?",
                a: "Malala Yousafzai",
                b: "Greta Thunberg",
                c: "Imran Khan",
                d: "Pope Francis",
                correct: "a",
            },
            {
                question: "Which country recently hosted the 2024 Summer Olympics?",
                a: "China",
                b: "Brazil",
                c: "France",
                d: "Japan",
                correct: "d",
            },
            {
                question: "Who is the current Chief Minister of Delhi?",
                a: "Arvind Kejriwal",
                b: "Manohar Lal Khattar",
                c: "Yogi Adityanath",
                d: "Mamata Banerjee",
                correct: "a",
            },
            {
                question: "Which country recently launched the James Webb Space Telescope?",
                a: "USA",
                b: "Russia",
                c: "China",
                d: "India",
                correct: "a",
            },
            {
                question: "Who is the CEO of Tesla Inc.?",
                a: "Tim Cook",
                b: "Jeff Bezos",
                c: "Elon Musk",
                d: "Satya Nadella",
                correct: "c",
            },
            {
                question: "Which country recently became the largest economy in the world by nominal GDP?",
                a: "China",
                b: "India",
                c: "USA",
                d: "Japan",
                correct: "c",
            },
            {
                question: "Who won the 2023 ICC Women's Cricket World Cup?",
                a: "India",
                b: "Australia",
                c: "England",
                d: "South Africa",
                correct: "b",
            },
            {
                question: "Which Indian state recently announced a ban on single-use plastics?",
                a: "Maharashtra",
                b: "Tamil Nadu",
                c: "Karnataka",
                d: "Rajasthan",
                correct: "b",
            },
            {
                question: "Who won the 2023 FIFA Men's World Cup?",
                a: "Brazil",
                b: "Germany",
                c: "Argentina",
                d: "France",
                correct: "c",
            },
            {
                question: "Which city in India hosted the 2023 Asia Cup Cricket tournament?",
                a: "Mumbai",
                b: "Chennai",
                c: "Kolkata",
                d: "Delhi",
                correct: "d",
            },
            {
                question: "Who is the current Chief Minister of Uttar Pradesh?",
                a: "Yogi Adityanath",
                b: "Akhilesh Yadav",
                c: "Mayawati",
                d: "Manoj Sinha",
                correct: "a",
            },
            {
                question: "Which country recently launched the Perseverance rover to Mars?",
                a: "China",
                b: "USA",
                c: "Russia",
                d: "India",
                correct: "b",
            },
            {
                question: "Who won the 2023 Academy Award (Oscar) for Best Actor?",
                a: "Leonardo DiCaprio",
                b: "Brad Pitt",
                c: "Will Smith",
                d: "Joaquin Phoenix",
                correct: "c",
            },
            {
                question: "Which Indian city recently inaugurated its first metro rail service?",
                a: "Jaipur",
                b: "Patna",
                c: "Guwahati",
                d: "Lucknow",
                correct: "d",
            },
            {
                question: "Who won the 2023 ICC Men's Cricket World Cup?",
                a: "India",
                b: "Australia",
                c: "England",
                d: "New Zealand",
                correct: "a",
            },
            {
                question: "Which Indian state recently achieved 100% vaccination coverage against COVID-19?",
                a: "Kerala",
                b: "Goa",
                c: "Himachal Pradesh",
                d: "Sikkim",
                correct: "c",
            },
            {
                question: "Who is the current Chief Minister of Maharashtra?",
                a: "Devendra Fadnavis",
                b: "Uddhav Thackeray",
                c: "Sharad Pawar",
                d: "Nitin Gadkari",
                correct: "b",
            },
            {
                question: "Which country recently hosted the COP26 climate conference?",
                a: "India",
                b: "France",
                c: "China",
                d: "United Kingdom",
                correct: "d",
            },
            {
                question: "Who won the 2023 Nobel Prize in Literature?",
                a: "Margaret Atwood",
                b: "Kazuo Ishiguro",
                c: "Haruki Murakami",
                d: "Jhumpa Lahiri",
                correct: "b",
            },
            {
                question: "Which Indian city recently became the first to offer free WiFi across the city?",
                a: "Mumbai",
                b: "Bengaluru",
                c: "Hyderabad",
                d: "Chennai",
                correct: "b",
            },
            {
                question: "Who won the 2023 Australian Open Men's Singles title?",
                a: "Rafael Nadal",
                b: "Novak Djokovic",
                c: "Roger Federer",
                d: "Dominic Thiem",
                correct: "b",
            },
            {
                question: "Which Indian state recently launched the 'Mukhyamantri Annapurna Yojana'?",
                a: "Bihar",
                b: "West Bengal",
                c: "Odisha",
                d: "Uttarakhand",
                correct: "c",
            },
            {
                question: "Who won the 2023 ICC Women's T20 World Cup?",
                a: "Australia",
                b: "India",
                c: "England",
                d: "South Africa",
                correct: "a",
            },
            {
                question: "Which Indian state recently declared 'Ragi' as the state food grain?",
                a: "Karnataka",
                b: "Tamil Nadu",
                c: "Andhra Pradesh",
                d: "Telangana",
                correct: "a",
            },
            {
                question: "Who won the 2023 Academy Award (Oscar) for Best Actress?",
                a: "Frances McDormand",
                b: "Nicole Kidman",
                c: "Jessica Chastain",
                d: "Olivia Colman",
                correct: "c",
            },
            {
                question: "Which Indian city recently hosted the 2023 International Film Festival of India (IFFI)?",
                a: "Mumbai",
                b: "Chennai",
                c: "Goa",
                d: "Hyderabad",
                correct: "c",
            },
            {
                question: "Who won the 2023 FIFA Women's World Cup?",
                a: "USA",
                b: "England",
                c: "Germany",
                d: "Brazil",
                correct: "a",
            },
            {
                question: "Which Indian state recently launched the 'KALIA' scheme for farmers?",
                a: "Odisha",
                b: "Jharkhand",
                c: "Chhattisgarh",
                d: "Madhya Pradesh",
                correct: "a",
            },
            {
                question: "Who won the 2023 Wimbledon Men's Singles title?",
                a: "Novak Djokovic",
                b: "Roger Federer",
                c: "Rafael Nadal",
                d: "Daniil Medvedev",
                correct: "a",
            },
            {
                question: "Which Indian state recently achieved 100% electrification of households?",
                a: "Gujarat",
                b: "Kerala",
                c: "Punjab",
                d: "Goa",
                correct: "b",
            },
            {
                question: "Who won the 2023 ICC Men's Under-19 Cricket World Cup?",
                a: "India",
                b: "Australia",
                c: "England",
                d: "Pakistan",
                correct: "a",
            },
            {
                question: "Which Indian city recently launched the 'Mission Bageerathi' to clean the river?",
                a: "Varanasi",
                b: "Haridwar",
                c: "Patna",
                d: "Agra",
                correct: "b",
            },
            {
                question: "Who won the 2023 Pulitzer Prize for Fiction?",
                a: "Louise Erdrich",
                b: "Viet Thanh Nguyen",
                c: "Colson Whitehead",
                d: "Donna Tartt",
                correct: "c",
            },
            {
                question: "Which Indian state recently announced a ban on firecrackers during Diwali?",
                a: "Maharashtra",
                b: "Uttar Pradesh",
                c: "Delhi",
                d: "West Bengal",
                correct: "c",
            },
            {
                question: "Who won the 2023 Ballon d'Or award for men's football?",
                a: "Lionel Messi",
                b: "Cristiano Ronaldo",
                c: "Kylian Mbappe",
                d: "Mohamed Salah",
                correct: "a",
            },
            {
                question: "Which Indian city recently hosted the 2023 Khelo India Youth Games?",
                a: "Pune",
                b: "Jaipur",
                c: "Guwahati",
                d: "Chandigarh",
                correct: "a",
            },
            {
                question: "Who won the 2023 Nobel Prize in Physics?",
                a: "Roger Penrose",
                b: "Andrea Ghez",
                c: "Reinhard Genzel",
                d: "Alain Aspect",
                correct: "c",
            },
            {
                question: "Which Indian state recently launched the 'Mukhyamantri Krishi Udyami Yojana'?",
                a: "Uttar Pradesh",
                b: "Haryana",
                c: "Rajasthan",
                d: "Madhya Pradesh",
                correct: "d",
            },
            {
                question: "Who won the 2023 French Open Women's Singles title?",
                a: "Naomi Osaka",
                b: "Simona Halep",
                c: "Ashleigh Barty",
                d: "Iga Swiatek",
                correct: "d",
            },
            {
                question: "Which Indian city recently launched the 'Annapurna Canteen' scheme?",
                a: "Bengaluru",
                b: "Hyderabad",
                c: "Chennai",
                d: "Mumbai",
                correct: "a",
            },
            {
                question: "Who won the 2023 Booker Prize for Fiction?",
                a: "Douglas Stuart",
                b: "Bernardine Evaristo",
                c: "Damon Galgut",
                d: "Richard Powers",
                correct: "c",
            },
            {
                question: "Which Indian state recently announced a ban on online gambling?",
                a: "Andhra Pradesh",
                b: "Karnataka",
                c: "Tamil Nadu",
                d: "Gujarat",
                correct: "c",
            },
            {
                question: "Who won the 2023 ICC Men's T20 World Cup Player of the Tournament award?",
                a: "David Warner",
                b: "Babar Azam",
                c: "Mitchell Starc",
                d: "Jos Buttler",
                correct: "b",
            },
            {
                question: "Which Indian city recently inaugurated its first metro rail service?",
                a: "Jaipur",
                b: "Patna",
                c: "Guwahati",
                d: "Lucknow",
                correct: "d",
            },
            {
                question: "Who won the 2023 Academy Award (Oscar) for Best Actor?",
                a: "Leonardo DiCaprio",
                b: "Brad Pitt",
                c: "Will Smith",
                d: "Joaquin Phoenix",
                correct: "c",
            },
            {
                question: "Which Indian state recently achieved 100% vaccination coverage against COVID-19?",
                a: "Kerala",
                b: "Goa",
                c: "Himachal Pradesh",
                d: "Sikkim",
                correct: "c",
            },
            {
                question: "Who is the current Chief Minister of Maharashtra?",
                a: "Devendra Fadnavis",
                b: "Uddhav Thackeray",
                c: "Sharad Pawar",
                d: "Nitin Gadkari",
                correct: "b",
            },
            {
                question: "Which country recently hosted the COP26 climate conference?",
                a: "India",
                b: "France",
                c: "China",
                d: "United Kingdom",
                correct: "d",
            },
            {
                question: "Who won the 2023 Nobel Prize in Literature?",
                a: "Margaret Atwood",
                b: "Kazuo Ishiguro",
                c: "Haruki Murakami",
                d: "Jhumpa Lahiri",
                correct: "b",
            },
            {
                question: "Which Indian city recently became the first to offer free WiFi across the city?",
                a: "Mumbai",
                b: "Bengaluru",
                c: "Hyderabad",
                d: "Chennai",
                correct: "b",
            },
            {
                question: "Who won the 2023 Australian Open Men's Singles title?",
                a: "Rafael Nadal",
                b: "Novak Djokovic",
                c: "Roger Federer",
                d: "Dominic Thiem",
                correct: "b",
            },
            {
                question: "Which Indian state recently launched the 'Mukhyamantri Annapurna Yojana'?",
                a: "Bihar",
                b: "West Bengal",
                c: "Odisha",
                d: "Uttarakhand",
                correct: "c",
            },
            {
                question: "Who won the 2023 ICC Women's T20 World Cup?",
                a: "Australia",
                b: "India",
                c: "England",
                d: "South Africa",
                correct: "a",
            },
            {
                question: "Which Indian state recently declared 'Ragi' as the state food grain?",
                a: "Karnataka",
                b: "Tamil Nadu",
                c: "Andhra Pradesh",
                d: "Telangana",
                correct: "a",
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
    const selectedQuestions = shuffleArray(cAffairsQuestions).slice(0, 10);
    
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