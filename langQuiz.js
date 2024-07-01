//NOW THE LANGUAGES QUIZ

function langQuiz() {
    const langQuestions = [
        
            {
                question: "What is the official language of Brazil?",
                a: "Portuguese",
                b: "Spanish",
                c: "French",
                d: "Italian",
                correct: "a",
            },
            {
                question: "Which language is widely spoken in the Netherlands?",
                a: "German",
                b: "Dutch",
                c: "Danish",
                d: "Swedish",
                correct: "b",
            },
            {
                question: "What is the official language of China?",
                a: "Mandarin",
                b: "Cantonese",
                c: "Shanghainese",
                d: "Hokkien",
                correct: "a",
            },
            {
                question: "Which language is spoken in Switzerland?",
                a: "Swedish",
                b: "French",
                c: "Finnish",
                d: "Swiss",
                correct: "b",
            },
            {
                question: "What is the primary language spoken in Argentina?",
                a: "Portuguese",
                b: "Spanish",
                c: "Italian",
                d: "French",
                correct: "b",
            },
            {
                question: "Which language is predominantly spoken in Egypt?",
                a: "Arabic",
                b: "Turkish",
                c: "Persian",
                d: "Kurdish",
                correct: "a",
            },
            {
                question: "What is the official language of Japan?",
                a: "Korean",
                b: "Mandarin",
                c: "Japanese",
                d: "Thai",
                correct: "c",
            },
            {
                question: "Which language is spoken in Norway?",
                a: "Danish",
                b: "Finnish",
                c: "Norwegian",
                d: "Swedish",
                correct: "c",
            },
            {
                question: "What is the official language of Iran?",
                a: "Turkish",
                b: "Persian",
                c: "Arabic",
                d: "Kurdish",
                correct: "b",
            },
            {
                question: "Which language is spoken in India by the largest number of people?",
                a: "Hindi",
                b: "English",
                c: "Bengali",
                d: "Tamil",
                correct: "a",
            },
            {
                question: "What is the official language of Mexico?",
                a: "Spanish",
                b: "Portuguese",
                c: "Mayan",
                d: "Nahuatl",
                correct: "a",
            },
            {
                question: "Which language is widely spoken in South Africa?",
                a: "Zulu",
                b: "Swahili",
                c: "Xhosa",
                d: "Afrikaans",
                correct: "d",
            },
            {
                question: "What is the primary language spoken in Canada?",
                a: "French",
                b: "English",
                c: "Inuktitut",
                d: "Spanish",
                correct: "b",
            },
            {
                question: "Which language is predominantly spoken in Thailand?",
                a: "Thai",
                b: "Vietnamese",
                c: "Lao",
                d: "Cambodian",
                correct: "a",
            },
            {
                question: "What is the official language of Germany?",
                a: "German",
                b: "Dutch",
                c: "Swedish",
                d: "Norwegian",
                correct: "a",},

                    {
                        question: "What is the official language of Russia?",
                        a: "Russian",
                        b: "Ukrainian",
                        c: "Belarusian",
                        d: "Latvian",
                        correct: "a",
                    },
                    {
                        question: "Which language is spoken in Switzerland alongside French and German?",
                        a: "Italian",
                        b: "Romansh",
                        c: "Spanish",
                        d: "Greek",
                        correct: "b",
                    },
                    {
                        question: "What is the official language of Australia?",
                        a: "English",
                        b: "Australian",
                        c: "Aboriginal",
                        d: "Chinese",
                        correct: "a",
                    },
                    {
                        question: "Which language is predominantly spoken in Ethiopia?",
                        a: "Amharic",
                        b: "Swahili",
                        c: "Somali",
                        d: "Arabic",
                        correct: "a",
                    },
                    {
                        question: "What is the primary language spoken in Pakistan?",
                        a: "Urdu",
                        b: "Punjabi",
                        c: "Sindhi",
                        d: "Pashto",
                        correct: "a",
                    },
                    {
                        question: "Which language is widely spoken in Indonesia?",
                        a: "Javanese",
                        b: "Malay",
                        c: "Tagalog",
                        d: "Thai",
                        correct: "b",
                    },
                    {
                        question: "What is the official language of Argentina?",
                        a: "Portuguese",
                        b: "Spanish",
                        c: "Italian",
                        d: "French",
                        correct: "b",
                    },
                    {
                        question: "Which language is spoken in Nigeria by the largest number of people?",
                        a: "Yoruba",
                        b: "Igbo",
                        c: "Hausa",
                        d: "English",
                        correct: "d",
                    },
                    {
                        question: "What is the official language of Egypt?",
                        a: "Turkish",
                        b: "Arabic",
                        c: "Persian",
                        d: "Coptic",
                        correct: "b",
                    },
                    {
                        question: "Which language is spoken in Belgium?",
                        a: "Dutch",
                        b: "French",
                        c: "German",
                        d: "Luxembourgish",
                        correct: "a",
                    },
                    {
                        question: "What is the primary language spoken in Bangladesh?",
                        a: "Hindi",
                        b: "Urdu",
                        c: "Bengali",
                        d: "Tamil",
                        correct: "c",
                    },
                    {
                        question: "Which language is predominantly spoken in Brazil?",
                        a: "Portuguese",
                        b: "Spanish",
                        c: "Italian",
                        d: "German",
                        correct: "a",
                    },
                    {
                        question: "What is the official language of Thailand?",
                        a: "Thai",
                        b: "Vietnamese",
                        c: "Lao",
                        d: "Khmer",
                        correct: "a",
                    },
                    {
                        question: "Which language is spoken in the Philippines?",
                        a: "Tagalog",
                        b: "Thai",
                        c: "Indonesian",
                        d: "Burmese",
                        correct: "a",
                    },
                    {
                        question: "What is the official language of Turkey?",
                        a: "Turkish",
                        b: "Arabic",
                        c: "Persian",
                        d: "Kurdish",
                        correct: "a",
                    },
                    {
                        question: "Which language is widely spoken in Iran?",
                        a: "Turkish",
                        b: "Persian",
                        c: "Arabic",
                        d: "Kurdish",
                        correct: "b",
                    },
                    {
                        question: "What is the official language of South Korea?",
                        a: "Korean",
                        b: "Japanese",
                        c: "Mandarin",
                        d: "Cantonese",
                        correct: "a",
                    },
                    {
                        question: "Which language is spoken in Sweden?",
                        a: "Danish",
                        b: "Finnish",
                        c: "Swedish",
                        d: "Norwegian",
                        correct: "c",
                    },
                    {
                        question: "What is the primary language spoken in Kenya?",
                        a: "Swahili",
                        b: "English",
                        c: "Amharic",
                        d: "Kikuyu",
                        correct: "a",
                    },
                    {
                        question: "Which language is predominantly spoken in Malaysia?",
                        a: "Malay",
                        b: "Thai",
                        c: "Filipino",
                        d: "Indonesian",
                        correct: "a",
                    },
                    {
                        question: "What is the official language of Canada?",
                        a: "French",
                        b: "English",
                        c: "Inuktitut",
                        d: "Spanish",
                        correct: "b",
                    },
                    {
                        question: "Which language is spoken in the United Arab Emirates?",
                        a: "Arabic",
                        b: "Farsi",
                        c: "Urdu",
                        d: "Hindi",
                        correct: "a",
                    },
                    {
                        question: "What is the official language of Poland?",
                        a: "Polish",
                        b: "Czech",
                        c: "Slovak",
                        d: "Hungarian",
                        correct: "a",
                    },
                    {
                        question: "Which language is spoken in Venezuela?",
                        a: "Portuguese",
                        b: "Spanish",
                        c: "Italian",
                        d: "French",
                        correct: "b",
                    },
                    {
                        question: "What is the primary language spoken in Nepal?",
                        a: "Hindi",
                        b: "Urdu",
                        c: "Nepali",
                        d: "Tamil",
                        correct: "c",
                    },
                    {
                        question: "Which language is predominantly spoken in Greece?",
                        a: "Greek",
                        b: "Italian",
                        c: "Turkish",
                        d: "Armenian",
                        correct: "a",
                    },
                    {
                        question: "What is the official language of Israel?",
                        a: "Hebrew",
                        b: "Arabic",
                        c: "Yiddish",
                        d: "Persian",
                        correct: "a",
                    },
                    {
                        question: "Which language is spoken in Algeria?",
                        a: "Berber",
                        b: "Arabic",
                        c: "French",
                        d: "Malagasy",
                        correct: "b",
                    },
                    {
                        question: "What is the primary language spoken in Hungary?",
                        a: "Hungarian",
                        b: "Czech",
                        c: "Slovak",
                        d: "Polish",
                        correct: "a",
                    },
                    {
                        question: "Which language is spoken in Singapore?",
                        a: "Mandarin",
                        b: "Malay",
                        c: "Tamil",
                        d: "English",
                        correct: "d",
                    },
                    {
                        question: "What is the official language of Finland?",
                        a: "Finnish",
                        b: "Swedish",
                        c: "Danish",
                        d: "Norwegian",
                        correct: "a",
                    },
                    {
                        question: "Which language is spoken in Morocco?",
                        a: "Berber",
                        b: "Arabic",
                        c: "French",
                        d: "Spanish",
                        correct: "b",
                    },
                    {
                        question: "What is the primary language spoken in Ukraine?",
                        a: "Ukrainian",
                        b: "Russian",
                        c: "Polish",
                        d: "Romanian",
                        correct: "a",
                    },
                    {
                        question: "Which language is predominantly spoken in Saudi Arabia?",
                        a: "Arabic",
                        b: "Farsi",
                        c: "Urdu",
                        d: "Turkish",
                        correct: "a",
                    },
                    {
                        question: "What is the official language of Switzerland?",
                        a: "German",
                        b: "French",
                        c: "Italian",
                        d: "Romansh",
                        correct: "d",
                    },
                    {
                        question: "Which language is spoken in Austria?",
                        a: "German",
                        b: "Hungarian",
                        c: "Czech",
                        d: "Slovak",
                        correct: "a",
                    },
                    {
                        question: "What is the official language of Ireland?",
                        a: "English",
                        b: "Irish",
                        c: "Scottish Gaelic",
                        d: "Welsh",
                        correct: "b",
                    },
                    {
                        question: "Which language is spoken in Serbia?",
                        a: "Serbian",
                        b: "Croatian",
                        c: "Bosnian",
                        d: "Albanian",
                        correct: "a",
                    },
                    {
                        question: "What is the primary language spoken in Bolivia?",
                        a: "Portuguese",
                        b: "Spanish",
                        c: "Quechua",
                        d: "Guarani",
                        correct: "b",
                    },
                    {
                        question: "Which language is predominantly spoken in South Korea?",
                        a: "Korean",
                        b: "Japanese",
                        c: "Mandarin",
                        d: "Cantonese",
                        correct: "a",
                    },
    ];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    // Randomly shuffle and select 10 questions
    const selectedQuestions = shuffleArray(langQuestions).slice(0, 10);
    
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
                border: 2px solid black;
                padding: 2vh 2vh;">
                <h1 style="width: 50%;
                    font-family: 'Poppins', serif;
                    color: black;
                    background-color: lightcyan;
                    border: 1px solid black;
                   
                    cursor: pointer;">${percentage}%</h1>
                <br>
                <h3 class="w-100" >Oh, you've scored ${correct} / ${total}</h3>
                <div class="reloadButton" id="reloadButton" onclick="reloadButton()"
                    style="width: 30% ;
                        font-family: 'Poppins', serif;
                        color: black;
                        background-color: lightgreen;
                        border: 2px solid black;
                       
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