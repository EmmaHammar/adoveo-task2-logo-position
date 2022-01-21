let pickedFile = false;
let pickedPosition = false; //TODO add this
let cssTextImgTag;
let cssTextImgContainer;
let srcPath;
let url;
let logoContainer = document.getElementById("logoContainer");
let img;

document.getElementById("file-picker").addEventListener("change", (evt) => {
    emptyTextareas();

    srcPath = evt.target.value; //get dynamically
    srcPath = "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"; //static
    console.log("srcPath", srcPath);

    img = document.createElement("img");
    let file = evt.target.files[0];

    //show errorMsg if file is not an img
    if (file.type && !file.type.startsWith('image/')) {
        console.log('show errorMsg: file is not an image.', file.type, file);
    return;
    };
    pickedFile = true;

    //add src attr to img tag
    img.src = srcPath; 	
    console.log("img", img);
});

const addStyleAttr = (selectElementValue) => {
    switch (selectElementValue) {
        case "top-left":
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
    img.style.cssText = cssTextImgTag;
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

        let imgToString = img.outerHTML;

        //check if picked position is top or bottom textarea: 
        let isTop = selectElementValue.includes("top");
        if (isTop) {
            //print in top 
            document.getElementById("top").innerHTML = imgToString;
        } else {
            //print in bottom 
            document.getElementById("bottom").innerHTML = imgToString;
        };

    } else {
        console.log("errorMsg = Du måste välja vilken fil du vill ladda upp.");
    };

    logoContainer.appendChild(img); 
});