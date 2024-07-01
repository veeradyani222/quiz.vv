// FOR THE PHY QUIZ FOR THE PHY QUIZ FOR THE PHY QUIZ
function phyQuiz() {
    const phyQuestions = [
        
            {
                question: "What is the force that pulls objects towards the center of the Earth?",
                a: "Magnetism",
                b: "Gravity",
                c: "Friction",
                d: "Electricity",
                correct: "b",
            },
            {
                question: "What is the speed of light in a vacuum?",
                a: "300,000 km/s",
                b: "150,000 km/s",
                c: "100,000 km/s",
                d: "200,000 km/s",
                correct: "a",
            },
            {
                question: "What is the unit of electric current?",
                a: "Volt",
                b: "Ohm",
                c: "Ampere",
                d: "Watt",
                correct: "c",
            },
            {
                question: "What is the SI unit of force?",
                a: "Joule",
                b: "Newton",
                c: "Pascal",
                d: "Watt",
                correct: "b",
            },
            {
                question: "Which law states that 'for every action, there is an equal and opposite reaction'?",
                a: "Newton's First Law",
                b: "Newton's Second Law",
                c: "Newton's Third Law",
                d: "Newton's Law of Gravitation",
                correct: "c",
            },
            {
                question: "What is the energy possessed by a body due to its motion?",
                a: "Potential Energy",
                b: "Kinetic Energy",
                c: "Thermal Energy",
                d: "Chemical Energy",
                correct: "b",
            },
            {
                question: "What is the phenomenon of bending of light when it passes from one medium to another?",
                a: "Reflection",
                b: "Refraction",
                c: "Diffraction",
                d: "Dispersion",
                correct: "b",
            },
            {
                question: "What is the main source of energy for the Earth?",
                a: "Wind",
                b: "Sun",
                c: "Water",
                d: "Geothermal",
                correct: "b",
            },
            {
                question: "What is the process of splitting a heavy nucleus into two lighter nuclei called?",
                a: "Fusion",
                b: "Fission",
                c: "Ionization",
                d: "Oxidation",
                correct: "b",
            },
            {
                question: "Which instrument is used to measure electric current?",
                a: "Voltmeter",
                b: "Ammeter",
                c: "Thermometer",
                d: "Barometer",
                correct: "b",
            },
            {
                question: "What is the term for materials that do not allow electricity to flow through them?",
                a: "Conductors",
                b: "Insulators",
                c: "Semiconductors",
                d: "Superconductors",
                correct: "b",
            },
            {
                question: "What is the acceleration due to gravity on Earth?",
                a: "5.8 m/s²",
                b: "9.8 m/s²",
                c: "12.8 m/s²",
                d: "15.8 m/s²",
                correct: "b",
            },
            {
                question: "What is the property of an object to resist changes in its state of motion?",
                a: "Inertia",
                b: "Momentum",
                c: "Velocity",
                d: "Acceleration",
                correct: "a",
            },
            {
                question: "What is the unit of work?",
                a: "Newton",
                b: "Pascal",
                c: "Joule",
                d: "Watt",
                correct: "c",
            },
            {
                question: "What kind of mirror is used in car headlights?",
                a: "Plane mirror",
                b: "Concave mirror",
                c: "Convex mirror",
                d: "Spherical mirror",
                correct: "b",
            },
            {
                question: "What is the term for the highest point of a wave?",
                a: "Crest",
                b: "Trough",
                c: "Amplitude",
                d: "Wavelength",
                correct: "a",
            },
            {
                question: "What type of energy is stored in a stretched or compressed spring?",
                a: "Kinetic energy",
                b: "Thermal energy",
                c: "Potential energy",
                d: "Electrical energy",
                correct: "c",
            },
            {
                question: "What is the measure of the average kinetic energy of the particles in a substance?",
                a: "Pressure",
                b: "Temperature",
                c: "Volume",
                d: "Density",
                correct: "b",
            },
            {
                question: "What kind of lens is thicker at the center than at the edges?",
                a: "Concave lens",
                b: "Convex lens",
                c: "Biconcave lens",
                d: "Plano-concave lens",
                correct: "b",
            },
            {
                question: "What is the phenomenon where light spreads out after passing through a narrow opening?",
                a: "Reflection",
                b: "Refraction",
                c: "Diffraction",
                d: "Dispersion",
                correct: "c",
            },
            {
                question: "Which color of light has the shortest wavelength?",
                a: "Red",
                b: "Yellow",
                c: "Green",
                d: "Violet",
                correct: "d",
            },
            {
                question: "What type of wave is a sound wave?",
                a: "Transverse wave",
                b: "Longitudinal wave",
                c: "Electromagnetic wave",
                d: "Surface wave",
                correct: "b",
            },
            {
                question: "What is the term for the amount of space an object occupies?",
                a: "Mass",
                b: "Density",
                c: "Volume",
                d: "Weight",
                correct: "c",
            },
            {
                question: "What is the unit of frequency?",
                a: "Hertz",
                b: "Newton",
                c: "Pascal",
                d: "Joule",
                correct: "a",
            },
            {
                question: "What force keeps planets in orbit around the sun?",
                a: "Electromagnetic force",
                b: "Nuclear force",
                c: "Gravitational force",
                d: "Frictional force",
                correct: "c",
            },
            {
                question: "Which of the following is not a state of matter?",
                a: "Solid",
                b: "Liquid",
                c: "Gas",
                d: "Plasma",
                correct: "d",
            },
            {
                question: "What is the term for the bending of waves around obstacles?",
                a: "Reflection",
                b: "Refraction",
                c: "Diffraction",
                d: "Dispersion",
                correct: "c",
            },
            {
                question: "What is the unit of power?",
                a: "Newton",
                b: "Watt",
                c: "Joule",
                d: "Pascal",
                correct: "b",
            },
            {
                question: "What is the relationship between mass and weight?",
                a: "Mass is the same as weight",
                b: "Mass is independent of weight",
                c: "Weight is mass multiplied by gravity",
                d: "Weight is mass divided by gravity",
                correct: "c",
            },
            {
                question: "Which law states that the pressure of a gas is inversely proportional to its volume?",
                a: "Boyle's Law",
                b: "Charles's Law",
                c: "Avogadro's Law",
                d: "Pascal's Law",
                correct: "a",
            },
            {
                question: "What is the measure of how much matter is in an object?",
                a: "Volume",
                b: "Mass",
                c: "Density",
                d: "Pressure",
                correct: "b",
            },
            {
                question: "What is the unit of pressure?",
                a: "Newton",
                b: "Pascal",
                c: "Joule",
                d: "Watt",
                correct: "b",
            },
            {
                question: "What is the term for the rate of change of velocity?",
                a: "Speed",
                b: "Displacement",
                c: "Acceleration",
                d: "Momentum",
                correct: "c",
            },
            {
                question: "Which type of mirror curves inward?",
                a: "Plane mirror",
                b: "Concave mirror",
                c: "Convex mirror",
                d: "Cylindrical mirror",
                correct: "b",
            },
            {
                question: "What is the term for the force that opposes the motion of objects?",
                a: "Gravity",
                b: "Friction",
                c: "Magnetism",
                d: "Electricity",
                correct: "b",
            },
            {
                question: "Which of the following is a non-renewable energy source?",
                a: "Solar",
                b: "Wind",
                c: "Coal",
                d: "Hydroelectric",
                correct: "c",
            },
            {
                question: "What is the term for energy that is stored in an object due to its position?",
                a: "Kinetic energy",
                b: "Thermal energy",
                c: "Potential energy",
                d: "Chemical energy",
                correct: "c",
            },
            {
                question: "What is the name of the phase change from liquid to gas?",
                a: "Melting",
                b: "Freezing",
                c: "Condensation",
                d: "Evaporation",
                correct: "d",
            },
            {
                question: "What is the term for the amount of energy transferred or converted per unit time?",
                a: "Work",
                b: "Power",
                c: "Force",
                d: "Displacement",
                correct: "b",
            },
            {
                question: "What is the name of the force that acts perpendicular to the surface of an object?",
                a: "Frictional force",
                b: "Normal force",
                c: "Tension force",
                d: "Applied force",
                correct: "b",
            },
            {
                question: "Which of the following is a scalar quantity?",
                a: "Velocity",
                b: "Acceleration",
                c: "Speed",
                d: "Force",
                correct: "c",
            },
            {
                question: "What is the term for the product of an object's mass and its velocity?",
                a: "Force",
                b: "Acceleration",
                c: "Momentum",
                d: "Work",
                correct: "c",
            },
            {
                question: "Which instrument is used to measure atmospheric pressure?",
                a: "Thermometer",
                b: "Barometer",
                c: "Hygrometer",
                d: "Anemometer",
                correct: "b",
            },
            {
                question: "What is the term for the distance traveled per unit time?",
                a: "Speed",
                b: "Velocity",
                c: "Acceleration",
                d: "Momentum",
                correct: "a",
            },
            {
                question: "What is the term for the ability of a material to return to its original shape after being stretched or compressed?",
                a: "Plasticity",
                b: "Elasticity",
                c: "Brittleness",
                d: "Ductility",
                correct: "b",
            },
            {
                question: "What is the name of the force that opposes the relative motion of two surfaces in contact?",
                a: "Gravity",
                b: "Friction",
                c: "Tension",
                d: "Normal force",
                correct: "b",
            },
            {
                question: "What is the term for the amount of matter in a given volume?",
                a: "Mass",
                b: "Density",
                c: "Weight",
                d: "Pressure",
                correct: "b",
            },
            {
                question: "Which of the following is an example of a vector quantity?",
                a: "Speed",
                b: "Time",
                c: "Distance",
                d: "Displacement",
                correct: "d",
            },
            {
                question: "What is the term for the bending of a wave as it enters a new medium at an angle?",
                a: "Reflection",
                b: "Refraction",
                c: "Diffraction",
                d: "Interference",
                correct: "b",
            },
            {
                question: "Which of the following is a unit of energy?",
                a: "Newton",
                b: "Watt",
                c: "Joule",
                d: "Pascal",
                correct: "c",
            },
            {
                question: "What is the term for the energy transferred by a force acting through a distance?",
                a: "Power",
                b: "Work",
                c: "Momentum",
                d: "Impulse",
                correct: "b",
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
    const selectedQuestions = shuffleArray(phyQuestions).slice(0, 10);
    
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