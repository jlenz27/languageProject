// user Interface Logic

function hideResults() {
    document.getElementById("error-message").setAttribute("class", "hidden");
    document.getElementById("sarah").setAttribute("class", "hidden");
    document.getElementById("ashley").setAttribute("class", "hidden");
    document.getElementById("emily").setAttribute("class", "hidden");
    document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const age = parseInt(document.querySelector("input#age").value);
        const height = parseInt(document.querySelector("input#height").value);

        
        if (age && height) {

            if (age >= 50 && height >= 150) {
                document.getElementById("sarah").removeAttribute("class");

            } else if (age >= 35 && height >= 95) {
                document.getElementById("ashley").removeAttribute("class");

            } else if (age >= 20 && height >= 50) {
                document.getElementById("emily").removeAttribute("class");

            } else {
                document.getElementById("sorry").removeAttribute("class");
            }
        } else {
            document.getElementById("error-message").removeAttribute("class");
        }


    };
};