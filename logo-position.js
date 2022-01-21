let pickedFile = false; //change to isPickedFile
let pickedPosition = false; //change to isPickedPosition
let cssTextImgTag; //change to cssTextLogo
let cssTextImgContainer; //change to cssTextLogoContainer
let srcPath;
let url;
let logoContainer = document.getElementById("logo-container");
let logo;
let logoPositionDropDown = document.querySelector("#logo-position"); //after first render: 
let pickedLogoPosition;

//change name to logoPosition (insted of selectElementValue)
let selectElementValue = document.querySelector("#logo-position").value; //after first render: top-left
let logoToString; //used when check isTop

console.log("selectElementValue after first render", selectElementValue);
//create css strings to logo and container elements depending on picked position in dropdown
function addStyleAttr(selectElementValue) {
    switch (selectElementValue) {
        case "top-left":
            cssTextImgTag = "width: 50%";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start; justify-content: flex-start;";
        break;
        case "top-center": 
            cssTextImgTag = "width: 50%";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start; justify-content: center;";
        break;
        case "top-right": 
            cssTextImgTag = "width: 50%";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start; justify-content: flex-end;";
        break;
        case "bottom-left":
            cssTextImgTag = "width: 50%;";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end; justify-content: flex-start;";
        break;
        case "bottom-center": 
            cssTextImgTag = "width: 50%;";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end; justify-content: center;";
        break;
        case "bottom-right": 
            cssTextImgTag = "width: 50%;";
            cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end; justify-content: flex-end;";
        break;
        default:
            break;
    };
    logo.style.cssText = cssTextImgTag;
    logoContainer.style.cssText = cssTextImgContainer;
};

function emptyTextareas() {
    document.getElementById("top").innerHTML = "";
    document.getElementById("bottom").innerHTML="";
};

function checkIfTop(selectElementValue, logoToString) {
    console.log("hej från checkIfTop. selectElementValue:", selectElementValue, "logoToString", logoToString);
    let isTop = selectElementValue.includes("top");
    if (isTop) {
        //print in top 
        document.getElementById("top").innerHTML = logoToString; //change to logoContainerToString
    } else {
        //print in bottom 
        document.getElementById("bottom").innerHTML = logoToString; //change to logoContainerToString
    };
};

document.getElementById("upload-btn").addEventListener("click", function(evt) {

    emptyTextareas();

    if (pickedFile === true) {        
        if (pickedPosition === true) {
            addStyleAttr(pickedLogoPosition);
        } else {
            addStyleAttr(selectElementValue);
        };
        
        //logoToString should be both logoContainer div and logo img tag -> toString -> print in textArea - TODO: START HERE!!       
        logoToString = logo.outerHTML;
        console.log("logo", typeof logo);
        let logoContainerToString = logo.closest("div");
        //istället för img också ha imgContainer incl img
        console.log("logoContainer", logoContainer);
        console.log("logoContainerToString parent and child?", logoContainerToString);
        //https://stackoverflow.com/questions/27659580/get-the-parent-element-html-along-with-child-content/27659639

        //check if picked position is top or bottom textarea: 
        if (pickedPosition === true) {
            console.log("läsa av pickedvalue i dropdown-fältet", pickedLogoPosition);
            checkIfTop(pickedLogoPosition, logoToString);
            logoContainer.innerHTML = logoToString;
        } else {
            checkIfTop(selectElementValue, logoToString);
            // logoContainer.appendChild(logo); 
            logoContainer.innerHTML = logoToString;
        };

    } else {
        console.log("errorMsg = Du måste välja vilken fil du vill ladda upp.");
    };
});

document.getElementById("file-picker").addEventListener("change", function(evt) {
    emptyTextareas();

    srcPath = evt.target.value; //get dynamically
    srcPath = "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"; //static

    logo = document.createElement("img");
    let file = evt.target.files[0];

    //show errorMsg if file is not an img
    if (file.type && !file.type.startsWith('image/')) {
        console.log('show errorMsg: file is not an image.', file.type, file);
    return;
    };
    pickedFile = true;

    //add src attr to img tag
    logo.src = srcPath; 	
});

logoPositionDropDown.addEventListener("change", function(evt) {
    emptyTextareas(); 

    pickedLogoPosition = evt.target.value;
    console.log("pickedLogoPosition in dropdown:", pickedLogoPosition);

    if (pickedFile === true) {
        console.log("printa ändring i bild med position:", pickedLogoPosition);
        addStyleAttr(pickedLogoPosition);
        pickedPosition = true;

        //add change check if top or bottom so rätt printas i rätt textarea

        if (logoToString !== undefined) {
            checkIfTop(pickedLogoPosition, logoToString);
        } else {
            console.log("du måste ladda upp bild för att kunna se - ej ha som errromsg utan bara för nu");
        };
    } else {
        console.log("errorMsg: Du måste välja en fil innan du kan välja position");
    };
});