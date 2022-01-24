let tagStr;
let srcPath;
let logoContainerStyle = "";
let logoStyle = "";
let isUpload = false; 
let isPickedFile = false; 
let selectedPosition;
let previewContainer = document.getElementById("preview-container");

function emptyTextareas() {
    document.getElementById("top").innerHTML = "";
    document.getElementById("bottom").innerHTML="";
};

function emptyPreviewContainer() {
    previewContainer.innerHTML = "";
};

function updateStyle(selectedPosition) {
    switch (selectedPosition) {
        case "top-left":
            logoContainerStyle = "text-align:left;";
            logoStyle = "width: 20%; margin-top: 4%; margin-left: 2%;";
        break;
        case "top-center": 
            logoContainerStyle = "text-align:center;";
            logoStyle = "width: 20%; margin-top: 4%;";
        break;
        case "top-right": 
            logoContainerStyle = "text-align:right;";
            logoStyle = "width: 20%; margin-top: 4%; margin-right: 2%;";
        break;
        case "bottom-left":
            logoContainerStyle = "text-align:left;";      
            logoStyle = "width: 5%; position: absolute; bottom: 0px; margin-bottom: 2%; margin-left: 0.5%";
            
        break;
        case "bottom-center": 
            logoContainerStyle = "text-align:center; padding-right:20%;";
            logoStyle = "width: 5%; position: absolute; bottom:0; margin-bottom: 2%;";
        break;
        case "bottom-right": 
            logoContainerStyle = "text-align: right; padding-right: 12%;";
            logoStyle = "width: 5%; position: absolute; bottom: 0px; margin-bottom: 2%; margin-left: -3%;";
        break;
        default:
        break;
    };
};

function createTagStr() {
    tagStr = `<div id="logoContainer" style="${logoContainerStyle}"><img id="logo" src="${srcPath}" style="${logoStyle}"></div>`;
};

function checkTopOrBottom(selectedPosition) {
    emptyTextareas();
    let isTop = selectedPosition.includes("top");

    if (isTop) {
        document.getElementById("top").innerHTML = tagStr; 
    } else {
        document.getElementById("bottom").innerHTML = tagStr; 
    };
};
function previewLogo() {
    previewContainer.innerHTML = tagStr;
};

document.getElementById("file-picker").addEventListener("change", function(evt) {
    isPickedFile = true; 
    emptyTextareas();
    emptyPreviewContainer();
    
    // srcPath = evt.target.value; //get dynamically
    srcPath = "https://logos-download.com/wp-content/uploads/2020/07/Arvid_Nordquist_Logo.png"; //static
});

document.getElementById("upload-btn").addEventListener("click", function(evt) {
    emptyPreviewContainer();

    if (isPickedFile === true) {
        isUpload = true;

        if (isUpload === true) {
            
            // selectedPosition = document.querySelector("select").value; //get selected position
            selectedPosition = document.getElementById("logo-position").value; //get selected position
            selectedSize = document.getElementById("logo-size").value; //get selected position

            updateStyle(selectedPosition);
            createTagStr();
            checkTopOrBottom(selectedPosition);
            previewLogo();
        } else {
            console.log("Error: Vänligen ladda upp en bildfil först, därefter kan du positionera bilden.");
        };

    } else {
        console.log("Error: Vänligen välj en fil du vill ladda upp.");
    };
}); 

document.querySelector("#logo-position").addEventListener("change", function(evt) {
    if (isUpload === true) {
        selectedPosition = evt.target.value;
        updateStyle(selectedPosition);
        createTagStr();
        checkTopOrBottom(selectedPosition);
        previewLogo();
    } else {
        console.log("Error: Vänligen ladda upp en bildfil först, därefter kan du positionera bilden.");
    };
});

