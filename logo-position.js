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
    console.log("picked fileName:", evt.target.value); //prints fakepath 
    // let strPath = evt.target.value;
    // console.log("strPath", strPath);
    
    imgElement = document.createElement("img");

    //try to show img:
    file = evt.target.files[0];
    // console.log("file", file);

    fileName = file.name;
    //for testing position dropdown + comment back row 136
    // fileName = "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"; 

    //position right or left depends  on how much white it is around the logo:
    // fileName = https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/04/VKeVyLFoCwCWPdcPrLiWyc-1200-80.jpg?auto=format&q=60&w=1131&h=848.25&fit=crop&crop=faces
    // console.log("fileName", fileName);

      // show errorMsg if file is not an img
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
        // console.log("rätt, printa");

        let selectElementValue = document.querySelector("#logo-position").value;
        // console.log("selectElementValue", selectElementValue);
    
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

    //print picked file in result dig - NOT WORKING
    // logoContainer.innerHTML = url; 
    
    //for testing position dropdown
    // logoContainer.appendChild(imgElement); //sometimes get error: Uncaught ReferenceError: imgElement is not defined - lägga till async att imgElement måste fyllas innan detta körs?
 
});

//use value of dropdown insted of class
//vad behöver srcString vara för att kunna visa bilden? https://stackoverflow.com/questions/18457340/how-to-preview-selected-image-in-input-type-file-in-popup-using-jquery
//print the img when click upload logo (i.e. fix prints fakepath - can get filename through: HTMLInputElement.files )
//add right css-text

//add errorMsg if not choosing dropdown?
//mobileview 

//Q:
//do I need to have different src in imgElement in textarea vs for the img tag so the pic can be shown? 