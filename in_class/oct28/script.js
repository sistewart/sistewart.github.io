async function special(){
    console.log("In special beginning");
    let result = await setTimeout(doStuff, 2000);
    console.log("in special ending");
}

function doStuff(){
    console.log("in do stuff");
}

window.onload = function(){
    this.console.log("Befoe calling special");
    this.special();
    this.console.log("after calling special");
}