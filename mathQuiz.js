function mathQuiz() {
    const mathQuestions = [
        {
            question: "What is the value of π (pi) approximately?",
            a: "3.14",
            b: "3.1416",
            c: "3.142",
            d: "3.14159",
            correct: "a",
        },
        {
            question: "What is 2 + 2?",
            a: "3",
            b: "4",
            c: "5",
            d: "6",
            correct: "b",
        },
        {
            question: "What is the square root of 16?",
            a: "2",
            b: "3",
            c: "4",
            d: "5",
            correct: "c",
        },
        {
            question: "What is 5! (5 factorial)?",
            a: "60",
            b: "100",
            c: "120",
            d: "140",
            correct: "c",
        },
        {
            question: "What is the sum of the angles in a triangle?",
            a: "180 degrees",
            b: "90 degrees",
            c: "360 degrees",
            d: "270 degrees",
            correct: "a",
        },
        {
            question: "What is 10 divided by 2?",
            a: "2",
            b: "3",
            c: "4",
            d: "5",
            correct: "d",
        },
        {
            question: "What is the area of a circle with radius 1?",
            a: "π",
            b: "2π",
            c: "π^2",
            d: "4π",
            correct: "a",
        },
        {
            question: "What is the perimeter of a square with side length 4?",
            a: "8",
            b: "12",
            c: "16",
            d: "20",
            correct: "c",
        },
        {
            question: "What is the solution to the equation 3x = 9?",
            a: "x = 1",
            b: "x = 2",
            c: "x = 3",
            d: "x = 4",
            correct: "c",
        },
        {
            question: "What is the value of the expression 2^3?",
            a: "4",
            b: "6",
            c: "8",
            d: "10",
            correct: "c",
        },
        {
            question: "What is 7 times 6?",
            a: "42",
            b: "46",
            c: "48",
            d: "52",
            correct: "a",
        },
        {
            question: "What is the result of 15 - 9?",
            a: "5",
            b: "6",
            c: "7",
            d: "8",
            correct: "b",
        },
        {
            question: "What is the value of the expression 4 + 5 * 2?",
            a: "18",
            b: "14",
            c: "13",
            d: "10",
            correct: "b",
        },
        {
            question: "What is the product of 9 and 3?",
            a: "18",
            b: "21",
            c: "24",
            d: "27",
            correct: "d",
        },
        {
            question: "What is the greatest common divisor of 12 and 18?",
            a: "2",
            b: "3",
            c: "6",
            d: "9",
            correct: "c",
        },
        {
            question: "Solve for x: 2x + 5 = 15",
            a: "x = 5",
            b: "x = 7",
            c: "x = 10",
            d: "x = 12",
            correct: "a",
        },
        {
            question: "What is the perimeter of a rectangle with length 6 units and width 4 units?",
            a: "20 units",
            b: "24 units",
            c: "28 units",
            d: "30 units",
            correct: "b",
        },
        {
            question: "If a car travels at a speed of 60 km/h, how far will it travel in 2.5 hours?",
            a: "125 km",
            b: "140 km",
            c: "150 km",
            d: "160 km",
            correct: "c",
        },
        {
            question: "Simplify: 3/4 ÷ 2/3",
            a: "9/8",
            b: "3/2",
            c: "4/9",
            d: "2/3",
            correct: "b",
        },
        {
            question: "If an item originally costing $80 is discounted by 20%, what is the discounted price?",
            a: "$64",
            b: "$72",
            c: "$76",
            d: "$84",
            correct: "a",
        },
        {
            question: "Find the value of x in the proportion: 4/6 = x/9",
            a: "6",
            b: "5",
            c: "7",
            d: "8",
            correct: "b",
        },
        {
            question: "If a recipe calls for 2 cups of flour to make 24 cookies, how many cups of flour are needed to make 36 cookies?",
            a: "3 cups",
            b: "4 cups",
            c: "2.5 cups",
            d: "5 cups",
            correct: "a",
        },
        {
            question: "What is the area of a triangle with base 8 units and height 6 units?",
            a: "24 square units",
            b: "30 square units",
            c: "36 square units",
            d: "40 square units",
            correct: "b",
        },
        {
            question: "Solve for x: 2x - 5 = 15",
            a: "x = 5",
            b: "x = 10",
            c: "x = 15",
            d: "x = 20",
            correct: "b",
        },
        {
            question: "What is the volume of a cube with side length 3 units?",
            a: "9 cubic units",
            b: "18 cubic units",
            c: "27 cubic units",
            d: "36 cubic units",
            correct: "c",
        },
        {
            question: "If a shirt originally costs $25 and is on sale for 20% off, what is the sale price?",
            a: "$20",
            b: "$21",
            c: "$22",
            d: "$24",
            correct: "b",
        },
        {
            question: "If the ratio of boys to girls in a class is 3:2 and there are 15 girls, how many boys are there?",
            a: "9",
            b: "12",
            c: "10",
            d: "8",
            correct: "a",
        },
        {
            question: "Simplify: (5 + 3) × (10 ÷ 2)",
            a: "16",
            b: "18",
            c: "20",
            d: "22",
            correct: "b",
        },
        {
            question: "What is the sum of all angles in a quadrilateral?",
            a: "180 degrees",
            b: "270 degrees",
            c: "360 degrees",
            d: "450 degrees",
            correct: "c",
        },
        {
            question: "Find the perimeter of a right triangle with legs of lengths 3 units and 4 units.",
            a: "10 units",
            b: "12 units",
            c: "14 units",
            d: "16 units",
            correct: "b",
        },
        {
            question: "Solve for x: 3x + 4 = 16",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "a",
        },
        {
            question: "What is the area of a rectangle with length 10 units and width 5 units?",
            a: "30 square units",
            b: "40 square units",
            c: "45 square units",
            d: "50 square units",
            correct: "b",
        },
        {
            question: "If a clock shows 2:30 PM, what is the angle between the hour and minute hands?",
            a: "60 degrees",
            b: "75 degrees",
            c: "90 degrees",
            d: "105 degrees",
            correct: "b",
        },
        {
            question: "If 30% of a number is 24, what is the number?",
            a: "80",
            b: "90",
            c: "100",
            d: "120",
            correct: "d",
        },
        {
            question: "Find the value of x: 2/3 = 4/x",
            a: "3",
            b: "5",
            c: "6",
            d: "8",
            correct: "c",
        },
        {
            question: "What is the perimeter of a regular hexagon with each side measuring 4 units?",
            a: "20 units",
            b: "22 units",
            c: "24 units",
            d: "26 units",
            correct: "c",
        },
        {
            question: "If an object travels at 50 km/h, how long will it take to travel 200 kilometers?",
            a: "4 hours",
            b: "5 hours",
            c: "6 hours",
            d: "7 hours",
            correct: "b",
        },
        {
            question: "Simplify: 3x + 2y - x - y",
            a: "2x + y",
            b: "2x - y",
            c: "4x + y",
            d: "4x - y",
            correct: "a",
        },
        {
            question: "If a triangle has angles measuring 30 degrees, 60 degrees, and 90 degrees, what is the length of the side opposite the 60-degree angle if the hypotenuse is 10 units?",
            a: "5 units",
            b: "5√3 units",
            c: "10 units",
            d: "10√3 units",
            correct: "b",
        },
        {
            question: "What is the solution to the equation 2x + 3 = 11?",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "b",
        },
        {
            question: "If 20% of a number is 15, what is 40% of the same number?",
            a: "25",
            b: "30",
            c: "35",
            d: "40",
            correct: "b",
        },
        {
            question: "Find the area of a trapezoid with bases measuring 5 units and 7 units, and a height of 4 units.",
            a: "24 square units",
            b: "28 square units",
            c: "32 square units",
            d: "36 square units",
            correct: "b",
        },
        {
            question: "If a store sells a product for $25 and makes a 20% profit, what is the selling price?",
            a: "$30",
            b: "$32",
            c: "$35",
            d: "$40",
            correct: "b",
        },
        {
            question: "Solve for x: 2(x - 3) = 10",
            a: "x = 5",
            b: "x = 6",
            c: "x = 7",
            d: "x = 8",
            correct: "a",
        },
        {
            question: "What is the volume of a cylinder with radius 2 units and height 6 units?",
            a: "24 cubic units",
            b: "36 cubic units",
            c: "48 cubic units",
            d: "64 cubic units",
            correct: "b",
        },
        {
            question: "If the perimeter of a rectangle is 36 units and the length is 12 units, what is the width?",
            a: "6 units",
            b: "8 units",
            c: "10 units",
            d: "12 units",
            correct: "a",
        },
        {
            question: "If the ratio of boys to girls in a class is 5:3 and there are 24 girls, how many boys are there?",
            a: "40",
            b: "45",
            c: "50",
            d: "55",
            correct: "c",
        },
        {
            question: "Simplify: (3/4) ÷ (2/3)",
            a: "9/8",
            b: "3/2",
            c: "4/9",
            d: "2/3",
            correct: "b",
        },
        {
            question: "If an item originally costs $80 and is discounted by 20%, what is the discounted price?",
            a: "$64",
            b: "$72",
            c: "$76",
            d: "$84",
            correct: "a",
        },
        {
            question: "Find the value of x in the proportion: 4/6 = x/9",
            a: "6",
            b: "5",
            c: "7",
            d: "8",
            correct: "b",
        },
        {
            question: "If a recipe calls for 2 cups of flour to make 24 cookies, how many cups of flour are needed to make 36 cookies?",
            a: "3 cups",
            b: "4 cups",
            c: "2.5 cups",
            d: "5 cups",
            correct: "a",
        },
        {
            question: "What is the area of a triangle with base 8 units and height 6 units?",
            a: "24 square units",
            b: "30 square units",
            c: "36 square units",
            d: "40 square units",
            correct: "b",
        },
        {
            question: "Solve for x: 2x - 5 = 15",
            a: "x = 5",
            b: "x = 10",
            c: "x = 15",
            d: "x = 20",
            correct: "b",
        },
        {
            question: "What is the volume of a cube with side length 3 units?",
            a: "9 cubic units",
            b: "18 cubic units",
            c: "27 cubic units",
            d: "36 cubic units",
            correct: "c",
        },
        {
            question: "If a shirt originally costs $25 and is on sale for 20% off, what is the sale price?",
            a: "$20",
            b: "$21",
            c: "$22",
            d: "$24",
            correct: "b",
        },
        {
            question: "If the ratio of boys to girls in a class is 3:2 and there are 15 girls, how many boys are there?",
            a: "9",
            b: "12",
            c: "10",
            d: "8",
            correct: "a",
        },
        {
            question: "Simplify: (5 + 3) × (10 ÷ 2)",
            a: "16",
            b: "18",
            c: "20",
            d: "22",
            correct: "b",
        },
        {
            question: "What is the sum of all angles in a quadrilateral?",
            a: "180 degrees",
            b: "270 degrees",
            c: "360 degrees",
            d: "450 degrees",
            correct: "c",
        },
        {
            question: "Find the perimeter of a right triangle with legs of lengths 3 units and 4 units.",
            a: "10 units",
            b: "12 units",
            c: "14 units",
            d: "16 units",
            correct: "b",
        },
        {
            question: "Solve for x: 3x + 4 = 16",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "a",
        },
        {
            question: "What is the area of a rectangle with length 10 units and width 5 units?",
            a: "30 square units",
            b: "40 square units",
            c: "45 square units",
            d: "50 square units",
            correct: "b",
        },
        {
            question: "If a clock shows 2:30 PM, what is the angle between the hour and minute hands?",
            a: "60 degrees",
            b: "75 degrees",
            c: "90 degrees",
            d: "105 degrees",
            correct: "b",
        },
        {
            question: "If 30% of a number is 24, what is the number?",
            a: "80",
            b: "90",
            c: "100",
            d: "120",
            correct: "d",
        },
        {
            question: "Find the value of x: 2/3 = 4/x",
            a: "3",
            b: "5",
            c: "6",
            d: "8",
            correct: "c",
        },
        {
            question: "What is the perimeter of a regular hexagon with each side measuring 4 units?",
            a: "20 units",
            b: "22 units",
            c: "24 units",
            d: "26 units",
            correct: "c",
        },
        {
            question: "If an object travels at 50 km/h, how long will it take to travel 200 kilometers?",
            a: "4 hours",
            b: "5 hours",
            c: "6 hours",
            d: "7 hours",
            correct: "b",
        },
        {
            question: "Simplify: 3x + 2y - x - y",
            a: "2x + y",
            b: "2x - y",
            c: "4x + y",
            d: "4x - y",
            correct: "a",
        },
        {
            question: "If a triangle has angles measuring 30 degrees, 60 degrees, and 90 degrees, what is the length of the side opposite the 60-degree angle if the hypotenuse is 10 units?",
            a: "5 units",
            b: "5√3 units",
            c: "10 units",
            d: "10√3 units",
            correct: "b",
        },
        {
            question: "What is the solution to the equation 2x + 3 = 11?",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "b",
        },
        {
            question: "If 20% of a number is 15, what is 40% of the same number?",
            a: "25",
            b: "30",
            c: "35",
            d: "40",
            correct: "b",
        },
        {
            question: "Find the area of a trapezoid with bases measuring 5 units and 7 units, and a height of 4 units.",
            a: "24 square units",
            b: "28 square units",
            c: "32 square units",
            d: "36 square units",
            correct: "b",
        },
        {
            question: "If a store sells a product for $25 and makes a 20% profit, what is the selling price?",
            a: "$30",
            b: "$32",
            c: "$35",
            d: "$40",
            correct: "b",
        },
        {
            question: "Solve for x: 2(x - 3) = 10",
            a: "x = 5",
            b: "x = 6",
            c: "x = 7",
            d: "x = 8",
            correct: "a",
        },
        {
            question: "What is the volume of a cylinder with radius 2 units and height 6 units?",
            a: "24 cubic units",
            b: "36 cubic units",
            c: "48 cubic units",
            d: "64 cubic units",
            correct: "b",
        },
        {
            question: "If the perimeter of a rectangle is 36 units and the length is 12 units, what is the width?",
            a: "6 units",
            b: "8 units",
            c: "10 units",
            d: "12 units",
            correct: "a",
        },
        {
            question: "If the ratio of boys to girls in a class is 5:3 and there are 24 girls, how many boys are there?",
            a: "40",
            b: "45",
            c: "50",
            d: "55",
            correct: "c",
        },
        {
            question: "Simplify: (3/4) ÷ (2/3)",
            a: "9/8",
            b: "3/2",
            c: "4/9",
            d: "2/3",
            correct: "b",
        },
        {
            question: "If an item originally costs $80 and is discounted by 20%, what is the discounted price?",
            a: "$64",
            b: "$72",
            c: "$76",
            d: "$84",
            correct: "a",
        },
        {
            question: "Find the value of x in the proportion: 4/6 = x/9",
            a: "6",
            b: "5",
            c: "7",
            d: "8",
            correct: "b",
        },
        {
            question: "If a recipe calls for 2 cups of flour to make 24 cookies, how many cups of flour are needed to make 36 cookies?",
            a: "3 cups",
            b: "4 cups",
            c: "2.5 cups",
            d: "5 cups",
            correct: "a",
        },
        {
            question: "What is the area of a triangle with base 8 units and height 6 units?",
            a: "24 square units",
            b: "30 square units",
            c: "36 square units",
            d: "40 square units",
            correct: "b",
        },
        {
            question: "Solve for x: 2x - 5 = 15",
            a: "x = 5",
            b: "x = 10",
            c: "x = 15",
            d: "x = 20",
            correct: "b",
        },
        {
            question: "What is the volume of a cube with side length 3 units?",
            a: "9 cubic units",
            b: "18 cubic units",
            c: "27 cubic units",
            d: "36 cubic units",
            correct: "c",
        },
        {
            question: "If a shirt originally costs $25 and is on sale for 20% off, what is the sale price?",
            a: "$20",
            b: "$21",
            c: "$22",
            d: "$24",
            correct: "b",
        },
        {
            question: "If the ratio of boys to girls in a class is 3:2 and there are 15 girls, how many boys are there?",
            a: "9",
            b: "12",
            c: "10",
            d: "8",
            correct: "a",
        },
        {
            question: "Simplify: (5 + 3) × (10 ÷ 2)",
            a: "16",
            b: "18",
            c: "20",
            d: "22",
            correct: "b",
        },
        {
            question: "What is the sum of all angles in a quadrilateral?",
            a: "180 degrees",
            b: "270 degrees",
            c: "360 degrees",
            d: "450 degrees",
            correct: "c",
        },
        {
            question: "Find the perimeter of a right triangle with legs of lengths 3 units and 4 units.",
            a: "10 units",
            b: "12 units",
            c: "14 units",
            d: "16 units",
            correct: "b",
        },
        {
            question: "Solve for x: 3x + 4 = 16",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "a",
        },
        {
            question: "What is the area of a rectangle with length 10 units and width 5 units?",
            a: "30 square units",
            b: "40 square units",
            c: "45 square units",
            d: "50 square units",
            correct: "b",
        },
        {
            question: "If a clock shows 2:30 PM, what is the angle between the hour and minute hands?",
            a: "60 degrees",
            b: "75 degrees",
            c: "90 degrees",
            d: "105 degrees",
            correct: "b",
        },
        {
            question: "If 30% of a number is 24, what is the number?",
            a: "80",
            b: "90",
            c: "100",
            d: "120",
            correct: "d",
        },
        {
            question: "Find the value of x: 2/3 = 4/x",
            a: "3",
            b: "5",
            c: "6",
            d: "8",
            correct: "c",
        },
        {
            question: "What is the perimeter of a regular hexagon with each side measuring 4 units?",
            a: "20 units",
            b: "22 units",
            c: "24 units",
            d: "26 units",
            correct: "c",
        },
        {
            question: "If an object travels at 50 km/h, how long will it take to travel 200 kilometers?",
            a: "4 hours",
            b: "5 hours",
            c: "6 hours",
            d: "7 hours",
            correct: "b",
        },
        {
            question: "Simplify: 3x + 2y - x - y",
            a: "2x + y",
            b: "2x - y",
            c: "4x + y",
            d: "4x - y",
            correct: "a",
        },
        {
            question: "If a triangle has angles measuring 30 degrees, 60 degrees, and 90 degrees, what is the length of the side opposite the 60-degree angle if the hypotenuse is 10 units?",
            a: "5 units",
            b: "5√3 units",
            c: "10 units",
            d: "10√3 units",
            correct: "b",
        },
        {
            question: "What is the solution to the equation 2x + 3 = 11?",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "b",
        },
        {
            question: "If 20% of a number is 15, what is 40% of the same number?",
            a: "25",
            b: "30",
            c: "35",
            d: "40",
            correct: "b",
        },
        {
            question: "Find the area of a trapezoid with bases measuring 5 units and 7 units, and a height of 4 units.",
            a: "24 square units",
            b: "28 square units",
            c: "32 square units",
            d: "36 square units",
            correct: "b",
        },
        {
            question: "If a store sells a product for $25 and makes a 20% profit, what is the selling price?",
            a: "$30",
            b: "$32",
            c: "$35",
            d: "$40",
            correct: "b",
        },
        {
            question: "Solve for x: 2(x - 3) = 10",
            a: "x = 5",
            b: "x = 6",
            c: "x = 7",
            d: "x = 8",
            correct: "a",
        },
        {
            question: "What is the volume of a cylinder with radius 2 units and height 6 units?",
            a: "24 cubic units",
            b: "36 cubic units",
            c: "48 cubic units",
            d: "64 cubic units",
            correct: "b",
        },
        {
            question: "If the perimeter of a rectangle is 36 units and the length is 12 units, what is the width?",
            a: "6 units",
            b: "8 units",
            c: "10 units",
            d: "12 units",
            correct: "a",
        },
        {
            question: "If the ratio of boys to girls in a class is 5:3 and there are 24 girls, how many boys are there?",
            a: "40",
            b: "45",
            c: "50",
            d: "55",
            correct: "c",
        },
        {
            question: "Simplify: (3/4) ÷ (2/3)",
            a: "9/8",
            b: "3/2",
            c: "4/9",
            d: "2/3",
            correct: "b",
        },
        {
            question: "If an item originally costs $80 and is discounted by 20%, what is the discounted price?",
            a: "$64",
            b: "$72",
            c: "$76",
            d: "$84",
            correct: "a",
        },
        {
            question: "Find the value of x in the proportion: 4/6 = x/9",
            a: "6",
            b: "5",
            c: "7",
            d: "8",
            correct: "b",
        },
        {
            question: "If a recipe calls for 2 cups of flour to make 24 cookies, how many cups of flour are needed to make 36 cookies?",
            a: "3 cups",
            b: "4 cups",
            c: "2.5 cups",
            d: "5 cups",
            correct: "a",
        },
        {
            question: "What is the area of a triangle with base 8 units and height 6 units?",
            a: "24 square units",
            b: "30 square units",
            c: "36 square units",
            d: "40 square units",
            correct: "b",
        },
        {
            question: "Solve for x: 2x - 5 = 15",
            a: "x = 5",
            b: "x = 10",
            c: "x = 15",
            d: "x = 20",
            correct: "b",
        },
        {
            question: "What is the volume of a cube with side length 3 units?",
            a: "9 cubic units",
            b: "18 cubic units",
            c: "27 cubic units",
            d: "36 cubic units",
            correct: "c",
        },
        {
            question: "If a shirt originally costs $25 and is on sale for 20% off, what is the sale price?",
            a: "$20",
            b: "$21",
            c: "$22",
            d: "$24",
            correct: "b",
        },
        {
            question: "If the ratio of boys to girls in a class is 3:2 and there are 15 girls, how many boys are there?",
            a: "9",
            b: "12",
            c: "10",
            d: "8",
            correct: "a",
        },
        {
            question: "Simplify: (5 + 3) × (10 ÷ 2)",
            a: "16",
            b: "18",
            c: "20",
            d: "22",
            correct: "b",
        },
        {
            question: "What is the sum of all angles in a quadrilateral?",
            a: "180 degrees",
            b: "270 degrees",
            c: "360 degrees",
            d: "450 degrees",
            correct: "c",
        },
        {
            question: "Find the perimeter of a right triangle with legs of lengths 3 units and 4 units.",
            a: "10 units",
            b: "12 units",
            c: "14 units",
            d: "16 units",
            correct: "b",
        },
        {
            question: "Solve for x: 3x + 4 = 16",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "a",
        },
        {
            question: "What is the area of a rectangle with length 10 units and width 5 units?",
            a: "30 square units",
            b: "40 square units",
            c: "45 square units",
            d: "50 square units",
            correct: "b",
        },
        {
            question: "If a clock shows 2:30 PM, what is the angle between the hour and minute hands?",
            a: "60 degrees",
            b: "75 degrees",
            c: "90 degrees",
            d: "105 degrees",
            correct: "b",
        },
        {
            question: "If 30% of a number is 24, what is the number?",
            a: "80",
            b: "90",
            c: "100",
            d: "120",
            correct: "d",
        },
        {
            question: "Find the value of x: 2/3 = 4/x",
            a: "3",
            b: "5",
            c: "6",
            d: "8",
            correct: "c",
        },
        {
            question: "What is the perimeter of a regular hexagon with each side measuring 4 units?",
            a: "20 units",
            b: "22 units",
            c: "24 units",
            d: "26 units",
            correct: "c",
        },
        {
            question: "If an object travels at 50 km/h, how long will it take to travel 200 kilometers?",
            a: "4 hours",
            b: "5 hours",
            c: "6 hours",
            d: "7 hours",
            correct: "b",
        },
        {
            question: "Simplify: 3x + 2y - x - y",
            a: "2x + y",
            b: "2x - y",
            c: "4x + y",
            d: "4x - y",
            correct: "a",
        },
        {
            question: "If a triangle has angles measuring 30 degrees, 60 degrees, and 90 degrees, what is the length of the side opposite the 60-degree angle if the hypotenuse is 10 units?",
            a: "5 units",
            b: "5√3 units",
            c: "10 units",
            d: "10√3 units",
            correct: "b",
        },
        {
            question: "What is the solution to the equation 2x + 3 = 11?",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "b",
        },
        {
            question: "If 20% of a number is 15, what is 40% of the same number?",
            a: "25",
            b: "30",
            c: "35",
            d: "40",
            correct: "b",
        },
        {
            question: "Find the area of a trapezoid with bases measuring 5 units and 7 units, and a height of 4 units.",
            a: "24 square units",
            b: "28 square units",
            c: "32 square units",
            d: "36 square units",
            correct: "b",
        },
        {
            question: "If a store sells a product for $25 and makes a 20% profit, what is the selling price?",
            a: "$30",
            b: "$32",
            c: "$35",
            d: "$40",
            correct: "b",
        },
        {
            question: "Solve for x: 2(x - 3) = 10",
            a: "x = 5",
            b: "x = 6",
            c: "x = 7",
            d: "x = 8",
            correct: "a",
        },
        {
            question: "What is the volume of a cylinder with radius 2 units and height 6 units?",
            a: "24 cubic units",
            b: "36 cubic units",
            c: "48 cubic units",
            d: "64 cubic units",
            correct: "b",
        },
        {
            question: "If the perimeter of a rectangle is 36 units and the length is 12 units, what is the width?",
            a: "6 units",
            b: "8 units",
            c: "10 units",
            d: "12 units",
            correct: "a",
        },
        {
            question: "If the ratio of boys to girls in a class is 5:3 and there are 24 girls, how many boys are there?",
            a: "40",
            b: "45",
            c: "50",
            d: "55",
            correct: "c",
        },
        {
            question: "Simplify: (3/4) ÷ (2/3)",
            a: "9/8",
            b: "3/2",
            c: "4/9",
            d: "2/3",
            correct: "b",
        },
        {
            question: "If an item originally costs $80 and is discounted by 20%, what is the discounted price?",
            a: "$64",
            b: "$72",
            c: "$76",
            d: "$84",
            correct: "a",
        },
        {
            question: "Find the value of x in the proportion: 4/6 = x/9",
            a: "6",
            b: "5",
            c: "7",
            d: "8",
            correct: "b",
        },
        {
            question: "If a recipe calls for 2 cups of flour to make 24 cookies, how many cups of flour are needed to make 36 cookies?",
            a: "3 cups",
            b: "4 cups",
            c: "2.5 cups",
            d: "5 cups",
            correct: "a",
        },
        {
            question: "What is the area of a triangle with base 8 units and height 6 units?",
            a: "24 square units",
            b: "30 square units",
            c: "36 square units",
            d: "40 square units",
            correct: "b",
        },
        {
            question: "Solve for x: 2x - 5 = 15",
            a: "x = 5",
            b: "x = 10",
            c: "x = 15",
            d: "x = 20",
            correct: "b",
        },
        {
            question: "What is the volume of a cube with side length 3 units?",
            a: "9 cubic units",
            b: "18 cubic units",
            c: "27 cubic units",
            d: "36 cubic units",
            correct: "c",
        },
        {
            question: "If a shirt originally costs $25 and is on sale for 20% off, what is the sale price?",
            a: "$20",
            b: "$21",
            c: "$22",
            d: "$24",
            correct: "b",
        },
        {
            question: "If the ratio of boys to girls in a class is 3:2 and there are 15 girls, how many boys are there?",
            a: "9",
            b: "12",
            c: "10",
            d: "8",
            correct: "a",
        },
        {
            question: "Simplify: (5 + 3) × (10 ÷ 2)",
            a: "16",
            b: "18",
            c: "20",
            d: "22",
            correct: "b",
        },
        {
            question: "What is the sum of all angles in a quadrilateral?",
            a: "180 degrees",
            b: "270 degrees",
            c: "360 degrees",
            d: "450 degrees",
            correct: "c",
        },
        {
            question: "Find the perimeter of a right triangle with legs of lengths 3 units and 4 units.",
            a: "10 units",
            b: "12 units",
            c: "14 units",
            d: "16 units",
            correct: "b",
        },
        {
            question: "Solve for x: 3x + 4 = 16",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "a",
        },
        {
            question: "What is the area of a rectangle with length 10 units and width 5 units?",
            a: "30 square units",
            b: "40 square units",
            c: "45 square units",
            d: "50 square units",
            correct: "b",
        },
        {
            question: "If a clock shows 2:30 PM, what is the angle between the hour and minute hands?",
            a: "60 degrees",
            b: "75 degrees",
            c: "90 degrees",
            d: "105 degrees",
            correct: "b",
        },
        {
            question: "If 30% of a number is 24, what is the number?",
            a: "80",
            b: "90",
            c: "100",
            d: "120",
            correct: "d",
        },
        {
            question: "Find the value of x: 2/3 = 4/x",
            a: "3",
            b: "5",
            c: "6",
            d: "8",
            correct: "c",
        },
        {
            question: "What is the perimeter of a regular hexagon with each side measuring 4 units?",
            a: "20 units",
            b: "22 units",
            c: "24 units",
            d: "26 units",
            correct: "c",
        },
        {
            question: "If an object travels at 50 km/h, how long will it take to travel 200 kilometers?",
            a: "4 hours",
            b: "5 hours",
            c: "6 hours",
            d: "7 hours",
            correct: "b",
        },
        {
            question: "Simplify: 3x + 2y - x - y",
            a: "2x + y",
            b: "2x - y",
            c: "4x + y",
            d: "4x - y",
            correct: "a",
        },
        {
            question: "If a triangle has angles measuring 30 degrees, 60 degrees, and 90 degrees, what is the length of the side opposite the 60-degree angle if the hypotenuse is 10 units?",
            a: "5 units",
            b: "5√3 units",
            c: "10 units",
            d: "10√3 units",
            correct: "b",
        },
        {
            question: "What is the solution to the equation 2x + 3 = 11?",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "b",
        },
        {
            question: "If 20% of a number is 15, what is 40% of the same number?",
            a: "25",
            b: "30",
            c: "35",
            d: "40",
            correct: "b",
        },
        {
            question: "Find the area of a trapezoid with bases measuring 5 units and 7 units, and a height of 4 units.",
            a: "24 square units",
            b: "28 square units",
            c: "32 square units",
            d: "36 square units",
            correct: "b",
        },
        {
            question: "If a store sells a product for $25 and makes a 20% profit, what is the selling price?",
            a: "$30",
            b: "$32",
            c: "$35",
            d: "$40",
            correct: "b",
        },
        {
            question: "Solve for x: 2(x - 3) = 10",
            a: "x = 5",
            b: "x = 6",
            c: "x = 7",
            d: "x = 8",
            correct: "a",
        },
        {
            question: "What is the volume of a cylinder with radius 2 units and height 6 units?",
            a: "24 cubic units",
            b: "36 cubic units",
            c: "48 cubic units",
            d: "64 cubic units",
            correct: "b",
        },
        {
            question: "If the perimeter of a rectangle is 36 units and the length is 12 units, what is the width?",
            a: "6 units",
            b: "8 units",
            c: "10 units",
            d: "12 units",
            correct: "a",
        },
        {
            question: "If the ratio of boys to girls in a class is 5:3 and there are 24 girls, how many boys are there?",
            a: "40",
            b: "45",
            c: "50",
            d: "55",
            correct: "c",
        },
        {
            question: "Simplify: (3/4) ÷ (2/3)",
            a: "9/8",
            b: "3/2",
            c: "4/9",
            d: "2/3",
            correct: "b",
        },
        {
            question: "If an item originally costs $80 and is discounted by 20%, what is the discounted price?",
            a: "$64",
            b: "$72",
            c: "$76",
            d: "$84",
            correct: "a",
        },
        {
            question: "Find the value of x in the proportion: 4/6 = x/9",
            a: "6",
            b: "5",
            c: "7",
            d: "8",
            correct: "b",
        },
        {
            question: "If a recipe calls for 2 cups of flour to make 24 cookies, how many cups of flour are needed to make 36 cookies?",
            a: "3 cups",
            b: "4 cups",
            c: "2.5 cups",
            d: "5 cups",
            correct: "a",
        },
        {
            question: "What is the area of a triangle with base 8 units and height 6 units?",
            a: "24 square units",
            b: "30 square units",
            c: "36 square units",
            d: "40 square units",
            correct: "b",
        },
        {
            question: "Solve for x: 2x - 5 = 15",
            a: "x = 5",
            b: "x = 10",
            c: "x = 15",
            d: "x = 20",
            correct: "b",
        },
        {
            question: "What is the volume of a cube with side length 3 units?",
            a: "9 cubic units",
            b: "18 cubic units",
            c: "27 cubic units",
            d: "36 cubic units",
            correct: "c",
        },
        {
            question: "If a shirt originally costs $25 and is on sale for 20% off, what is the sale price?",
            a: "$20",
            b: "$21",
            c: "$22",
            d: "$24",
            correct: "b",
        },
        {
            question: "If the ratio of boys to girls in a class is 3:2 and there are 15 girls, how many boys are there?",
            a: "9",
            b: "12",
            c: "10",
            d: "8",
            correct: "a",
        },
        {
            question: "Simplify: (5 + 3) × (10 ÷ 2)",
            a: "40",
            b: "38",
            c: "20",
            d: "22",
            correct: "a",
        },
        {
            question: "What is the sum of all angles in a quadrilateral?",
            a: "180 degrees",
            b: "270 degrees",
            c: "360 degrees",
            d: "450 degrees",
            correct: "c",
        },
        {
            question: "Find the perimeter of a right triangle with legs of lengths 3 units and 4 units.",
            a: "10 units",
            b: "12 units",
            c: "14 units",
            d: "16 units",
            correct: "b",
        },
        {
            question: "Solve for x: 3x + 4 = 16",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "a",
        },
        {
            question: "What is the area of a rectangle with length 10 units and width 5 units?",
            a: "30 square units",
            b: "40 square units",
            c: "45 square units",
            d: "50 square units",
            correct: "b",
        },
        {
            question: "If a clock shows 2:30 PM, what is the angle between the hour and minute hands?",
            a: "60 degrees",
            b: "75 degrees",
            c: "90 degrees",
            d: "105 degrees",
            correct: "b",
        },
        {
            question: "If 30% of a number is 24, what is the number?",
            a: "80",
            b: "90",
            c: "100",
            d: "120",
            correct: "d",
        },
        {
            question: "Find the value of x: 2/3 = 4/x",
            a: "3",
            b: "5",
            c: "6",
            d: "8",
            correct: "c",
        },
        {
            question: "What is the perimeter of a regular hexagon with each side measuring 4 units?",
            a: "20 units",
            b: "22 units",
            c: "24 units",
            d: "26 units",
            correct: "c",
        },
        {
            question: "If an object travels at 50 km/h, how long will it take to travel 200 kilometers?",
            a: "4 hours",
            b: "5 hours",
            c: "6 hours",
            d: "7 hours",
            correct: "b",
        },
        {
            question: "Simplify: 3x + 2y - x - y",
            a: "2x + y",
            b: "2x - y",
            c: "4x + y",
            d: "4x - y",
            correct: "a",
        },
        {
            question: "If a triangle has angles measuring 30 degrees, 60 degrees, and 90 degrees, what is the length of the side opposite the 60-degree angle if the hypotenuse is 10 units?",
            a: "5 units",
            b: "5√3 units",
            c: "10 units",
            d: "10√3 units",
            correct: "b",
        },
        {
            question: "What is the solution to the equation 2x + 3 = 11?",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "b",
        },
        {
            question: "If 20% of a number is 15, what is 40% of the same number?",
            a: "25",
            b: "30",
            c: "35",
            d: "40",
            correct: "b",
        },
        {
            question: "Find the area of a trapezoid with bases measuring 5 units and 7 units, and a height of 4 units.",
            a: "24 square units",
            b: "28 square units",
            c: "32 square units",
            d: "36 square units",
            correct: "b",
        },
        {
            question: "If a store sells a product for $25 and makes a 20% profit, what is the selling price?",
            a: "$30",
            b: "$32",
            c: "$35",
            d: "$40",
            correct: "b",
        },
        {
            question: "Solve for x: 2(x - 3) = 10",
            a: "x = 5",
            b: "x = 6",
            c: "x = 7",
            d: "x = 8",
            correct: "a",
        },
        {
            question: "What is the volume of a cylinder with radius 2 units and height 6 units?",
            a: "24 cubic units",
            b: "36 cubic units",
            c: "48 cubic units",
            d: "64 cubic units",
            correct: "b",
        },
        {
            question: "If the perimeter of a rectangle is 36 units and the length is 12 units, what is the width?",
            a: "6 units",
            b: "8 units",
            c: "10 units",
            d: "12 units",
            correct: "a",
        },
        {
            question: "If the ratio of boys to girls in a class is 5:3 and there are 24 girls, how many boys are there?",
            a: "40",
            b: "45",
            c: "50",
            d: "55",
            correct: "c",
        },
        {
            question: "Simplify: (3/4) ÷ (2/3)",
            a: "9/8",
            b: "3/2",
            c: "4/9",
            d: "2/3",
            correct: "b",
        },
        {
            question: "If an item originally costs $80 and is discounted by 20%, what is the discounted price?",
            a: "$64",
            b: "$72",
            c: "$76",
            d: "$84",
            correct: "a",
        },
        {
            question: "Find the value of x in the proportion: 4/6 = x/9",
            a: "6",
            b: "5",
            c: "7",
            d: "8",
            correct: "b",
        },
        {
            question: "If a recipe calls for 2 cups of flour to make 24 cookies, how many cups of flour are needed to make 36 cookies?",
            a: "3 cups",
            b: "4 cups",
            c: "2.5 cups",
            d: "5 cups",
            correct: "a",
        },
        {
            question: "What is the area of a triangle with base 8 units and height 6 units?",
            a: "24 square units",
            b: "30 square units",
            c: "36 square units",
            d: "40 square units",
            correct: "b",
        },
        {
            question: "Solve for x: 2x - 5 = 15",
            a: "x = 5",
            b: "x = 10",
            c: "x = 15",
            d: "x = 20",
            correct: "b",
        },
        {
            question: "What is the volume of a cube with side length 3 units?",
            a: "9 cubic units",
            b: "18 cubic units",
            c: "27 cubic units",
            d: "36 cubic units",
            correct: "c",
        },
        {
            question: "If a shirt originally costs $25 and is on sale for 20% off, what is the sale price?",
            a: "$20",
            b: "$21",
            c: "$22",
            d: "$24",
            correct: "b",
        },
        {
            question: "If the ratio of boys to girls in a class is 3:2 and there are 15 girls, how many boys are there?",
            a: "9",
            b: "12",
            c: "10",
            d: "8",
            correct: "a",
        },
        {
            question: "Simplify: (5 + 3) × (10 ÷ 2)",
            a: "16",
            b: "18",
            c: "20",
            d: "22",
            correct: "b",
        },
        {
            question: "What is the sum of all angles in a quadrilateral?",
            a: "180 degrees",
            b: "270 degrees",
            c: "360 degrees",
            d: "450 degrees",
            correct: "c",
        },
        {
            question: "Find the perimeter of a right triangle with legs of lengths 3 units and 4 units.",
            a: "10 units",
            b: "12 units",
            c: "14 units",
            d: "16 units",
            correct: "b",
        },
        {
            question: "Solve for x: 3x + 4 = 16",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "a",
        },
        {
            question: "What is the area of a rectangle with length 10 units and width 5 units?",
            a: "30 square units",
            b: "40 square units",
            c: "45 square units",
            d: "50 square units",
            correct: "b",
        },
        {
            question: "If a clock shows 2:30 PM, what is the angle between the hour and minute hands?",
            a: "60 degrees",
            b: "75 degrees",
            c: "90 degrees",
            d: "105 degrees",
            correct: "b",
        },
        {
            question: "If 30% of a number is 24, what is the number?",
            a: "80",
            b: "90",
            c: "100",
            d: "120",
            correct: "d",
        },
        {
            question: "Find the value of x: 2/3 = 4/x",
            a: "3",
            b: "5",
            c: "6",
            d: "8",
            correct: "c",
        },
        {
            question: "What is the perimeter of a regular hexagon with each side measuring 4 units?",
            a: "20 units",
            b: "22 units",
            c: "24 units",
            d: "26 units",
            correct: "c",
        },
        {
            question: "If an object travels at 50 km/h, how long will it take to travel 200 kilometers?",
            a: "4 hours",
            b: "5 hours",
            c: "6 hours",
            d: "7 hours",
            correct: "b",
        },
        {
            question: "Simplify: 3x + 2y - x - y",
            a: "2x + y",
            b: "2x - y",
            c: "4x + y",
            d: "4x - y",
            correct: "a",
        },
        {
            question: "If a triangle has angles measuring 30 degrees, 60 degrees, and 90 degrees, what is the length of the side opposite the 60-degree angle if the hypotenuse is 10 units?",
            a: "5 units",
            b: "5√3 units",
            c: "10 units",
            d: "10√3 units",
            correct: "b",
        },
        {
            question: "What is the solution to the equation 2x + 3 = 11?",
            a: "x = 4",
            b: "x = 5",
            c: "x = 6",
            d: "x = 7",
            correct: "b",
        },
        {
            question: "If 20% of a number is 15, what is 40% of the same number?",
            a: "25",
            b: "30",
            c: "35",
            d: "40",
            correct: "b",
        },
        {
            question: "Find the area of a trapezoid with bases measuring 5 units and 7 units, and a height of 4 units.",
            a: "24 square units",
            b: "28 square units",
            c: "32 square units",
            d: "36 square units",
            correct: "b",
        },
        {
            question: "If a store sells a product for $25 and makes a 20% profit, what is the selling price?",
            a: "$30",
            b: "$32",
            c: "$35",
            d: "$40",
            correct: "b",
        },
        {
            question: "Solve for x: 2(x - 3) = 10",
            a: "x = 5",
            b: "x = 6",
            c: "x = 7",
            d: "x = 8",
            correct: "a",
        },
        {
            question: "What is the volume of a cylinder with radius 2 units and height 6 units?",
            a: "24 cubic units",
            b: "36 cubic units",
            c: "48 cubic units",
            d: "64 cubic units",
            correct: "b",
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
    const selectedQuestions = shuffleArray(mathQuestions).slice(0, 10);
    
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