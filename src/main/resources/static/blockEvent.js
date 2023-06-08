
let model, webcam, labelContainer, maxPredictions, url;
let isIos = false;

Blockly.JavaScript['start'] = function(block) {
    console.log("start");
    if (window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1) {
        isIos = true;
    }
    return '\n';
};


Blockly.JavaScript['turn_on_the_video'] = function(block) {
    console.log("turnOnTheVideo");
    var code = '\n';
    return code;

};

Blockly.JavaScript['url_image_receive'] = function(block) {
    console.log("url_image_receive");

    url = "https://teachablemachine.withgoogle.com/models/okWkNoAb-k/";
   // url = Blockly.JavaScript.valueToCode(block, 'url_image', Blockly.JavaScript.ORDER_NONE) || '""';

    console.log(url);
    return '\n';
    //return 'urlImageReceive();\n';
};



// Function to start the video
async function startVideo() {
    console.log("startVideo 시작")
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
    console.log("startVideo 끝")
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

Blockly.JavaScript['when_detecting_image'] = async function(block) {
    console.log("when_detecting_image 시작");
    var class_image = block.getFieldValue('Lable');
    console.log(class_image);

    labelContainer = document.getElementById('label-container');
    await startVideo();
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement('div'));
    }
    window.requestAnimationFrame(startLoop);
    return '\n';
};

Blockly.JavaScript['of_confidence_image'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'of_confidence_image();\n';
    return code;
};

Blockly.JavaScript['classification_result_image'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'classification_result_image();\n';
    return code;
};

Blockly.JavaScript['class_learned_image'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'class_learned_image();\n';
    return code;
};


Blockly.JavaScript['learning_voice_ai'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'learning_voice_ai();\n';
    return code;
};
Blockly.JavaScript['learning_text_ai'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'learning_text_ai();\n';
    return code;
};

Blockly.JavaScript['classify_by_trained_model_voice'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'classify_by_trained_model_voice();\n';
    return code;
};Blockly.JavaScript['classify_by_trained_model_text'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'classify_by_trained_model_text();\n';
    return code;
};Blockly.JavaScript['turn_on_the_voice'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'turn_on_the_voice();\n';
    return code;
};
Blockly.JavaScript['turn_on_the_text'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'turn_on_the_text();\n';
    return code;
};


Blockly.JavaScript['when_detecting_voice'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'when_detecting_voice();\n';
    return code;
};

Blockly.JavaScript['when_detecting_text'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'when_detecting_text();\n';
    return code;
};


Blockly.JavaScript['of_confidence_text'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'of_confidence_text();\n';
    return code;
};


Blockly.JavaScript['classification_result_voice'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'classification_result_voice();\n';
    return code;
};

Blockly.JavaScript['classification_result_text'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'classification_result_text();\n';
    return code;
};


Blockly.JavaScript['class_learned_voice'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'class_learned_voice();\n';
    return code;
};

Blockly.JavaScript['class_learned_text'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'class_learned_text();\n';
    return code;
};

Blockly.JavaScript['combine_letters'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'combine_letters();\n';
    return code;
};
//뭐임..?
Blockly.JavaScript['print'] = function(block) {
    // 로직을 여기에 작성하세요.
    var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE) || '""';
    console.log(text);
    return 'print();\n';
};

Blockly.JavaScript['show_results_together'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'show_results_together();\n';
    return code;
};

Blockly.JavaScript['show_results_in_order'] = function(block) {
    // 로직을 여기에 작성하세요.
    var code = 'show_results_in_order();\n';
    return code;
};

