// let imgTag;
let pickedFile = false;
let pickedPosition = false;

document.getElementById("file-picker").addEventListener("change", (evt) => {
    console.log("picked file name:", evt.target.value); //prints fakepath - can get filename through: HTMLInputElement.files 

    // imgTag = '<img src="anyLogo.png" style="">';
    imgElement = document.createElement("img");
    
    pickedFile = true;
})




// document.getElementById("logo-position").addEventListener("click", (evt) => {
//     console.log("klick dropdown", evt.target);
// })

document.getElementById("upload-btn").addEventListener("click", (evt) => {

    document.getElementById("top").innerHTML = "";
    document.getElementById("bottom").innerHTML="";

    if (pickedFile === true) {
        console.log("rätt, printa");

        let selectElementValue = document.querySelector("#logo-position").value;
        console.log("selectElementValue", selectElementValue);
    
        //FIX SO ELEMENT ONLY CAN HAVE 1 class? Or at least so element can't get many classes
        if (imgElement.classList[0] === undefined || selectElementValue == imgElement.classList[0]) {
            console.log("SAMMA");
            imgElement.classList.add(selectElementValue);
        } else {
            console.log("INTE SAMMA");
            imgElement.classList.replace(imgElement.classList[0], selectElementValue);
        }

        let imgElementToString = imgElement.outerHTML;

        //decide in which textarea to print the img tag
        //check if top or bottom:
        let isTop = selectElementValue.includes("top");
        if (isTop) {
            //print in top textarea
            document.getElementById("top").innerHTML = imgElementToString;
        } else {
            //print in bottom textarea
            document.getElementById("bottom").innerHTML = imgElementToString;
        };
        console.log("vad är klassnamnet?", imgElement.classList[0] );



    } else {
        console.log("errorMsg = Du måste välja vilken fil du vill ladda upp.");
    }
    

})

//fix so an img only can have 1 class?
//add errorMsg if not choosing dropdown?