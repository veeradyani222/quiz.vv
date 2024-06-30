//NOW THE TECH QUIZ

function techQuiz() {

    const techQuestions = [
       
            {
                question: "What does HTML stand for?",
                a: "Hyper Text Markup Language",
                b: "Home Tool Markup Language",
                c: "Hyperlinks and Text Markup Language",
                d: "Hyperlinking Text Marketing Language",
                correct: "a",
            },
            {
                question: "Which company created the iPhone?",
                a: "Google",
                b: "Apple",
                c: "Microsoft",
                d: "Samsung",
                correct: "b",
            },
            {
                question: "What does CPU stand for?",
                a: "Central Processing Unit",
                b: "Computer Personal Unit",
                c: "Central Processor Utility",
                d: "Computer Processor Unit",
                correct: "a",
            },
            {
                question: "What is the name of Microsoft's web browser?",
                a: "Chrome",
                b: "Firefox",
                c: "Safari",
                d: "Edge",
                correct: "d",
            },
            {
                question: "What is the main language used to create websites?",
                a: "Python",
                b: "Java",
                c: "HTML",
                d: "C++",
                correct: "c",
            },
            {
                question: "Which social media platform is known for its 140-character messages?",
                a: "Facebook",
                b: "Twitter",
                c: "Instagram",
                d: "LinkedIn",
                correct: "b",
            },
            {
                question: "What does RAM stand for?",
                a: "Random Access Memory",
                b: "Readily Available Memory",
                c: "Read-Only Memory",
                d: "Remote Access Memory",
                correct: "a",
            },
            {
                question: "Which company is known for the Android operating system?",
                a: "Microsoft",
                b: "Apple",
                c: "Google",
                d: "Amazon",
                correct: "c",
            },
            {
                question: "What is the term for the main page of a website?",
                a: "Index",
                b: "Directory",
                c: "Homepage",
                d: "Landing Page",
                correct: "c",
            },
            {
                question: "Which of these is a popular programming language?",
                a: "React",
                b: "Python",
                c: "HTML",
                d: "SQL",
                correct: "b",
            },
            {
                question: "What does URL stand for?",
                a: "Uniform Resource Locator",
                b: "Universal Resource Locator",
                c: "Unified Resource Locator",
                d: "Universal Retrieval Link",
                correct: "a",
            },
            {
                question: "Which device is used to connect to the internet?",
                a: "Modem",
                b: "Router",
                c: "Switch",
                d: "Hub",
                correct: "b",
            },
            {
                question: "What is the popular search engine created by Google?",
                a: "Yahoo",
                b: "Bing",
                c: "Google Search",
                d: "Ask",
                correct: "c",
            },
            {
                question: "What does 'www' stand for in a website address?",
                a: "World Wide Web",
                b: "Web World Wide",
                c: "Web World Web",
                d: "World Wide Warp",
                correct: "a",
            },
            {
                question: "What is the term for a software error?",
                a: "Bug",
                b: "Virus",
                c: "Glitch",
                d: "Spam",
                correct: "a",
            },
            {
                question: "What programming language is known for its use in machine learning and data analysis?",
                a: "JavaScript",
                b: "Python",
                c: "C++",
                d: "Ruby",
                correct: "b",
            },
            {
                question: "Which technology is used to record cryptocurrency transactions?",
                a: "Blockchain",
                b: "Cloud Computing",
                c: "Virtual Reality",
                d: "Artificial Intelligence",
                correct: "a",
            },
            {
                question: "What does VPN stand for?",
                a: "Virtual Private Network",
                b: "Very Personal Network",
                c: "Virtual Public Network",
                d: "Visual Private Network",
                correct: "a",
            },
            {
                question: "Which company's CEO is known for his tweets on Twitter?",
                a: "Elon Musk",
                b: "Jeff Bezos",
                c: "Tim Cook",
                d: "Mark Zuckerberg",
                correct: "a",
            },
            {
                question: "What is the term for a program that replicates itself and spreads to other computers?",
                a: "Bug",
                b: "Virus",
                c: "Glitch",
                d: "Spam",
                correct: "b",
            },
            {
                question: "What does ISP stand for?",
                a: "Internet Service Provider",
                b: "International Service Provider",
                c: "Internal Service Provider",
                d: "Internet Security Protocol",
                correct: "a",
            },
            {
                question: "Which company is known for its gaming console PlayStation?",
                a: "Microsoft",
                b: "Sony",
                c: "Nintendo",
                d: "Sega",
                correct: "b",
            },
            {
                question: "What is the term for the process of finding errors and fixing them within a program?",
                a: "Debugging",
                b: "Compiling",
                c: "Testing",
                d: "Programming",
                correct: "a",
            },
            {
                question: "What is the popular messaging app owned by Facebook?",
                a: "WhatsApp",
                b: "Telegram",
                c: "Signal",
                d: "Viber",
                correct: "a",
            },
            {
                question: "Which programming language is known for its use in developing mobile apps?",
                a: "Java",
                b: "C++",
                c: "Swift",
                d: "PHP",
                correct: "c",
            },
            {
                question: "What is the term for a collection of servers that are accessed through the internet?",
                a: "Data Warehouse",
                b: "Cloud Computing",
                c: "Big Data",
                d: "Mainframe",
                correct: "b",
            },
            {
                question: "Which company is known for its Windows operating system?",
                a: "Apple",
                b: "Microsoft",
                c: "Google",
                d: "IBM",
                correct: "b",
            },
            {
                question: "What is the term for software that blocks unauthorized access to a network?",
                a: "Firewall",
                b: "Anti-virus",
                c: "Router",
                d: "Proxy",
                correct: "a",
            },
            {
                question: "Which company developed the Java programming language?",
                a: "Microsoft",
                b: "Apple",
                c: "Oracle",
                d: "IBM",
                correct: "c",
            },
            {
                question: "What is the term for the physical components of a computer?",
                a: "Software",
                b: "Hardware",
                c: "Firmware",
                d: "Programs",
                correct: "b",
            },
            {
                question: "Which technology is used to make internet calls?",
                a: "VOIP",
                b: "HTTP",
                c: "FTP",
                d: "SMTP",
                correct: "a",
            },
            {
                question: "What is the term for a network designed for use within a limited area?",
                a: "LAN",
                b: "WAN",
                c: "MAN",
                d: "VPN",
                correct: "a",
            },
            {
                question: "Which company is known for its Acrobat PDF software?",
                a: "Microsoft",
                b: "Adobe",
                c: "Google",
                d: "Apple",
                correct: "b",
            },
            {
                question: "What technology is used to identify users based on physical or behavioral traits?",
                a: "AI",
                b: "IoT",
                c: "Biometrics",
                d: "RFID",
                correct: "c",
            },
            {
                question: "What does DNS stand for in terms of computer networks?",
                a: "Domain Name System",
                b: "Dynamic Network Service",
                c: "Data Network System",
                d: "Digital Name Service",
                correct: "a",
            },
            {
                question: "Which programming language is commonly used for web development?",
                a: "Swift",
                b: "Ruby",
                c: "PHP",
                d: "Objective-C",
                correct: "c",
            },
            {
                question: "What is the term for software that enables users to interact with a computer system?",
                a: "User Interface",
                b: "Operating System",
                c: "Application Software",
                d: "System Software",
                correct: "a",
            },
            {
                question: "Which company is known for its Photoshop software?",
                a: "Microsoft",
                b: "Apple",
                c: "Adobe",
                d: "Autodesk",
                correct: "c",
            },
            {
                question: "What does AI stand for in the context of computing?",
                a: "Artificial Intelligence",
                b: "Automated Information",
                c: "Advanced Interface",
                d: "Automated Interaction",
                correct: "a",
            },
            {
                question: "Which company is known for its virtual assistant Alexa?",
                a: "Apple",
                b: "Google",
                c: "Amazon",
                d: "Microsoft",
                correct: "c",
            },
            {
                question: "What technology is used to store and manage data over the internet?",
                a: "Cloud Computing",
                b: "Artificial Intelligence",
                c: "Blockchain",
                d: "Quantum Computing",
                correct: "a",
            },
            {
                question: "What does IoT stand for?",
                a: "Internet of Things",
                b: "Internet of Technology",
                c: "Intranet of Things",
                d: "Intranet of Technology",
                correct: "a",
            },
            {
                question: "Which social media platform is known for its professional networking?",
                a: "Facebook",
                b: "Twitter",
                c: "Instagram",
                d: "LinkedIn",
                correct: "d",
            },
            {
                question: "What is the term for the process of encoding information in a way that only authorized parties can access it?",
                a: "Encryption",
                b: "Decryption",
                c: "Encoding",
                d: "Hacking",
                correct: "a",
            },
            {
                question: "Which technology is used to create virtual 3D environments?",
                a: "VR",
                b: "AR",
                c: "AI",
                d: "IoT",
                correct: "a",
            },
            {
                question: "What is the term for a program that runs automatically and replicates itself?",
                a: "Virus",
                b: "Worm",
                c: "Spyware",
                d: "Malware",
                correct: "b",
            },
            {
                question: "Which company is known for its cloud computing platform AWS?",
                a: "Microsoft",
                b: "Google",
                c: "Apple",
                d: "Amazon",
                correct: "d",
            },
            {
                question: "What does GUI stand for?",
                a: "Graphical User Interface",
                b: "Global User Interface",
                c: "General User Interface",
                d: "Graphical Unit Interface",
                correct: "a",
            },
            {
                question: "Which company is known for its Office software suite?",
                a: "Google",
                b: "Apple",
                c: "Microsoft",
                d: "Adobe",
                correct: "c",
            },
            {
                question: "What is the term for the process of copying files from a remote server to a local device?",
                a: "Download",
                b: "Upload",
                c: "Transfer",
                d: "Sync",
                correct: "a",
            },
            {
                question: "Which company is known for its gaming platform Steam?",
                a: "Sony",
                b: "Nintendo",
                c: "Microsoft",
                d: "Valve",
                correct: "d",
            },
            {
                question: "What technology is used to connect devices wirelessly over short distances?",
                a: "Bluetooth",
                b: "Wi-Fi",
                c: "LTE",
                d: "Ethernet",
                correct: "a",
            },
            {
                question: "What is the term for a malicious program that locks and demands payment to unlock a device?",
                a: "Virus",
                b: "Spyware",
                c: "Ransomware",
                d: "Trojan Horse",
                correct: "c",
            },
            {
                question: "Which company is known for its video conferencing software Zoom?",
                a: "Google",
                b: "Microsoft",
                c: "Apple",
                d: "Zoom Video Communications",
                correct: "d",
            },
            {
                question: "What is the term for a website's ability to adapt to different screen sizes?",
                a: "Responsive Design",
                b: "Adaptive Design",
                c: "Flexible Design",
                d: "Scalable Design",
                correct: "a",
            },
            {
                question: "Which technology is used to store data on a distributed network of computers?",
                a: "Cloud Computing",
                b: "Blockchain",
                c: "AI",
                d: "IoT",
                correct: "b",
            },
            {
                question: "What is the term for the unique address assigned to each device connected to the internet?",
                a: "IP Address",
                b: "MAC Address",
                c: "URL",
                d: "DNS",
                correct: "a",
            },
            {
                question: "Which company is known for its Excel spreadsheet software?",
                a: "Google",
                b: "Apple",
                c: "Microsoft",
                d: "Adobe",
                correct: "c",
            },
            {
                question: "What technology is used to process large amounts of data to uncover patterns and insights?",
                a: "Machine Learning",
                b: "Virtual Reality",
                c: "Blockchain",
                d: "Quantum Computing",
                correct: "a",
            },
            {
                question: "What is the term for a network that covers a large geographic area?",
                a: "LAN",
                b: "WAN",
                c: "MAN",
                d: "VPN",
                correct: "b",
            },
            {
                question: "Which company is known for its Chrome web browser?",
                a: "Google",
                b: "Microsoft",
                c: "Apple",
                d: "Mozilla",
                correct: "a",
            },
            {
                question: "What is the term for a program that pretends to be useful but actually causes harm?",
                a: "Virus",
                b: "Worm",
                c: "Trojan Horse",
                d: "Spyware",
                correct: "c",
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
    const selectedQuestions = shuffleArray(techQuestions).slice(0, 10);
    
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