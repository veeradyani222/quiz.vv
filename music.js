//FOR THE MUSIC QUIZ

function musicQuiz() {
    const musicQuestions = [
        
            {
                question: "What is the term for a group of musicians playing together, usually led by a conductor?",
                a: "Orchestra",
                b: "Band",
                c: "Ensemble",
                d: "Choir",
                correct: "a",
            },
            {
                question: "Which term describes the musical speed or pace of a piece of music?",
                a: "Tempo",
                b: "Rhythm",
                c: "Melody",
                d: "Harmony",
                correct: "a",
            },
            {
                question: "What is the term for the combination of different musical notes played or sung together?",
                a: "Melody",
                b: "Harmony",
                c: "Beat",
                d: "Rhythm",
                correct: "b",
            },
            {
                question: "Which term refers to a musical composition for solo instrument or small group?",
                a: "Symphony",
                b: "Concerto",
                c: "Sonata",
                d: "Opera",
                correct: "c",
            },
            {
                question: "What is the standard tuning of a guitar's six strings, from lowest to highest pitch?",
                a: "EADGBE",
                b: "ADGCEA",
                c: "EADGBD",
                d: "DADGBE",
                correct: "a",
            },
            {
                question: "Which term describes the highness or lowness of a sound?",
                a: "Volume",
                b: "Pitch",
                c: "Tempo",
                d: "Timbre",
                correct: "b",
            },
            {
                question: "What is the term for a gradual increase in loudness in music?",
                a: "Crescendo",
                b: "Staccato",
                c: "Forte",
                d: "Legato",
                correct: "a",
            },
            {
                question: "Which musical term indicates a smooth and connected style of playing or singing?",
                a: "Staccato",
                b: "Legato",
                c: "Pizzicato",
                d: "Glissando",
                correct: "b",
            },
            {
                question: "What is the term for the speed at which a piece of music is played?",
                a: "Rhythm",
                b: "Beat",
                c: "Tempo",
                d: "Harmony",
                correct: "c",
            },
            {
                question: "Which musical term indicates a sudden, strong accent on a note or chord?",
                a: "Fortissimo",
                b: "Staccato",
                c: "Accent",
                d: "Sforzando",
                correct: "d",
            },

            
                {
                    question: "Which term refers to a group of notes played in succession, forming a distinctive sequence?",
                    a: "Chord",
                    b: "Scale",
                    c: "Arpeggio",
                    d: "Interval",
                    correct: "b",
                },
                {
                    question: "What is the term for a musical composition written for one voice or instrument?",
                    a: "Symphony",
                    b: "Concerto",
                    c: "Sonata",
                    d: "Solo",
                    correct: "d",
                },
                {
                    question: "Which musical term indicates a sudden transition from loud to soft?",
                    a: "Crescendo",
                    b: "Decrescendo",
                    c: "Forte",
                    d: "Piano",
                    correct: "b",
                },
                {
                    question: "What is the term for a group of musical notes played together to create a pleasing sound?",
                    a: "Harmony",
                    b: "Melody",
                    c: "Beat",
                    d: "Rhythm",
                    correct: "a",
                },
                {
                    question: "Which term describes the sound quality of a musical note that distinguishes it from other instruments or voices?",
                    a: "Pitch",
                    b: "Timbre",
                    c: "Tempo",
                    d: "Volume",
                    correct: "b",
                },
                {
                    question: "What is the term for the pattern of strong and weak beats in music?",
                    a: "Rhythm",
                    b: "Meter",
                    c: "Tempo",
                    d: "Beat",
                    correct: "b",
                },
                {
                    question: "Which musical term indicates to play the notes smoothly and connectedly?",
                    a: "Staccato",
                    b: "Legato",
                    c: "Pizzicato",
                    d: "Fermata",
                    correct: "b",
                },
                {
                    question: "What is the term for a musical composition with a recurring theme and variations?",
                    a: "Fugue",
                    b: "Canon",
                    c: "Theme and Variations",
                    d: "Sonata",
                    correct: "c",
                },
                {
                    question: "Which term refers to the technique of playing the strings of a guitar or other instrument with the fingers instead of a pick?",
                    a: "Arpeggio",
                    b: "Strumming",
                    c: "Picking",
                    d: "Fingering",
                    correct: "b",
                },
                {
                    question: "What is the term for a short musical passage that connects two sections of a composition?",
                    a: "Bridge",
                    b: "Interlude",
                    c: "Cadenza",
                    d: "Segue",
                    correct: "b",
                },
                
                    {
                        question: "Which term refers to the distance between two pitches?",
                        a: "Scale",
                        b: "Interval",
                        c: "Chord",
                        d: "Arpeggio",
                        correct: "b",
                    },
                    {
                        question: "What is the term for the musical technique of playing two or more notes simultaneously?",
                        a: "Harmony",
                        b: "Melody",
                        c: "Rhythm",
                        d: "Beat",
                        correct: "a",
                    },
                    {
                        question: "Which musical term indicates to play a passage loudly and with force?",
                        a: "Pianissimo",
                        b: "Mezzo Forte",
                        c: "Forte",
                        d: "Fortissimo",
                        correct: "d",
                    },
                    {
                        question: "What is the term for the speed of the underlying beat in music?",
                        a: "Tempo",
                        b: "Rhythm",
                        c: "Meter",
                        d: "Harmony",
                        correct: "a",
                    },
                    {
                        question: "Which term describes a rapid alternation between two adjacent notes?",
                        a: "Trill",
                        b: "Glissando",
                        c: "Vibrato",
                        d: "Tremolo",
                        correct: "a",
                    },
                    {
                        question: "What is the term for a gradual decrease in loudness in music?",
                        a: "Crescendo",
                        b: "Decrescendo",
                        c: "Fortissimo",
                        d: "Piano",
                        correct: "b",
                    },
                    {
                        question: "Which musical term indicates a break or pause in a piece of music?",
                        a: "Cadenza",
                        b: "Rest",
                        c: "Fermata",
                        d: "Cadence",
                        correct: "b",
                    },
                    {
                        question: "What is the term for the structure of a musical composition, including its sections and order?",
                        a: "Rhythm",
                        b: "Form",
                        c: "Melody",
                        d: "Harmony",
                        correct: "b",
                    },
                    {
                        question: "Which term refers to the simultaneous sounding of three or more musical notes?",
                        a: "Arpeggio",
                        b: "Chord",
                        c: "Scale",
                        d: "Interval",
                        correct: "b",
                    },
                    {
                        question: "What is the term for the written symbols used to represent musical sound?",
                        a: "Notation",
                        b: "Tablature",
                        c: "Score",
                        d: "Transcription",
                        correct: "a",
                    },
                    
                        {
                            question: "Which term describes the arrangement of notes in a specific order, forming a recognizable sequence?",
                            a: "Scale",
                            b: "Chord",
                            c: "Arpeggio",
                            d: "Phrase",
                            correct: "a",
                        },
                        {
                            question: "What is the term for the combination of different notes played or sung together to create harmony?",
                            a: "Melody",
                            b: "Rhythm",
                            c: "Chord",
                            d: "Tempo",
                            correct: "c",
                        },
                        {
                            question: "Which musical term indicates to play a passage softly and quietly?",
                            a: "Fortissimo",
                            b: "Pianissimo",
                            c: "Mezzo Piano",
                            d: "Piano",
                            correct: "b",
                        },
                        {
                            question: "What is the term for a steady and recurring pulse or beat in music?",
                            a: "Harmony",
                            b: "Melody",
                            c: "Rhythm",
                            d: "Tempo",
                            correct: "c",
                        },
                        {
                            question: "Which term describes the manner in which individual notes are grouped together in a piece of music?",
                            a: "Beat",
                            b: "Meter",
                            c: "Interval",
                            d: "Pitch",
                            correct: "b",
                        },
                        {
                            question: "What is the term for the section of a musical piece that usually comes after the exposition and development?",
                            a: "Introduction",
                            b: "Coda",
                            c: "Bridge",
                            d: "Recapitulation",
                            correct: "d",
                        },
                        {
                            question: "Which musical term indicates to play each note distinctly and separately?",
                            a: "Legato",
                            b: "Staccato",
                            c: "Fermata",
                            d: "Pizzicato",
                            correct: "b",
                        },
                        {
                            question: "What is the term for the speed at which a piece of music is performed?",
                            a: "Pitch",
                            b: "Timbre",
                            c: "Tempo",
                            d: "Volume",
                            correct: "c",
                        },
                        {
                            question: "Which term describes the quality of sound that distinguishes one voice or instrument from another?",
                            a: "Harmony",
                            b: "Pitch",
                            c: "Timbre",
                            d: "Rhythm",
                            correct: "c",
                        },
                        {
                            question: "What is the term for the simultaneous sounding of two or more musical notes?",
                            a: "Chord",
                            b: "Interval",
                            c: "Scale",
                            d: "Arpeggio",
                            correct: "a",
                        },
                        
                            {
                                question: "Which term refers to a sequence of musical notes arranged in ascending or descending order?",
                                a: "Chord",
                                b: "Scale",
                                c: "Arpeggio",
                                d: "Interval",
                                correct: "b",
                            },
                            {
                                question: "What is the term for the main, recurring theme in a piece of music?",
                                a: "Rhythm",
                                b: "Melody",
                                c: "Harmony",
                                d: "Beat",
                                correct: "b",
                            },
                            {
                                question: "Which musical term indicates to play a passage moderately loud?",
                                a: "Fortissimo",
                                b: "Piano",
                                c: "Mezzo Forte",
                                d: "Pianissimo",
                                correct: "c",
                            },
                            {
                                question: "What is the term for the arrangement of beats into regular groups?",
                                a: "Meter",
                                b: "Tempo",
                                c: "Rhythm",
                                d: "Harmony",
                                correct: "a",
                            },
                            {
                                question: "Which term describes the technique of playing or singing a note with a slight fluctuation in pitch?",
                                a: "Vibrato",
                                b: "Trill",
                                c: "Glissando",
                                d: "Tremolo",
                                correct: "a",
                            },
                            {
                                question: "What is the term for the gradual decrease in tempo in music?",
                                a: "Crescendo",
                                b: "Ritardando",
                                c: "Decrescendo",
                                d: "Accelerando",
                                correct: "c",
                            },
                            {
                                question: "Which musical term indicates to play a note or passage smoothly and connectedly?",
                                a: "Staccato",
                                b: "Legato",
                                c: "Pizzicato",
                                d: "Fermata",
                                correct: "b",
                            },
                            {
                                question: "What is the term for the overall pitch range of a voice or instrument?",
                                a: "Timbre",
                                b: "Volume",
                                c: "Range",
                                d: "Tempo",
                                correct: "c",
                            },
                            {
                                question: "Which term refers to the musical structure that follows a specific pattern of repetition and contrast?",
                                a: "Form",
                                b: "Beat",
                                c: "Phrase",
                                d: "Cadence",
                                correct: "a",
                            },
                            {
                                question: "What is the term for the technique of plucking the strings of a musical instrument?",
                                a: "Arpeggio",
                                b: "Strumming",
                                c: "Picking",
                                d: "Fingering",
                                correct: "c",
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
        const selectedQuestions = shuffleArray(musicQuestions).slice(0, 10);
        
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