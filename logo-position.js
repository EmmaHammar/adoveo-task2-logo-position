let pickedFile = false;
let pickedPosition = false;
let addStyle;
let fileName;

//TODO - delete:
resultContainer.style.cssText = "background: pink; width:60%; height:300px;";

document.getElementById("file-picker").addEventListener("change", (evt) => {
    console.log("picked file name:", evt.target.value); //prints fakepath 
    // fileName = evt.target.value;
    fileName = "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"; //ska vara dynamisk
    // fileName = "Logga.png";
    
    imgElement = document.createElement("img");
    addSrcAttr(fileName);
    pickedFile = true;
});

const addSrcAttr = (fileName) => {
    imgElement.src = fileName;
};

const addStyleAttr = (selectElementValue) => {
    switch (selectElementValue) {
        case "top-left":
            console.log("case top-left");
            addStyle = "width:100%; height:100%; object-fit:cover;";
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
    imgElement.style.cssText = addStyle;
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
            
        } else {
            imgElement.classList.replace(imgElement.classList[0], selectElementValue);
            
            //create styleAttr + add to imgElement
            addStyleAttr(selectElementValue);
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

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.appendChild(imgElement);
    
});

//vad behöver srcString vara för att kunna visa bilden? https://stackoverflow.com/questions/18457340/how-to-preview-selected-image-in-input-type-file-in-popup-using-jquery
//print the img when click upload logo (i.e. fix prints fakepath - can get filename through: HTMLInputElement.files )
//add right css-text

//add errorMsg if not choosing dropdown?
//mobileview 