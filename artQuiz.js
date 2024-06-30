//NOW FOR ART QUIZ

function artQuiz() {
    const artQuestions = [
        
            {
                question: "Who painted the famous painting 'Mona Lisa'?",
                a: "Vincent van Gogh",
                b: "Leonardo da Vinci",
                c: "Pablo Picasso",
                d: "Michelangelo",
                correct: "b",
            },
            {
                question: "Which artist is known for painting 'Starry Night'?",
                a: "Vincent van Gogh",
                b: "Pablo Picasso",
                c: "Leonardo da Vinci",
                d: "Claude Monet",
                correct: "a",
            },
            {
                question: "What do dancers wear on their feet for ballet performances?",
                a: "Sneakers",
                b: "Sandals",
                c: "Tap shoes",
                d: "Ballet shoes",
                correct: "d",
            },
            {
                question: "Who is known for creating large-scale, colorful paintings of flowers?",
                a: "Andy Warhol",
                b: "Claude Monet",
                c: "Georgia O'Keeffe",
                d: "Piet Mondrian",
                correct: "c",
            },
            {
                question: "What is the Japanese art of paper folding called?",
                a: "Origami",
                b: "Calligraphy",
                c: "Sumi-e",
                d: "Ikebana",
                correct: "a",
            },
            {
                question: "Which art form involves arranging cut or torn pieces of paper into a composition?",
                a: "Collage",
                b: "Decoupage",
                c: "Assemblage",
                d: "Frottage",
                correct: "a",
            },
            {
                question: "Who painted 'The Persistence of Memory', featuring melting clocks?",
                a: "René Magritte",
                b: "Salvador Dalí",
                c: "Frida Kahlo",
                d: "Diego Rivera",
                correct: "b",
            },
            {
                question: "What is the technique of creating raised designs in metalwork called?",
                a: "Chasing",
                b: "Repoussé",
                c: "Engraving",
                d: "Etching",
                correct: "b",
            },
            {
                question: "Which artist is known for his use of geometric shapes and primary colors in abstract paintings?",
                a: "Wassily Kandinsky",
                b: "Paul Klee",
                c: "Joan Miró",
                d: "Alexander Calder",
                correct: "a",
            },
            {
                question: "Who is known for his large, colorful paintings of Campbell's Soup cans?",
                a: "Mark Rothko",
                b: "Roy Lichtenstein",
                c: "Andy Warhol",
                d: "Jasper Johns",
                correct: "c",
            },
            {
                question: "What is the technique of creating art by applying paint directly onto a wall or ceiling?",
                a: "Fresco",
                b: "Mural",
                c: "Gouache",
                d: "Tempera",
                correct: "a",
            },
            {
                question: "Who painted 'The Birth of Venus', depicting the goddess Venus emerging from the sea?",
                a: "Sandro Botticelli",
                b: "Leonardo da Vinci",
                c: "Titian",
                d: "Raphael",
                correct: "a",
            },
            {
                question: "Which art form involves carving designs into wood or linoleum to create prints?",
                a: "Engraving",
                b: "Lithography",
                c: "Woodcut",
                d: "Etching",
                correct: "c",
            },
            {
                question: "Who painted 'Guernica', a powerful anti-war mural?",
                a: "Pablo Picasso",
                b: "Vincent van Gogh",
                c: "Georges Braque",
                d: "Édouard Manet",
                correct: "a",
            },
            {
                question: "What is the term for a painting or artwork that features rural or pastoral scenes?",
                a: "Landscape",
                b: "Portrait",
                c: "Still life",
                d: "Abstract",
                correct: "a",
            },
            {
                question: "Who painted 'The Scream', a famous expressionist painting depicting a screaming figure on a bridge?",
                a: "Édouard Manet",
                b: "Pablo Picasso",
                c: "Vincent van Gogh",
                d: "Edvard Munch",
                correct: "d",
            },
            {
                question: "What is the technique of carving designs into metal to create prints called?",
                a: "Etching",
                b: "Lithography",
                c: "Woodcut",
                d: "Engraving",
                correct: "a",
            },
            {
                question: "Who painted 'Les Demoiselles d'Avignon', a significant work in the development of cubism?",
                a: "Henri Matisse",
                b: "Pablo Picasso",
                c: "Georges Braque",
                d: "Juan Gris",
                correct: "b",
            },
            {
                question: "What is the technique of using wax to resist dye on fabric called?",
                a: "Batik",
                b: "Stenciling",
                c: "Tie-dye",
                d: "Shibori",
                correct: "a",
            },
            {
                question: "Who is known for his optical illusion artworks, including 'Relativity'?",
                a: "René Magritte",
                b: "M.C. Escher",
                c: "Salvador Dalí",
                d: "Frida Kahlo",
                correct: "b",
            },
            {
                question: "What is the technique of creating art using small dots of color to create an image?",
                a: "Cubism",
                b: "Impressionism",
                c: "Pointillism",
                d: "Surrealism",
                correct: "c",
            },
            {
                question: "Who sculpted 'David', a famous statue of a biblical hero?",
                a: "Auguste Rodin",
                b: "Gian Lorenzo Bernini",
                c: "Donatello",
                d: "Michelangelo",
                correct: "d",
            },
            {
                question: "Which term refers to a group of singers performing together?",
                a: "Solo",
                b: "Duet",
                c: "Chorus",
                d: "Quartet",
                correct: "c",
            },
            {
                question: "What is the technique of creating art by burning designs onto wood or leather called?",
                a: "Pyrography",
                b: "Intaglio",
                c: "Marquetry",
                d: "Enameling",
                correct: "a",
            },
            {
                question: "Who painted 'Water Lilies', a series of paintings featuring water lilies in a pond?",
                a: "Claude Monet",
                b: "Vincent van Gogh",
                c: "Edgar Degas",
                d: "Paul Cézanne",
                correct: "a",
            },
            {
                question: "What is the art of arranging shapes or colors to create an aesthetically pleasing composition?",
                a: "Photography",
                b: "Collage",
                c: "Design",
                d: "Calligraphy",
                correct: "c",
            },
            {
                question: "Who is known for his use of dots and small dashes to create artworks such as 'Sunday Afternoon on the Island of La Grande Jatte'?",
                a: "Georges Braque",
                b: "Henri Matisse",
                c: "Pablo Picasso",
                d: "Georges Seurat",
                correct: "d",
            },
            {
                question: "Which artist is known for his large, colorful paintings of American flags?",
                a: "Jackson Pollock",
                b: "Andy Warhol",
                c: "Mark Rothko",
                d: "Jasper Johns",
                correct: "d",
            },
            {
                question: "What is the technique of creating art using only one color called?",
                a: "Monochrome",
                b: "Polychrome",
                c: "Multicolor",
                d: "Duotone",
                correct: "a",
            },
            {
                question: "Who painted 'Girl with a Pearl Earring', a famous portrait?",
                a: "Rembrandt",
                b: "Johannes Vermeer",
                c: "Jan van Eyck",
                d: "Peter Paul Rubens",
                correct: "b",
            },
            {
                question: "What is the term for a painting or artwork that focuses on inanimate objects?",
                a: "Landscape",
                b: "Portrait",
                c: "Still life",
                d: "Abstract",
                correct: "c",
            },
            {
                question: "Who is known for his use of bright, contrasting colors and swirling patterns in paintings such as 'The Starry Night'?",
                a: "Claude Monet",
                b: "Vincent van Gogh",
                c: "Pablo Picasso",
                d: "Édouard Manet",
                correct: "b",
            },
            {
                question: "What is the technique of creating art using small pieces of colored glass or stone?",
                a: "Mosaic",
                b: "Stained glass",
                c: "Fresco",
                d: "Encaustic",
                correct: "b",
            },
            {
                question: "Who is known for his sculptures such as 'The Thinker' and 'The Kiss'?",
                a: "Michelangelo",
                b: "Auguste Rodin",
                c: "Gian Lorenzo Bernini",
                d: "Donatello",
                correct: "b",
            },
            {
                question: "What is the Japanese art of flower arranging called?",
                a: "Origami",
                b: "Sumi-e",
                c: "Ikebana",
                d: "Haiku",
                correct: "c",
            },
            {
                question: "Who painted 'The School of Athens', depicting a gathering of classical philosophers?",
                a: "Raphael",
                b: "Leonardo da Vinci",
                c: "Titian",
                d: "Sandro Botticelli",
                correct: "a",
            },
            {
                question: "What is the term for a sculpture that projects from a flat surface?",
                a: "Bas-relief",
                b: "High relief",
                c: "Statue",
                d: "Bust",
                correct: "a",
            },
            {
                question: "Who is known for his use of vibrant colors and bold patterns in paintings such as 'The Great Wave off Kanagawa'?",
                a: "Hokusai",
                b: "Utamaro",
                c: "Hiroshige",
                d: "Shunsho",
                correct: "a",
            },
            {
                question: "What is the technique of creating art using a series of tiny, parallel lines?",
                a: "Cross-hatching",
                b: "Sgraffito",
                c: "Hatching",
                d: "Scumbling",
                correct: "c",
            },
            {
                question: "Who painted 'The Night Watch', a famous group portrait of a militia company?",
                a: "Rembrandt",
                b: "Johannes Vermeer",
                c: "Jan van Eyck",
                d: "Peter Paul Rubens",
                correct: "a",
            },
            {
                question: "What is the technique of creating art using powdered pigment pressed into a solid stick called?",
                a: "Pastel",
                b: "Charcoal",
                c: "Graphite",
                d: "Crayon",
                correct: "a",
            },
            {
                question: "Who is known for his sculptures such as 'The Pieta' and 'David'?",
                a: "Donatello",
                b: "Michelangelo",
                c: "Gian Lorenzo Bernini",
                d: "Auguste Rodin",
                correct: "b",
            },
            {
                question: "What is the technique of using threads and yarns to create designs on fabric called?",
                a: "Embroidery",
                b: "Tapestry",
                c: "Quilting",
                d: "Macramé",
                correct: "a",
            },
            {
                question: "Who painted 'The Garden of Earthly Delights', a triptych depicting paradise, earth, and hell?",
                a: "Hieronymus Bosch",
                b: "Pieter Bruegel the Elder",
                c: "Jan van Eyck",
                d: "Albrecht Dürer",
                correct: "a",
            },
            {
                question: "What is the technique of creating art using melted wax and dye?",
                a: "Batik",
                b: "Fresco",
                c: "Encaustic",
                d: "Gouache",
                correct: "c",
            },
            {
                question: "Who is known for his kinetic sculptures, often involving mobiles that move in the air?",
                a: "Alexander Calder",
                b: "Barbara Hepworth",
                c: "Henry Moore",
                d: "Jean Arp",
                correct: "a",
            },
            {
                question: "What is the term for a type of printmaking where the image is carved into a block of wood?",
                a: "Woodcut",
                b: "Linocut",
                c: "Etching",
                d: "Monotype",
                correct: "a",
            },
            {
                question: "Who painted 'American Gothic', featuring a farmer and his daughter standing in front of a farmhouse?",
                a: "Grant Wood",
                b: "Edward Hopper",
                c: "Jackson Pollock",
                d: "Norman Rockwell",
                correct: "a",
            },
            {
                question: "What is the technique of creating art using a pen or brush and ink?",
                a: "Watercolor",
                b: "Sumi-e",
                c: "Calligraphy",
                d: "Ink wash painting",
                correct: "c",
            },
            {
                question: "Who is known for his bronze sculptures such as 'The Burghers of Calais' and 'The Kiss'?",
                a: "Donatello",
                b: "Auguste Rodin",
                c: "Gian Lorenzo Bernini",
                d: "Michelangelo",
                correct: "b",
            },
            {
                question: "What is the Japanese art of ink wash painting called?",
                a: "Origami",
                b: "Sumi-e",
                c: "Haiku",
                d: "Ikebana",
                correct: "b",
            },
            {
                question: "Who painted 'Nighthawks', depicting a diner scene late at night?",
                a: "Grant Wood",
                b: "Edward Hopper",
                c: "Norman Rockwell",
                d: "Jackson Pollock",
                correct: "b",
            },
            {
                question: "What is the technique of creating art using thin layers of semi-transparent paint?",
                a: "Impasto",
                b: "Glazing",
                c: "Sgraffito",
                d: "Scumbling",
                correct: "b",
            },
            {
                question: "Who is known for his mobile sculptures and for coining the term 'readymade'?",
                a: "Alexander Calder",
                b: "Marcel Duchamp",
                c: "Jean Arp",
                d: "Piet Mondrian",
                correct: "b",
            },
            {
                question: "What is the term for a painting or artwork that focuses on a person's face?",
                a: "Landscape",
                b: "Portrait",
                c: "Still life",
                d: "Abstract",
                correct: "b",
            },
            {
                question: "Who painted 'The Kiss', a famous painting depicting a couple embracing?",
                a: "Auguste Rodin",
                b: "Gian Lorenzo Bernini",
                c: "Donatello",
                d: "Gustav Klimt",
                correct: "d",
            },
            {
                question: "What is the technique of creating art by cutting and pasting various materials onto a surface?",
                a: "Collage",
                b: "Decoupage",
                c: "Assemblage",
                d: "Frottage",
                correct: "a",
            },
            {
                question: "Who is known for his kinetic sculptures and mobiles, often featuring balanced, abstract shapes?",
                a: "Barbara Hepworth",
                b: "Alexander Calder",
                c: "Henry Moore",
                d: "Jean Arp",
                correct: "b",
            },
            {
                question: "What is the term for a sculpture of a person's head and shoulders?",
                a: "Statue",
                b: "Bust",
                c: "High relief",
                d: "Low relief",
                correct: "b",
            },
            {
                question: "Who painted 'The Starry Night', a famous painting featuring swirling clouds and stars?",
                a: "Vincent van Gogh",
                b: "Claude Monet",
                c: "Pablo Picasso",
                d: "Édouard Manet",
                correct: "a",
            },
            {
                question: "What is the term for a printmaking technique where the image is drawn on a flat surface?",
                a: "Woodcut",
                b: "Lithography",
                c: "Etching",
                d: "Monotype",
                correct: "b",
            },
            {
                question: "Who is known for his use of light and shadow in paintings such as 'The Calling of St. Matthew'?",
                a: "Caravaggio",
                b: "Titian",
                c: "Michelangelo",
                d: "Raphael",
                correct: "a",
            },
            {
                question: "What is the technique of creating art using thin layers of beeswax and resin with pigment called?",
                a: "Batik",
                b: "Fresco",
                c: "Encaustic",
                d: "Gouache",
                correct: "c",
            },
            {
                question: "Who is known for his sculptures such as 'The Thinker' and 'The Gates of Hell'?",
                a: "Donatello",
                b: "Michelangelo",
                c: "Auguste Rodin",
                d: "Gian Lorenzo Bernini",
                correct: "c",
            },
            {
                question: "What is the term for a technique of creating art by scratching into a surface to reveal a lower layer?",
                a: "Etching",
                b: "Lithography",
                c: "Sgraffito",
                d: "Scrimshaw",
                correct: "c",
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
    const selectedQuestions = shuffleArray(artQuestions).slice(0, 10);
    
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