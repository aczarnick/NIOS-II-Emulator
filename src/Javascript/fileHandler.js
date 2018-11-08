const dict = new Map([['add','r'], ['addi','i'], ['and','r'], ['andhi','i'], ['andi','i'], ['beq','i'], ['bge','i'],
['bgeu','i'], ['bgt','i'], ['bgtu','i'], ['ble','i'], ['bleu','i'], ['blt','i'], ['bltu','i'], ['bne','i'], ['br','i'],
['break','r'], ['bret','r'], ['call','j'], ['callr','r'], ['cmpeq','r'], ['cmpeqi','i'], ['cmpge','r'], ['cmpgei','i'],
['cmpgeu','r'], ['cmpgeui','i'], ['cmpgt','r'], ['cmpgti','i'], ['cmpgtu','r'], ['cmpgtui','i'], ['cmple','r'],
['cmplei','i']
]);

var asmFile = document.querySelector('input[type="file"]');

// Object instances in main document
const hiddenInput = document.getElementById('hidden-input');
const customDz = document.getElementById('myDropzone');
const customTxt = document.getElementById('custom-text');

// Dropzone functions
customDz.onload = function () {
    // Browser API exception check
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // All the File APIs are supported.
    } else {
        customTxt.innerHTML = 'This browser does not support the required APIs';
    }
};

customDz.ondrop = function (event) {
    event.preventDefault();
    this.className = 'dropzone';
    customTxt.style = 'color: #ccc';
    upload(event.dataTransfer.files);
};

customDz.ondragover = function () {
    this.className = 'dropzone dragover';
    //customTxt.style = 'color: crimson';
    return false;
};

customDz.ondragleave = function () {
    this.className = 'dropzone';
    customTxt.style = 'color: #ccc';
    return false;
};

// File upload functions
var upload = function (files) {
    if (files.length > 1){
        alert('Please upload one file at a time');
        console.log('Too many files uploaded at once');
        return;
    } else {
        asmFile = files[0];
    }
    verifyFile();
};

// Event listeners
customDz.addEventListener('click', function() {
    hiddenInput.click();
});

hiddenInput.addEventListener('change', function() {
    let files = hiddenInput.files;
    asmFile = files[0];
    verifyFile();
});



