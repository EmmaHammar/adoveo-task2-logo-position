//TODO + QUESTIONS
//use value of dropdown insted of class
//vad behöver srcString vara för att kunna visa bilden? https://stackoverflow.com/questions/18457340/how-to-preview-selected-image-in-input-type-file-in-popup-using-jquery
//print the img when click upload logo (i.e. fix prints fakepath - can get filename through: HTMLInputElement.files )
//add right css-text

//add errorMsg if not choosing dropdown?
//mobileview 

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file

//ADD? hämta size-värdet av logo + keep dimensions i switch cases?


//Q:
//do I need to have different src in imgElement in textarea vs for the img tag so the pic can be shown? 
        
        
        
        // SAVE FOR LATER
//FILEREADER INPUT TYPE FILE: 
    //read url and print logo - NOT WORKING
    // let reader = new FileReader();
    // reader.addEventListener("load", (e) => {
    //     console.log("e in fileReader:", e.target.result);
    //     url = e.target.result;
    //     // imgElement.src = url; //this only shows "data:......"
    // });

    // // reader.readAsText(file);
    // reader.readAsDataURL(file);

//AIM: AN ELEMENT CAN ONLY HAVE 1 CLASS
//CHECK IF CLASSNAME EXISTS IN ELEMENT. IF NOT -> OK ADD CLASS, IF EXIST -> REPLACE THE OLD CLASS WITH THE NEW. 
        // //add or replace className to imgElement so it only can be one className
        // if (imgElement.classList[0] === undefined || selectElementValue == imgElement.classList[0]) {
        //     imgElement.classList.add(selectElementValue);

        //     //create styleAttr + add to imgElement
        //     addStyleAttr(selectElementValue);
        // } else {
        //     imgElement.classList.replace(imgElement.classList[0], selectElementValue);
            
        //     //create styleAttr + add to imgElement
        //     addStyleAttr(selectElementValue);
        // };



//backup





let pickedFile = false; //change to isPickedFile
let pickedPosition = false; //change to isPickedPosition
let cssTextImgTag; //change to cssTextLogo
let cssTextImgContainer; //change to cssTextLogoContainer
// let srcPath;
let url;
let logoContainer = document.getElementById("logo-container");
let logo;
let logoPositionDropDown = document.querySelector("#logo-position"); //change to positionPicker
let pickedLogoPosition; 

//change name to logoPosition (insted of selectElementValue)
let selectElementValue = document.querySelector("#logo-position").value; 
let logoToString; //used when check isTop

//create css strings to logo and container elements depending on picked position in dropdown
function addStyleAttr(selectElementValue) {
    switch (selectElementValue) {
        case "top-left":
            cssTextImgTag = "width: 20%; margin-top: 4%;";
            // cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start; justify-content: flex-start;";
            cssTextImgContainer = "text-align:left;";
        break;
        case "top-center": 
            cssTextImgTag = "width: 20%; margin-top: 4%;";
            // cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start; justify-content: center;";
            cssTextImgContainer = "text-align:center;";

        break;
        case "top-right": 
            cssTextImgTag = "width: 20%; margin-top: 4%;";
            // cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-start; justify-content: flex-end;";
            cssTextImgContainer = "text-align:right;";

        break;
        case "bottom-left":
            // cssTextImgTag = "width: 50%;";
            // cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end; justify-content: flex-start;";
            cssTextImgTag = "width: 20%; position: absolute; bottom: 0px; margin-bottom: 4%;";
            cssTextImgContainer = "text-align:left;";            
        break;
        case "bottom-center": 
            // cssTextImgTag = "width: 50%;";
            // cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end; justify-content: center;";
            cssTextImgTag = "width: 20%; position: absolute; bottom:0; margin-bottom: 4%;";
            cssTextImgContainer = "text-align:center; padding-right:10%;";
        break;
        case "bottom-right": 
            // cssTextImgTag = "width: 50%;";
            // cssTextImgContainer = "border: 1px solid black; width:390px; height:844px; display:flex; align-items: flex-end; justify-content: flex-end;";
            cssTextImgTag = "width: 20%; position: absolute; bottom: 0px;margin-bottom: 4%;";
            cssTextImgContainer = "text-align: right; padding-right: 12%;";

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
    // console.log("hej från checkIfTop. selectElementValue:", selectElementValue, "logoToString", logoToString);
    let isTop = selectElementValue.includes("top");
    if (isTop) {
        //print in top 
        document.getElementById("top").innerHTML = logoContainerToString; //change to logoContainerToString
    } else {
        //print in bottom 
        document.getElementById("bottom").innerHTML = logoContainerToString; //change to logoContainerToString
    };
};

document.getElementById("upload-btn").addEventListener("click", function(evt) {
    emptyTextareas();
    logoContainerToString="";
    logoToStringAndDivEndtag="";

    if (pickedFile === true) {        
        if (pickedPosition === true) {
            addStyleAttr(pickedLogoPosition);
        } else {
            addStyleAttr(selectElementValue);
        };

        //KVAR logoContainerToString töms ej korrekt när man ändrar i dropdown samt vid klick upload btn: 
        //string logoContainer tag and logo tag (print in textArea)
        logoContainerToString = logoContainer.outerHTML;
        logoContainerToString = logoContainerToString.split("</div>"); //split div start tag and end tag into arr
        logoToString = logo.outerHTML;
        let logoToStringAndDivEndtag = logoToString+"</div>"; //add div end tag to img tag
        logoContainerToString = logoContainerToString[0] + logoToStringAndDivEndtag; //add div start tag to 
        console.log("logoContainerToString:",  logoContainerToString);
        console.log("logoContainerToString[0]:",  logoContainerToString[0]);
        console.log("logoToStringAndDivEndtag", logoToStringAndDivEndtag);


        //check if picked position is top or bottom textarea: 
        if (pickedPosition === true) {
            checkIfTop(pickedLogoPosition, logoToString);
            logoContainer.innerHTML = logoContainerToString;
        } else {
            checkIfTop(selectElementValue, logoToString);
            logoContainer.innerHTML = logoContainerToString;
        };

    } else {
        console.log("errorMsg = Du måste välja vilken fil du vill ladda upp.");
    };
});

//körs när
document.getElementById("file-picker").addEventListener("change", function(evt) {
    console.log("klick?");
    emptyTextareas();

    srcPath = evt.target.value; //get dynamically
    // srcPath = "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"; //static
    srcPath = "https://logos-download.com/wp-content/uploads/2020/07/Arvid_Nordquist_Logo.png";

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
    // console.log("pickedLogoPosition in dropdown:", pickedLogoPosition);

    if (pickedFile === true) {
        // console.log("printa ändring i bild med position:", pickedLogoPosition);
        addStyleAttr(pickedLogoPosition);
        pickedPosition = true;

        if (logoToString !== undefined) {
            checkIfTop(pickedLogoPosition, logoToString);
        } else {
            console.log("du måste ladda upp bild för att kunna se - ej ha som errromsg utan bara för nu");
        };
    } else {
        console.log("errorMsg: Du måste välja en fil innan du kan välja position");
    };
});