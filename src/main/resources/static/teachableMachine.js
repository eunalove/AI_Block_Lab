
function myFunction() {

    let model, webcam, labelContainer, maxPredictions;
    let isIos = false;

    init("https://teachablemachine.withgoogle.com/models/okWkNoAb-k/");


// Check if the platform is iOS
    if (window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1) {
        isIos = true;
    }

// Function to start the video
    async function startVideo() {
        const flip = true;
        const width = 500;
        const height = 500;
        webcam = new tmImage.Webcam(width, height, flip);
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

// Function to load the model
    async function loadImageModel(URL) {
        const modelURL = URL + 'model.json';
        const metadataURL = URL + 'metadata.json';
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
    }

// Function to perform prediction and update the label
    async function predictAndUpdateLabel() {
        let prediction;
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

// Function to start the loop
    function startLoop() {
        webcam.update();
        predictAndUpdateLabel();
        window.requestAnimationFrame(startLoop);
    }

// Initialize the application
    async function init(URL) {
        labelContainer = document.getElementById('label-container');
        await loadImageModel(URL);
        await startVideo();
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement('div'));
        }
        window.requestAnimationFrame(startLoop);
    }



}
