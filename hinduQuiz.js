function hinduQuiz() {
    const hinduQuestions = 
        [
            {
                question: "Who is the god of beginnings and the remover of obstacles in Hindu mythology?",
                a: "Vishnu",
                b: "Brahma",
                c: "Shiva",
                d: "Ganesha",
                correct: "d",
            },
            {
                question: "Who is the goddess of wealth and prosperity?",
                a: "Saraswati",
                b: "Lakshmi",
                c: "Parvati",
                d: "Durga",
                correct: "b",
            },
            {
                question: "Who is the supreme god in Shaivism?",
                a: "Vishnu",
                b: "Brahma",
                c: "Shiva",
                d: "Ganesha",
                correct: "c",
            },
            {
                question: "Who is the wife of Lord Rama in Hindu mythology?",
                a: "Sita",
                b: "Radha",
                c: "Parvati",
                d: "Lakshmi",
                correct: "a",
            },
            {
                question: "Who is the god of death in Hindu mythology?",
                a: "Yama",
                b: "Varuna",
                c: "Indra",
                d: "Kubera",
                correct: "a",
            },
            {
                question: "Who is the monkey god known for his strength and loyalty to Lord Rama?",
                a: "Garuda",
                b: "Hanuman",
                c: "Indra",
                d: "Kartikeya",
                correct: "b",
            },
            {
                question: "Who is the goddess of knowledge, music, arts, wisdom, and learning in Hindu mythology?",
                a: "Saraswati",
                b: "Lakshmi",
                c: "Parvati",
                d: "Durga",
                correct: "a",
            },
            {
                question: "Who is the son of Shiva and Parvati, known as the elephant-headed god?",
                a: "Vishnu",
                b: "Brahma",
                c: "Ganesha",
                d: "Skanda",
                correct: "c",
            },
            {
                question: "Who is the goddess known for slaying the buffalo demon Mahishasura?",
                a: "Sita",
                b: "Radha",
                c: "Parvati",
                d: "Durga",
                correct: "d",
            },
            {
                question: "Who is the goddess of destruction and transformation in Hindu mythology?",
                a: "Saraswati",
                b: "Lakshmi",
                c: "Parvati",
                d: "Kali",
                correct: "d",
            },
            {
                question: "Who is the creator god in Hindu mythology?",
                a: "Vishnu",
                b: "Brahma",
                c: "Shiva",
                d: "Ganesha",
                correct: "b",
            },
            {
                question: "Who is the son of Shiva and Parvati, known as the god of war?",
                a: "Vishnu",
                b: "Brahma",
                c: "Skanda",
                d: "Ganesha",
                correct: "c",
            },
            {
                question: "Who is the king of gods in Hindu mythology?",
                a: "Vishnu",
                b: "Brahma",
                c: "Indra",
                d: "Kubera",
                correct: "c",
            },
            {
                question: "Who is the goddess known for her fierce form and victory over demons?",
                a: "Saraswati",
                b: "Lakshmi",
                c: "Parvati",
                d: "Durga",
                correct: "d",
            },
            {
                question: "Who is the god associated with fire, lightning, and thunder in Hindu mythology?",
                a: "Varuna",
                b: "Indra",
                c: "Agastya",
                d: "Vayu",
                correct: "b",
            },
            {
                question: "Who is the sage known for composing the epic Ramayana?",
                a: "Vyasa",
                b: "Valmiki",
                c: "Vashishta",
                d: "Parashara",
                correct: "b",
            },
            {
                question: "Who is the divine cow, symbolizing abundance and sustenance in Hindu mythology?",
                a: "Kamadhenu",
                b: "Nandi",
                c: "Kesi",
                d: "Surabhi",
                correct: "a",
            },
            {
                question: "Who is the demon king of Lanka in the epic Ramayana?",
                a: "Ravana",
                b: "Kumbhakarna",
                c: "Vibhishana",
                d: "Mandodari",
                correct: "a",
            },
            {
                question: "Who is the celestial architect and builder of gods' palaces in Hindu mythology?",
                a: "Vishwakarma",
                b: "Maya",
                c: "Tvashta",
                d: "Prajapati",
                correct: "a",
            },
            {
                question: "Who is the son of Lord Shiva and Parvati, known as the god of love and passion?",
                a: "Kartikeya",
                b: "Ganesha",
                c: "Skanda",
                d: "Murugan",
                correct: "a",
            },
            {
                question: "Who is the goddess known for her divine energy and consort of Shiva?",
                a: "Sati",
                b: "Sita",
                c: "Parvati",
                d: "Radha",
                correct: "c",
            },
            {
                question: "Who is the sage known for his knowledge and teachings in the Mahabharata?",
                a: "Drona",
                b: "Bhishma",
                c: "Vyasa",
                d: "Vashishta",
                correct: "c",
            },
            {
                question: "Who is the divine serpent god associated with Lord Vishnu?",
                a: "Vasuki",
                b: "Ananta",
                c: "Shesha",
                d: "Karkotaka",
                correct: "c",
            },
            {
                question: "Who is the goddess of learning, arts, and wisdom, often depicted with a musical instrument?",
                a: "Saraswati",
                b: "Lakshmi",
                c: "Parvati",
                d: "Durga",
                correct: "a",
            },
            {
                question: "Who is the daughter of the mountain king Himavan and consort of Lord Shiva?",
                a: "Sita",
                b: "Radha",
                c: "Parvati",
                d: "Lakshmi",
                correct: "c",
            },
            {
                question: "Who is the mythical bird-like creature, the vehicle of Lord Vishnu?",
                a: "Garuda",
                b: "Hamsa",
                c: "Jatayu",
                d: "Krauncha",
                correct: "a",
            },
            {
                question: "Who is the sage known for his role in the epic Mahabharata as the teacher of archery?",
                a: "Drona",
                b: "Vyasa",
                c: "Vashishta",
                d: "Parashurama",
                correct: "a",
            },
            {
                question: "Who is the god of preservation in Hindu mythology?",
                a: "Vishnu",
                b: "Brahma",
                c: "Shiva",
                d: "Ganesha",
                correct: "a",
            },
            {
                question: "Who is the monkey king and companion of Lord Rama, known for his loyalty and bravery?",
                a: "Jambavan",
                b: "Vali",
                c: "Sugriva",
                d: "Angada",
                correct: "c",
            },
            {
                question: "Who is the goddess of divine strength and power, daughter of Himavan and consort of Lord Shiva?",
                a: "Sita",
                b: "Radha",
                c: "Parvati",
                d: "Lakshmi",
                correct: "c",
            },
            {
                question: "Who is the demon king slain by Goddess Durga, who had a thousand arms?",
                a: "Mahishasura",
                b: "Ravana",
                c: "Hiranyakashipu",
                d: "Bhasmasura",
                correct: "a",
            },
            {
                question: "Who is the divine cow and mother of all cows, symbolizing fertility and wealth?",
                a: "Kamadhenu",
                b: "Nandi",
                c: "Kesi",
                d: "Surabhi",
                correct: "a",
            },
            {
                question: "Who is the son of Lord Shiva and Parvati, known as the god of war and victory?",
                a: "Kartikeya",
                b: "Skanda",
                c: "Murugan",
                d: "All of the above",
                correct: "a",
            },
            
                {
                    question: "Who is the goddess of the Earth and consort of Lord Vishnu?",
                    a: "Sita",
                    b: "Radha",
                    c: "Parvati",
                    d: "Bhudevi",
                    correct: "d",
                },
                {
                    question: "Who is the demon king who abducted Sita in the epic Ramayana?",
                    a: "Ravana",
                    b: "Kumbhakarna",
                    c: "Vibhishana",
                    d: "Mandodari",
                    correct: "a",
                },
                {
                    question: "Who is the sage known for his penance and devotion to Lord Shiva?",
                    a: "Agastya",
                    b: "Vishwamitra",
                    c: "Narada",
                    d: "Durvasa",
                    correct: "a",
                },
                {
                    question: "Who is the divine bird associated with Lord Rama and known for his loyalty?",
                    a: "Garuda",
                    b: "Jatayu",
                    c: "Suparna",
                    d: "Krauncha",
                    correct: "b",
                },
                {
                    question: "Who is the demoness who tried to deceive Lord Rama and Lakshmana during their exile?",
                    a: "Surpanakha",
                    b: "Tataka",
                    c: "Shurpanakha",
                    d: "Mandodari",
                    correct: "a",
                },
                {
                    question: "Who is the celestial sage known for his wisdom and guidance to Pandavas in the Mahabharata?",
                    a: "Narada",
                    b: "Vyasa",
                    c: "Markandeya",
                    d: "Vashishta",
                    correct: "b",
                },
                {
                    question: "Who is the divine serpent god associated with Lord Shiva?",
                    a: "Vasuki",
                    b: "Ananta",
                    c: "Shesha",
                    d: "Karkotaka",
                    correct: "c",
                },
                {
                    question: "Who is the demon king who was killed by Lord Vishnu in his Narasimha avatar?",
                    a: "Hiranyaksha",
                    b: "Hiranyakashipu",
                    c: "Vritra",
                    d: "Bhasmasura",
                    correct: "b",
                },
                {
                    question: "Who is the son of Lord Shiva and Parvati, known as the god of wisdom and writing?",
                    a: "Kartikeya",
                    b: "Ganesha",
                    c: "Skanda",
                    d: "Murugan",
                    correct: "b",
                },
                {
                    question: "Who is the celestial architect and engineer of gods' palaces in Hindu mythology?",
                    a: "Vishwakarma",
                    b: "Maya",
                    c: "Tvashta",
                    d: "Prajapati",
                    correct: "a",
                },

                    {
                        question: "Who is the sage known for his role in compiling the Vedas and Puranas?",
                        a: "Vyasa",
                        b: "Valmiki",
                        c: "Vashishta",
                        d: "Parashara",
                        correct: "a",
                    },
                    {
                        question: "Who is the demon king who was blessed with a boon of invincibility by Lord Brahma?",
                        a: "Ravana",
                        b: "Hiranyakashipu",
                        c: "Bali",
                        d: "Vibhishana",
                        correct: "b",
                    },
                    {
                        question: "Who is the divine musician and the son of Lord Shiva and Parvati?",
                        a: "Nandi",
                        b: "Tumburu",
                        c: "Narada",
                        d: "Kartikeya",
                        correct: "d",
                    },
                    {
                        question: "Who is the celestial charioteer of Lord Surya, the Sun god?",
                        a: "Kartikeya",
                        b: "Yama",
                        c: "Hanuman",
                        d: "Arjuna",
                        correct: "a",
                    },
                    {
                        question: "Who is the demoness known for her attempts to disrupt Lord Shiva's meditation?",
                        a: "Simhika",
                        b: "Paulomi",
                        c: "Kaikesi",
                        d: "Taraka",
                        correct: "d",
                    },
                    {
                        question: "Who is the divine physician of gods and the son of Lord Brahma?",
                        a: "Dhanvantari",
                        b: "Ashwini Kumaras",
                        c: "Bhaskara",
                        d: "Chyavana",
                        correct: "a",
                    },
                    {
                        question: "Who is the god of fire and the acceptor of sacrifices in Hindu mythology?",
                        a: "Varuna",
                        b: "Agni",
                        c: "Vayu",
                        d: "Prajapati",
                        correct: "b",
                    },
                    {
                        question: "Who is the demon king who ruled Lanka and was a devotee of Lord Shiva?",
                        a: "Ravana",
                        b: "Kumbhakarna",
                        c: "Vibhishana",
                        d: "Mandodari",
                        correct: "a",
                    },
                    {
                        question: "Who is the daughter of Daksha and the consort of Lord Shiva?",
                        a: "Parvati",
                        b: "Sati",
                        c: "Ambika",
                        d: "Ganga",
                        correct: "b",
                    },
                    {
                        question: "Who is the divine fish avatar of Lord Vishnu?",
                        a: "Matsya",
                        b: "Kurma",
                        c: "Varaha",
                        d: "Narasimha",
                        correct: "a",
                    },
                    {
                        question: "Who is the celestial dancer and consort of Lord Shiva?",
                        a: "Lakshmi",
                        b: "Saraswati",
                        c: "Uma",
                        d: "Parvati",
                        correct: "c",
                    },
                    {
                        question: "Who is the divine cow, the mother of all cows and symbol of sustenance?",
                        a: "Nandi",
                        b: "Kamadhenu",
                        c: "Kesi",
                        d: "Surabhi",
                        correct: "b",
                    },
                    {
                        question: "Who is the demoness known for her role in the churning of the ocean?",
                        a: "Paulomi",
                        b: "Simhika",
                        c: "Kaikesi",
                        d: "Taraka",
                        correct: "c",
                    },
                    {
                        question: "Who is the divine bird associated with Lord Vishnu and known for his loyalty?",
                        a: "Jatayu",
                        b: "Garuda",
                        c: "Suparna",
                        d: "Krauncha",
                        correct: "b",
                    },
                    {
                        question: "Who is the divine serpent and the bed of Lord Vishnu?",
                        a: "Karkotaka",
                        b: "Shesha",
                        c: "Ananta",
                        d: "Vasuki",
                        correct: "b",
                    },
                    {
                        question: "Who is the demon king of Lanka, brother of Ravana, and ally of Lord Rama?",
                        a: "Kumbhakarna",
                        b: "Vibhishana",
                        c: "Indrajit",
                        d: "Mandodari",
                        correct: "b",
                    },
                    {
                        question: "Who is the divine architect of gods, known for his skills in craftsmanship?",
                        a: "Maya",
                        b: "Vishwakarma",
                        c: "Tvashta",
                        d: "Prajapati",
                        correct: "b",
                    },
                    {
                        question: "Who is the celestial sage known for his wandering and spreading of knowledge?",
                        a: "Narada",
                        b: "Vyasa",
                        c: "Markandeya",
                        d: "Vashishta",
                        correct: "a",
                    },
                    {
                        question: "Who is the son of Lord Shiva and Parvati, known as the god of war and commander of armies?",
                        a: "Kartikeya",
                        b: "Ganesha",
                        c: "Skanda",
                        d: "Murugan",
                        correct: "c",
                    },
                    {
                        question: "Who is the celestial sage known for his deep penance and knowledge of Vedas?",
                        a: "Agastya",
                        b: "Vishwamitra",
                        c: "Narada",
                        d: "Durvasa",
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
    const selectedQuestions = shuffleArray(hinduQuestions).slice(0, 10);
    
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