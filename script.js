var showingError = document.querySelector(":root");
var borderChange = document.getElementById("input");
function validation (){
    var gettingEmail = document.getElementById("input");
    if(gettingEmail.value.includes("@")){
        showingError.style.setProperty('--showing', 'none');
        showingError.style.setProperty('--error', 'none');
        borderChange.style.border = "1.5px solid hsl(0, 31%, 81%)";
        alert("EMAIL SUBMITED");
    }else{
        showingError.style.setProperty('--showing', 'block');
        showingError.style.setProperty('--error', 'block');
        
        borderChange.style.border = "1.5px solid red";
    }
    
    
}