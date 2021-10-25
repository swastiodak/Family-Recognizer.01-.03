Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    pngQuality: 90
});
camera = document.getElementById("camera")
Webcam.attach('#camera')

function snapshot() {
    Webcam.snap(function (url) {
        document.getElementById("result").innerHTML = "<img id='snap' src='" + url + "'>";
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GnKsmRQTy/model.json", modelLoaded);

function check() {
    img = document.getElementById("snap");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
if(error){
    console.error(error);
}
else{
    console.log(result);
    document.getElementById("person_label").innerHTML=result[0].label;
    document.getElementById("accuracy_label").innerHTML=result[0].confidence.toFixed(2);
}
}

function modelLoaded() {
    console.log("model loaded");
}

// https://teachablemachine.withgoogle.com/models/f9D-l6ESK/

function next(){
    window.location="index2.html";
}
