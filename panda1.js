






let earLeftId = document.getElementById('earLeftId');
let earRightId = document.getElementById('earRightId');
let faceId = document.getElementById('faceId');
let eyeLeftId = document.getElementById('eyeLeftId');
let eyeRightId = document.getElementById('eyeRightId');
let eyeDotRight = document.getElementById('eyeDotRight');

let eyesBgColINP = document.getElementById('eyesBgColINP');
let faceBgColINP = document.getElementById('faceBgColINP');
let earsBgColINP = document.getElementById('earsBgColINP');

function changeEyesCOl() {
    eyeLeftId.style.backgroundColor = eyesBgColINP.value;
    eyeRightId.style.backgroundColor = eyesBgColINP.value;
}

function changeFaceCOl() {
    faceId.style.backgroundColor = faceBgColINP.value;
}

function changeEarsCOl() {
    earLeftId.style.backgroundColor = earsBgColINP.value;
    earRightId.style.backgroundColor = earsBgColINP.value;
}
