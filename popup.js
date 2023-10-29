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

    // Red Square
    document.getElementById("redSquare").addEventListener("click", function(event2) {
        if (event2.target !== document.getElementById("odd4Input") && event2.target !== document.getElementById("odd5Input")) {
            document.getElementById("odd3Input").focus();
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
    
});
