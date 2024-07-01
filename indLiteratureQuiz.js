//FOR THE INDIAN LITERATURE QUIZ

function indLitQuiz() {
    const indLitQuestions = [
        
            {
                question: "Who wrote the epic Indian mythological text 'Ramayana'?",
                a: "Valmiki",
                b: "Vyasa",
                c: "Tulsidas",
                d: "Kalidasa",
                correct: "a",
            },
            {
                question: "Which famous Indian poet and saint is known for their devotional songs or 'bhajans'?",
                a: "Surdas",
                b: "Kabir",
                c: "Mirabai",
                d: "Tulsidas",
                correct: "c",
            },
            {
                question: "Who authored the play 'Abhigyan Shakuntalam', one of the earliest Sanskrit dramas?",
                a: "Kalidasa",
                b: "Bhavabhuti",
                c: "Vishakhadatta",
                d: "Shudraka",
                correct: "a",
            },
            {
                question: "Which Indian author wrote the novel 'Train to Pakistan'?",
                a: "R.K. Narayan",
                b: "Khuswant Singh",
                c: "Amrita Pritam",
                d: "Khushwant Singh",
                correct: "d",
            },
            {
                question: "Who is known as the 'Father of Modern Hindi Literature'?",
                a: "Munshi Premchand",
                b: "Jaishankar Prasad",
                c: "Harivansh Rai Bachchan",
                d: "Maithili Sharan Gupt",
                correct: "a",
            },
            {
                question: "Who wrote the famous play 'Malgudi Days'?",
                a: "Ruskin Bond",
                b: "R.K. Narayan",
                c: "Khushwant Singh",
                d: "Mulk Raj Anand",
                correct: "b",
            },
            {
                question: "Which Indian writer was awarded the Nobel Prize in Literature in 1913?",
                a: "Rabindranath Tagore",
                b: "Sarojini Naidu",
                c: "Bankim Chandra Chattopadhyay",
                d: "Jawaharlal Nehru",
                correct: "a",
            },
            {
                question: "Who authored the novel 'Godan'?",
                a: "Munshi Premchand",
                b: "R.K. Narayan",
                c: "Bibhutibhushan Bandopadhyay",
                d: "Sarat Chandra Chattopadhyay",
                correct: "a",
            },
            {
                question: "Who wrote the famous book 'Anand Math'?",
                a: "Rabindranath Tagore",
                b: "Sarat Chandra Chattopadhyay",
                c: "Bankim Chandra Chattopadhyay",
                d: "Mahasweta Devi",
                correct: "c",
            },
            {
                question: "Which Indian poet is known for the poem 'The Broken Wing'?",
                a: "Kamala Das",
                b: "Sarojini Naidu",
                c: "Kamini Roy",
                d: "Arundhati Roy",
                correct: "b",
            },
            {
                question: "Who wrote the novel 'The Guide'?",
                a: "Arundhati Roy",
                b: "Anita Desai",
                c: "R.K. Narayan",
                d: "Salman Rushdie",
                correct: "c",
            },
            {
                question: "Which Indian author penned 'Midnight's Children'?",
                a: "Vikram Seth",
                b: "Salman Rushdie",
                c: "Arundhati Roy",
                d: "Anita Desai",
                correct: "b",
            },
            {
                question: "Who wrote the famous novel 'The White Tiger'?",
                a: "Chetan Bhagat",
                b: "Aravind Adiga",
                c: "Amish Tripathi",
                d: "Jhumpa Lahiri",
                correct: "b",
            },
            {
                question: "Which Indian writer is known for 'The God of Small Things'?",
                a: "Arundhati Roy",
                b: "Anita Desai",
                c: "Salman Rushdie",
                d: "Vikram Seth",
                correct: "a",
            },
            {
                question: "Who authored the novel 'Untouchable'?",
                a: "R.K. Narayan",
                b: "Mulk Raj Anand",
                c: "Sarojini Naidu",
                d: "Khushwant Singh",
                correct: "b",
            },
            {
                question: "Which Indian poet wrote 'Sohni Mahiwal', a tragic love story?",
                a: "Mir Taqi Mir",
                b: "Faiz Ahmed Faiz",
                c: "Waris Shah",
                d: "Majaz Lucknawi",
                correct: "c",
            },
            {
                question: "Who is known for the novel 'The Inheritance of Loss'?",
                a: "Arundhati Roy",
                b: "Kiran Desai",
                c: "Anita Desai",
                d: "Jhumpa Lahiri",
                correct: "b",
            },
            {
                question: "Which Indian writer is known for 'The Great Indian Novel'?",
                a: "Arundhati Roy",
                b: "R.K. Narayan",
                c: "Shashi Tharoor",
                d: "Salman Rushdie",
                correct: "c",
            },
            {
                question: "Who authored the novel 'Gora'?",
                a: "Rabindranath Tagore",
                b: "Sarat Chandra Chattopadhyay",
                c: "Bankim Chandra Chattopadhyay",
                d: "R.K. Narayan",
                correct: "c",
            },
            {
                question: "Which Indian poet is known for the poem 'The Ballad of the Harp-Weaver'?",
                a: "Kamala Das",
                b: "Sarojini Naidu",
                c: "Kamini Roy",
                d: "Edna St. Vincent Millay",
                correct: "b",
            },
            {
                question: "Who wrote the famous novel 'A Suitable Boy'?",
                a: "Vikram Seth",
                b: "Salman Rushdie",
                c: "Arundhati Roy",
                d: "Anita Desai",
                correct: "a",
            },
            {
                question: "Which Indian author is known for the book 'Interpreter of Maladies'?",
                a: "Arundhati Roy",
                b: "Jhumpa Lahiri",
                c: "Anita Desai",
                d: "Kiran Desai",
                correct: "b",
            },
            {
                question: "Who authored the novel 'Coolie'?",
                a: "Mulk Raj Anand",
                b: "R.K. Narayan",
                c: "Sarojini Naidu",
                d: "Mulk Raj Anand",
                correct: "d",
            },
            {
                question: "Which Indian poet wrote 'Kumara Sambhava', an epic poem on the birth of Kumara?",
                a: "Kalidasa",
                b: "Bharavi",
                c: "Bhavabhuti",
                d: "Magha",
                correct: "a",
            },
            {
                question: "Who is known for the book 'A Fine Balance'?",
                a: "Vikram Seth",
                b: "Rohinton Mistry",
                c: "Salman Rushdie",
                d: "Arundhati Roy",
                correct: "b",
            },
            {
                question: "Which Indian writer is known for 'English, August: An Indian Story'?",
                a: "Amitav Ghosh",
                b: "Upamanyu Chatterjee",
                c: "Arundhati Roy",
                d: "Kiran Desai",
                correct: "b",
            },
            {
                question: "Who authored the novel 'The Shadow Lines'?",
                a: "Vikram Seth",
                b: "Salman Rushdie",
                c: "Arundhati Roy",
                d: "Amitav Ghosh",
                correct: "d",
            },
            {
                question: "Which Indian poet is known for 'Nirgun Bhakti' poetry, emphasizing a formless deity?",
                a: "Tulsidas",
                b: "Kabir",
                c: "Mirabai",
                d: "Surdas",
                correct: "b",
            },
            {
                question: "Who wrote the novel 'The Namesake'?",
                a: "Vikram Seth",
                b: "Rohinton Mistry",
                c: "Jhumpa Lahiri",
                d: "Arundhati Roy",
                correct: "c",
            },
            {
                question: "Which Indian writer is known for 'The Palace of Illusions', a retelling of the Mahabharata from Draupadi's perspective?",
                a: "Anita Desai",
                b: "Arundhati Roy",
                c: "Chitra Banerjee Divakaruni",
                d: "Kiran Desai",
                correct: "c",
            },
            {
                question: "Who authored the novel 'Fasting, Feasting'?",
                a: "Anita Desai",
                b: "Arundhati Roy",
                c: "Jhumpa Lahiri",
                d: "Kiran Desai",
                correct: "a",
            },
            {
                question: "Which Indian poet wrote 'The Golden Threshold'?",
                a: "Sarojini Naidu",
                b: "Kamala Das",
                c: "Kamini Roy",
                d: "Arundhati Roy",
                correct: "a",
            },
            {
                question: "Who wrote the famous novel 'The Great Indian Novel'?",
                a: "Arundhati Roy",
                b: "R.K. Narayan",
                c: "Shashi Tharoor",
                d: "Salman Rushdie",
                correct: "c",
            },
            {
                question: "Which Indian author is known for 'The Inheritance of Loss'?",
                a: "Arundhati Roy",
                b: "Kiran Desai",
                c: "Anita Desai",
                d: "Jhumpa Lahiri",
                correct: "b",
            },
            {
                question: "Who authored the novel 'Untouchable'?",
                a: "R.K. Narayan",
                b: "Mulk Raj Anand",
                c: "Sarojini Naidu",
                d: "Khushwant Singh",
                correct: "b",
            },
            {
                question: "Which Indian poet is known for the poem 'The Ballad of the Harp-Weaver'?",
                a: "Kamala Das",
                b: "Sarojini Naidu",
                c: "Kamini Roy",
                d: "Edna St. Vincent Millay",
                correct: "b",
            },
            {
                question: "Who is known for the novel 'The Inheritance of Loss'?",
                a: "Arundhati Roy",
                b: "Kiran Desai",
                c: "Anita Desai",
                d: "Jhumpa Lahiri",
                correct: "b",
            },
            {
                question: "Which Indian writer is known for 'The Great Indian Novel'?",
                a: "Arundhati Roy",
                b: "R.K. Narayan",
                c: "Shashi Tharoor",
                d: "Salman Rushdie",
                correct: "c",
            },
            {
                question: "Who authored the novel 'Gora'?",
                a: "Rabindranath Tagore",
                b: "Sarat Chandra Chattopadhyay",
                c: "Bankim Chandra Chattopadhyay",
                d: "R.K. Narayan",
                correct: "c",
            },
            {
                question: "Which Indian poet is known for the poem 'The Ballad of the Harp-Weaver'?",
                a: "Kamala Das",
                b: "Sarojini Naidu",
                c: "Kamini Roy",
                d: "Edna St. Vincent Millay",
                correct: "b",
            },
            {
                question: "Who wrote the famous novel 'A Suitable Boy'?",
                a: "Vikram Seth",
                b: "Salman Rushdie",
                c: "Arundhati Roy",
                d: "Anita Desai",
                correct: "a",
            },
            {
                question: "Which Indian author is known for the book 'Interpreter of Maladies'?",
                a: "Arundhati Roy",
                b: "Jhumpa Lahiri",
                c: "Anita Desai",
                d: "Kiran Desai",
                correct: "b",
            },
            {
                question: "Who authored the novel 'Coolie'?",
                a: "Mulk Raj Anand",
                b: "R.K. Narayan",
                c: "Sarojini Naidu",
                d: "Mulk Raj Anand",
                correct: "d",
            },
            {
                question: "Which Indian poet wrote 'Kumara Sambhava', an epic poem on the birth of Kumara?",
                a: "Kalidasa",
                b: "Bharavi",
                c: "Bhavabhuti",
                d: "Magha",
                correct: "a",
            },
            {
                question: "Who is known for the book 'A Fine Balance'?",
                a: "Vikram Seth",
                b: "Rohinton Mistry",
                c: "Salman Rushdie",
                d: "Arundhati Roy",
                correct: "b",
            },
            {
                question: "Which Indian writer is known for 'English, August: An Indian Story'?",
                a: "Amitav Ghosh",
                b: "Upamanyu Chatterjee",
                c: "Arundhati Roy",
                d: "Kiran Desai",
                correct: "b",
            },
            {
                question: "Who authored the novel 'The Shadow Lines'?",
                a: "Vikram Seth",
                b: "Salman Rushdie",
                c: "Arundhati Roy",
                d: "Amitav Ghosh",
                correct: "d",
            },
            {
                question: "Which Indian poet is known for 'Nirgun Bhakti' poetry, emphasizing a formless deity?",
                a: "Tulsidas",
                b: "Kabir",
                c: "Mirabai",
                d: "Surdas",
                correct: "b",
            },
            {
                question: "Who wrote the novel 'The Namesake'?",
                a: "Vikram Seth",
                b: "Rohinton Mistry",
                c: "Jhumpa Lahiri",
                d: "Arundhati Roy",
                correct: "c",
            },
            {
                question: "Which Indian writer is known for 'The Palace of Illusions', a retelling of the Mahabharata from Draupadi's perspective?",
                a: "Anita Desai",
                b: "Arundhati Roy",
                c: "Chitra Banerjee Divakaruni",
                d: "Kiran Desai",
                correct: "c",
            },
            {
                question: "Who authored the novel 'Fasting, Feasting'?",
                a: "Anita Desai",
                b: "Arundhati Roy",
                c: "Jhumpa Lahiri",
                d: "Kiran Desai",
                correct: "a",
            },
            {
                question: "Which Indian poet wrote 'The Golden Threshold'?",
                a: "Sarojini Naidu",
                b: "Kamala Das",
                c: "Kamini Roy",
                d: "Arundhati Roy",
                correct: "a",
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
    const selectedQuestions = shuffleArray(indLitQuestions).slice(0, 10);
    
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