let lable = document.getElementById("carModel");

function checkedYes(elem){
    // console.dir(elem);
    if(elem.checked ===true){
        let noBox = document.getElementById("no");
        if(noBox.checked === true){
            noBox.checked = false;
        }

       // let lable = document.getElementById("carModel");
        console.dir(lable.hasChildNodes());

        if(lable.hasChildNodes()===false){
            let modelInput = document.createElement("input");
            modelInput.placeholder = "Car Model";
            let modelText = document.createTextNode("Введіть марку автомобіля ");
            lable.appendChild(modelText);
            lable.appendChild(modelInput);
        }

    } else {
        lable.innerHTML = "";
    }
}
function checkedNo(elem) {
    if (elem.checked === true) {
        let yesBox = document.getElementById("yes");
        if (yesBox.checked === true) {
            yesBox.checked = false;
            // let lable = document.getElementById("carModel");
            lable.innerHTML = "";
           // lable.removeChild(lable.firstChild);
        }
    }
}
