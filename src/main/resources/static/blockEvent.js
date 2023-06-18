
let model, maxPredictions, url;
let isIos = false;

Blockly.JavaScript['start'] = function(block) {
    console.log("start");
    if (window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1) {
        isIos = true;
    }
    return '\n';
};




Blockly.JavaScript['when_detecting_image'] = function(block) {
    console.log("when_detecting_image 시작");

    return '\n';
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

Blockly.JavaScript['print'] = function(block) {
    // 로직을 여기에 작성하세요.
    var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_NONE) || '""';
    console.log(text);
    return 'print();\n';
};


