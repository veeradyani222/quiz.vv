function outfitQuiz() {
    const outfitQuestions = [
        {
            question: "What is the weather like today?",
            a: "Sunny and warm",
            b: "Rainy or snowy",
            c: "Cool and breezy",
            d: "Hot and humid"
        },
        {
            question: "What is your mood today?",
            a: "Energetic and excited",
            b: "Calm and relaxed",
            c: "Focused and determined",
            d: "Casual and laid-back"
        },
        {
            question: "What type of event or activity are you attending?",
            a: "Casual outing with friends",
            b: "Formal meeting or event",
            c: "Exercise or outdoor activity",
            d: "Running errands or staying home"
        },
        {
            question: "What is your preferred style?",
            a: "Trendy and fashionable",
            b: "Classic and elegant",
            c: "Sporty and comfortable",
            d: "Casual and easy-going"
        },
        {
            question: "How much time do you have to get ready?",
            a: "Plenty of time to get dressed up",
            b: "Enough time for a neat outfit",
            c: "Just enough time for something quick",
            d: "Very little time, need something easy"
        },
        {
            question: "What color do you feel like wearing today?",
            a: "Bright and vibrant colors",
            b: "Neutral and classic colors",
            c: "Dark and bold colors",
            d: "Soft and pastel colors"
        },
        {
            question: "How comfortable do you want to be?",
            a: "Comfortable but stylish",
            b: "Comfortable and practical",
            c: "Comfortable but ready for activity",
            d: "Comfortable and relaxed"
        },
        {
            question: "What type of footwear do you prefer today?",
            a: "Fashionable shoes or heels",
            b: "Formal shoes or boots",
            c: "Sneakers or athletic shoes",
            d: "Casual shoes or sandals"
        },
        {
            question: "How much effort do you want to put into accessorizing?",
            a: "Lots of accessories",
            b: "A few key pieces",
            c: "Minimal accessories",
            d: "No accessories"
        },
        {
            question: "What is the main goal of your outfit today?",
            a: "To look stylish and trendy",
            b: "To look polished and put-together",
            c: "To be ready for activity",
            d: "To be comfortable and relaxed"
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
    const selectedQuestions = shuffleArray(outfitQuestions).slice(0, 10);

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
        const outfitScores = { a: 0, b: 0, c: 0, d: 0 };

        // Calculate scores based on user answers
        selectedQuestions.forEach(question => {
            if (question.userAnswer) {
                outfitScores[question.userAnswer]++;
            }
        });

        // Determine outfit type based on scores
        const outfitType = Object.keys(outfitScores).reduce((a, b) =>
            outfitScores[a] > outfitScores[b] ? a : b
        );

        // Result descriptions based on the dominant score
        const outfit = {
            a: "You should wear a stylish and trendy outfit today. Opt for bright and vibrant colors, fashionable shoes, and plenty of accessories. Whether it's a sunny day or you're feeling energetic and excited, this outfit will help you stand out and feel confident.",
            b: "You should wear a classic and elegant outfit today. Choose neutral and classic colors, formal shoes or boots, and a few key accessories. This outfit is perfect for a calm and relaxed mood, a formal event, or if you want to look polished and put-together.",
            c: "You should wear a sporty and comfortable outfit today. Go for dark and bold colors, sneakers or athletic shoes, and minimal accessories. This outfit is ideal for cool and breezy weather, exercise, or if you're focused and determined to be active.",
            d: "You should wear a casual and easy-going outfit today. Pick soft and pastel colors, casual shoes or sandals, and no accessories. This outfit is perfect for a hot and humid day, running errands, or if you're feeling casual and laid-back."
        };

        // Display result based on dominant score
        const resultText = outfit[outfitType];

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

    // Function to start the quiz
    const outfitQuiz = () => {
        document.querySelector('.quizBox').style.display = "block";
        scrollToQuizBox();
        loadQuestion();
    };

    // Function to scroll to the quiz box
    const scrollToQuizBox = () => {
        const quizBox = document.querySelector('.quizBox');
        quizBox.style.display = "block";
        quizBox.scrollIntoView({ behavior: 'smooth' });
    };

    // Function to reload the page and retake the quiz
    const reloadButton = () => {
        location.reload();
    };

    // Initialize the quiz when the page loads
    outfitQuiz();
}
