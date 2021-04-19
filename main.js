Webcam.set({
width:350,
height:300,
image_format:'jpg',
jpg_quality:100
});
cam=document.getElementById("camera");
Webcam.attach("#camera");

function snap(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="photo" src="'+data_uri+'">'
    });
}
console.log("ml5 version",ml5.version);
 teach=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LeWZ3_4zy/model.json',modelLoaded);
 function modelLoaded(){
     console.log("modelLoaded");
 }