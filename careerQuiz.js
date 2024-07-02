function careerQuiz(){
    const careerQuestions = [
        {
            question: "What subjects do you enjoy the most?",
            a: "Mathematics and Science",
            b: "Languages and Literature",
            c: "Social Studies and Humanities",
            d: "Arts and Creative subjects"
        },
        {
            question: "What type of activities do you find most fulfilling?",
            a: "Problem-solving and analysis",
            b: "Communication and writing",
            c: "Helping others and understanding society",
            d: "Expressing creativity and innovation"
        },
        {
            question: "What kind of work environment do you prefer?",
            a: "Structured and organized",
            b: "Dynamic and communicative",
            c: "Supportive and collaborative",
            d: "Flexible and creative"
        },
        {
            question: "What motivates you the most?",
            a: "Achieving tangible results",
            b: "Making a difference in people's lives",
            c: "Understanding complex issues",
            d: "Exploring new ideas and possibilities"
        },
        {
            question: "How do you handle challenges?",
            a: "Through logical reasoning and analysis",
            b: "By communicating and collaborating with others",
            c: "By empathizing and understanding different perspectives",
            d: "By experimenting and trying new approaches"
        },
        {
            question: "What are your long-term career goals?",
            a: "To advance in a specialized field",
            b: "To influence and inspire others",
            c: "To contribute to societal change",
            d: "To innovate and create new solutions"
        },
        {
            question: "What skills do you want to develop?",
            a: "Technical and analytical skills",
            b: "Communication and interpersonal skills",
            c: "Empathy and cultural understanding",
            d: "Creative and innovative skills"
        },
        {
            question: "What type of job stability do you prefer?",
            a: "High job stability and security",
            b: "Balanced between stability and growth",
            c: "Flexible job opportunities",
            d: "Opportunities for entrepreneurship"
        },
        {
            question: "What do you value most in a career?",
            a: "Professional growth and expertise",
            b: "Making a meaningful impact",
            c: "Work-life balance and fulfillment",
            d: "Freedom to explore and create"
        },
        {
            question: "What industry or field interests you the most?",
            a: "Technology and Engineering",
            b: "Media and Communications",
            c: "Healthcare and Social Services",
            d: "Art and Design"
        }

    ];
    
    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    // Select 10 random questions
    const selectedQuestions = shuffleArray(careerQuestions).slice(0, 10);
    
    // Initialize index and total questions count
    let index = 0;
    const total = selectedQuestions.length;
    
    // Function to load a question
    const loadQuestion = () => {
        if (index >= total) {
            return quizEnd();
        }
        reset(); // Reset previous selection
        const data = selectedQuestions[index];
        questionBox.innerHTML = `${index + 1}) ${data.question}`;
        allInputs[0].nextElementSibling.innerText = data.a;
        allInputs[1].nextElementSibling.innerText = data.b;
        allInputs[2].nextElementSibling.innerText = data.c;
        allInputs[3].nextElementSibling.innerText = data.d;
    
        // Restore previous user answer if exists
        if (data.userAnswer) {
            allInputs.forEach(input => {
                if (input.value === data.userAnswer) {
                    input.checked = true;
                    input.parentElement.style.backgroundColor = 'pink';
                }
            });
        }
    };
    
    // Event listener for submit button
    document.getElementById("submitBtn").onclick = function () {
        const data = selectedQuestions[index];
        const ans = getAnswer();
    
        if (ans !== undefined) {
            data.userAnswer = ans; // Store user answer
            allInputs.forEach(input => {
                if (input.checked) {
                    input.parentElement.style.backgroundColor = 'pink'; // Change color of selected option
                } else {
                    input.parentElement.style.backgroundColor = ''; // Reset color of unselected options
                }
            });
            
        } else {
            alert("Please select an answer before submitting.");
        }
    };
    
    // Event listener for next button
    document.getElementById("nextButton").onclick = function () {
        if (index < total - 1) {
            index++;
            loadQuestion();
        } else {
            quizEnd();
        }
    };
    
    // Event listener for previous button
    document.getElementById("prevBtn").onclick = function () {
        if (index > 0) {
            const data = selectedQuestions[index];
            const ans = getAnswer();
            if (ans !== undefined) {
                data.userAnswer = ans; // Store user answer for current question
            }
            index--; // Move to previous question
            loadQuestion(); // Load previous question
        }
    };
    
    // Function to get selected answer
    const getAnswer = () => {
        let ans;
        allInputs.forEach((input) => {
            if (input.checked) {
                ans = input.value;
            }
        });
        return ans; // Return the selected answer
    };
    
    // Function to reset all inputs
    const reset = () => {
        allInputs.forEach((input) => {
            input.checked = false;
            input.parentElement.style.backgroundColor = ''; // Reset background color
        });
    };
    
    // Function to handle quiz end
    const quizEnd = () => {
        const careerScores = { a: 0, b: 0, c: 0, d: 0 };
    
        // Calculate scores based on user answers
        selectedQuestions.forEach(question => {
            if (question.userAnswer) {
                careerScores[question.userAnswer]++;
            }
        });
    
        // Determine whether to trust intuition or be practical based on scores
        const careerType = Object.keys(careerScores).reduce((a, b) => careerScores[a] > careerScores[b] ? a : b);
    
        // Result descriptions based on the dominant score
        const career = {
            a: "You should consider a career path in a technical or scientific field. Your preference for mathematics and science, problem-solving, and structured environments align well with careers such as engineering, software development, or research.",
            b: "You should consider a career path that involves communication and influencing others. Your interest in languages and literature, communication skills, and desire to make a difference point towards careers in journalism, teaching, public relations, or advocacy.",
            c: "You should consider a career path focused on social impact and understanding society. Your preference for social studies, helping others, and collaborative environments align well with careers in social work, psychology, education, or public policy.",
            d: "You should consider a career path that allows for creativity and innovation. Your interest in arts and creative subjects, flexible and dynamic environments, and motivation to explore new ideas suggest careers in design, marketing, entrepreneurship, or the arts."
        };
    
        // Display result based on dominant score
        const resultText = career[careerType];
    
        // Display result in the quiz box
        document.querySelector(".quizBox").innerHTML = `
            <div class="col" style="display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                text-transform: capitalize;
                font-family: 'Poppins', serif;
                flex-direction: column;
                gap: 1vh;
                border: 2px solid black;
                padding: 2vh 2vh;">
                <h1 style="width: 50%;
                    font-family: 'Poppins', serif;
                    color: black;
                    cursor: pointer;">Based on your answers,</h1>
                <br>
                <h3 class="w-100">${resultText}</h3>
                <div class="reloadButton" id="reloadButton" onclick="reloadButton()"
                    style="width: 30%;
                        font-family: 'Poppins', serif;
                        color: black;
                        background-color: lightgreen;
                        border: 2px solid black;
                        cursor: pointer;">
                    Retake Quiz
                </div>
            </div>`;
    
        // Bind reloadButton function to reloadButton element
        document.getElementById("reloadButton").onclick = reloadButton;
    };
    const careerQuiz = () => {
        document.querySelector('.quizBox').style.display = "block";
        scrollToQuizBox();
        loadQuestion();
    };
    
    const scrollToQuizBox = () => {
        const quizBox = document.querySelector('.quizBox');
        quizBox.style.display = "block";
        quizBox.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Function to reload the page and retake the quiz
    const reloadButton = () => {
        location.reload();
    };
    
    careerQuiz()
    // Initialize first questiocareer
    }