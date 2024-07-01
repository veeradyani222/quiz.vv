//  FOR THE CHEM QUIZ

function chemQuiz() {
    const chemQuestions = [
        
            {
                question: "What is the smallest unit of an element that still retains the properties of that element?",
                a: "Atom",
                b: "Molecule",
                c: "Compound",
                d: "Ion",
                correct: "a",
            },
            {
                question: "Which element is essential for combustion to occur?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon",
                d: "Hydrogen",
                correct: "a",
            },
            {
                question: "What is the chemical symbol for water?",
                a: "Wo",
                b: "Wt",
                c: "H2O",
                d: "H2",
                correct: "c",
            },
            {
                question: "Which gas is commonly known as laughing gas?",
                a: "Nitrous oxide",
                b: "Carbon dioxide",
                c: "Oxygen",
                d: "Methane",
                correct: "a",
            },
            {
                question: "What is the chemical formula for table salt?",
                a: "NaOH",
                b: "NaCl",
                c: "H2O",
                d: "CO2",
                correct: "b",
            },
            {
                question: "Which of the following is a noble gas?",
                a: "Oxygen",
                b: "Hydrogen",
                c: "Neon",
                d: "Carbon",
                correct: "c",
            },
            {
                question: "What is the process of conversion of a solid directly to gas without passing through the liquid state called?",
                a: "Evaporation",
                b: "Condensation",
                c: "Sublimation",
                d: "Fusion",
                correct: "c",
            },
            {
                question: "Which element has the chemical symbol 'Fe'?",
                a: "Iron",
                b: "Gold",
                c: "Silver",
                d: "Copper",
                correct: "a",
            },
            {
                question: "What is the pH value of pure water?",
                a: "7",
                b: "0",
                c: "14",
                d: "5",
                correct: "a",
            },
            {
                question: "Which type of bond involves the sharing of electrons between atoms?",
                a: "Ionic",
                b: "Covalent",
                c: "Metallic",
                d: "Hydrogen",
                correct: "b",
            },
            {
                question: "What is the chemical symbol for gold?",
                a: "Au",
                b: "Ag",
                c: "Cu",
                d: "Fe",
                correct: "a",
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                a: "Nitrogen",
                b: "Oxygen",
                c: "Carbon dioxide",
                d: "Hydrogen",
                correct: "c",
            },
            {
                question: "What is the chemical formula for methane?",
                a: "CH4",
                b: "CO2",
                c: "H2O",
                d: "NH3",
                correct: "a",
            },
            {
                question: "Which element is essential for photosynthesis?",
                a: "Carbon",
                b: "Oxygen",
                c: "Nitrogen",
                d: "Hydrogen",
                correct: "a",
            },
            {
                question: "What is the main constituent of natural gas?",
                a: "Methane",
                b: "Ethane",
                c: "Propane",
                d: "Butane",
                correct: "a",
            },
            {
                question: "Which element is used in batteries?",
                a: "Sodium",
                b: "Potassium",
                c: "Lithium",
                d: "Magnesium",
                correct: "c",
            },
            {
                question: "What is the chemical formula for hydrogen peroxide?",
                a: "H2O",
                b: "H2O2",
                c: "HO",
                d: "HO2",
                correct: "b",
            },
            {
                question: "Which of the following is a greenhouse gas?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Argon",
                correct: "c",
            },
            {
                question: "What is the atomic number of carbon?",
                a: "6",
                b: "8",
                c: "12",
                d: "16",
                correct: "a",
            },
            {
                question: "Which substance has the chemical formula C6H12O6?",
                a: "Glucose",
                b: "Fructose",
                c: "Sucrose",
                d: "Maltose",
                correct: "a",
            },
            {
                question: "What is the chemical symbol for silver?",
                a: "Ag",
                b: "Au",
                c: "Cu",
                d: "Fe",
                correct: "a",
            },
            {
                question: "Which gas is produced during cellular respiration?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Hydrogen",
                correct: "c",
            },
            {
                question: "What is the chemical formula for sulfuric acid?",
                a: "HCl",
                b: "H2SO4",
                c: "HNO3",
                d: "NaOH",
                correct: "b",
            },
            {
                question: "Which element is commonly used in pencils?",
                a: "Lead",
                b: "Graphite",
                c: "Carbon",
                d: "Iron",
                correct: "b",
            },
            {
                question: "What is the chemical symbol for potassium?",
                a: "K",
                b: "P",
                c: "Ka",
                d: "Kt",
                correct: "a",
            },
            {
                question: "Which gas is produced by burning fossil fuels?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Hydrogen",
                correct: "c",
            },
            {
                question: "What is the main component of natural gas?",
                a: "Methane",
                b: "Ethane",
                c: "Propane",
                d: "Butane",
                correct: "a",
            },
            {
                question: "Which element is added to iron to make steel?",
                a: "Carbon",
                b: "Oxygen",
                c: "Nitrogen",
                d: "Hydrogen",
                correct: "a",
            },
            {
                question: "What is the chemical formula for ammonia?",
                a: "NH4",
                b: "NH2",
                c: "NH3",
                d: "N2H4",
                correct: "c",
            },
            {
                question: "Which gas is used in the production of soft drinks?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Hydrogen",
                correct: "c",
            },
            {
                question: "What is the chemical symbol for mercury?",
                a: "Me",
                b: "Hg",
                c: "Ma",
                d: "Hy",
                correct: "b",
            },
            {
                question: "Which element is essential for the formation of bones and teeth?",
                a: "Calcium",
                b: "Iron",
                c: "Sodium",
                d: "Magnesium",
                correct: "a",
            },
            {
                question: "What is the chemical formula for baking soda?",
                a: "NaCl",
                b: "NaOH",
                c: "NaHCO3",
                d: "Na2CO3",
                correct: "c",
            },
            {
                question: "Which gas is produced by plants during photosynthesis?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Hydrogen",
                correct: "a",
            },
            {
                question: "What is the chemical symbol for iron?",
                a: "Ir",
                b: "Io",
                c: "Fe",
                d: "Fr",
                correct: "c",
            },
            {
                question: "Which type of radiation has the shortest wavelength?",
                a: "Gamma rays",
                b: "X-rays",
                c: "Ultraviolet",
                d: "Infrared",
                correct: "a",
            },
            {
                question: "What is the chemical formula for hydrochloric acid?",
                a: "H2O",
                b: "HCl",
                c: "HNO3",
                d: "H2SO4",
                correct: "b",
            },
            {
                question: "Which element is used in the filament of an electric bulb?",
                a: "Aluminum",
                b: "Tungsten",
                c: "Copper",
                d: "Gold",
                correct: "b",
            },
            {
                question: "What is the chemical symbol for neon?",
                a: "No",
                b: "Ne",
                c: "Na",
                d: "Ni",
                correct: "b",
            },
            {
                question: "Which gas is known as a greenhouse gas?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Helium",
                correct: "c",
            },
            {
                question: "What is the atomic number of oxygen?",
                a: "6",
                b: "8",
                c: "12",
                d: "16",
                correct: "b",
            },
            {
                question: "Which substance is known as the 'universal solvent'?",
                a: "Water",
                b: "Alcohol",
                c: "Acid",
                d: "Oil",
                correct: "a",
            },
            {
                question: "What is the chemical formula for methane?",
                a: "CH4",
                b: "CO2",
                c: "H2O",
                d: "NH3",
                correct: "a",
            },
            {
                question: "Which element is essential for the formation of proteins?",
                a: "Carbon",
                b: "Oxygen",
                c: "Nitrogen",
                d: "Sulfur",
                correct: "c",
            },
            {
                question: "What is the chemical symbol for sodium?",
                a: "So",
                b: "Na",
                c: "Sa",
                d: "Sn",
                correct: "b",
            },
            {
                question: "Which gas is produced during fermentation?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Hydrogen",
                correct: "c",
            },
            {
                question: "What is the chemical formula for sulfur dioxide?",
                a: "SO2",
                b: "SO3",
                c: "S2O",
                d: "S2O3",
                correct: "a",
            },
            {
                question: "Which element is present in all organic compounds?",
                a: "Carbon",
                b: "Oxygen",
                c: "Nitrogen",
                d: "Hydrogen",
                correct: "a",
            },
            {
                question: "What is the chemical symbol for calcium?",
                a: "Ca",
                b: "Cl",
                c: "Ce",
                d: "Co",
                correct: "a",
            },
            {
                question: "Which gas is commonly used in light bulbs?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Argon",
                d: "Hydrogen",
                correct: "c",
            },
            {
                question: "What is the chemical formula for nitric acid?",
                a: "H2O",
                b: "HCl",
                c: "HNO3",
                d: "H2SO4",
                correct: "c",
            },
            {
                question: "Which element is commonly used in batteries?",
                a: "Sodium",
                b: "Potassium",
                c: "Lithium",
                d: "Magnesium",
                correct: "c",
            },
            {
                question: "What is the chemical symbol for hydrogen?",
                a: "He",
                b: "Ho",
                c: "Hg",
                d: "H",
                correct: "d",
            },
            {
                question: "Which gas is released during respiration?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Hydrogen",
                correct: "c",
            },
            {
                question: "What is the chemical formula for carbon dioxide?",
                a: "CO",
                b: "CO2",
                c: "C2O",
                d: "C2O3",
                correct: "b",
            },
            {
                question: "Which element is added to water to make it drinkable?",
                a: "Sodium",
                b: "Chlorine",
                c: "Fluorine",
                d: "Potassium",
                correct: "b",
            },
            {
                question: "What is the chemical symbol for nitrogen?",
                a: "Ni",
                b: "Na",
                c: "N",
                d: "Ne",
                correct: "c",
            },
            {
                question: "Which gas is used in the manufacture of fertilizers?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Ammonia",
                correct: "d",
            },
            {
                question: "What is the chemical formula for acetic acid?",
                a: "HCl",
                b: "H2SO4",
                c: "CH3COOH",
                d: "NaOH",
                correct: "c",
            },
            {
                question: "Which element is used in the purification of drinking water?",
                a: "Chlorine",
                b: "Fluorine",
                c: "Iodine",
                d: "Bromine",
                correct: "a",
            },
            {
                question: "What is the chemical symbol for helium?",
                a: "He",
                b: "Ho",
                c: "Hg",
                d: "H",
                correct: "a",
            },
            {
                question: "Which gas is used in the production of soft drinks?",
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon dioxide",
                d: "Hydrogen",
                correct: "c",
            },
            {
                question: "What is the chemical formula for phosphoric acid?",
                a: "H3PO4",
                b: "HCl",
                c: "H2SO4",
                d: "NaOH",
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
    
    // Assuming chemQuestions is your array of questions
    
    // Randomly shuffle and select 10 questions
    const selectedQuestions = shuffleArray(chemQuestions).slice(0, 10);
    
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
    };
    
   
}  
