prediction_1=""


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
camera=document.getElementById("camera")
Webcam.attach('#camera')

function takesnapshot(){
    Webcam.snap (function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src= "'+data_uri+'">'
    })
}

console.log('ml5 version:' ,ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DKV-DIZym/model.json',modelLoaded)
function modelLoaded(){
    console.log('modelLoaded')
}

function speak(){
    synth=window.speechSynthesis
    speak_1="the  prediction is "+prediction_1;
    
    var utterThis=new SpeechSynthesisUtterance(speak_1)
    synth.speak(utterThis)
}

function check(){
    img=document.getElementById('capture_image')
    classifier.classify(img,gotResult)
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result_gesture_name").innerHTML=result[0].label
        
        prediction_1=result[0].label
        

        speak();
        if(result[0].label=="victory"){
            document.getElementById("update_gesture").innerHTML=" &#9996;";

        }

        if(result[0].label=="amazing"){
            document.getElementById("update_gesture").innerHTML="&#128076;";
            
        }

        if(result[0].label=="best"){
            document.getElementById("update_gesture").innerHTML="&#128077;";
            
        }

        
    }
}

