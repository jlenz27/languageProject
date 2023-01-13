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
        // const age = parseInt(document.querySelector("input#age").value);
        const radioSelection = document.querySelector("input[name='favColor']:checked").value

        
        if(radioSelection === "red"){
            document.getElementById("java").removeAttribute("class");        

        }else if (radioSelection === "green"){
            document.getElementById("html").removeAttribute("class");        

        }else if (radioSelection === "yellow"){
            document.getElementById("python").removeAttribute("class");      

        }
    

        document.getElementById("userInfo").reset();
};
};
        