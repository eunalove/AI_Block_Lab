
//블록 드래그, 생성, 삭제가 동기화되어야함

Blockly.Blocks['start'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("\"시작하기\"");
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['teamMemberId'] = {
    init: function () {
        var input = this.appendDummyInput()
            .appendField('팀원 아이디')
            .appendField(new Blockly.FieldDropdown(
                this.generateOptions), 'Lable');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(15);
    }
    ,
    generateOptions: function() {
        return loggedInUsers.map(function(userId) {
            return [userId, userId];
        });
    },
    // 로그인된 사용자 목록이 변경되면 드롭다운을 업데이트하는 메서드
    updateDropdown: function() {
        this.getInput("NAME")
            .removeField("Lable")
            .appendField(new Blockly.FieldDropdown(this.generateOptions), 'Lable');
    }
};



Blockly.Blocks['learning_image_ai'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("이미지 인공지능 학습하기");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['when_detecting_image'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("이미지 분류되었을 때");
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['learning_voice_ai'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("음성 인공지능 학습하기");
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['learning_text_ai'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("텍스트 인공지능 학습하기");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['url_image_receive'] = {
    init: function() {
        this.appendValueInput("url_image")
            .setCheck(null)
            .appendField("이미지 분류 모델 URL 입력");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['classify_by_trained_model_image'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("학습한 이미지 모델로 분류하기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['classify_by_trained_model_voice'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("학습한 음성 모델로 분류하기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['classify_by_trained_model_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("학습한 텍스트 모델로 분류하기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['turn_on_the_voice'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("음성 켜기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['turn_on_the_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("텍스트 입력하기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['when_detecting_voice'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("감지했을 때");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['when_detecting_text'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("감지했을 때");
        this.setPreviousStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['of_confidence_image'] = {
    init: function() {
        this.appendValueInput("teamId")
            .setCheck(null)
            .appendField("팀원의");
        this.appendValueInput("confidence")
            .setCheck(null)
            .appendField("클래스 신뢰도");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['of_confidence_voice'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("신뢰도");
        this.setOutput(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['of_confidence_text'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("신뢰도");
        this.setOutput(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['url_image_receive'] = function(block) {
    console.log("url_image_receive");

    url = "https://teachablemachine.withgoogle.com/models/okWkNoAb-k/";
    const modelURL = url + 'model.json';
    const metadataURL = url + 'metadata.json';

    var functionName = Blockly.JavaScript.provideFunction_(
        'loadModel',
        ['async function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(url) {',
            '  const modelURL = url + "model.json";',
            '  const metadataURL = url + "metadata.json";',
            '  model = await tmImage.load(modelURL, metadataURL);',
            '  console.log(model);',
            '}']);

    var code = functionName + '("' + url + '");';
    return code;
};


Blockly.JavaScript['url_image_receive'] = function(block) {
    console.log("url_image_receive");

    url = "https://teachablemachine.withgoogle.com/models/okWkNoAb-k/";
    const modelURL = url + 'model.json';
    const metadataURL = url + 'metadata.json';

    var functionName = Blockly.JavaScript.provideFunction_(
        'loadModel',
        ['async function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(url) {',
            '  const modelURL = url + "model.json";',
            '  const metadataURL = url + "metadata.json";',
            '  model = await tmImage.load(modelURL, metadataURL);',
            '  console.log(model);',
            '}']);

    var code = functionName + '("' + url + '");';
    return code;
};

maxPredictions= null;
var ClassLabels = [];
var outputImage= null;
var teamMemberPredictions = {};

Blockly.JavaScript['classify_by_trained_model_image'] = function(block) {

    var imageInputWindow = window.open("", "Image Input", "width=400,height=450");
    imageInputWindow.document.write(`
                 <html>
                    <head>
                        <title>Image Input</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                       <style>
    body { background: #f5f5f5; padding: 20px; }
    #video, #output { max-width: 300px; max-height: 300px; object-fit: cover; }
    #output { border: 1px solid black; padding:10px; margin-bottom: 10px; display: none; }
    #video, #canvas { width: 300px; height: 300px }
    #video {
     display: none; /* 처음에 비디오가 쓸데없이 공간을 차지하지 못하도록 함*/
        width: 300px;
        height: 300px;
        object-fit: cover;
    }
    #streamingSection { display: none; }
    #capture, #submit, #takePicture, #fileUpload { margin-top: 20px; }
    .btn { width: 100%; }
    .form-group { margin-bottom: 1rem; }
</style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="row justify-content-center">
                                 <video id="video" autoplay class="img-fluid"></video>
                                 <img id="output" autoplay class="img-fluid">

                            </div>
                                <video id="video" autoplay></video>
                                <canvas id="canvas" width="300" height="300" class="d-none"></canvas>
                            </div>
                            <div class="form-group">
                                <button id="capture" class="btn btn-primary">촬영</button>
                                <button id="takePicture" class="btn btn-primary d-none">촬영하기</button>
                            </div>
                          <div class="form-group">
    <label class="btn btn-primary btn-block" for="fileUpload">
        파일 선택
    </label>
    <input type="file" class="d-none" id="fileUpload" accept="image/*">
</div>
  <div class="form-group">
                                <button id="submit" class="btn btn-success">선택완료</button>
                            </div>
                        </div>
                    </body>
                </html>
                `);
    var scriptElement = imageInputWindow.document.createElement('script');
    scriptElement.innerHTML = `
                    var video = document.getElementById('video');
                    var canvas = document.getElementById('canvas');
                    var context = canvas.getContext('2d');
                    var output = document.getElementById('output');
                    var captureButton = document.getElementById('capture');
                    var takePictureButton = document.getElementById('takePicture');

captureButton.addEventListener('click', function() {
    if (!video.srcObject) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.style.display = "block"; // video를 보이게 합니다.
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
                video.play();
            };
        })
        .catch(e => console.log(e));

    } else {
        context.drawImage(video, 0, 0, 300, 300);
        output.src = canvas.toDataURL('image/png');
        output.style.display = "block"; // 이미지를 보이게 합니다.
        video.style.display = "none"; // video를 숨겨 쓸데없는 공간을 차지 하지 않게함
        video.srcObject.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
});



                    takePictureButton.addEventListener('click', function() {
                        context.drawImage(video, 0, 0, 200, 200);
                        video.srcObject.getTracks().forEach(track => track.stop());
                     });

                    document.getElementById('fileUpload').addEventListener('change', function(e) {
                      var label = this.previousElementSibling;
    var fileName = this.files[0].name;
    label.textContent = fileName;

                        var reader = new FileReader();
                        reader.onload = function(e) {
                        output.style.display = "block"; // 이미지를 보이게 합니다.
                            output.src = e.target.result;
                             if(video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
            video.srcObject = null;
        }
                        };
                        reader.readAsDataURL(e.target.files[0]);
                    });

                    document.getElementById('submit').addEventListener('click', function() {



  var base64Image = output.src;  // Get the base64 data of the image from output src
window.opener.postMessage(base64Image, '*');
window.close();





                    });
                `;
    imageInputWindow.document.body.appendChild(scriptElement);


    console.log("classifyByTrainedModelImage");
    maxPredictions = model.getTotalClasses();

    ClassLabels = model.getClassLabels();

    window.addEventListener('message', function(event) {
        outputImage = new Image();
        outputImage.onload = async function() {
            // Image has been loaded

            // Classify the image
            if (outputImage !== null) {
                var prediction = await model.predict(outputImage);
                var memberPredictions = {}; // 추가된 코드

                for (let i = 0; i < maxPredictions; i++) {
                    const classPrediction = prediction[i].probability.toFixed(2);
                    memberPredictions[prediction[i].className] = classPrediction;
                }
                teamMemberPredictions[userId] = memberPredictions;
            } else {
                console.log("No image to classify.");
            }
        };
        outputImage.src = event.data;
    }, false);

    return '\n';

};



Blockly.Blocks['classification_result_image'] = {
    init: function() {
        var input = this.appendDummyInput()
            .appendField('이미지 분류결과')
            .appendField(new Blockly.FieldDropdown(
                this.generateOptions), 'Lable');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
    }

    ,
    generateOptions: function() {
        var options = [];
        if(maxPredictions){
            options.pop();
            for(var i = 0; i < maxPredictions; i++) {
                options.push([ClassLabels[i],ClassLabels[i]]);
            }
        }
        options.push([" ", " "]);

        return options;
    }
};


Blockly.JavaScript['teamMemberId'] = function(block) {
    var temMemberId_dropdown_lable = block.getFieldValue('Lable');
    var code = `'${temMemberId_dropdown_lable}'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

//teamMemberPredictions때문에 일단 Define.js로 옮김

Blockly.JavaScript['classification_result_image'] = function(block) {
    var image_class_dropdown_lable = block.getFieldValue('Lable');
    console.log('classification_result_image'+image_class_dropdown_lable);
    var code = `'${image_class_dropdown_lable}'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['of_confidence_image'] = function(block) {
    var class_name = Blockly.JavaScript.valueToCode(block, 'confidence', Blockly.JavaScript.ORDER_ATOMIC);
    var temMemberId = Blockly.JavaScript.valueToCode(block, 'teamId', Blockly.JavaScript.ORDER_ATOMIC);

    class_name = class_name.replace(/[\(\)']/g, "").trim();
    temMemberId = temMemberId.replace(/[\(\)']/g, "").trim();

    var code = `teamMemberPredictions['${temMemberId}']['${class_name}']`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.Blocks['classification_result_voice'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("음성 분류결과");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['classification_result_text'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("텍스트 분류결과");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['class_learned_voice'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("학습된 클래스");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['class_learned_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("학습된 클래스");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['combine_letters'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("글자 결합하기");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['print'] = {
    init: function() {
        this.appendValueInput("text")
            .appendField("출력하기");
        this.setPreviousStatement(true, null);
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Blocks['show_results_together'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("다함께 결과 보여주기");
        this.setPreviousStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['show_results_in_order'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("순서대로 결과 보여주기");
        this.setPreviousStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
