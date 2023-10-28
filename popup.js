window.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("blueSquare").addEventListener("click", function(event) {
        
        if (event.target !== document.getElementById("odd2Input")) {
            document.getElementById("odd1Input").focus();
        }
    });

    document.getElementById("redSquare").addEventListener("click", function(event2) {
        
        if (event2.target !== document.getElementById("odd4Input") && event2.target !== document.getElementById("odd5Input")) {
            document.getElementById("odd3Input").focus();
        }
    }); 

});  
