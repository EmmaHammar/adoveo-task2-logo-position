let pickedFile = false;
let pickedPosition = false; //TODO add this
let cssTextImgTag; //byt namn till cssTextLogo
let cssTextImgContainer; //byt namn till cssTextLogoContainer
let srcPath;
let url;
let logoContainer = document.getElementById("logoContainer");
let logo;

document.getElementById("file-picker").addEventListener("change", (evt) => {
    emptyTextareas();

    srcPath = evt.target.value; //get dynamically
    srcPath = "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"; //static
    console.log("srcPath", srcPath);

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
    console.log("logo", logo);
});

//create css strings to logo and container elements depending on picked position in dropdown
const addStyleAttr = (selectElementValue) => {
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

const emptyTextareas = () => {
    document.getElementById("top").innerHTML = "";
    document.getElementById("bottom").innerHTML="";
};

document.getElementById("upload-btn").addEventListener("click", (evt) => {

    emptyTextareas();

    if (pickedFile === true) {
        // console.log("rätt, printa");

        let selectElementValue = document.querySelector("#logo-position").value;
        // console.log("selectElementValue", selectElementValue);
    
        addStyleAttr(selectElementValue);

        
        //logoToString should be both logoContainer div and logo img tag -> toString -> print in textArea - TODO: START HERE!!       
        let logoToString = logo.outerHTML;
        console.log("logo", typeof logo);
        let logoContainerToString = logo.closest("div");
        //istället för img också ha imgContainer incl img
        console.log("logoContainer", logoContainer);
        console.log("logoContainerToString parent and child?", logoContainerToString);
        //https://stackoverflow.com/questions/27659580/get-the-parent-element-html-along-with-child-content/27659639

        


        //check if picked position is top or bottom textarea: 
        let isTop = selectElementValue.includes("top");
        if (isTop) {
            //print in top 
            document.getElementById("top").innerHTML = logoToString; //change to logoContainerToString


        } else {
            //print in bottom 
            document.getElementById("bottom").innerHTML = logoToString; //change to logoContainerToString
        };

    } else {
        console.log("errorMsg = Du måste välja vilken fil du vill ladda upp.");
    };

    logoContainer.appendChild(logo); 
});