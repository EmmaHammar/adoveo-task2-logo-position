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