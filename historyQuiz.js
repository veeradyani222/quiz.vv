//FOR THE HISTORY QUIZ

function historyQuiz() {
    const historyQuestions = [
        
            {
                question: "Who was the first Prime Minister of India?",
                a: "Jawaharlal Nehru",
                b: "Mahatma Gandhi",
                c: "Sardar Patel",
                d: "Subhash Chandra Bose",
                correct: "a",
            },
            {
                question: "Who is known as the 'Father of the Indian Constitution'?",
                a: "Mahatma Gandhi",
                b: "B.R. Ambedkar",
                c: "Jawaharlal Nehru",
                d: "Sardar Patel",
                correct: "b",
            },
            {
                question: "Which Mughal Emperor built the Taj Mahal?",
                a: "Akbar",
                b: "Jahangir",
                c: "Shah Jahan",
                d: "Aurangzeb",
                correct: "c",
            },
            {
                question: "Who was the founder of the Maurya Empire?",
                a: "Chandragupta Maurya",
                b: "Ashoka",
                c: "Bindusara",
                d: "Bimbisara",
                correct: "a",
            },
            {
                question: "Who was the first President of independent India?",
                a: "Jawaharlal Nehru",
                b: "Rajendra Prasad",
                c: "Sardar Patel",
                d: "Lal Bahadur Shastri",
                correct: "b",
            },
            {
                question: "Who led the Dandi March in 1930 as a protest against British salt taxes?",
                a: "Mahatma Gandhi",
                b: "Jawaharlal Nehru",
                c: "Sardar Patel",
                d: "B.R. Ambedkar",
                correct: "a",
            },
            {
                question: "The Indus Valley Civilization was primarily located in which modern-day country?",
                a: "India",
                b: "Pakistan",
                c: "Bangladesh",
                d: "Nepal",
                correct: "b",
            },
            {
                question: "Who was the last Viceroy of India?",
                a: "Lord Mountbatten",
                b: "Lord Curzon",
                c: "Lord Dalhousie",
                d: "Lord Hastings",
                correct: "a",
            },
            {
                question: "The Quit India Movement was launched in which year?",
                a: "1942",
                b: "1947",
                c: "1930",
                d: "1920",
                correct: "a",
            },
            {
                question: "Who founded the Indian National Army (INA) to fight against British rule?",
                a: "Mahatma Gandhi",
                b: "Subhash Chandra Bose",
                c: "Bhagat Singh",
                d: "Jawaharlal Nehru",
                correct: "b",
            },
            {
                question: "Who was the first Governor-General of independent India?",
                a: "Lord Mountbatten",
                b: "Lord Dalhousie",
                c: "Lord Hastings",
                d: "C. Rajagopalachari",
                correct: "a",
            },
            {
                question: "Who was the first Indian woman to become the President of the Indian National Congress?",
                a: "Sarojini Naidu",
                b: "Indira Gandhi",
                c: "Annie Besant",
                d: "Sucheta Kriplani",
                correct: "a",
            },
            {
                question: "Who is known for leading the Bardoli Satyagraha in 1928?",
                a: "Sardar Patel",
                b: "Jawaharlal Nehru",
                c: "B.R. Ambedkar",
                d: "Mahatma Gandhi",
                correct: "d",
            },
            {
                question: "Who was the first Indian astronaut to travel in space?",
                a: "Kalpana Chawla",
                b: "Rakesh Sharma",
                c: "Sunita Williams",
                d: "Yuri Gagarin",
                correct: "b",
            },
            {
                question: "The first war of Indian independence, often called the Sepoy Mutiny, took place in which year?",
                a: "1857",
                b: "1947",
                c: "1905",
                d: "1920",
                correct: "a",
            },
            {
                question: "Who was the revolutionary leader known as 'Netaji'?",
                a: "Subhash Chandra Bose",
                b: "Bhagat Singh",
                c: "Chandrashekhar Azad",
                d: "Lala Lajpat Rai",
                correct: "a",
            },
            {
                question: "Which treaty marked the end of the Third Anglo-Mysore War in 1792?",
                a: "Treaty of Bassein",
                b: "Treaty of Seringapatam",
                c: "Treaty of Mangalore",
                d: "Treaty of Amritsar",
                correct: "b",
            },
            {
                question: "Who was the first Indian woman to win an Olympic medal?",
                a: "P.T. Usha",
                b: "Mary Kom",
                c: "Karnam Malleswari",
                d: "M.C. Mary Kom",
                correct: "c",
            },
            {
                question: "Which Indian king is known for his patronage of Buddhism and the spread of Buddhism outside India?",
                a: "Ashoka",
                b: "Chandragupta Maurya",
                c: "Harsha",
                d: "Kanishka",
                correct: "d",
            },
            {
                question: "The famous 'Jallianwala Bagh massacre' took place in which city?",
                a: "Delhi",
                b: "Amritsar",
                c: "Kolkata",
                d: "Mumbai",
                correct: "b",
            },
            {
                question: "Who was the first Indian woman to win the Nobel Prize?",
                a: "Mother Teresa",
                b: "Indira Gandhi",
                c: "Sarojini Naidu",
                d: "Rajkumari Amrit Kaur",
                correct: "a",
            },
            {
                question: "The Battle of Plassey in 1757 established British supremacy in which region of India?",
                a: "Bengal",
                b: "Punjab",
                c: "Gujarat",
                d: "Assam",
                correct: "a",
            },
            {
                question: "Who founded the Brahmo Samaj in 1828?",
                a: "Ramakrishna Paramhansa",
                b: "Swami Vivekananda",
                c: "Raja Ram Mohan Roy",
                d: "Dayananda Saraswati",
                correct: "c",
            },
            {
                question: "The famous Red Fort in Delhi was built by which Mughal Emperor?",
                a: "Akbar",
                b: "Jahangir",
                c: "Shah Jahan",
                d: "Aurangzeb",
                correct: "c",
            },
            {
                question: "Who was the first Indian woman to become the Chief Minister of an Indian state?",
                a: "Indira Gandhi",
                b: "Jayalalithaa",
                c: "Sarojini Naidu",
                d: "Mayawati",
                correct: "b",
            },
            {
                question: "Who was known as the 'Iron Man of India'?",
                a: "Mahatma Gandhi",
                b: "Sardar Patel",
                c: "Jawaharlal Nehru",
                d: "B.R. Ambedkar",
                correct: "b",
            },
            {
                question: "The Indian National Army (INA) was founded by which Indian leader?",
                a: "Mahatma Gandhi",
                b: "Jawaharlal Nehru",
                c: "Subhash Chandra Bose",
                d: "B.R. Ambedkar",
                correct: "c",
            },
            {
                question: "Who was the first Indian woman to climb Mount Everest?",
                a: "Bachendri Pal",
                b: "Santosh Yadav",
                c: "Anshu Jamsenpa",
                d: "Malavath Purna",
                correct: "a",
            },
            {
                question: "Who was the first President of the Indian National Congress?",
                a: "Bal Gangadhar Tilak",
                b: "Dadabhai Naoroji",
                c: "Surendranath Banerjee",
                d: "W.C. Bonnerjee",
                correct: "d",
            },
            {
                question: "The Indian state of Telangana was formed in which year?",
                a: "2014",
                b: "2000",
                c: "1956",
                d: "1947",
                correct: "a",
            },
            {
                question: "Who was the leader of the Bhakti movement who composed the 'Bhakti Sagar'?",
                a: "Kabir",
                b: "Tulsidas",
                c: "Mirabai",
                d: "Ravidas",
                correct: "a",
            },
            {
                question: "Who was the first Indian to win the Nobel Prize in Physics?",
                a: "C.V. Raman",
                b: "Homi J. Bhabha",
                c: "Satyendra Nath Bose",
                d: "Meghnad Saha",
                correct: "a",
            },
            {
                question: "The Battle of Haldighati in 1576 was fought between which two rulers?",
                a: "Akbar and Hemu",
                b: "Akbar and Maharana Pratap",
                c: "Shivaji and Aurangzeb",
                d: "Babur and Ibrahim Lodi",
                correct: "b",
            },
            {
                question: "Who was the author of 'Discovery of India'?",
                a: "Jawaharlal Nehru",
                b: "Mahatma Gandhi",
                c: "B.R. Ambedkar",
                d: "Sardar Patel",
                correct: "a",
            },
            {
                question: "Which Indian city was the capital of the Pallava dynasty?",
                a: "Pune",
                b: "Kanchipuram",
                c: "Madurai",
                d: "Patna",
                correct: "b",
            },
            {
                question: "The Indian National Congress was founded in which year?",
                a: "1885",
                b: "1905",
                c: "1920",
                d: "1942",
                correct: "a",
            },
            {
                question: "Who was the founder of the Delhi Sultanate?",
                a: "Qutb-ud-din Aibak",
                b: "Alauddin Khilji",
                c: "Mohammad Ghori",
                d: "Babar",
                correct: "c",
            },
            {
                question: "Who was the first Indian woman to win an Olympic silver medal?",
                a: "Karnam Malleswari",
                b: "Saina Nehwal",
                c: "P.V. Sindhu",
                d: "M.C. Mary Kom",
                correct: "a",
            },
            {
                question: "The capital city of the Chola dynasty was?",
                a: "Hampi",
                b: "Thanjavur",
                c: "Ujjain",
                d: "Pataliputra",
                correct: "b",
            },
            {
                question: "Who built the Khajuraho temples?",
                a: "Chandragupta Maurya",
                b: "Chandragupta II",
                c: "Harshavardhana",
                d: "Gupta",
                correct: "b",
            },
            {
                question: "Who founded the city of Agra?",
                a: "Akbar",
                b: "Babur",
                c: "Jahangir",
                d: "Sher Shah Suri",
                correct: "b",
            },
            {
                question: "Who was the first Indian woman to become the Chief Minister of a state in India?",
                a: "Indira Gandhi",
                b: "Sucheta Kriplani",
                c: "Sarojini Naidu",
                d: "Jayalalithaa",
                correct: "b",
            },
            {
                question: "Which Indian freedom fighter is known as the 'Frontier Gandhi'?",
                a: "Bhagat Singh",
                b: "Khan Abdul Ghaffar Khan",
                c: "Lala Lajpat Rai",
                d: "Jawaharlal Nehru",
                correct: "b",
            },
            {
                question: "The British East India Company was granted the Diwani rights of Bengal by which Mughal Emperor?",
                a: "Akbar",
                b: "Shah Alam II",
                c: "Bahadur Shah II",
                d: "Aurangzeb",
                correct: "b",
            },
            {
                question: "Who is known as the 'Nightingale of India'?",
                a: "Sarojini Naidu",
                b: "Indira Gandhi",
                c: "Sucheta Kriplani",
                d: "Vijaya Lakshmi Pandit",
                correct: "a",
            },
            {
                question: "The Indian National Army (INA) trials took place at which Red Fort in Delhi?",
                a: "Agra Fort",
                b: "Lal Qila",
                c: "Fatehpur Sikri",
                d: "Taj Mahal",
                correct: "b",
            },
            {
                question: "Who was the first Indian to win the Booker Prize?",
                a: "Arundhati Roy",
                b: "Salman Rushdie",
                c: "Kiran Desai",
                d: "Ruskin Bond",
                correct: "a",
            },
            {
                question: "Who was the first Indian woman to climb Mount Everest twice?",
                a: "Bachendri Pal",
                b: "Santosh Yadav",
                c: "Anshu Jamsenpa",
                d: "Malavath Purna",
                correct: "c",
            },
            {
                question: "Who was the first Indian woman to become a Grandmaster in chess?",
                a: "Humpy Koneru",
                b: "Vishwanathan Anand",
                c: "Dronavalli Harika",
                d: "Pentala Harikrishna",
                correct: "a",
            },
            {
                question: "Who founded the 'Servants of India Society' in 1905?",
                a: "Mahatma Gandhi",
                b: "Gopal Krishna Gokhale",
                c: "Bal Gangadhar Tilak",
                d: "Annie Besant",
                correct: "b",
            },
            {
                question: "Which Indian city is known as the 'City of Joy'?",
                a: "Mumbai",
                b: "Kolkata",
                c: "Delhi",
                d: "Chennai",
                correct: "b",
            },
            {
                question: "Who was the first Indian to win an individual Olympic gold medal?",
                a: "Abhinav Bindra",
                b: "Milkha Singh",
                c: "Leander Paes",
                d: "P.T. Usha",
                correct: "a",
            },
            {
                question: "Who authored the book 'Anandmath' which inspired the song 'Vande Mataram'?",
                a: "Bankim Chandra Chattopadhyay",
                b: "Rabindranath Tagore",
                c: "Sarat Chandra Chattopadhyay",
                d: "Mahadevi Verma",
                correct: "a",
            },
            {
                question: "Which Indian leader was known as the 'Lion of Punjab'?",
                a: "Lala Lajpat Rai",
                b: "Bhagat Singh",
                c: "Chandrashekhar Azad",
                d: "Subhash Chandra Bose",
                correct: "a",
            },
            {
                question: "Who was the founder of the Indian Space Research Organisation (ISRO)?",
                a: "Vikram Sarabhai",
                b: "Satish Dhawan",
                c: "Homi Bhabha",
                d: "A.P.J. Abdul Kalam",
                correct: "a",
            },
            {
                question: "Which Indian city was the capital of the Maratha Empire?",
                a: "Mumbai",
                b: "Pune",
                c: "Nagpur",
                d: "Indore",
                correct: "b",
            },
            {
                question: "Who was the first Indian woman to win an individual Olympic silver medal?",
                a: "P.T. Usha",
                b: "Saina Nehwal",
                c: "P.V. Sindhu",
                d: "Karnam Malleswari",
                correct: "d",
            },
            {
                question: "Which Indian leader was known as the 'Grand Old Man of India'?",
                a: "Mahatma Gandhi",
                b: "Jawaharlal Nehru",
                c: "Dadabhai Naoroji",
                d: "Bal Gangadhar Tilak",
                correct: "c",
            },
            {
                question: "Who was the first Indian woman to win an individual Olympic bronze medal?",
                a: "Mary Kom",
                b: "Sakshi Malik",
                c: "Karnam Malleswari",
                d: "Sania Mirza",
                correct: "c",
            },
            {
                question: "Who founded the Indian National Army (Azad Hind Fauj) in 1943?",
                a: "Mahatma Gandhi",
                b: "Jawaharlal Nehru",
                c: "Sardar Patel",
                d: "Subhash Chandra Bose",
                correct: "d",
            },
            {
                question: "Which Indian ruler is known as the 'Lion of Mysore'?",
                a: "Tipu Sultan",
                b: "Haider Ali",
                c: "Krishna Raja Wadiyar IV",
                d: "Chikka Devaraja Wadiyar",
                correct: "a",
            },
            {
                question: "The 'Quit India Movement' was launched in which year?",
                a: "1942",
                b: "1947",
                c: "1930",
                d: "1920",
                correct: "a",
            },
            {
                question: "Who was the first Indian to win the Nobel Prize in Literature?",
                a: "Rabindranath Tagore",
                b: "Sarojini Naidu",
                c: "V.S. Naipaul",
                d: "Amartya Sen",
                correct: "a",
            },
            {
                question: "Who was the first Indian woman to win an Olympic gold medal?",
                a: "P.T. Usha",
                b: "Sania Mirza",
                c: "Sakshi Malik",
                d: "Karnam Malleswari",
                correct: "d",
            },
            {
                question: "The Indian state of Goa was liberated from Portuguese rule in which year?",
                a: "1956",
                b: "1961",
                c: "1975",
                d: "1980",
                correct: "b",
            },
            {
                question: "Who was the first Indian woman to become the President of the United Nations General Assembly?",
                a: "Vijaya Lakshmi Pandit",
                b: "Indira Gandhi",
                c: "Sucheta Kriplani",
                d: "Sarojini Naidu",
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
    const selectedQuestions = shuffleArray(historyQuestions).slice(0, 10);
    
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
                border: 3px solid black;
                padding: 2vh 2vh;">
                <h1 style="width: 15vw;
                    font-family: 'Poppins', serif;
                    color: black;
                    background-color: lightcyan;
                    border: 2px solid black;
                    border-radius: 50px;
                    cursor: pointer;">${percentage}%</h1>
                <br>
                <h3 class="w-100">Oh, you've scored ${correct} / ${total}</h3>
                <div class="reloadButton" id="reloadButton" onclick="reloadButton()"
                    style="width: 5vw;
                        font-family: 'Poppins', serif;
                        color: black;
                        background-color: lightgreen;
                        border: 2px solid black;
                        border-radius: 20px;
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