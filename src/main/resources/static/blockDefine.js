
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
        var input = this.appendValueInput("result")
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

    Blockly.Blocks['get_image_input'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("이미지 입력받기");
            this.setPreviousStatement(true, null);
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

Blockly.Blocks['when_detecting_image'] = {
    init: function() {
        this.appendValueInput("class_image")
            .setCheck(null)
            .appendField("감지했을 때");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
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
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("의 신뢰도");
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
            .appendField("의 신뢰도");
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
            .appendField("의 신뢰도");
        this.setOutput(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

maxPredictions= null;
var ClassLabels = [];

Blockly.JavaScript['classify_by_trained_model_image'] = async function(block) {

    console.log("classifyByTrainedModelImage");
    const modelURL = url + 'model.json';
    const metadataURL = url + 'metadata.json';
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    ClassLabels = model.getClassLabels();

    window.addEventListener('message', function(event) {
        outputImage = new Image();
        outputImage.onload = async function() {
            // Image has been loaded

            // Classify the image
            if (outputImage !== null) {
                var prediction = await model.predict(outputImage);

                var memberPredictions = {};

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


