let personalityQuestions = [
    {
        question: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
        a: "Don’t dare to interrupt them",
        b: "Think it’s more important to give them some of your time; work can wait",
        c: "Listen, but with only with half an ear",
        d: "Interrupt and tell them you’re really busy at the moment"
    },
    {
        question: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
        a: "Look at your watch every two minutes",
        b: "Bubble with inner anger, but keep quiet",
        c: "Explain to other equally impatient people in the room that the doctor is always running late",
        d: "Complain in a loud voice, while tapping your foot impatiently"
    },
    {
        question: "You’re having an animated discussion with a colleague regarding a project. You:",
        a: "Don’t dare contradict them",
        b: "Think that they are obviously right",
        c: "Defend your own point of view, tooth and nail",
        d: "Continuously interrupt your colleague"
    },
    {
        question: "You are taking part in a guided tour of a museum. You:",
        a: "Are a bit too far towards the back so don’t really hear what the guide is saying",
        b: "Follow the group without question",
        c: "Make sure that everyone is able to hear properly",
        d: "Are right up the front, adding your own comments in a loud voice"
    },
    {
        question: "During dinner parties at your home, you have a hard time with people who:",
        a: "Ask you to tell a story in front of everyone else",
        b: "Talk privately between themselves",
        c: "Hang around you all evening",
        d: "Always drag the conversation back to themselves"
    },
    {
        question: "You crack a joke at work, but nobody seems to have noticed. You:",
        a: "Think it’s for the best — it was a lame joke anyway",
        b: "Wait to share it with your friends after work",
        c: "Try to salvage the situation by explaining the joke",
        d: "Start a new conversation"
    },
    {
        question: "This morning, your agenda seems to be free. You:",
        a: "Know that somebody will find a reason to come and bother you",
        b: "Heave a sigh of relief and look forward to the day",
        c: "Question if you can really be free, it must be a mistake",
        d: "Pick up the phone and start calling people"
    },
    {
        question: "During dinner, the discussion moves to a subject about which you know nothing at all. You:",
        a: "Barely follow the conversation",
        b: "Ask lots of questions to learn more",
        c: "Keep quiet and look for the opportunity to bring up a subject you know better",
        d: "Try to change the subject"
    },
    {
        question: "You’ve been assigned a task that requires you to work with others. You prefer to:",
        a: "Stay in the background, doing what you’re told",
        b: "Do your part and help others when needed",
        c: "Take the lead and make sure everything goes smoothly",
        d: "Let others handle most of it and focus on your own work"
    },
    {
        question: "You’re in a meeting and disagree with your boss’s opinion. You:",
        a: "Keep quiet and follow the boss’s direction",
        b: "Gently express your differing opinion",
        c: "Firmly state your disagreement with supporting arguments",
        d: "Speak up and try to convince others to support your view"
    }
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


const selectedQuestions = shuffleArray(personalityQuestions).slice(0, 10);

// Initialize user answers
selectedQuestions.forEach(question => {
    question.userAnswer = '';
});

let index = 0;
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
        input.parentElement.style.backgroundColor = ''; // Reset background color
    });
};

const quizEnd = () => {
    const personalityScores = { a: 0, b: 0, c: 0, d: 0 };

    selectedQuestions.forEach(question => {
        if (question.userAnswer) {
            personalityScores[question.userAnswer]++;
        }
    });

    const dominantPersonality = Object.keys(personalityScores).reduce((a, b) => personalityScores[a] > personalityScores[b] ? a : b);

    const personalityTypes = {
        a: "You are empathetic and considerate. You excel in understanding others' emotions and often provide support and comfort. Consider roles in counseling, social work, or human resources where your empathy can shine. However, you might sometimes neglect your own needs or take on too much emotional burden from others.",
        b: "You are patient and understanding. Your calm demeanor and ability to listen make you a great mediator and problem solver. Look into careers in education, healthcare, or customer service where your patience can make a difference. But be cautious of others taking advantage of your patience, leading to potential frustration.",
        c: "You are logical and analytical. You have a knack for solving complex problems and making data-driven decisions. Explore opportunities in engineering, finance, or research where your analytical skills are highly valued. However, your focus on logic may sometimes make you seem detached or insensitive to others' feelings.",
        d: "You are assertive and confident. You excel in leadership roles and are not afraid to take charge. Consider careers in management, sales, or entrepreneurship where your confidence and assertiveness can lead to success. Be mindful, though, that your assertiveness might come across as overly aggressive or domineering at times."
    };

    const resultText = personalityTypes[dominantPersonality];

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
                
                
                cursor: pointer;">Based on your ansers,</h1>
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
    document.getElementById("reloadButton").onclick = reloadButton; // Bind reloadButton function to reloadButton element
};

const personalityQuiz = () => {
    document.querySelector('.quizBox').style.display = "block";
    scrollToQuizBox();
    loadQuestion();
};

const scrollToQuizBox = () => {
    const quizBox = document.querySelector('.quizBox');
    quizBox.style.display = "block";
    quizBox.scrollIntoView({ behavior: 'smooth' });
};

function reloadButton() {
    location.reload();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
