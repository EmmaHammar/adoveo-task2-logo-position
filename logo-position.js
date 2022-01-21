let pickedFile = false;
let pickedPosition = false;
let cssTextImgTag;
let cssTextImgContainer;
let file;
let fileName;
let url;
let logoContainer = document.getElementById("logoContainer");
let imgElement;

document.getElementById("file-picker").addEventListener("change", (evt) => {
    emptyTextareas();
    
    console.log("picked fileName:", evt.target.value); //prints fakepath 
    // let strPath = evt.target.value;
    // console.log("strPath", strPath);
    // let fileName = strPath.substring(strPath.lastIndexOf("\\")+1)

    imgElement = document.createElement("img");

    file = evt.target.files[0];
    // fileName = file.name; 

    //test CSS when show img:
    //for testing position dropdown + comment back row 136
    fileName = "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"; 

    //position right or left depends on how much white it is around the logo:
    // fileName = https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/04/VKeVyLFoCwCWPdcPrLiWyc-1200-80.jpg?auto=format&q=60&w=1131&h=848.25&fit=crop&crop=faces
    console.log("fileName", fileName);

    //show errorMsg if file is not an img
    if (file.type && !file.type.startsWith('image/')) {
        console.log('show errorMsg: file is not an image.', file.type, file);
    return;
    };

    //read url and print logo - NOT WORKING
    // let reader = new FileReader();
    // reader.addEventListener("load", (e) => {
    //     console.log("e in fileReader:", e.target.result);
    //     url = e.target.result;
    //     // imgElement.src = url; //this only shows "data:......"
    // });

    // // reader.readAsText(file);
    // reader.readAsDataURL(file);

    pickedFile = true;
    console.log("imgElement", imgElement);
    imgElement.src = fileName; // ERROR when filename is icon.png: i.e. mark-williams-9bNmhMKQM1Q-unsplash.jpg:1 GET http://127.0.0.1:5500/mark-williams-9bNmhMKQM1Q-unsplash.jpg 404 (Not Found Image (async)		
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
    imgElement.style.cssText = cssTextImgTag;
    logoContainer.style.cssText = cssTextImgContainer;
};

const emptyTextareas = () => {
    document.getElementById("top").innerHTML = "";
    document.getElementById("bottom").innerHTML="";
}

document.getElementById("upload-btn").addEventListener("click", (evt) => {

    emptyTextareas();

    if (pickedFile === true) {
        // console.log("rätt, printa");

        let selectElementValue = document.querySelector("#logo-position").value;
        // console.log("selectElementValue", selectElementValue);
    
        addStyleAttr(selectElementValue);

        let imgElementToString = imgElement.outerHTML;

        //decide in which textarea to print the img tag
        //check if top or bottom: //CHECK queryselector with logo-position -> option value?
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

    //print picked file in result dig - NOT WORKING
    // logoContainer.innerHTML = url; 
    
    //for testing position dropdown
    logoContainer.appendChild(imgElement); //sometimes get error: Uncaught ReferenceError: imgElement is not defined - lägga till async att imgElement måste fyllas innan detta körs?
 
});