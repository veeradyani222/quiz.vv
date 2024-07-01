// NOWW HEALTH AND FITNESS QUIZ
function healthQuiz() {
    const healthQuestions = [
        
            {
                question: "What is the normal body temperature in degrees Fahrenheit?",
                a: "98.6",
                b: "100.4",
                c: "97.0",
                d: "99.1",
                correct: "a",
            },
            {
                question: "How many hours of sleep is recommended for adults each night?",
                a: "4-5 hours",
                b: "6-7 hours",
                c: "7-9 hours",
                d: "10-11 hours",
                correct: "c",
            },
            {
                question: "Which vitamin is known as the 'sunshine vitamin'?",
                a: "Vitamin A",
                b: "Vitamin C",
                c: "Vitamin D",
                d: "Vitamin E",
                correct: "c",
            },
            {
                question: "What is the main function of the heart?",
                a: "To filter blood",
                b: "To pump blood",
                c: "To digest food",
                d: "To produce hormones",
                correct: "b",
            },
            {
                question: "Which food group is the main source of energy for the body?",
                a: "Proteins",
                b: "Fats",
                c: "Carbohydrates",
                d: "Vitamins",
                correct: "c",
            },
            {
                question: "What does BMI stand for?",
                a: "Body Mass Index",
                b: "Body Muscle Index",
                c: "Body Measurement Indicator",
                d: "Body Metabolism Indicator",
                correct: "a",
            },
            {
                question: "Which mineral is important for healthy bones?",
                a: "Iron",
                b: "Calcium",
                c: "Potassium",
                d: "Zinc",
                correct: "b",
            },
            {
                question: "What should you do to stay hydrated?",
                a: "Drink plenty of water",
                b: "Eat sugary foods",
                c: "Exercise less",
                d: "Sleep more",
                correct: "a",
            },
            {
                question: "Which of these activities is good for cardiovascular health?",
                a: "Running",
                b: "Watching TV",
                c: "Sleeping",
                d: "Eating",
                correct: "a",
            },
            {
                question: "What is a common symptom of the flu?",
                a: "High fever",
                b: "Toothache",
                c: "Broken bone",
                d: "Rash",
                correct: "a",
            },
            {
                question: "Which organ is primarily responsible for detoxifying the blood?",
                a: "Heart",
                b: "Liver",
                c: "Kidney",
                d: "Lungs",
                correct: "b",
            },
            {
                question: "Which vitamin is essential for blood clotting?",
                a: "Vitamin A",
                b: "Vitamin K",
                c: "Vitamin C",
                d: "Vitamin D",
                correct: "b",
            },
            {
                question: "What is the main component of bones and teeth?",
                a: "Magnesium",
                b: "Calcium",
                c: "Sodium",
                d: "Potassium",
                correct: "b",
            },
            {
                question: "What is the most important meal of the day?",
                a: "Breakfast",
                b: "Lunch",
                c: "Dinner",
                d: "Snacks",
                correct: "a",
            },
            {
                question: "What type of fat is considered healthy?",
                a: "Saturated fat",
                b: "Trans fat",
                c: "Unsaturated fat",
                d: "Hydrogenated fat",
                correct: "c",
            },
            {
                question: "What is a common sign of dehydration?",
                a: "Headache",
                b: "Nausea",
                c: "Dizziness",
                d: "All of the above",
                correct: "d",
            },
            {
                question: "Which fruit is known for its high vitamin C content?",
                a: "Apple",
                b: "Banana",
                c: "Orange",
                d: "Grape",
                correct: "c",
            },
            {
                question: "Which exercise is best for building muscle?",
                a: "Cardio",
                b: "Yoga",
                c: "Weightlifting",
                d: "Swimming",
                correct: "c",
            },
            {
                question: "What is the primary function of red blood cells?",
                a: "Fight infections",
                b: "Carry oxygen",
                c: "Clot blood",
                d: "Digest food",
                correct: "b",
            },
            {
                question: "Which nutrient helps with muscle repair?",
                a: "Carbohydrates",
                b: "Fats",
                c: "Proteins",
                d: "Vitamins",
                correct: "c",
            },
            {
                question: "How many servings of fruits and vegetables should you eat each day?",
                a: "1-2 servings",
                b: "3-4 servings",
                c: "5-9 servings",
                d: "10-12 servings",
                correct: "c",
            },
            {
                question: "What type of exercise improves flexibility?",
                a: "Running",
                b: "Weightlifting",
                c: "Yoga",
                d: "Cycling",
                correct: "c",
            },
            {
                question: "Which vitamin is important for healthy skin?",
                a: "Vitamin A",
                b: "Vitamin C",
                c: "Vitamin E",
                d: "All of the above",
                correct: "d",
            },
            {
                question: "Which mineral is essential for oxygen transport in the blood?",
                a: "Calcium",
                b: "Iron",
                c: "Potassium",
                d: "Zinc",
                correct: "b",
            },
            {
                question: "What is a balanced diet?",
                a: "Eating only fruits",
                b: "Eating only vegetables",
                c: "Eating a variety of foods in the right proportions",
                d: "Eating only proteins",
                correct: "c",
            },
            {
                question: "What is the main benefit of regular exercise?",
                a: "Weight loss",
                b: "Improved mental health",
                c: "Stronger muscles",
                d: "All of the above",
                correct: "d",
            },
            {
                question: "Which part of the body is most affected by hypertension?",
                a: "Bones",
                b: "Heart",
                c: "Skin",
                d: "Muscles",
                correct: "b",
            },
            {
                question: "Which vitamin helps with vision?",
                a: "Vitamin A",
                b: "Vitamin B",
                c: "Vitamin C",
                d: "Vitamin D",
                correct: "a",
            },
            {
                question: "What is a common cause of tooth decay?",
                a: "Lack of brushing",
                b: "Eating sugary foods",
                c: "Not flossing",
                d: "All of the above",
                correct: "d",
            },
            {
                question: "How often should you brush your teeth?",
                a: "Once a day",
                b: "Twice a day",
                c: "Three times a day",
                d: "Once a week",
                correct: "b",
            },
            {
                question: "Which of these is a healthy snack?",
                a: "Chips",
                b: "Candy",
                c: "Fruit",
                d: "Cookies",
                correct: "c",
            },
            {
                question: "What is the function of the immune system?",
                a: "To digest food",
                b: "To pump blood",
                c: "To fight infections",
                d: "To produce hormones",
                correct: "c",
            },
            {
                question: "Which mineral is important for muscle function?",
                a: "Iron",
                b: "Calcium",
                c: "Potassium",
                d: "Zinc",
                correct: "c",
            },
            {
                question: "What is the best way to prevent the spread of germs?",
                a: "Washing hands",
                b: "Eating healthy",
                c: "Exercising",
                d: "Sleeping well",
                correct: "a",
            },
            {
                question: "Which vitamin helps with iron absorption?",
                a: "Vitamin A",
                b: "Vitamin C",
                c: "Vitamin D",
                d: "Vitamin E",
                correct: "b",
            },
            {
                question: "Which of these is a whole grain?",
                a: "White bread",
                b: "Brown rice",
                c: "Pastries",
                d: "Pasta",
                correct: "b",
            },
            {
                question: "What is a healthy blood pressure reading?",
                a: "120/80",
                b: "140/90",
                c: "160/100",
                d: "180/120",
                correct: "a",
            },
            {
                question: "What is the main benefit of fiber in the diet?",
                a: "Builds muscle",
                b: "Improves digestion",
                c: "Increases energy",
                d: "Strengthens bones",
                correct: "b",
            },
            {
                question: "Which nutrient is essential for growth and repair of tissues?",
                a: "Fats",
                b: "Carbohydrates",
                c: "Proteins",
                d: "Vitamins",
                correct: "c",
            },
            {
                question: "How much water should you drink daily?",
                a: "1-2 cups",
                b: "3-4 cups",
                c: "6-8 cups",
                d: "10-12 cups",
                correct: "c",
            },
            {
                question: "What is the best way to maintain a healthy weight?",
                a: "Dieting",
                b: "Regular exercise",
                c: "Skipping meals",
                d: "Taking supplements",
                correct: "b",
            },
            {
                question: "What is a common cause of allergies?",
                a: "Pollen",
                b: "Dust",
                c: "Pet dander",
                d: "All of the above",
                correct: "d",
            },
            {
                question: "Which organ is affected by hepatitis?",
                a: "Heart",
                b: "Liver",
                c: "Kidney",
                d: "Lungs",
                correct: "b",
            },
            {
                question: "What is the main symptom of anemia?",
                a: "Fever",
                b: "Fatigue",
                c: "Headache",
                d: "Cough",
                correct: "b",
            },
            {
                question: "What does CPR stand for?",
                a: "Cardio Pumping Rescue",
                b: "Cardio Pulse Recovery",
                c: "Cardiopulmonary Resuscitation",
                d: "Cardio Pressure Resuscitation",
                correct: "c",
            },
            {
                question: "What is the best source of omega-3 fatty acids?",
                a: "Red meat",
                b: "Fish",
                c: "Dairy products",
                d: "Grains",
                correct: "b",
            },
            {
                question: "What is a healthy resting heart rate for adults?",
                a: "30-40 beats per minute",
                b: "50-60 beats per minute",
                c: "60-100 beats per minute",
                d: "100-120 beats per minute",
                correct: "c",
            },
            {
                question: "Which vitamin helps with wound healing?",
                a: "Vitamin A",
                b: "Vitamin B",
                c: "Vitamin C",
                d: "Vitamin D",
                correct: "c",
            },
            {
                question: "Which of these is a symptom of diabetes?",
                a: "Excessive thirst",
                b: "Frequent urination",
                c: "Extreme hunger",
                d: "All of the above",
                correct: "d",
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
    const selectedQuestions = shuffleArray(healthQuestions).slice(0, 10);
    
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