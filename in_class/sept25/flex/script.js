"using script"

function toggleNav(){
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden");

}

function togglePara(){
    console.log("again toggling...");

    const moreInfo = document.getElementById("moreInfo");
    moreInfo.hidden = !moreInfo.hidden;

    return false; //don't do default behavior
}

function validateFirstName(){
    //if the error is showing remove it
    let errorSpan = document.getElementById("error-first-name");

    if(errorSpan != null) {
        errorSpan.remove();
    }

    //show an error when value is blank
    if(this.value.trim() == ""){
        console.log("WRITE SOMETHING!");
        const errorSpan=document.createElement("span");
        errorSpan.id = "error-first-name;"
        errorSpan.innerHTML = "* Blank";
        errorSpan.classList.add("error");
        this.after(errorSpan);
    }

}

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;

    //hide more info paragraph on page load
    const moreInfo = document.getElementById("moreInfo");
    //moreInfo.classList.add("hidden");
    moreInfo.hidden = true;

    const expandLink = document.getElementById("expand-link");
    expandLink.onclick = togglePara;

    const firstNAmeTB = document.getElementById("txt-first-name");
    firstNAmeTB.addEventListener("keyup", validateFirstName);
}

