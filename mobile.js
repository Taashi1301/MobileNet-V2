Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality: 90,
    constraints:{
    facingMode:"environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function selfie(){
    Webcam.snap(function(img){
        document.getElementById("webcamsnap").innerHTML="<img id='imagetaken' src='"+img+"'>"
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier('MobileNet', modelloaded);
function modelloaded(){
    console.log("Model Loaded.");
} 
function check(){
    image=document.getElementById("imagetaken");
    classifier.classify(image, getResults);
}
function getResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result").innerHTML=results[0].label;
    }
}