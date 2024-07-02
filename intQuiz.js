function intQuiz(){
    const intQuestions = [
        {
            question: "Does the situation you're in include other people?",
            a: "Yes, and they are directly involved",
            b: "Yes, but they are not directly involved",
            c: "No, it's just about me",
            d: "No, but it could affect others later"
        },
        {
            question: "Is the outcome of the decision time-sensitive?",
            a: "Yes, it needs to be decided immediately",
            b: "Yes, but there's some flexibility",
            c: "No, there's plenty of time to decide",
            d: "No, but I want to resolve it quickly"
        },
        {
            question: "Do you have enough information to make an informed decision?",
            a: "Yes, I have all the necessary information",
            b: "Yes, but I could use more details",
            c: "No, but I have a general idea",
            d: "No, I'm missing a lot of information"
        },
        {
            question: "How important is this decision for your long-term goals?",
            a: "Very important",
            b: "Somewhat important",
            c: "Not very important",
            d: "Not important at all"
        },
        {
            question: "Are you feeling emotionally charged about this situation?",
            a: "Yes, very emotional",
            b: "Yes, but I can manage it",
            c: "No, I'm quite neutral",
            d: "No, but I feel a slight inclination"
        },
        {
            question: "Do you typically rely on intuition or practical analysis?",
            a: "Mostly intuition",
            b: "A bit more on intuition",
            c: "A bit more on practical analysis",
            d: "Mostly practical analysis"
        },
        {
            question: "Have you faced similar situations before?",
            a: "Yes, and I handled them intuitively",
            b: "Yes, and I handled them practically",
            c: "No, this is new to me",
            d: "No, but I have faced somewhat similar situations"
        },
        {
            question: "Is there a risk involved in this decision?",
            a: "Yes, and it's high risk",
            b: "Yes, but it's moderate risk",
            c: "No, it's low risk",
            d: "No, there's no risk at all"
        },
        {
            question: "Do you need approval from others for this decision?",
            a: "Yes, definitely",
            b: "Yes, but not necessarily",
            c: "No, I can decide on my own",
            d: "No, but others might give their opinions"
        },
        {
            question: "Do you prefer to make decisions quickly or take your time?",
            a: "Quickly, based on my gut feeling",
            b: "Quickly, but with some thought",
            c: "Take my time, analyzing thoroughly",
            d: "Take my time, but not overthink it"
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
    const selectedQuestions = shuffleArray(intQuestions).slice(0, 10);
    
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
        const intScores = { a: 0, b: 0, c: 0, d: 0 };
    
        // Calculate scores based on user answers
        selectedQuestions.forEach(question => {
            if (question.userAnswer) {
                intScores[question.userAnswer]++;
            }
        });
    
        // Determine whether to trust intuition or be practical based on scores
        const intuitionorPractical = Object.keys(intScores).reduce((a, b) => intScores[a] > intScores[b] ? a : b);
    
        // Result descriptions based on the dominant score
        const intorPractical = {
            a: "Trust your gut feeling. You tend to make quick decisions based on your instincts, which can be highly effective in situations requiring rapid response. However, make sure to balance this with some practical analysis to avoid impulsive mistakes. Great suggestions: Consider roles in dynamic environments like emergency services, creative fields, or startups where intuition is highly valued.",
            b: "You have a tendency to rely more on your intuition, but you also value some practical considerations. This balance can help you make informed yet agile decisions. Keep honing your analytical skills to complement your intuitive approach. Great suggestions: Look into fields such as marketing, sales, or consulting where a mix of intuition and practicality is beneficial.",
            c: "You usually prefer a practical approach but don't completely disregard your intuition. This methodical way of decision-making ensures thoroughness while still allowing for creativity. Continue developing your intuitive skills to enhance your decision-making process. Great suggestions: Pursue careers in project management, engineering, or finance where detailed analysis is crucial but intuition can provide an edge.",
            d: "You predominantly rely on practical analysis, valuing data and thorough evaluation in your decisions. This approach minimizes risks and ensures well-thought-out outcomes. Try to occasionally incorporate your gut feelings to add a new dimension to your decision-making. Great suggestions: Excel in fields like research, law, or data science where a high degree of analytical thinking is essential."
        };
    
        // Display result based on dominant score
        const resultText = intorPractical[intuitionorPractical];
    
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
    const intQuiz = () => {
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
    
    intQuiz()
    // Initialize first question
    
    
}