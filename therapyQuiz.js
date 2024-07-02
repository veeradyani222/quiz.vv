function therapyQuiz(){
    const therapyQuestions = [
        {
            question: "Do you often feel overwhelmed by your emotions?",
            a: "Yes, almost all the time",
            b: "Yes, frequently",
            c: "Sometimes, but not often",
            d: "No, I feel emotionally stable"
        },
        {
            question: "Are you finding it difficult to complete daily tasks?",
            a: "Yes, it's very hard",
            b: "Yes, but I manage with effort",
            c: "Occasionally, but not usually",
            d: "No, I complete tasks with ease"
        },
        {
            question: "Do you have trouble sleeping or experience changes in your sleep patterns?",
            a: "Yes, I can't sleep at all",
            b: "Yes, my sleep is very disrupted",
            c: "Sometimes, but it's manageable",
            d: "No, I sleep well"
        },
        {
            question: "Are you experiencing physical symptoms like headaches or stomachaches?",
            a: "Yes, very frequently",
            b: "Yes, often",
            c: "Occasionally, but not often",
            d: "No, I feel physically well"
        },
        {
            question: "Do you feel disconnected or detached from your surroundings?",
            a: "Yes, almost all the time",
            b: "Yes, frequently",
            c: "Sometimes, but not often",
            d: "No, I feel connected"
        },
        {
            question: "Are you finding it hard to concentrate or focus?",
            a: "Yes, I can't focus at all",
            b: "Yes, often",
            c: "Sometimes, but I manage",
            d: "No, I can focus well"
        },
        {
            question: "Do you feel a lack of interest in activities you once enjoyed?",
            a: "Yes, completely uninterested",
            b: "Yes, often",
            c: "Sometimes, but not always",
            d: "No, I still enjoy them"
        },
        {
            question: "Are you withdrawing from social interactions or isolating yourself?",
            a: "Yes, completely isolated",
            b: "Yes, often",
            c: "Sometimes, but not often",
            d: "No, I'm socially active"
        },
        {
            question: "Do you experience feelings of hopelessness or helplessness?",
            a: "Yes, almost all the time",
            b: "Yes, frequently",
            c: "Sometimes, but not often",
            d: "No, I feel hopeful"
        },
        {
            question: "Have you had thoughts of self-harm or suicide?",
            a: "Yes, frequently",
            b: "Yes, but rarely",
            c: "No, but I've thought about it",
            d: "No, never"
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
    const selectedQuestions = shuffleArray(therapyQuestions).slice(0, 10);
    
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
        const therapyScores = { a: 0, b: 0, c: 0, d: 0 };
    
        // Calculate scores based on user answers
        selectedQuestions.forEach(question => {
            if (question.userAnswer) {
                therapyScores[question.userAnswer]++;
            }
        });
    
        // Determine whether to trust intuition or be practical based on scores
        const getTherapyOrnot= Object.keys(therapyScores).reduce((a, b) => therapyScores[a] > therapyScores[b] ? a : b);
    
        // Result descriptions based on the dominant score
        const therapyResults = {
            a: "It seems like you might benefit from professional help. You're experiencing significant challenges that could be alleviated with the support of a mental health professional. Persistent feelings of distress, difficulty in managing daily tasks, and overwhelming emotions are strong indicators that seeking help is important. Please consider reaching out to a therapist, counselor, or support group to find the support you need.",
    b: "You might benefit from professional help. You're facing frequent difficulties that could be better managed with the guidance of a mental health professional. Regular feelings of stress, anxiety, or sadness can impact your overall well-being. Seeking help can provide you with strategies to cope more effectively and improve your quality of life.",
    c: "You may be experiencing some challenges, but they don't seem to be overwhelming at this time. It might be helpful to keep an eye on your situation and consider professional help if things start to feel more difficult. Engaging in self-care practices, such as exercise, meditation, and talking to supportive friends or family, could also be beneficial in maintaining your mental health.",
    d: "It looks like you're managing your emotions and daily tasks well. While professional help doesn't seem necessary right now, it's always a good idea to prioritize self-care and remain attentive to your mental health. Continue to use healthy coping strategies and seek support if you notice any changes in your emotional well-being."
        };
    
        // Display result based on dominant score
        const resultText = therapyResults[getTherapyOrnot];
    
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
    const therapyQuiz = () => {
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
    
    therapyQuiz()
    // Initialize first question
    
    
}