//FOR THE BOLLYWOOD QUIZ

function bollywoodQuiz() {

    const bollywoodQuestions = [
        
            {
                question: "Who played the lead role in the movie 'Dil Chahta Hai'?",
                a: "Shah Rukh Khan",
                b: "Aamir Khan",
                c: "Salman Khan",
                d: "Saif Ali Khan",
                correct: "d",
            },
            {
                question: "Which actress starred opposite Hrithik Roshan in the movie 'Kaho Naa... Pyaar Hai'?",
                a: "Kareena Kapoor",
                b: "Aishwarya Rai",
                c: "Priety Zinta",
                d: "Amisha Patel",
                correct: "d",
            },
            {
                question: "Who directed the movie 'Lagaan'?",
                a: "Karan Johar",
                b: "Sanjay Leela Bhansali",
                c: "Ashutosh Gowariker",
                d: "Aditya Chopra",
                correct: "c",
            },
            {
                question: "Which actor played the character 'Munna Bhai' in the movie series 'Munna Bhai MBBS'?",
                a: "Sanjay Dutt",
                b: "Salman Khan",
                c: "Shah Rukh Khan",
                d: "Aamir Khan",
                correct: "a",
            },
            {
                question: "Who was the female lead in the movie 'Veer-Zaara'?",
                a: "Rani Mukerji",
                b: "Preity Zinta",
                c: "Aishwarya Rai",
                d: "Kajol",
                correct: "b",
            },
            {
                question: "Which movie marked the Bollywood debut of Deepika Padukone?",
                a: "Om Shanti Om",
                b: "Love Aaj Kal",
                c: "Cocktail",
                d: "Yeh Jawaani Hai Deewani",
                correct: "a",
            },
            {
                question: "Who played the role of 'Milkha Singh' in the movie 'Bhaag Milkha Bhaag'?",
                a: "Aamir Khan",
                b: "Hrithik Roshan",
                c: "Ranveer Singh",
                d: "Farhan Akhtar",
                correct: "d",
            },
            {
                question: "In which movie did Priyanka Chopra play the character 'Jhilmil Chatterjee'?",
                a: "Barfi!",
                b: "Fashion",
                c: "Mary Kom",
                d: "Don",
                correct: "a",
            },
            {
                question: "Who directed the movie '3 Idiots'?",
                a: "Rajkumar Hirani",
                b: "Karan Johar",
                c: "Farah Khan",
                d: "Anurag Kashyap",
                correct: "a",
            },
            {
                question: "Which actor played the role of 'Bajirao' in the movie 'Bajirao Mastani'?",
                a: "Ranbir Kapoor",
                b: "Ranveer Singh",
                c: "Shahid Kapoor",
                d: "Saif Ali Khan",
                correct: "b",
            },
            {
                question: "Who played the role of 'Queen' in the movie of the same name?",
                a: "Kangana Ranaut",
                b: "Deepika Padukone",
                c: "Anushka Sharma",
                d: "Priyanka Chopra",
                correct: "a",
            },
            {
                question: "Which actor starred opposite Katrina Kaif in the movie 'Jab Tak Hai Jaan'?",
                a: "Shah Rukh Khan",
                b: "Salman Khan",
                c: "Aamir Khan",
                d: "Akshay Kumar",
                correct: "a",
            },
            {
                question: "Who directed the movie 'Gully Boy'?",
                a: "Zoya Akhtar",
                b: "Anurag Kashyap",
                c: "Karan Johar",
                d: "Imtiaz Ali",
                correct: "a",
            },
            {
                question: "Which actress played the role of 'Piku' in the movie 'Piku'?",
                a: "Deepika Padukone",
                b: "Anushka Sharma",
                c: "Priyanka Chopra",
                d: "Kangana Ranaut",
                correct: "a",
            },
            {
                question: "Who played the role of 'Milkha Singh' in the movie 'M.S. Dhoni: The Untold Story'?",
                a: "Ranveer Singh",
                b: "Ranbir Kapoor",
                c: "Akshay Kumar",
                d: "Sushant Singh Rajput",
                correct: "d",
            },
            {
                question: "In which movie did Ranbir Kapoor play the role of 'Barfi'?",
                a: "Rockstar",
                b: "Barfi!",
                c: "Yeh Jawaani Hai Deewani",
                d: "Sanju",
                correct: "b",
            },
            {
                question: "Who directed the movie 'PK'?",
                a: "Rajkumar Hirani",
                b: "Aamir Khan",
                c: "Sanjay Leela Bhansali",
                d: "Karan Johar",
                correct: "a",
            },
            {
                question: "Which actress played the role of 'Seeta' in the movie 'Om Shanti Om'?",
                a: "Anushka Sharma",
                b: "Deepika Padukone",
                c: "Kareena Kapoor",
                d: "Priyanka Chopra",
                correct: "b",
            },
            {
                question: "Who played the role of 'Rani Padmavati' in the movie 'Padmaavat'?",
                a: "Deepika Padukone",
                b: "Priyanka Chopra",
                c: "Anushka Sharma",
                d: "Kangana Ranaut",
                correct: "a",
            },
            {
                question: "Who directed the movie 'Chak De! India'?",
                a: "Yash Chopra",
                b: "Aditya Chopra",
                c: "Karan Johar",
                d: "Shimit Amin",
                correct: "d",
            },
            {
                question: "Which actor played the role of 'Sultan Ali Khan' in the movie 'Sultan'?",
                a: "Salman Khan",
                b: "Shah Rukh Khan",
                c: "Aamir Khan",
                d: "Akshay Kumar",
                correct: "a",
            },
            {
                question: "Who played the role of 'Babita Kumari' in the movie 'Dangal'?",
                a: "Anushka Sharma",
                b: "Deepika Padukone",
                c: "Katrina Kaif",
                d: "Fatima Sana Shaikh",
                correct: "d",
            },
            {
                question: "Who directed the movie 'Kabir Singh'?",
                a: "Karan Johar",
                b: "Imtiaz Ali",
                c: "Sandip Reddy Vanga",
                d: "Rohit Shetty",
                correct: "c",
            },
            {
                question: "Which actress starred opposite Ayushmann Khurrana in the movie 'Andhadhun'?",
                a: "Radhika Apte",
                b: "Tabu",
                c: "Yami Gautam",
                d: "Kriti Sanon",
                correct: "b",
            },
            {
                question: "Who played the role of 'Rani Lakshmibai' in the movie 'Manikarnika: The Queen of Jhansi'?",
                a: "Kangana Ranaut",
                b: "Priyanka Chopra",
                c: "Deepika Padukone",
                d: "Anushka Sharma",
                correct: "a",
            },
            {
                question: "Who directed the movie 'Raazi'?",
                a: "Karan Johar",
                b: "Meghna Gulzar",
                c: "Zoya Akhtar",
                d: "Imtiaz Ali",
                correct: "b",
            },
            {
                question: "Which actor played the role of 'Kabir Khan' in the movie 'Chhichhore'?",
                a: "Sushant Singh Rajput",
                b: "Ayushmann Khurrana",
                c: "Rajkummar Rao",
                d: "Varun Dhawan",
                correct: "a",
            },
            {
                question: "Who played the role of 'Safeena Firdausi' in the movie 'Gully Boy'?",
                a: "Alia Bhatt",
                b: "Anushka Sharma",
                c: "Deepika Padukone",
                d: "Katrina Kaif",
                correct: "a",
            },
            {
                question: "Who directed the movie 'Dilwale Dulhania Le Jayenge'?",
                a: "Karan Johar",
                b: "Yash Chopra",
                c: "Aditya Chopra",
                d: "Kabir Khan",
                correct: "c",
            },
            {
                question: "Which actress played the role of 'Babita Kumari' in the movie 'Dangal'?",
                a: "Anushka Sharma",
                b: "Deepika Padukone",
                c: "Katrina Kaif",
                d: "Fatima Sana Shaikh",
                correct: "d",
            },
            {
                question: "Who played the role of 'Sultan Ali Khan' in the movie 'Sultan'?",
                a: "Salman Khan",
                b: "Shah Rukh Khan",
                c: "Aamir Khan",
                d: "Akshay Kumar",
                correct: "a",
            },
            {
                question: "Who directed the movie 'Kabir Singh'?",
                a: "Karan Johar",
                b: "Imtiaz Ali",
                c: "Sandip Reddy Vanga",
                d: "Rohit Shetty",
                correct: "c",
            },
            {
                question: "Which actress starred opposite Ayushmann Khurrana in the movie 'Andhadhun'?",
                a: "Radhika Apte",
                b: "Tabu",
                c: "Yami Gautam",
                d: "Kriti Sanon",
                correct: "b",
            },
            {
                question: "Who played the role of 'Rani Lakshmibai' in the movie 'Manikarnika: The Queen of Jhansi'?",
                a: "Kangana Ranaut",
                b: "Priyanka Chopra",
                c: "Deepika Padukone",
                d: "Anushka Sharma",
                correct: "a",
            },
            {
                question: "Who directed the movie 'Raazi'?",
                a: "Karan Johar",
                b: "Meghna Gulzar",
                c: "Zoya Akhtar",
                d: "Imtiaz Ali",
                correct: "b",
            },
            {
                question: "Which actor played the role of 'Kabir Khan' in the movie 'Chhichhore'?",
                a: "Sushant Singh Rajput",
                b: "Ayushmann Khurrana",
                c: "Rajkummar Rao",
                d: "Varun Dhawan",
                correct: "a",
            },
            {
                question: "Who played the role of 'Safeena Firdausi' in the movie 'Gully Boy'?",
                a: "Alia Bhatt",
                b: "Anushka Sharma",
                c: "Deepika Padukone",
                d: "Katrina Kaif",
                correct: "a",
            },
            {
                question: "Who directed the movie 'Dilwale Dulhania Le Jayenge'?",
                a: "Karan Johar",
                b: "Yash Chopra",
                c: "Aditya Chopra",
                d: "Kabir Khan",
                correct: "c",
            },
            {
                question: "Which actor played the role of 'Bajirao' in the movie 'Bajirao Mastani'?",
                a: "Ranbir Kapoor",
                b: "Ranveer Singh",
                c: "Shahid Kapoor",
                d: "Saif Ali Khan",
                correct: "b",
            },
            {
                question: "Who was the female lead in the movie 'Veer-Zaara'?",
                a: "Rani Mukerji",
                b: "Preity Zinta",
                c: "Aishwarya Rai",
                d: "Kajol",
                correct: "b",
            },
            {
                question: "Which movie marked the Bollywood debut of Deepika Padukone?",
                a: "Om Shanti Om",
                b: "Love Aaj Kal",
                c: "Cocktail",
                d: "Yeh Jawaani Hai Deewani",
                correct: "a",
            },
            {
                question: "Who played the role of 'Milkha Singh' in the movie 'Bhaag Milkha Bhaag'?",
                a: "Aamir Khan",
                b: "Hrithik Roshan",
                c: "Ranveer Singh",
                d: "Farhan Akhtar",
                correct: "d",
            },
            {
                question: "In which movie did Priyanka Chopra play the character 'Jhilmil Chatterjee'?",
                a: "Barfi!",
                b: "Fashion",
                c: "Mary Kom",
                d: "Don",
                correct: "a",
            },
            {
                question: "Who directed the movie '3 Idiots'?",
                a: "Rajkumar Hirani",
                b: "Karan Johar",
                c: "Farah Khan",
                d: "Anurag Kashyap",
                correct: "a",
            },
            {
                question: "Who directed the movie 'Lagaan'?",
                a: "Karan Johar",
                b: "Sanjay Leela Bhansali",
                c: "Ashutosh Gowariker",
                d: "Aditya Chopra",
                correct: "c",
            },
            {
                question: "Which actress starred opposite Hrithik Roshan in the movie 'Kaho Naa... Pyaar Hai'?",
                a: "Kareena Kapoor",
                b: "Aishwarya Rai",
                c: "Priety Zinta",
                d: "Amisha Patel",
                correct: "d",
            },
            {
                question: "Who played the lead role in the movie 'Dil Chahta Hai'?",
                a: "Shah Rukh Khan",
                b: "Aamir Khan",
                c: "Salman Khan",
                d: "Saif Ali Khan",
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
    const selectedQuestions = shuffleArray(bollywoodQuestions).slice(0, 10);
    
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