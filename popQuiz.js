//POP CULTURE QUIZ

function popQuiz() {
    const popQuestions = [
        {
            question: "Who is known as the 'Queen of Pop'?",
            a: "Britney Spears",
            b: "Madonna",
            c: "Lady Gaga",
            d: "Beyoncé",
            correct: "b",
        },
        {
            question: "Which artist is famous for the hit song 'Shape of You'?",
            a: "Justin Bieber",
            b: "Ed Sheeran",
            c: "Shawn Mendes",
            d: "Bruno Mars",
            correct: "b",
        },
        {
            question: "Which social media platform is known for 15-second video clips?",
            a: "Instagram",
            b: "Snapchat",
            c: "TikTok",
            d: "Facebook",
            correct: "c",
        },
        {
            question: "Who released the album '1989'?",
            a: "Ariana Grande",
            b: "Taylor Swift",
            c: "Selena Gomez",
            d: "Katy Perry",
            correct: "b",
        },
        {
            question: "What is the name of Beyoncé's fanbase?",
            a: "Little Monsters",
            b: "Swifties",
            c: "Beyhive",
            d: "Beliebers",
            correct: "c",
        },
        {
            question: "Which artist is known for the single 'Blinding Lights'?",
            a: "Drake",
            b: "Post Malone",
            c: "The Weeknd",
            d: "Kanye West",
            correct: "c",
        },
        {
            question: "Who is the most followed person on Instagram as of 2023?",
            a: "Kylie Jenner",
            b: "Cristiano Ronaldo",
            c: "Ariana Grande",
            d: "Kim Kardashian",
            correct: "b",
        },
        {
            question: "Which K-pop group has a fanbase called 'ARMY'?",
            a: "BLACKPINK",
            b: "EXO",
            c: "BTS",
            d: "Twice",
            correct: "c",
        },
        {
            question: "Who is known as the 'King of Pop'?",
            a: "Prince",
            b: "Michael Jackson",
            c: "Elvis Presley",
            d: "Freddie Mercury",
            correct: "b",
        },
        {
            question: "Which artist had a viral hit with the song 'Old Town Road'?",
            a: "Lil Nas X",
            b: "Cardi B",
            c: "Drake",
            d: "Post Malone",
            correct: "a",
        },
        {
            question: "Who is the creator of the beauty brand Fenty Beauty?",
            a: "Rihanna",
            b: "Kylie Jenner",
            c: "Lady Gaga",
            d: "Selena Gomez",
            correct: "a",
        },
        {
            question: "Which artist is known for the hit song 'Thank U, Next'?",
            a: "Dua Lipa",
            b: "Billie Eilish",
            c: "Ariana Grande",
            d: "Halsey",
            correct: "c",
        },
        {
            question: "Which social media platform did Vine evolve into?",
            a: "TikTok",
            b: "Instagram Reels",
            c: "Snapchat",
            d: "YouTube Shorts",
            correct: "a",
        },
        {
            question: "Which artist is famous for the album 'Lemonade'?",
            a: "Rihanna",
            b: "Beyoncé",
            c: "Adele",
            d: "Taylor Swift",
            correct: "b",
        },
        {
            question: "What is the name of Lady Gaga's fanbase?",
            a: "Little Monsters",
            b: "Beliebers",
            c: "Swifties",
            d: "Barbz",
            correct: "a",
        },
        {
            question: "Which artist is known for the song 'Umbrella'?",
            a: "Beyoncé",
            b: "Rihanna",
            c: "Ariana Grande",
            d: "Selena Gomez",
            correct: "b",
        },
        {
            question: "Who won the first season of 'American Idol'?",
            a: "Kelly Clarkson",
            b: "Carrie Underwood",
            c: "Jennifer Hudson",
            d: "Adam Lambert",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Havana'?",
            a: "Dua Lipa",
            b: "Ariana Grande",
            c: "Camila Cabello",
            d: "Selena Gomez",
            correct: "c",
        },
        {
            question: "Who is known for the song 'Gangnam Style'?",
            a: "Psy",
            b: "BTS",
            c: "Black Eyed Peas",
            d: "Big Bang",
            correct: "a",
        },
        {
            question: "Which artist is famous for the album 'Reputation'?",
            a: "Adele",
            b: "Taylor Swift",
            c: "Demi Lovato",
            d: "Katy Perry",
            correct: "b",
        },
        {
            question: "Who is known for her role as Hermione Granger in the 'Harry Potter' series?",
            a: "Emma Stone",
            b: "Emma Watson",
            c: "Jennifer Lawrence",
            d: "Natalie Portman",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Bad Romance'?",
            a: "Lady Gaga",
            b: "Beyoncé",
            c: "Rihanna",
            d: "Katy Perry",
            correct: "a",
        },
        {
            question: "Who is known for her role as Black Widow in the Marvel Cinematic Universe?",
            a: "Scarlett Johansson",
            b: "Jennifer Lawrence",
            c: "Angelina Jolie",
            d: "Emma Stone",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Rolling in the Deep'?",
            a: "Adele",
            b: "Taylor Swift",
            c: "Katy Perry",
            d: "Demi Lovato",
            correct: "a",
        },
        {
            question: "Who is known for her role as Katniss Everdeen in 'The Hunger Games'?",
            a: "Emma Stone",
            b: "Emma Watson",
            c: "Jennifer Lawrence",
            d: "Natalie Portman",
            correct: "c",
        },
        {
            question: "Which artist is famous for the song 'Love Story'?",
            a: "Taylor Swift",
            b: "Adele",
            c: "Demi Lovato",
            d: "Katy Perry",
            correct: "a",
        },
        {
            question: "Who is known for her role as Rey in the 'Star Wars' sequel trilogy?",
            a: "Natalie Portman",
            b: "Daisy Ridley",
            c: "Emma Watson",
            d: "Emma Stone",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Can't Feel My Face'?",
            a: "The Weeknd",
            b: "Drake",
            c: "Justin Bieber",
            d: "Post Malone",
            correct: "a",
        },
        {
            question: "Who is known for his role as the Joker in 'Suicide Squad' and 'Joker'?",
            a: "Joaquin Phoenix",
            b: "Heath Ledger",
            c: "Jared Leto",
            d: "Christian Bale",
            correct: "c",
        },
        {
            question: "Which artist is famous for the song 'Shake It Off'?",
            a: "Ariana Grande",
            b: "Taylor Swift",
            c: "Selena Gomez",
            d: "Demi Lovato",
            correct: "b",
        },
        {
            question: "Who is known for her role as Hermione Granger in the 'Harry Potter' series?",
            a: "Emma Stone",
            b: "Emma Watson",
            c: "Jennifer Lawrence",
            d: "Natalie Portman",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Single Ladies'?",
            a: "Beyoncé",
            b: "Rihanna",
            c: "Ariana Grande",
            d: "Selena Gomez",
            correct: "a",
        },
        {
            question: "Who is known for his role as Tony Stark / Iron Man in the Marvel Cinematic Universe?",
            a: "Chris Hemsworth",
            b: "Robert Downey Jr.",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Bad Guy'?",
            a: "Billie Eilish",
            b: "Ariana Grande",
            c: "Taylor Swift",
            d: "Dua Lipa",
            correct: "a",
        },
        {
            question: "Who is known for his role as Jack Sparrow in the 'Pirates of the Caribbean' series?",
            a: "Orlando Bloom",
            b: "Johnny Depp",
            c: "Tom Cruise",
            d: "Brad Pitt",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Roar'?",
            a: "Taylor Swift",
            b: "Katy Perry",
            c: "Adele",
            d: "Demi Lovato",
            correct: "b",
        },
        {
            question: "Who is known for his role as Captain America in the Marvel Cinematic Universe?",
            a: "Robert Downey Jr.",
            b: "Chris Hemsworth",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "c",
        },
        {
            question: "Which artist is famous for the song 'Sorry'?",
            a: "Justin Bieber",
            b: "Drake",
            c: "Post Malone",
            d: "The Weeknd",
            correct: "a",
        },
        {
            question: "Who is known for her role as Katniss Everdeen in 'The Hunger Games'?",
            a: "Emma Stone",
            b: "Emma Watson",
            c: "Jennifer Lawrence",
            d: "Natalie Portman",
            correct: "c",
        },
        {
            question: "Which artist is famous for the song 'What Do You Mean?'",
            a: "Justin Bieber",
            b: "Drake",
            c: "Post Malone",
            d: "The Weeknd",
            correct: "a",
        },
        {
            question: "Who is known for his role as Thor in the Marvel Cinematic Universe?",
            a: "Chris Hemsworth",
            b: "Robert Downey Jr.",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Love Yourself'?",
            a: "Justin Bieber",
            b: "Drake",
            c: "Post Malone",
            d: "The Weeknd",
            correct: "a",
        },
        {
            question: "Who is known for his role as Wolverine in the 'X-Men' series?",
            a: "Chris Hemsworth",
            b: "Hugh Jackman",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'We Found Love'?",
            a: "Taylor Swift",
            b: "Katy Perry",
            c: "Rihanna",
            d: "Adele",
            correct: "c",
        },
        {
            question: "Who is known for his role as Groot in the Marvel Cinematic Universe?",
            a: "Vin Diesel",
            b: "Robert Downey Jr.",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Stay'?",
            a: "Dua Lipa",
            b: "Ariana Grande",
            c: "Rihanna",
            d: "The Weeknd",
            correct: "c",
        },
        {
            question: "Who is known for his role as the Joker in 'The Dark Knight'?",
            a: "Joaquin Phoenix",
            b: "Heath Ledger",
            c: "Jared Leto",
            d: "Christian Bale",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Hips Don't Lie'?",
            a: "Shakira",
            b: "Beyoncé",
            c: "Ariana Grande",
            d: "Selena Gomez",
            correct: "a",
        },
        {
            question: "Who is known for his role as Black Panther in the Marvel Cinematic Universe?",
            a: "Chris Hemsworth",
            b: "Chadwick Boseman",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Firework'?",
            a: "Katy Perry",
            b: "Taylor Swift",
            c: "Adele",
            d: "Demi Lovato",
            correct: "a",
        },
        {
            question: "Who is known for his role as Deadpool in the 'Deadpool' series?",
            a: "Ryan Reynolds",
            b: "Hugh Jackman",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Take Me to Church'?",
            a: "Hozier",
            b: "Ed Sheeran",
            c: "Sam Smith",
            d: "James Arthur",
            correct: "a",
        },
        {
            question: "Who is known for his role as Luke Skywalker in the 'Star Wars' series?",
            a: "Mark Hamill",
            b: "Harrison Ford",
            c: "Carrie Fisher",
            d: "Daisy Ridley",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Someone Like You'?",
            a: "Adele",
            b: "Taylor Swift",
            c: "Katy Perry",
            d: "Demi Lovato",
            correct: "a",
        },
        {
            question: "Who is known for his role as Iron Man in the Marvel Cinematic Universe?",
            a: "Chris Hemsworth",
            b: "Robert Downey Jr.",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Cheap Thrills'?",
            a: "Sia",
            b: "Ariana Grande",
            c: "Rihanna",
            d: "The Weeknd",
            correct: "a",
        },
        {
            question: "Who is known for his role as the Mad Titan Thanos in the Marvel Cinematic Universe?",
            a: "Josh Brolin",
            b: "Brad Pitt",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Chandelier'?",
            a: "Sia",
            b: "Adele",
            c: "Rihanna",
            d: "Demi Lovato",
            correct: "a",
        },
        {
            question: "Who is known for his role as Captain Jack Sparrow in the 'Pirates of the Caribbean' series?",
            a: "Orlando Bloom",
            b: "Johnny Depp",
            c: "Tom Cruise",
            d: "Brad Pitt",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Radioactive'?",
            a: "Imagine Dragons",
            b: "Maroon 5",
            c: "Coldplay",
            d: "OneRepublic",
            correct: "a",
        },
        {
            question: "Who is known for her role as Black Widow in the Marvel Cinematic Universe?",
            a: "Scarlett Johansson",
            b: "Jennifer Lawrence",
            c: "Angelina Jolie",
            d: "Emma Stone",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Havana'?",
            a: "Dua Lipa",
            b: "Ariana Grande",
            c: "Camila Cabello",
            d: "Selena Gomez",
            correct: "c",
        },
        {
            question: "Who is known for his role as Sherlock Holmes in the 'Sherlock' series?",
            a: "Benedict Cumberbatch",
            b: "Martin Freeman",
            c: "Tom Hiddleston",
            d: "Daniel Radcliffe",
            correct: "a",
        },
        {
            question: "Which artist is famous for the song 'Fireflies'?",
            a: "Owl City",
            b: "Coldplay",
            c: "Imagine Dragons",
            d: "OneRepublic",
            correct: "a",
        },
        {
            question: "Who is known for his role as Tony Stark / Iron Man in the Marvel Cinematic Universe?",
            a: "Chris Hemsworth",
            b: "Robert Downey Jr.",
            c: "Chris Evans",
            d: "Mark Ruffalo",
            correct: "b",
        },
        {
            question: "Which artist is famous for the song 'Counting Stars'?",
            a: "OneRepublic",
            b: "Imagine Dragons",
            c: "Coldplay",
            d: "Maroon 5",
            correct: "a",
        },
        {
            question: "Who is known for his role as the Joker in 'Suicide Squad' and 'Joker'?",
            a: "Joaquin Phoenix",
            b: "Heath Ledger",
            c: "Jared Leto",
            d: "Christian Bale",
            correct: "c",
        },
        {
            question: "Which artist is famous for the song 'Blinding Lights'?",
            a: "The Weeknd",
            b: "Drake",
            c: "Post Malone",
            d: "Kanye West",
            correct: "a",}
        ];
       
    

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    // Randomly shuffle and select 10 questions
    const selectedQuestions = shuffleArray(popQuestions).slice(0, 10);
    
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