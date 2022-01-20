let pickedFile = false;
let pickedPosition = false;
let addStyle;

document.getElementById("file-picker").addEventListener("change", (evt) => {
    console.log("picked file name:", evt.target.value); //prints fakepath - can get filename through: HTMLInputElement.files 

    // imgTag = '<img src="anyLogo.png" style="">';
    imgElement = document.createElement("img");
    
    pickedFile = true;
});



const addStyleAttr = (selectElementValue) => {
    switch (selectElementValue) {
        case "top-left":
            console.log("case top-left");
            addStyle = "position: relative;";
        break;
        case "top-center": 
            console.log("case top-center");
            addStyle = "display: block; margin-left: auto; margin-right: auto; width: 50%";
        break;
        case "top-right": 
            console.log("case top-right");
        break;
        case "bottom-left":
            console.log("case bottom-left");
        break;
        case "bottom-center": 
            console.log("case bottom-center");
        break;
        case "bottom-right": 
            console.log("case bottom-right");
        break;
        default:
            break;
    };
};

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

            //create styleAttr + add to imgElement
            addStyleAttr(selectElementValue);
            imgElement.style.cssText = addStyle;
        } else {
            imgElement.classList.replace(imgElement.classList[0], selectElementValue);
            
            //create styleAttr + add to imgElement
            addStyleAttr(selectElementValue);
            imgElement.style.cssText = addStyle;
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

//print the img when click upload logo (i.e. fix prints fakepath - can get filename through: HTMLInputElement.files )
//add right css-text

//add errorMsg if not choosing dropdown?
//mobileview 