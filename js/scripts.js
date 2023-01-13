// user Interface Logic

function hideResults() {
    document.getElementById("error-message").setAttribute("class", "hidden");
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("html").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const age = parseInt(document.querySelector("input#age").value);
        const height = parseInt(document.querySelector("input#height").value);
        const radioSelection = document.querySelector("input[name='fav_color']:checked").value

        
        if(radioSelection === "yellow"){
            document.getElementById("python").removeAttribute("class");        }
        
        
        
        // if (age && height) {

        //     if (age >= 50 && height >= 150) {
        //         document.getElementById("java").removeAttribute("class");

        //     } else if (age >= 35 && height >= 95) {
        //         document.getElementById("html").removeAttribute("class");

        //     } else if (age >= 20 && height >= 50) {
        //         document.getElementById("python").removeAttribute("class");

        //     } else {
        //         document.getElementById("sorry").removeAttribute("class");
        //     }
        // } else {
        //     document.getElementById("error-message").removeAttribute("class");
        // }


    };
};