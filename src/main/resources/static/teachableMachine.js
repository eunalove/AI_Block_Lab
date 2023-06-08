

    let model, webcam, labelContainer, maxPredictions;
    let isIos = false;
    let IsVideo = false;

    let modelURL;
    let metadataURL;

    enterImageClassificationModelURL("https://teachablemachine.withgoogle.com/models/okWkNoAb-k/");
    classifyUsingTrainedImageModel();

    detectWhenClassesAppear();

    async function turnOnVideoScreen() {
    const flip = true;
    const width = 500;
    const height = 500;
    webcam = new tmImage.Webcam(width, height, flip);
    webcam.canvas = document.createElement('canvas'); // Initialize webcam.canvas
    await webcam.setup();

    if (isIos) {
    document.getElementById('webcam-container').appendChild(webcam.webcam);
    const webCamVideo = document.getElementsByTagName('video')[0];
    webCamVideo.setAttribute("playsinline", true);
    webCamVideo.muted = "true";
    webCamVideo.style.width = width + 'px';
    webCamVideo.style.height = height + 'px';
} else {
    document.getElementById("webcam-container").appendChild(webcam.canvas);
}
    webcam.play();
}

    // Function to start the loop
    function startLoop() {
    webcam.update();
    predictAndUpdateLabel();
    window.requestAnimationFrame(startLoop);
    //setTimeout(stopLoop, 1000);
}

    function stopLoop() {
    webcam.stop();
}

    function enterImageClassificationModelURL(URL) {
    modelURL = URL + 'model.json';
    metadataURL = URL + 'metadata.json';
    return;
}


    async function classifyUsingTrainedImageModel() {
    model = await tmImage.load(modelURL, metadataURL);
    console.log( model.getClassLabels());
    maxPredictions = model.getTotalClasses();
}

    function getTrainedClasses() {
    const classes = model.getClasses();
    console.log(classes);
    return classes;
}

    // Function to perform prediction and update the label
    async function predictAndUpdateLabel() {
    let prediction;
    labelContainer = document.getElementById('label-container');
    if (isIos) {
    prediction = await model.predict(webcam.webcam);
} else {
    prediction = await model.predict(webcam.canvas);
}
    for (let i = 0; i < maxPredictions; i++) {
    const classPrediction = prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
    labelContainer.childNodes[i].innerHTML = classPrediction;
}
}

    async function detectWhenClassesAppear() {
    turnOnVideoScreen();

    for (let i = 0; i < maxPredictions; i++) {
    labelContainer.appendChild(document.createElement('div'));
}

    /*    for (let i = 0; i < prediction.length; i++) {
            if (prediction[i].probability > 0.5) {
                console.log(`Detected class: ${prediction[i].className}, Confidence: ${prediction[i].probability}`);
            }
        }*/

    window.requestAnimationFrame(startLoop);
    //setTimeout(detectWhenClassesAppear, 1000);
}
