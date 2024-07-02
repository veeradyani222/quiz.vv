function partnerQuiz(){
    const partnerQuestions = [
        {
            question: "What is the most important quality you look for in a partner?",
            a: "Loyalty",
            b: "Sense of humor",
            c: "Ambition",
            d: "Kindness"
        },
        {
            question: "How do you prefer to spend your free time with your partner?",
            a: "Enjoying quiet, intimate moments together",
            b: "Going out and having fun adventures",
            c: "Working on mutual goals and projects",
            d: "Volunteering or helping others together"
        },
        {
            question: "What is your approach to conflicts in a relationship?",
            a: "Discuss and resolve them calmly",
            b: "Use humor to diffuse tension",
            c: "Find a practical solution quickly",
            d: "Address the emotional aspects and understand each other"
        },
        {
            question: "How important is personal growth in your relationship?",
            a: "Very important, we should grow together",
            b: "Important, but we should also enjoy life",
            c: "Extremely important, we should constantly improve",
            d: "Important, but we should also focus on helping each other"
        },
        {
            question: "What type of support do you value most from your partner?",
            a: "Emotional support and understanding",
            b: "Encouragement and fun",
            c: "Motivation and drive",
            d: "Compassion and care"
        },
        {
            question: "What kind of lifestyle do you envision with your partner?",
            a: "A stable and peaceful life",
            b: "An adventurous and spontaneous life",
            c: "A successful and goal-oriented life",
            d: "A compassionate and giving life"
        },
        {
            question: "What is your ideal way to celebrate a special occasion with your partner?",
            a: "A romantic dinner at home",
            b: "An exciting trip or outing",
            c: "Celebrating achievements together",
            d: "Doing something meaningful for others"
        },
        {
            question: "How do you want your partner to handle your bad days?",
            a: "Offer a listening ear and comfort",
            b: "Cheer me up with jokes and activities",
            c: "Help me find solutions and stay focused",
            d: "Show empathy and care"
        },
        {
            question: "What role do shared values play in your ideal relationship?",
            a: "Very significant, we should have aligned values",
            b: "Important, but we can have fun despite differences",
            c: "Crucial, we should have shared goals and ambitions",
            d: "Essential, we should share a desire to help others"
        },
        {
            question: "How do you envision your partner supporting your personal goals?",
            a: "By being a stable and reliable presence",
            b: "By making the journey enjoyable and fun",
            c: "By pushing me to achieve more",
            d: "By being understanding and compassionate"
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
    const selectedQuestions = shuffleArray(partnerQuestions).slice(0, 10);
    
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
        const partnerScores = { a: 0, b: 0, c: 0, d: 0 };
    
        // Calculate scores based on user answers
        selectedQuestions.forEach(question => {
            if (question.userAnswer) {
                partnerScores[question.userAnswer]++;
            }
        });
    
        // Determine whether to trust intuition or be practical based on scores
        const partnerType = Object.keys(partnerScores).reduce((a, b) => partnerScores[a] > partnerScores[b] ? a : b);
    
        // Result descriptions based on the dominant score
        const partner = {
            a: "You should seek a partner who values stability and emotional depth. They will be loyal, reliable, and provide the emotional support and understanding you need. Together, you will build a peaceful and nurturing relationship, where personal growth and mutual respect are prioritized.",
    b: "You should seek a partner who brings fun and excitement into your life. They will have a great sense of humor, be adventurous, and always know how to lighten the mood. Together, you will enjoy many spontaneous and thrilling experiences, keeping your relationship lively and dynamic.",
    c: "You should seek a partner who is ambitious and driven. They will share your goals and aspirations, pushing you to achieve more. Together, you will work on mutual projects and celebrate your successes, building a relationship based on growth and shared ambitions.",
    d: "You should seek a partner who is compassionate and kind-hearted. They will value helping others and be deeply empathetic. Together, you will create a giving and caring relationship, focusing on making a positive impact on the world around you and supporting each other's emotional needs."
        };
    
        // Display result based on dominant score
        const resultText = partner[partnerType];
    
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
    const partnerQuiz = () => {
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
    
    partnerQuiz()
    // Initialize first question
    
    
}