let pickedFile = false;
let pickedPosition = false;

document.getElementById("file-picker").addEventListener("change", (evt) => {
    console.log("picked file name:", evt.target.value); //prints fakepath - can get filename through: HTMLInputElement.files 

    // imgTag = '<img src="anyLogo.png" style="">';
    imgElement = document.createElement("img");
    
    pickedFile = true;
});

document.getElementById("upload-btn").addEventListener("click", (evt) => {

    document.getElementById("top").innerHTML = "";
    document.getElementById("bottom").innerHTML="";

    if (pickedFile === true) {
        console.log("rätt, printa");

        let selectElementValue = document.querySelector("#logo-position").value;
        console.log("selectElementValue", selectElementValue);
    
        //add or replace className to imgElement so it only can be one className
        if (imgElement.classList[0] === undefined || selectElementValue == imgElement.classList[0]) {
            imgElement.classList.add(selectElementValue);
            console.log("Position it with a style attributes:", imgElement.style.backgroundColor = "red");
        } else {
            imgElement.classList.replace(imgElement.classList[0], selectElementValue);
            console.log("Position it with a style attributes:", imgElement.style.backgroundColor = "blue");
        };

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

    } else {
        console.log("errorMsg = Du måste välja vilken fil du vill ladda upp.");
    };
    
});

//Position it with a style attributes.
//add errorMsg if not choosing dropdown?
//mobileview (i.e. fix prints fakepath - can get filename through: HTMLInputElement.files )