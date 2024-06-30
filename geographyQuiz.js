//NOW FOR GEOGRAPHY QUIZ 

function geographyQuiz() {
    const geographyQuestions = [
        
            {
                question: "Which is the largest continent by land area?",
                a: "Asia",
                b: "Africa",
                c: "North America",
                d: "Europe",
                correct: "a",
            },
            {
                question: "What is the capital city of Australia?",
                a: "Sydney",
                b: "Canberra",
                c: "Melbourne",
                d: "Perth",
                correct: "b",
            },
            {
                question: "Which river is the longest in the world?",
                a: "Nile",
                b: "Amazon",
                c: "Yangtze",
                d: "Mississippi",
                correct: "a",
            },
            {
                question: "Which country is known as the 'Land of the Rising Sun'?",
                a: "China",
                b: "Japan",
                c: "South Korea",
                d: "Vietnam",
                correct: "b",
            },
            {
                question: "Mount Everest, the highest peak in the world, is located in which mountain range?",
                a: "Andes",
                b: "Rocky Mountains",
                c: "Himalayas",
                d: "Alps",
                correct: "c",
            },
            {
                question: "Which ocean is the largest and deepest on Earth?",
                a: "Atlantic Ocean",
                b: "Indian Ocean",
                c: "Arctic Ocean",
                d: "Pacific Ocean",
                correct: "d",
            },
            {
                question: "What is the capital city of Brazil?",
                a: "Rio de Janeiro",
                b: "Sao Paulo",
                c: "Brasilia",
                d: "Salvador",
                correct: "c",
            },
            {
                question: "Which desert is the largest in the world?",
                a: "Sahara Desert",
                b: "Gobi Desert",
                c: "Kalahari Desert",
                d: "Arabian Desert",
                correct: "a",
            },
            {
                question: "Which river flows through Egypt and is known for ancient civilizations?",
                a: "Amazon River",
                b: "Nile River",
                c: "Yangtze River",
                d: "Mississippi River",
                correct: "b",
            },
            {
                question: "Which country is famous for the Great Wall?",
                a: "Japan",
                b: "India",
                c: "China",
                d: "Russia",
                correct: "c",
            },
            {
                question: "What is the smallest continent by land area?",
                a: "Europe",
                b: "Australia",
                c: "South America",
                d: "Africa",
                correct: "b",
            },
            {
                question: "Which country is known as the 'Land of the Midnight Sun'?",
                a: "Canada",
                b: "Sweden",
                c: "Russia",
                d: "Norway",
                correct: "d",
            },
            {
                question: "Which mountain range stretches across Europe from Norway to the Alps?",
                a: "Andes",
                b: "Rocky Mountains",
                c: "Carpathian Mountains",
                d: "Scandinavian Mountains",
                correct: "d",
            },
            {
                question: "Which continent is home to the Amazon Rainforest?",
                a: "Asia",
                b: "Africa",
                c: "South America",
                d: "North America",
                correct: "c",
            },
            {
                question: "What is the capital city of Canada?",
                a: "Toronto",
                b: "Ottawa",
                c: "Vancouver",
                d: "Montreal",
                correct: "b",
            },
            {
                question: "Which is the largest lake in Africa?",
                a: "Lake Victoria",
                b: "Lake Tanganyika",
                c: "Lake Malawi",
                d: "Lake Chad",
                correct: "a",
            },
            {
                question: "Which country is known as the 'Land of the Long White Cloud'?",
                a: "Australia",
                b: "New Zealand",
                c: "Ireland",
                d: "Norway",
                correct: "b",
            },
            {
                question: "In which country is the Great Barrier Reef located?",
                a: "Australia",
                b: "Indonesia",
                c: "Brazil",
                d: "Japan",
                correct: "a",
            },
            {
                question: "Which river is often called 'The Father of Indian Rivers'?",
                a: "Ganges",
                b: "Yamuna",
                c: "Brahmaputra",
                d: "Godavari",
                correct: "a",
            },
            {
                question: "Which country is known as the 'Land of the Rising Sun'?",
                a: "China",
                b: "Japan",
                c: "South Korea",
                d: "Vietnam",
                correct: "b",
            },
            {
                question: "Mount Everest, the highest peak in the world, is located in which mountain range?",
                a: "Andes",
                b: "Rocky Mountains",
                c: "Himalayas",
                d: "Alps",
                correct: "c",
            },
            {
                question: "Which ocean is the largest and deepest on Earth?",
                a: "Atlantic Ocean",
                b: "Indian Ocean",
                c: "Arctic Ocean",
                d: "Pacific Ocean",
                correct: "d",
            },
            {
                question: "What is the capital city of Brazil?",
                a: "Rio de Janeiro",
                b: "Sao Paulo",
                c: "Brasilia",
                d: "Salvador",
                correct: "c",
            },
            {
                question: "Which desert is the largest in the world?",
                a: "Sahara Desert",
                b: "Gobi Desert",
                c: "Kalahari Desert",
                d: "Arabian Desert",
                correct: "a",
            },
            {
                question: "Which river flows through Egypt and is known for ancient civilizations?",
                a: "Amazon River",
                b: "Nile River",
                c: "Yangtze River",
                d: "Mississippi River",
                correct: "b",
            },
            {
                question: "Which country is famous for the Great Wall?",
                a: "Japan",
                b: "India",
                c: "China",
                d: "Russia",
                correct: "c",
            },
            {
                question: "What is the smallest continent by land area?",
                a: "Europe",
                b: "Australia",
                c: "South America",
                d: "Africa",
                correct: "b",
            },
            {
                question: "Which country is known as the 'Land of the Midnight Sun'?",
                a: "Canada",
                b: "Sweden",
                c: "Russia",
                d: "Norway",
                correct: "d",
            },
            {
                question: "Which mountain range stretches across Europe from Norway to the Alps?",
                a: "Andes",
                b: "Rocky Mountains",
                c: "Carpathian Mountains",
                d: "Scandinavian Mountains",
                correct: "d",
            },
            {
                question: "Which continent is home to the Amazon Rainforest?",
                a: "Asia",
                b: "Africa",
                c: "South America",
                d: "North America",
                correct: "c",
            },
            {
                question: "What is the capital city of Canada?",
                a: "Toronto",
                b: "Ottawa",
                c: "Vancouver",
                d: "Montreal",
                correct: "b",
            },
            {
                question: "Which is the largest lake in Africa?",
                a: "Lake Victoria",
                b: "Lake Tanganyika",
                c: "Lake Malawi",
                d: "Lake Chad",
                correct: "a",
            },
            {
                question: "Which country is known as the 'Land of the Long White Cloud'?",
                a: "Australia",
                b: "New Zealand",
                c: "Ireland",
                d: "Norway",
                correct: "b",
            },
            {
                question: "In which country is the Great Barrier Reef located?",
                a: "Australia",
                b: "Indonesia",
                c: "Brazil",
                d: "Japan",
                correct: "a",
            },
            {
                question: "Which river is often called 'The Father of Indian Rivers'?",
                a: "Ganges",
                b: "Yamuna",
                c: "Brahmaputra",
                d: "Godavari",
                correct: "a",
            },
            {
                question: "Which country is known as the 'Pearl of the Indian Ocean'?",
                a: "India",
                b: "Sri Lanka",
                c: "Maldives",
                d: "Thailand",
                correct: "b",
            },
            {
                question: "What is the capital city of China?",
                a: "Shanghai",
                b: "Beijing",
                c: "Hong Kong",
                d: "Guangzhou",
                correct: "b",
            },
            {
                question: "Which sea separates Europe and Africa?",
                a: "Mediterranean Sea",
                b: "Caribbean Sea",
                c: "Black Sea",
                d: "Red Sea",
                correct: "a",
            },
            {
                question: "Which country is famous for the Leaning Tower of Pisa?",
                a: "Spain",
                b: "Italy",
                c: "Greece",
                d: "Turkey",
                correct: "b",
            },
            {
                question: "What is the longest river in India?",
                a: "Yamuna",
                b: "Godavari",
                c: "Ganges",
                d: "Krishna",
                correct: "c",
            },
            {
                question: "Which city is known as the 'Pink City'?",
                a: "Jaipur",
                b: "Jodhpur",
                c: "Udaipur",
                d: "Jaisalmer",
                correct: "a",
            },
            {
                question: "Which is the largest freshwater lake in the world by surface area?",
                a: "Lake Superior",
                b: "Lake Baikal",
                c: "Lake Michigan",
                d: "Lake Victoria",
                correct: "a",
            },
            {
                question: "What is the highest mountain peak in South America?",
                a: "Mount Aconcagua",
                b: "Mount Chimborazo",
                c: "Mount Huascarán",
                d: "Mount Everest",
                correct: "a",
            },
            {
                question: "Which is the largest island in the Mediterranean Sea?",
                a: "Sardinia",
                b: "Sicily",
                c: "Crete",
                d: "Cyprus",
                correct: "b",
            },
            {
                question: "What is the capital city of South Africa?",
                a: "Pretoria",
                b: "Durban",
                c: "Cape Town",
                d: "Johannesburg",
                correct: "c",
            },
            {
                question: "Which river flows through Paris?",
                a: "Seine",
                b: "Thames",
                c: "Danube",
                d: "Rhine",
                correct: "a",
            },
            {
                question: "Which country is known as the 'Land of the Thunder Dragon'?",
                a: "Nepal",
                b: "Bhutan",
                c: "Laos",
                d: "Myanmar",
                correct: "b",
            },
            {
                question: "What is the largest country by land area in the world?",
                a: "Canada",
                b: "Russia",
                c: "China",
                d: "United States",
                correct: "b",
            },
            {
                question: "Which city is located at the mouth of the Amazon River?",
                a: "Sao Paulo",
                b: "Rio de Janeiro",
                c: "Manaus",
                d: "Brasilia",
                correct: "c",
            },
            {
                question: "Which desert is located in Northern Africa?",
                a: "Atacama Desert",
                b: "Sahara Desert",
                c: "Gobi Desert",
                d: "Kalahari Desert",
                correct: "b",
            },
            {
                question: "What is the capital city of Italy?",
                a: "Milan",
                b: "Venice",
                c: "Rome",
                d: "Florence",
                correct: "c",
            },
            {
                question: "Which country is known as the 'Land of the Midnight Sun'?",
                a: "Norway",
                b: "Finland",
                c: "Sweden",
                d: "Iceland",
                correct: "a",
            },
            {
                question: "What is the capital city of Indonesia?",
                a: "Jakarta",
                b: "Bangkok",
                c: "Manila",
                d: "Kuala Lumpur",
                correct: "a",
            },
            {
                question: "Which is the largest saltwater lake in India?",
                a: "Chilika Lake",
                b: "Vembanad Lake",
                c: "Wular Lake",
                d: "Pulicat Lake",
                correct: "a",
            },
            {
                question: "Which country is known as the 'Land of the Rising Sun'?",
                a: "China",
                b: "Japan",
                c: "South Korea",
                d: "Vietnam",
                correct: "b",
            },
            {
                question: "Mount Everest, the highest peak in the world, is located in which mountain range?",
                a: "Andes",
                b: "Rocky Mountains",
                c: "Himalayas",
                d: "Alps",
                correct: "c",
            },
            {
                question: "Which ocean is the largest and deepest on Earth?",
                a: "Atlantic Ocean",
                b: "Indian Ocean",
                c: "Arctic Ocean",
                d: "Pacific Ocean",
                correct: "d",
            },
            {
                question: "What is the capital city of Brazil?",
                a: "Rio de Janeiro",
                b: "Sao Paulo",
                c: "Brasilia",
                d: "Salvador",
                correct: "c",
            },
            {
                question: "Which desert is the largest in the world?",
                a: "Sahara Desert",
                b: "Gobi Desert",
                c: "Kalahari Desert",
                d: "Arabian Desert",
                correct: "a",
            },
            {
                question: "Which river flows through Egypt and is known for ancient civilizations?",
                a: "Amazon River",
                b: "Nile River",
                c: "Yangtze River",
                d: "Mississippi River",
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
    const selectedQuestions = shuffleArray(geographyQuestions).slice(0, 10);
    
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