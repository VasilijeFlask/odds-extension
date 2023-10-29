window.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("blueSquare").addEventListener("click", function(event) {
        
        if (event.target !== document.getElementById("odd2Input")) {
            document.getElementById("odd1Input").focus();
        }
    });

    // Add event listener for the first "bet" button
    document.querySelector(".odd-1 button").addEventListener("click", function() {
        let odd1Value = document.getElementById("odd1Input").value;
        let odd2Value = document.getElementById("odd2Input").value;
        
        console.log("Odd 1 Value:", odd1Value);  // Just for debugging, you can remove this line if not needed
        console.log("Odd 2 Value:", odd2Value);  // Just for debugging, you can remove this line if not needed

        if (odd1Value && odd2Value && !isNaN(odd1Value) && !isNaN(odd2Value)) {
            let m = ((1/odd1Value) + (1/odd2Value)) - 1;
            console.log("M Value (odd-1 button):", m);
        }
    });

    // Add event listener for the second "bet" button
    document.querySelector(".odd-2 button").addEventListener("click", function() {
        let odd1Value = document.getElementById("odd1Input").value;
        let odd2Value = document.getElementById("odd2Input").value;

        if (odd1Value && odd2Value && !isNaN(odd1Value) && !isNaN(odd2Value)) {
            let m = ((1/odd1Value) + (1/odd2Value)) - 1;
            console.log("M Value (odd-2 button):", m);
        }
    });



    // Red Square
    document.getElementById("redSquare").addEventListener("click", function(event2) {
        if (event2.target !== document.getElementById("odd4Input") && event2.target !== document.getElementById("odd5Input")) {
            document.getElementById("odd3Input").focus();
        }
    }); 

});
