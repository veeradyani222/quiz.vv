function astroQuiz(){
    const astroQuestions = [
        {
            question: "What is your approach to solving problems?",
            a: "Logical and systematic",
            b: "Intuitive and imaginative",
            c: "Empathetic and understanding",
            d: "Innovative and unconventional"
        },
        {
            question: "How do you typically handle stress?",
            a: "By analyzing the situation and finding practical solutions",
            b: "By seeking creative outlets and exploring new ideas",
            c: "By connecting with others and seeking emotional support",
            d: "By embracing change and adapting quickly"
        },
        {
            question: "What drives you in life?",
            a: "Achieving goals and tangible success",
            b: "Exploring new possibilities and experiences",
            c: "Building meaningful relationships and helping others",
            d: "Challenging norms and pushing boundaries"
        },
        {
            question: "What kind of environment do you thrive in?",
            a: "Structured and organized",
            b: "Dynamic and constantly changing",
            c: "Supportive and harmonious",
            d: "Creative and open-minded"
        },
        {
            question: "What do you value most in relationships?",
            a: "Loyalty and reliability",
            b: "Communication and mutual understanding",
            c: "Emotional connection and empathy",
            d: "Freedom and independence"
        },
        {
            question: "How do you approach decision-making?",
            a: "Rationally weighing pros and cons",
            b: "Following intuition and gut feelings",
            c: "Considering emotions and impacts on others",
            d: "Seeking innovative solutions and new perspectives"
        },
        {
            question: "What are your aspirations for personal growth?",
            a: "To achieve stability and success",
            b: "To explore and expand creative horizons",
            c: "To cultivate deeper connections with others",
            d: "To challenge conventions and innovate"
        },
        {
            question: "What role do traditions play in your life?",
            a: "They provide a sense of stability and guidance",
            b: "They inspire creativity and reinterpretation",
            c: "They foster a sense of belonging and continuity",
            d: "They are meant to be questioned and evolved"
        },
        {
            question: "How do you express your emotions?",
            a: "Through practical actions and problem-solving",
            b: "Through artistic expression and creativity",
            c: "Through empathy and understanding",
            d: "Through embracing change and spontaneity"
        },
        {
            question: "What motivates you to learn and grow?",
            a: "Achieving mastery and expertise",
            b: "Exploring new perspectives and ideas",
            c: "Helping others and making a positive impact",
            d: "Pushing boundaries and seeking innovation"
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
    const selectedQuestions = shuffleArray(astroQuestions).slice(0, 10);
    
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
        const astroScores = { a: 0, b: 0, c: 0, d: 0 };
    
        // Calculate scores based on user answers
        selectedQuestions.forEach(question => {
            if (question.userAnswer) {
                astroScores[question.userAnswer]++;
            }
        });
    
        // Determine whether to trust intuition or be practical based on scores
        const astroType = Object.keys(astroScores).reduce((a, b) => astroScores[a] > astroScores[b] ? a : b);
    
        // Result descriptions based on the dominant score
        const astro = {
            a: "Based on your answers, you exhibit traits associated with Earth signs such as Taurus, Virgo, or Capricorn. You value stability, practicality, and achievement.",
    b: "Based on your answers, you exhibit traits associated with Air signs such as Gemini, Libra, or Aquarius. You value communication, creativity, and intellectual pursuits.",
    c: "Based on your answers, you exhibit traits associated with Water signs such as Cancer, Scorpio, or Pisces. You value emotional connection, empathy, and intuition.",
    d: "Based on your answers, you exhibit traits associated with Fire signs such as Aries, Leo, or Sagittarius. You value independence, innovation, and spontaneity."
        };
    
        // Display result based on dominant score
        const resultText = astro[astroType];
    
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
    const astroQuiz = () => {
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
    
    astroQuiz()
    // Initialize first question
}