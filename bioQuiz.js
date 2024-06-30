//FOR THE BIO QUIZ


function bioQuiz() {
    const bioQuestions = [
      
            {
                question: "Which gas do plants release during photosynthesis?",
                a: "Oxygen",
                b: "Carbon dioxide",
                c: "Nitrogen",
                d: "Hydrogen",
                correct: "a",
            },
            {
                question: "What is the function of the nervous system in the human body?",
                a: "Regulating body temperature",
                b: "Transporting oxygen",
                c: "Sending signals",
                d: "Digesting food",
                correct: "c",
            },
            {
                question: "Where does the digestion of fats primarily occur in the human digestive system?",
                a: "Mouth",
                b: "Stomach",
                c: "Small intestine",
                d: "Large intestine",
                correct: "c",
            },
            {
                question: "What is the name of the fluid that lubricates joints in the human body?",
                a: "Serum",
                b: "Synovial fluid",
                c: "Lymph",
                d: "Plasma",
                correct: "b",
            },
            {
                question: "Which type of blood vessel carries blood away from the heart?",
                a: "Artery",
                b: "Vein",
                c: "Capillary",
                d: "Valve",
                correct: "a",
            },
            {
                question: "What is the function of the mitochondria in a cell?",
                a: "Synthesizing proteins",
                b: "Producing energy",
                c: "Storing genetic information",
                d: "Removing waste",
                correct: "b",
            },
            {
                question: "Which part of the human brain controls balance and coordination?",
                a: "Cerebellum",
                b: "Cerebrum",
                c: "Brainstem",
                d: "Pituitary gland",
                correct: "a",
            },
            {
                question: "What is the function of hemoglobin in red blood cells?",
                a: "Transporting oxygen",
                b: "Fighting infections",
                c: "Breaking down food",
                d: "Producing energy",
                correct: "a",
            },
            {
                question: "Which organ in the human body regulates blood sugar levels?",
                a: "Liver",
                b: "Heart",
                c: "Kidney",
                d: "Spleen",
                correct: "a",
            },
            {
                question: "What is the purpose of the lymphatic system in the human body?",
                a: "Producing hormones",
                b: "Transporting oxygen",
                c: "Fighting infections",
                d: "Digesting food",
                correct: "c",
            },
            {
                question: "Which component of blood is responsible for clotting?",
                a: "White blood cells",
                b: "Plasma",
                c: "Platelets",
                d: "Red blood cells",
                correct: "c",
            },
            {
                question: "What is the primary function of the kidneys in the human body?",
                a: "Regulating body temperature",
                b: "Filtering waste from blood",
                c: "Producing insulin",
                d: "Digesting food",
                correct: "b",
            },
            {
                question: "Which part of the human eye controls the amount of light entering the pupil?",
                a: "Retina",
                b: "Cornea",
                c: "Lens",
                d: "Iris",
                correct: "d",
            },
            {
                question: "What is the main function of the pancreas in the digestive system?",
                a: "Producing bile",
                b: "Absorbing nutrients",
                c: "Producing enzymes",
                d: "Regulating blood sugar",
                correct: "c",
            },
            {
                question: "Which type of muscle is found in the walls of blood vessels?",
                a: "Skeletal muscle",
                b: "Smooth muscle",
                c: "Cardiac muscle",
                d: "Voluntary muscle",
                correct: "b",
            },
            {
                question: "What is the function of the alveoli in the respiratory system?",
                a: "Producing mucus",
                b: "Transporting oxygen",
                c: "Exchanging gases",
                d: "Filtering air",
                correct: "c",
            },
            {
                question: "Which part of the human ear converts sound vibrations into nerve impulses?",
                a: "Cochlea",
                b: "Auditory nerve",
                c: "Eardrum",
                d: "Ear canal",
                correct: "a",
            },
            {
                question: "What is the purpose of the gallbladder in the digestive system?",
                a: "Producing enzymes",
                b: "Storing bile",
                c: "Absorbing nutrients",
                d: "Filtering blood",
                correct: "b",
            },
            {
                question: "Which type of tissue connects bones to muscles?",
                a: "Adipose tissue",
                b: "Epithelial tissue",
                c: "Connective tissue",
                d: "Nervous tissue",
                correct: "c",
            },
            {
                question: "What is the function of the cerebrum in the human brain?",
                a: "Regulating heartbeat",
                b: "Processing sensory information",
                c: "Controlling balance",
                d: "Producing hormones",
                correct: "b",
            },
            {
                question: "Which substance is primarily responsible for the digestion of proteins in the stomach?",
                a: "Pepsin",
                b: "Amylase",
                c: "Lipase",
                d: "Bile",
                correct: "a",
            },
            {
                question: "What is the function of the adrenal glands in the human body?",
                a: "Regulating blood pressure",
                b: "Producing insulin",
                c: "Producing bile",
                d: "Storing vitamins",
                correct: "a",
            },
            {
                question: "Which part of the human respiratory system contains the vocal cords?",
                a: "Trachea",
                b: "Bronchi",
                c: "Larynx",
                d: "Alveoli",
                correct: "c",
            },
            {
                question: "What is the function of the thyroid gland in the endocrine system?",
                a: "Regulating metabolism",
                b: "Producing red blood cells",
                c: "Filtering blood",
                d: "Producing bile",
                correct: "a",
            },
            {
                question: "Which type of cell is responsible for transmitting nerve impulses?",
                a: "Neuron",
                b: "White blood cell",
                c: "Red blood cell",
                d: "Platelet",
                correct: "a",
            },
            {
                question: "What is the function of the epiglottis in the human body?",
                a: "Filtering air",
                b: "Producing hormones",
                c: "Protecting the lungs",
                d: "Preventing food from entering the trachea",
                correct: "d",
            },
            {
                question: "Which part of the human digestive system absorbs water from undigested food?",
                a: "Small intestine",
                b: "Large intestine",
                c: "Stomach",
                d: "Esophagus",
                correct: "b",
            },
            {
                question: "What is the purpose of the pituitary gland in the endocrine system?",
                a: "Producing insulin",
                b: "Regulating growth",
                c: "Filtering blood",
                d: "Storing bile",
                correct: "b",
            },
            {
                question: "Which organ in the human body produces bile?",
                a: "Gallbladder",
                b: "Liver",
                c: "Pancreas",
                d: "Spleen",
                correct: "b",
            },
            {
                question: "What is the function of the thymus gland in the immune system?",
                a: "Producing antibodies",
                b: "Regulating body temperature",
                c: "Storing vitamins",
                d: "Producing bile",
                correct: "a",
            },
            {
                question: "Which part of the human eye contains photoreceptor cells?",
                a: "Cornea",
                b: "Pupil",
                c: "Retina",
                d: "Lens",
                correct: "c",
            },
            {
                question: "What is the purpose of the bronchioles in the human respiratory system?",
                a: "Transporting oxygen",
                b: "Filtering air",
                c: "Exchanging gases",
                d: "Producing mucus",
                correct: "c",
            },
            {
                question: "Which substance is responsible for carrying oxygen in red blood cells?",
                a: "Hemoglobin",
                b: "Platelets",
                c: "Plasma",
                d: "White blood cells",
                correct: "a",
            },
            {
                question: "What is the function of the pineal gland in the human body?",
                a: "Producing insulin",
                b: "Regulating sleep patterns",
                c: "Producing bile",
                d: "Storing vitamins",
                correct: "b",
            },
            {
                question: "Which part of the human ear amplifies sound vibrations?",
                a: "Cochlea",
                b: "Eardrum",
                c: "Middle ear",
                d: "Ear canal",
                correct: "c",
            },
            {
                question: "What is the function of the trachea in the human respiratory system?",
                a: "Producing mucus",
                b: "Filtering air",
                c: "Transporting oxygen",
                d: "Connecting the larynx to the bronchi",
                correct: "d",
            },
            {
                question: "Which part of the human brain controls involuntary functions like breathing and heart rate?",
                a: "Cerebrum",
                b: "Cerebellum",
                c: "Brainstem",
                d: "Pituitary gland",
                correct: "c",
            },
            {
                question: "What is the function of the corpus callosum in the human brain?",
                a: "Regulating body temperature",
                b: "Processing visual information",
                c: "Connecting the left and right hemispheres",
                d: "Producing hormones",
                correct: "c",
            },
            {
                question: "Which part of the human eye focuses light onto the retina?",
                a: "Cornea",
                b: "Pupil",
                c: "Lens",
                d: "Iris",
                correct: "c",
            },
            {
                question: "What is the function of the alveoli in the human respiratory system?",
                a: "Producing mucus",
                b: "Transporting oxygen",
                c: "Exchanging gases",
                d: "Filtering air",
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
    const selectedQuestions = shuffleArray(bioQuestions).slice(0, 10);
    
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