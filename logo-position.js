let pickedFile = false;
let pickedPosition = false;
let cssTextImgTag;
let cssTextImgContainer;
let fileName;
let logoContainer = document.getElementById("logoContainer");

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

            //ADD? hämta size-värdet av logo + keep dimensions:

            //create css strings to tag and container
            cssTextImgTag = "width: 50%";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start;";
            
        break;
        case "top-center": 
            cssTextImgTag = "display: block; margin-left: auto; margin-right: auto; width: 50%;";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start;";
        break;
        case "top-right": 
            cssTextImgTag = "width: 50%; position: absolute; right: 0px;";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start; position: relative;";
        break;
        case "bottom-left":
            cssTextImgTag = "width: 50%;";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end;";
        break;
        case "bottom-center": 
            cssTextImgTag = "display: block; margin-left: auto; margin-right: auto; width: 50%;";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end;";
        break;
        case "bottom-right": 
            cssTextImgTag = "width: 50%; position: absolute; right: 0px;";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end; position: relative;";
        break;
        default:
            break;
    };
    imgElement.style.cssText = cssTextImgTag;
    logoContainer.style.cssText = cssTextImgContainer;
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

    logoContainer.appendChild(imgElement); //sometimes get error: Uncaught ReferenceError: imgElement is not defined - lägga till async att imgElement måste fyllas innan detta körs?
 
});

//vad behöver srcString vara för att kunna visa bilden? https://stackoverflow.com/questions/18457340/how-to-preview-selected-image-in-input-type-file-in-popup-using-jquery
//print the img when click upload logo (i.e. fix prints fakepath - can get filename through: HTMLInputElement.files )
//add right css-text

//add errorMsg if not choosing dropdown?
//mobileview 