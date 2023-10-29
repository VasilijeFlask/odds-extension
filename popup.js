window.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("blueSquare").addEventListener("click", function(event) {
        if (event.target !== document.getElementById("odd2Input")) {
            document.getElementById("odd1Input").focus();

            document.getElementById("odd1Input").addEventListener("focus", function() {
                this.select();
            });

        }
    });

    // Add event listener for the first "bet" button
    document.querySelector(".odd-1 button").addEventListener("click", function() {
        let odd1Value = document.getElementById("odd1Input").value;
        let odd2Value = document.getElementById("odd2Input").value;

        if (odd1Value && odd2Value && !isNaN(odd1Value) && !isNaN(odd2Value)) {
            let m = ((1/odd1Value) + (1/odd2Value)) - 1;
            let teamOne = ((2 * odd1Value) / (2 - (m * odd1Value))) * 1.023;
            document.getElementById("result").textContent = "Over: " + teamOne.toFixed(2)
        }
    });

    // Add event listener for the second "bet" button
    document.querySelector(".odd-2 button").addEventListener("click", function() {
        let odd1Value = document.getElementById("odd1Input").value;
        let odd2Value = document.getElementById("odd2Input").value;

        if (odd1Value && odd2Value && !isNaN(odd1Value) && !isNaN(odd2Value)) {
            let m = ((1/odd1Value) + (1/odd2Value)) - 1;
            let teamTwo = ((2 * odd2Value) / (2 - (m * odd2Value)) * 1.023);
            document.getElementById("result").textContent = "Over: " + teamTwo.toFixed(2)
        }
    });

    // Add the new event listener for odd1Input
    document.getElementById("odd1Input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("odd2Input").focus();
        }
    });

    // Add the new event listener for odd2Input
    document.getElementById("odd2Input").addEventListener("focus", function() {
        this.select();
    });







    // Red Square
    document.getElementById("redSquare").addEventListener("click", function(event2) {
        if (event2.target !== document.getElementById("odd4Input") && event2.target !== document.getElementById("odd5Input")) {
            document.getElementById("odd3Input").focus();

            document.getElementById("odd3Input").addEventListener("focus", function() {
                this.select();
            });
        }
    }); 

    // Add event listener for the third "bet" button
    document.querySelector(".odd-3 button").addEventListener("click", function() {
        let odd3Value = document.getElementById("odd3Input").value;
        let odd4Value = document.getElementById("odd4Input").value;
        let odd5Value = document.getElementById("odd5Input").value;

        if (odd3Value && odd4Value && odd5Value && !isNaN(odd3Value) && !isNaN(odd4Value) && !isNaN(odd5Value)) {
            let m = ((1/odd3Value) + (1/odd4Value) + (1/odd5Value)) - 1;
            let teamOne = ((3 * odd3Value) / (3 - (m * odd3Value))) * 1.023;
            document.getElementById("result2").textContent = "Over: " + teamOne.toFixed(2)
        }
    });

    // Add event listener for the fourth "bet" button
    document.querySelector(".odd-4 button").addEventListener("click", function() {
        let odd3Value = document.getElementById("odd3Input").value;
        let odd4Value = document.getElementById("odd4Input").value;
        let odd5Value = document.getElementById("odd5Input").value;

        if (odd3Value && odd4Value && odd5Value && !isNaN(odd3Value) && !isNaN(odd4Value) && !isNaN(odd5Value)) {
            let m = ((1/odd3Value) + (1/odd4Value) + (1/odd5Value)) - 1;
            let teamOne = ((3 * odd4Value) / (3 - (m * odd4Value))) * 1.023;
            document.getElementById("result2").textContent = "Over: " + teamOne.toFixed(2)
        }
    });

    // Add event listener for the fifth "bet" button
    document.querySelector(".odd-5 button").addEventListener("click", function() {
        let odd3Value = document.getElementById("odd3Input").value;
        let odd4Value = document.getElementById("odd4Input").value;
        let odd5Value = document.getElementById("odd5Input").value;

        if (odd3Value && odd4Value && odd5Value && !isNaN(odd3Value) && !isNaN(odd4Value) && !isNaN(odd5Value)) {
            let m = ((1/odd3Value) + (1/odd4Value) + (1/odd5Value)) - 1;
            let teamOne = ((3 * odd5Value) / (3 - (m * odd5Value))) * 1.023;
            document.getElementById("result2").textContent = "Over: " + teamOne.toFixed(2)
        }
    });



    // Add the new event listener for odd3Input
    document.getElementById("odd3Input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("odd4Input").focus();
        }
    });
    
    // Add the new event listener for odd4Input
    document.getElementById("odd4Input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("odd5Input").focus();
        }
    });
    
    document.getElementById("odd4Input").addEventListener("focus", function() {
        this.select();
    });
    
    document.getElementById("odd5Input").addEventListener("focus", function() {
        this.select();
    });

    
});
