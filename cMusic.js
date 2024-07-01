//FOR THE CLASSICAL MUSIC

function cMusicQuiz() {
    const cMusicQuestions = [
        
            {
                question: "Who is known as the 'Father of Indian Classical Music'?",
                a: "Amir Khusrow",
                b: "Tansen",
                c: "Bhimsen Joshi",
                d: "Ravi Shankar",
                correct: "b",
            },
            {
                question: "Which musical instrument is associated with Ustad Zakir Hussain?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarangi",
                d: "Veena",
                correct: "a",
            },
            {
                question: "Who composed the famous 'Raga Yaman'?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Bismillah Khan",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Which classical singer is known for 'Thumri' and 'Dadra' genres?",
                a: "Ustad Amir Khan",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Jasraj",
                correct: "c",
            },
            {
                question: "Who popularized the 'Gat' and 'Bandish' forms in Hindustani classical music?",
                a: "Pandit Hariprasad Chaurasia",
                b: "Pandit Ravi Shankar",
                c: "Ustad Vilayat Khan",
                d: "Pandit Jasraj",
                correct: "b",
            },
            {
                question: "Which classical vocalist is known for the 'Khayal' genre?",
                a: "Pandit Mallikarjun Mansur",
                b: "Ustad Bismillah Khan",
                c: "Pandit Jasraj",
                d: "Pandit Bhimsen Joshi",
                correct: "d",
            },
            {
                question: "Which musical instrument is associated with Ustad Ali Akbar Khan?",
                a: "Sitar",
                b: "Sarod",
                c: "Tabla",
                d: "Flute",
                correct: "b",
            },
            {
                question: "Who composed the 'Raga Malkauns'?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Vilayat Khan",
                c: "Pandit Ravi Shankar",
                d: "Pandit Bhimsen Joshi",
                correct: "c",
            },
            {
                question: "Which classical singer is known for the 'Thumri' style and was a disciple of Siddheswari Devi?",
                a: "Pandit Jasraj",
                b: "Gangubai Hangal",
                c: "Girija Devi",
                d: "Ustad Rashid Khan",
                correct: "c",
            },
            {
                question: "Who is renowned for his contributions to the 'Dhrupad' style of singing?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Bismillah Khan",
                c: "Ustad Faiyaz Khan",
                d: "Ustad Nasir Aminuddin Dagar",
                correct: "d",
            },
            {
                question: "Which musical instrument is associated with Pandit Shivkumar Sharma?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarod",
                d: "Santoor",
                correct: "d",
            },
            {
                question: "Who is known for his mastery over the 'Shehnai'?",
                a: "Pandit Hariprasad Chaurasia",
                b: "Ustad Bismillah Khan",
                c: "Pandit Jasraj",
                d: "Pandit Kumar Gandharva",
                correct: "b",
            },
            {
                question: "Which classical singer is known for the 'Tarana' style of singing?",
                a: "Ustad Amir Khan",
                b: "Pandit Kumar Gandharva",
                c: "Pandit Mallikarjun Mansur",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Who composed the famous 'Raga Desh'?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Which classical vocalist is known for the 'Thumri' and 'Dadra' genres?",
                a: "Gangubai Hangal",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Jasraj",
                correct: "c",
            },
            {
                question: "Who popularized the 'Gat' and 'Bandish' forms in Hindustani classical music?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Kumar Gandharva",
                correct: "b",
            },
            {
                question: "Which musical instrument is associated with Ustad Amjad Ali Khan?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarod",
                d: "Flute",
                correct: "c",
            },
            {
                question: "Who composed the 'Raga Bihag'?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Vilayat Khan",
                c: "Pandit Ravi Shankar",
                d: "Pandit Bhimsen Joshi",
                correct: "d",
            },
            {
                question: "Which classical singer is known for the 'Tappa' style of singing?",
                a: "Pandit Mallikarjun Mansur",
                b: "Ustad Bismillah Khan",
                c: "Pandit Jasraj",
                d: "Ustad Rashid Khan",
                correct: "a",
            },
            {
                question: "Who is renowned for his contributions to the 'Khayal' style of singing?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Bismillah Khan",
                c: "Ustad Faiyaz Khan",
                d: "Ustad Nasir Aminuddin Dagar",
                correct: "c",
            },
            {
                question: "Which musical instrument is associated with Pandit Ravi Shankar?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarod",
                d: "Santoor",
                correct: "b",
            },
            {
                question: "Who is known for his mastery over the 'Flute'?",
                a: "Pandit Hariprasad Chaurasia",
                b: "Ustad Bismillah Khan",
                c: "Pandit Jasraj",
                d: "Pandit Kumar Gandharva",
                correct: "a",
            },
            {
                question: "Which classical singer is known for the 'Khyal' style of singing?",
                a: "Ustad Amir Khan",
                b: "Pandit Kumar Gandharva",
                c: "Pandit Mallikarjun Mansur",
                d: "Pandit Jasraj",
                correct: "d",
            },
            {
                question: "Who composed the famous 'Raga Marwa'?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Which classical vocalist is known for the 'Tarana' and 'Dhrupad' genres?",
                a: "Gangubai Hangal",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Mallikarjun Mansur",
                correct: "b",
            },
            {
                question: "Who popularized the 'Thumri' and 'Dadra' forms in Hindustani classical music?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Kumar Gandharva",
                correct: "d",
            },
            {
                question: "Which musical instrument is associated with Ustad Allauddin Khan?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarod",
                d: "Flute",
                correct: "c",
            },
            {
                question: "Who composed the 'Raga Bhairavi'?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Vilayat Khan",
                c: "Pandit Ravi Shankar",
                d: "Pandit Bhimsen Joshi",
                correct: "d",
            },
            {
                question: "Which classical singer is known for the 'Thumri' and 'Kajri' genres?",
                a: "Gangubai Hangal",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Who is renowned for his contributions to the 'Khayal' and 'Thumri' styles of singing?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Bismillah Khan",
                c: "Ustad Faiyaz Khan",
                d: "Ustad Nasir Aminuddin Dagar",
                correct: "b",
            },
            {
                question: "Which musical instrument is associated with Pandit Hariprasad Chaurasia?",
                a: "Tabla",
                b: "Sitar",
                c: "Flute",
                d: "Santoor",
                correct: "c",
            },
            {
                question: "Who is known for his mastery over the 'Sarod'?",
                a: "Pandit Hariprasad Chaurasia",
                b: "Ustad Bismillah Khan",
                c: "Pandit Kumar Gandharva",
                d: "Ustad Amjad Ali Khan",
                correct: "d",
            },
            {
                question: "Which classical singer is known for the 'Dhrupad' and 'Khyal' genres?",
                a: "Ustad Amir Khan",
                b: "Pandit Kumar Gandharva",
                c: "Pandit Mallikarjun Mansur",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Who composed the famous 'Raga Bhimpalasi'?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Jasraj",
                correct: "b",
            },
            {
                question: "Which classical vocalist is known for the 'Thumri' and 'Tappa' genres?",
                a: "Gangubai Hangal",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Mallikarjun Mansur",
                correct: "c",
            },
            {
                question: "Who popularized the 'Tarana' and 'Dadra' forms in Hindustani classical music?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Kumar Gandharva",
                correct: "d",
            },
            {
                question: "Which musical instrument is associated with Ustad Bismillah Khan?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarod",
                d: "Shehnai",
                correct: "d",
            },
            {
                question: "Who composed the 'Raga Desh'?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Vilayat Khan",
                c: "Pandit Ravi Shankar",
                d: "Pandit Bhimsen Joshi",
                correct: "c",
            },
            {
                question: "Which classical singer is known for the 'Thumri' and 'Chaiti' genres?",
                a: "Gangubai Hangal",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Who is renowned for his contributions to the 'Dhrupad' and 'Khayal' styles of singing?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Bismillah Khan",
                c: "Ustad Faiyaz Khan",
                d: "Ustad Nasir Aminuddin Dagar",
                correct: "d",
            },
            {
                question: "Which musical instrument is associated with Pandit Shivkumar Sharma?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarod",
                d: "Santoor",
                correct: "d",
            },
            {
                question: "Who is known for his mastery over the 'Shehnai'?",
                a: "Pandit Hariprasad Chaurasia",
                b: "Ustad Bismillah Khan",
                c: "Pandit Jasraj",
                d: "Ustad Bismillah Khan",
                correct: "b",
            },
            {
                question: "Which classical singer is known for the 'Tarana' and 'Khayal' genres?",
                a: "Ustad Amir Khan",
                b: "Pandit Kumar Gandharva",
                c: "Pandit Mallikarjun Mansur",
                d: "Pandit Jasraj",
                correct: "c",
            },
            {
                question: "Who composed the famous 'Raga Malkauns'?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Which classical vocalist is known for the 'Thumri' and 'Dadra' genres?",
                a: "Gangubai Hangal",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Jasraj",
                correct: "c",
            },
            {
                question: "Who popularized the 'Gat' and 'Bandish' forms in Hindustani classical music?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Kumar Gandharva",
                correct: "b",
            },
            {
                question: "Which musical instrument is associated with Ustad Ali Akbar Khan?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarod",
                d: "Flute",
                correct: "c",
            },
            {
                question: "Who composed the 'Raga Bhairavi'?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Vilayat Khan",
                c: "Pandit Ravi Shankar",
                d: "Pandit Bhimsen Joshi",
                correct: "d",
            },
            {
                question: "Which classical singer is known for the 'Thumri' and 'Kajri' genres?",
                a: "Gangubai Hangal",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Who is renowned for his contributions to the 'Khayal' and 'Thumri' styles of singing?",
                a: "Pandit Kumar Gandharva",
                b: "Ustad Bismillah Khan",
                c: "Ustad Faiyaz Khan",
                d: "Ustad Nasir Aminuddin Dagar",
                correct: "b",
            },
            {
                question: "Which musical instrument is associated with Pandit Hariprasad Chaurasia?",
                a: "Tabla",
                b: "Sitar",
                c: "Flute",
                d: "Santoor",
                correct: "c",
            },
            {
                question: "Who is known for his mastery over the 'Sarod'?",
                a: "Pandit Hariprasad Chaurasia",
                b: "Ustad Bismillah Khan",
                c: "Pandit Kumar Gandharva",
                d: "Ustad Amjad Ali Khan",
                correct: "d",
            },
            {
                question: "Which classical singer is known for the 'Dhrupad' and 'Khyal' genres?",
                a: "Ustad Amir Khan",
                b: "Pandit Kumar Gandharva",
                c: "Pandit Mallikarjun Mansur",
                d: "Pandit Jasraj",
                correct: "a",
            },
            {
                question: "Who composed the famous 'Raga Bhimpalasi'?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Jasraj",
                correct: "b",
            },
            {
                question: "Which classical vocalist is known for the 'Thumri' and 'Tappa' genres?",
                a: "Gangubai Hangal",
                b: "Pandit Kumar Gandharva",
                c: "Girija Devi",
                d: "Pandit Mallikarjun Mansur",
                correct: "c",
            },
            {
                question: "Who popularized the 'Tarana' and 'Dadra' forms in Hindustani classical music?",
                a: "Pandit Ravi Shankar",
                b: "Pandit Bhimsen Joshi",
                c: "Ustad Vilayat Khan",
                d: "Pandit Kumar Gandharva",
                correct: "d",
            },
            {
                question: "Which musical instrument is associated with Ustad Bismillah Khan?",
                a: "Tabla",
                b: "Sitar",
                c: "Sarod",
                d: "Shehnai",
                correct: "d",
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
    const selectedQuestions = shuffleArray(cMusicQuestions).slice(0, 10);
    
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