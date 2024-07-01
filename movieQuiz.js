//MOVIES AND TV SHOWS QUIZ

function movieQuiz() {
    const movieQuestions = 

        [
            {
                question: "Who is the main character in the 'Harry Potter' series?",
                a: "Hermione Granger",
                b: "Ron Weasley",
                c: "Harry Potter",
                d: "Albus Dumbledore",
                correct: "c",
            },
            {
                question: "Which movie features a clownfish named Nemo?",
                a: "Finding Nemo",
                b: "Toy Story",
                c: "The Lion King",
                d: "Frozen",
                correct: "a",
            },
            {
                question: "In 'The Lion King', what is Simba's father's name?",
                a: "Scar",
                b: "Mufasa",
                c: "Timon",
                d: "Pumbaa",
                correct: "b",
            },
            {
                question: "Who lives in a pineapple under the sea in the animated TV show 'SpongeBob SquarePants'?",
                a: "Sandy Cheeks",
                b: "Patrick Star",
                c: "Squidward Tentacles",
                d: "SpongeBob SquarePants",
                correct: "d",
            },
            {
                question: "Which superhero team includes characters like Iron Man, Captain America, and Thor?",
                a: "Justice League",
                b: "X-Men",
                c: "Avengers",
                d: "Fantastic Four",
                correct: "c",
            },
            {
                question: "Who is the protagonist in the 'Star Wars' movies?",
                a: "Darth Vader",
                b: "Luke Skywalker",
                c: "Obi-Wan Kenobi",
                d: "Yoda",
                correct: "b",
            },
            {
                question: "Which animated movie features a snowman named Olaf?",
                a: "Tangled",
                b: "Moana",
                c: "Brave",
                d: "Frozen",
                correct: "d",
            },
            {
                question: "What is the name of the wizarding school that Harry Potter attends?",
                a: "Hogwarts School of Witchcraft and Wizardry",
                b: "Ilvermorny School of Witchcraft and Wizardry",
                c: "Beauxbatons Academy of Magic",
                d: "Durmstrang Institute",
                correct: "a",
            },
            {
                question: "Which TV show features a character named Sheldon Cooper?",
                a: "Friends",
                b: "The Big Bang Theory",
                c: "How I Met Your Mother",
                d: "Breaking Bad",
                correct: "b",
            },
            {
                question: "In 'Toy Story', what is the name of Woody's owner?",
                a: "Andy",
                b: "Sid",
                c: "Buzz",
                d: "Rex",
                correct: "a",
            },
            {
                question: "Which movie features a friendly extraterrestrial named E.T.?",
                a: "Close Encounters of the Third Kind",
                b: "Alien",
                c: "E.T. the Extra-Terrestrial",
                d: "Independence Day",
                correct: "c",
            },
            {
                question: "Who is Sherlock Holmes' famous sidekick?",
                a: "Dr. Watson",
                b: "Dr. Jekyll",
                c: "Inspector Lestrade",
                d: "Mycroft Holmes",
                correct: "a",
            },
            {
                question: "Which TV show is set in the fictional town of Springfield?",
                a: "Family Guy",
                b: "Futurama",
                c: "The Simpsons",
                d: "South Park",
                correct: "c",
            },
            {
                question: "Who is the main character in the movie 'The Hunger Games'?",
                a: "Katniss Everdeen",
                b: "Primrose Everdeen",
                c: "Peeta Mellark",
                d: "Gale Hawthorne",
                correct: "a",
            },
            {
                question: "Which animated movie features a robot named WALL-E?",
                a: "Finding Nemo",
                b: "Up",
                c: "Ratatouille",
                d: "WALL-E",
                correct: "d",
            },
            {
                question: "Who is the protagonist in the TV show 'Stranger Things'?",
                a: "Eleven",
                b: "Mike Wheeler",
                c: "Dustin Henderson",
                d: "Will Byers",
                correct: "a",
            },
            {
                question: "Which movie is about a young lion cub who becomes king of the Pride Lands?",
                a: "Madagascar",
                b: "The Lion King",
                c: "Ice Age",
                d: "Zootopia",
                correct: "b",
            },
            {
                question: "Who is the main character in the 'Spider-Man' movies?",
                a: "Peter Parker",
                b: "Tony Stark",
                c: "Bruce Banner",
                d: "Steve Rogers",
                correct: "a",
            },
            {
                question: "Which TV show features a character named Walter White?",
                a: "Breaking Bad",
                b: "Dexter",
                c: "The Walking Dead",
                d: "Stranger Things",
                correct: "a",
            },
            {
                question: "In the movie 'Frozen', who has ice powers?",
                a: "Elsa",
                b: "Anna",
                c: "Olaf",
                d: "Kristoff",
                correct: "a",
            },
            {
                question: "Who is the main character in the TV show 'Game of Thrones'?",
                a: "Jon Snow",
                b: "Daenerys Targaryen",
                c: "Tyrion Lannister",
                d: "Arya Stark",
                correct: "a",
            },
            {
                question: "Which animated movie features a bear named Baloo?",
                a: "The Jungle Book",
                b: "Tarzan",
                c: "Brother Bear",
                d: "Kung Fu Panda",
                correct: "a",
            },
            {
                question: "Who is the main character in the movie 'The Avengers'?",
                a: "Thor",
                b: "Iron Man",
                c: "Captain America",
                d: "Hulk",
                correct: "b",
            },
            {
                question: "Which TV show is about a high school chemistry teacher turned methamphetamine manufacturer?",
                a: "Breaking Bad",
                b: "Prison Break",
                c: "Dexter",
                d: "Lost",
                correct: "a",
            },
            {
                question: "In 'Toy Story', what type of toy is Buzz Lightyear?",
                a: "Cowboy",
                b: "Space Ranger",
                c: "Superhero",
                d: "Race car",
                correct: "b",
            },
            {
                question: "Who is the protagonist in the TV show 'Friends'?",
                a: "Rachel Green",
                b: "Ross Geller",
                c: "Monica Geller",
                d: "Joey Tribbiani",
                correct: "b",
            },
            {
                question: "Which movie features a young girl named Dorothy who travels to the magical land of Oz?",
                a: "The Wizard of Oz",
                b: "Alice in Wonderland",
                c: "Snow White and the Seven Dwarfs",
                d: "Cinderella",
                correct: "a",
            },
            {
                question: "Who is the main character in the movie 'Jurassic Park'?",
                a: "John Hammond",
                b: "Dr. Alan Grant",
                c: "T-Rex",
                d: "Velociraptor",
                correct: "b",
            },
            {
                question: "Which TV show is set in a high school and features a character named Archie Andrews?",
                a: "Riverdale",
                b: "Gossip Girl",
                c: "Pretty Little Liars",
                d: "Stranger Things",
                correct: "a",
            },
            {
                question: "Who is the main character in the movie 'The Shawshank Redemption'?",
                a: "Andy Dufresne",
                b: "Red",
                c: "Warden Norton",
                d: "Brooks Hatlen",
                correct: "a",
            },
            {
                question: "Which animated movie features a young lion named Simba?",
                a: "Madagascar",
                b: "The Lion King",
                c: "Ice Age",
                d: "Zootopia",
                correct: "b",
            },
            {
                question: "Who is the main character in the TV show 'The Office'?",
                a: "Michael Scott",
                b: "Jim Halpert",
                c: "Pam Beesly",
                d: "Dwight Schrute",
                correct: "a",
            },
            {
                question: "Which movie is about a boy who finds out he is a wizard on his 11th birthday?",
                a: "Harry Potter and the Sorcerer's Stone",
                b: "Percy Jackson & the Olympians: The Lightning Thief",
                c: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
                d: "Eragon",
                correct: "a",
            },

            
                {
                    question: "Who is the protagonist in the movie 'Titanic'?",
                    a: "Jack Dawson",
                    b: "Rose DeWitt Bukater",
                    c: "Captain Edward Smith",
                    d: "Cal Hockley",
                    correct: "a",
                },
                {
                    question: "Which animated movie features a talking blue fish named Dory?",
                    a: "Finding Nemo",
                    b: "Toy Story",
                    c: "The Little Mermaid",
                    d: "Frozen",
                    correct: "a",
                },
                {
                    question: "In 'Friends', what is the profession of Ross Geller?",
                    a: "Paleontologist",
                    b: "Actor",
                    c: "Chef",
                    d: "Lawyer",
                    correct: "a",
                },
                {
                    question: "Who is the main character in the TV show 'Stranger Things'?",
                    a: "Eleven",
                    b: "Mike Wheeler",
                    c: "Dustin Henderson",
                    d: "Will Byers",
                    correct: "a",
                },
                {
                    question: "Which movie features a superhero who can shrink to the size of an ant?",
                    a: "Spider-Man: Homecoming",
                    b: "Ant-Man",
                    c: "Iron Man",
                    d: "Captain America: Civil War",
                    correct: "b",
                },
                {
                    question: "In 'The Simpsons', what is the name of the bartender?",
                    a: "Ned Flanders",
                    b: "Homer Simpson",
                    c: "Moe Szyslak",
                    d: "Chief Wiggum",
                    correct: "c",
                },
                {
                    question: "Who is the main character in the movie 'The Matrix'?",
                    a: "Neo",
                    b: "Trinity",
                    c: "Morpheus",
                    d: "Agent Smith",
                    correct: "a",
                },
                {
                    question: "Which animated movie features a young girl named Moana?",
                    a: "Frozen",
                    b: "Tangled",
                    c: "Moana",
                    d: "Brave",
                    correct: "c",
                },
                {
                    question: "Who is the main character in the TV show 'The Walking Dead'?",
                    a: "Rick Grimes",
                    b: "Daryl Dixon",
                    c: "Michonne",
                    d: "Carol Peletier",
                    correct: "a",
                },
                {
                    question: "Which movie is about a clown who terrorizes children in the town of Derry?",
                    a: "Insidious",
                    b: "The Conjuring",
                    c: "It",
                    d: "Annabelle",
                    correct: "c",
                },
                {
                    question: "In 'Game of Thrones', what is the family sigil of House Stark?",
                    a: "A lion",
                    b: "A dragon",
                    c: "A direwolf",
                    d: "A stag",
                    correct: "c",
                },
                {
                    question: "Which TV show is set in a hospital and follows the lives of surgical interns?",
                    a: "House",
                    b: "Grey's Anatomy",
                    c: "ER",
                    d: "Scrubs",
                    correct: "b",
                },
                {
                    question: "Who is the main character in the movie 'Forrest Gump'?",
                    a: "Forrest Gump",
                    b: "Jenny Curran",
                    c: "Lieutenant Dan",
                    d: "Bubba Blue",
                    correct: "a",
                },
                {
                    question: "Which animated movie features a young princess named Anna?",
                    a: "Frozen",
                    b: "Tangled",
                    c: "Moana",
                    d: "Brave",
                    correct: "a",
                },
                {
                    question: "In 'Breaking Bad', what is Walter White's alias when he enters the drug trade?",
                    a: "Heisenberg",
                    b: "Gus Fring",
                    c: "Jesse Pinkman",
                    d: "Saul Goodman",
                    correct: "a",
                },
                {
                    question: "Which movie is about a group of friends who go on a road trip to find a missing child?",
                    a: "The Goonies",
                    b: "Stand by Me",
                    c: "The Outsiders",
                    d: "The Lost Boys",
                    correct: "b",
                },
                {
                    question: "Who is the main character in the TV show 'The Office'?",
                    a: "Michael Scott",
                    b: "Jim Halpert",
                    c: "Pam Beesly",
                    d: "Dwight Schrute",
                    correct: "a",
                },
                {
                    question: "Which animated movie features a young boy named Miguel who dreams of becoming a musician?",
                    a: "Coco",
                    b: "Frozen",
                    c: "Tangled",
                    d: "Brave",
                    correct: "a",
                },
                {
                    question: "Who is the protagonist in the movie 'The Shawshank Redemption'?",
                    a: "Andy Dufresne",
                    b: "Red",
                    c: "Warden Norton",
                    d: "Brooks Hatlen",
                    correct: "a",
                },
                {
                    question: "Which TV show features a character named Sheldon Cooper?",
                    a: "Friends",
                    b: "The Big Bang Theory",
                    c: "How I Met Your Mother",
                    d: "Breaking Bad",
                    correct: "b",
                },
                
                    {
                        question: "Who is the main character in the movie 'The Hunger Games'?",
                        a: "Katniss Everdeen",
                        b: "Peeta Mellark",
                        c: "Gale Hawthorne",
                        d: "Primrose Everdeen",
                        correct: "a",
                    },
                    {
                        question: "Which animated movie features a young boy named Hiccup and his dragon, Toothless?",
                        a: "How to Train Your Dragon",
                        b: "Shrek",
                        c: "Kung Fu Panda",
                        d: "The Croods",
                        correct: "a",
                    },
                    {
                        question: "In 'Toy Story', who is Buzz Lightyear's arch-nemesis?",
                        a: "Woody",
                        b: "Rex",
                        c: "Zurg",
                        d: "Slinky Dog",
                        correct: "c",
                    },
                    {
                        question: "Which TV show features a character named Tony Stark, who is also known as Iron Man?",
                        a: "Arrow",
                        b: "The Flash",
                        c: "Legends of Tomorrow",
                        d: "Marvel's Agents of S.H.I.E.L.D.",
                        correct: "d",
                    },
                    {
                        question: "Who is the main character in the movie 'The Lord of the Rings: The Fellowship of the Ring'?",
                        a: "Frodo Baggins",
                        b: "Gandalf",
                        c: "Aragorn",
                        d: "Legolas",
                        correct: "a",
                    },
                    {
                        question: "Which animated movie features a young robot named WALL-E?",
                        a: "Up",
                        b: "Ratatouille",
                        c: "Finding Nemo",
                        d: "WALL-E",
                        correct: "d",
                    },
                    {
                        question: "In 'Frozen', who has the ability to control ice and snow?",
                        a: "Elsa",
                        b: "Anna",
                        c: "Olaf",
                        d: "Kristoff",
                        correct: "a",
                    },
                    {
                        question: "Which TV show features a character named Walter White, who starts producing methamphetamine?",
                        a: "Breaking Bad",
                        b: "Dexter",
                        c: "The Walking Dead",
                        d: "Stranger Things",
                        correct: "a",
                    },
                    {
                        question: "Who is the main character in the movie 'Avatar'?",
                        a: "Jake Sully",
                        b: "Neytiri",
                        c: "Dr. Grace Augustine",
                        d: "Colonel Miles Quaritch",
                        correct: "a",
                    },
                    {
                        question: "Which animated movie features a young girl named Rapunzel with long magical hair?",
                        a: "Frozen",
                        b: "Tangled",
                        c: "Moana",
                        d: "Brave",
                        correct: "b",
                    },
                    {
                        question: "Who is the protagonist in the TV show 'Grey's Anatomy'?",
                        a: "Meredith Grey",
                        b: "Alex Karev",
                        c: "Derek Shepherd",
                        d: "Cristina Yang",
                        correct: "a",
                    },
                    {
                        question: "In 'The Lion King', who is Simba's evil uncle?",
                        a: "Mufasa",
                        b: "Timon",
                        c: "Pumbaa",
                        d: "Scar",
                        correct: "d",
                    },
                    {
                        question: "Which movie features a group of toys that come to life when humans are not around?",
                        a: "Toy Story",
                        b: "The Incredibles",
                        c: "Monsters, Inc.",
                        d: "Finding Nemo",
                        correct: "a",
                    },
                    {
                        question: "Who is the main character in the TV show 'Stranger Things'?",
                        a: "Eleven",
                        b: "Mike Wheeler",
                        c: "Dustin Henderson",
                        d: "Will Byers",
                        correct: "a",
                    },
                    {
                        question: "Which movie is about a young girl who befriends a big friendly giant?",
                        a: "The BFG",
                        b: "The Jungle Book",
                        c: "Alice in Wonderland",
                        d: "Beauty and the Beast",
                        correct: "a",
                    },
                    {
                        question: "In 'Friends', what is the name of Ross and Monica's mother?",
                        a: "Judy",
                        b: "Janice",
                        c: "Emily",
                        d: "Carol",
                        correct: "a",
                    },
                    {
                        question: "Which animated movie features a rabbit police officer named Judy Hopps?",
                        a: "Zootopia",
                        b: "The Lion King",
                        c: "Finding Nemo",
                        d: "Moana",
                        correct: "a",
                    },
                    {
                        question: "Who is the main character in the movie 'The Dark Knight'?",
                        a: "Bruce Wayne",
                        b: "Alfred Pennyworth",
                        c: "James Gordon",
                        d: "The Joker",
                        correct: "a",
                    },
                    {
                        question: "Which TV show is about a group of friends living in New York City?",
                        a: "Friends",
                        b: "How I Met Your Mother",
                        c: "The Big Bang Theory",
                        d: "Seinfeld",
                        correct: "a",
                    },
                    {
                        question: "In 'Finding Nemo', what type of fish is Nemo's father, Marlin?",
                        a: "Clownfish",
                        b: "Angelfish",
                        c: "Swordfish",
                        d: "Starfish",
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
    const selectedQuestions = shuffleArray(movieQuestions).slice(0, 10);
    
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