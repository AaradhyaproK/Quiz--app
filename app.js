var quiz = {
    "JS": [
    {
    "id": 1,
    "question": " चळवळ करा अखंड चळवळ करा हा मंत्र देणारे भारतीय राष्ट्रीय सभेचे आधारस्तंभ कोण होते? ",
    "options": [
    {
    "a": "फिरोजशाह मेहता",
    "b": "दादाभाई नौरोजी",
    "c": "नरेंद्रनाथ सेन",
    "d": "रंगय्या नायडू "
    }
    ],
    "answer": "दादाभाई नौरोजी",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": " इन्कलाब जिंदाबाद ही घोषणा कोणाची?",
    "options": [
    {
    "a": "महंमद आली जनी",
    "b": "कॉग्रेड एस.ए.डांगे",
    "c": "महंमद इक्बाल",
    "d": "फिलीप स्प्रॅण्ट"
    }
    ],
    "answer": "महंमद इक्बाल",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "पहिल्या भारतीय स्वातंत्र्य युध्दात अतिशुरपणे दीर्घकाळ कोण लढले? ",
    "options": [
    {
    "a": "नानासाहेब पेशवे",
    "b": "राणी लक्ष्मीबाई ",
    "c": "तात्या टोपे"
    }
    ],
    "answer": "तात्या टोपे",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": " भारतीय स्वातंत्र्याचा पहिला राष्ट्रध्वज दिल्लीच्या लाल किल्ल्यावर कोणी फडकाविला?",
    "options": [
    {
        "a": "नेहरू",
        "b": "लॉर्ड माऊंट बॅटन",
        "c": "गांधी",
        "d": "सी. राजगोपालाचारी",
    }
    ],
    "answer": "लॉर्ड माऊंट बॅटन",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": " दीनबंधू १८७७ च्या साप्ताहिकाचे संपादक कोण होते?",
    "options": [
    {
    "a": "कॄष्णराव भालेकर",
    "b": "ज्योतीराव फुले",
    "c": "केशव भवाळकर",
    "d": "सखाराम परांजपे",
    }
    ],
    "answer": "कॄष्णराव भालेकर",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "खालीलपैकी कोणत्या आंदोलनाच्या काळात सातारा येथे प्रतिसरकार स्थापन करण्यात आले होते?",
    "options": [
    {
    "a": "चलेजाव आंदोलन",
    "b": "असहकार चळवळ",
    "c": "सविनय कायदेभंग ",
    }
    ],
    "answer": "चलेजाव आंदोलन",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "न्या.म.गो. रानडे यांनी खालीलपैकी कोणती संस्था स्थापन केली नाही?",
    "options": [
    {
    "a": "इंडस्ट्रियल असोसिएशन ऑफ वेस्टर्न इंडिया्",
    "b": "सामाजिक परिषद",
    "c": "भारत सेवक समाज",
    }
    ],
    "answer": "भारत सेवक समाज",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": " विनोबा भावे यांनी भूदान चळवळ कोणत्या वर्षी सुरु केली?",
    "options": [
    {
    "a": "सन १९५० ",
    "b": "सन १९५१",
    "c": "सन १९५२",
    "d": "सन १९५३",
    }
    ],
    "answer": "सन १९५२",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "तात्या टोपे हे नानापेशवे यांचे कोण होते?",
    "options": [
    {
        "a": "मंत्री ",
        "b": "सचिव ",
        "c": "लष्करप्रमुख",
        "d": "प्रशासकीय अधिकारी",
    }
    ],
    "answer": "लष्करप्रमुख",
    "score": 0,
    "status": ""
    },
    {
        "id": 10,
        "question": "१८४८ मध्ये लोकहितवादींची शतपत्रे कोणत्या वॄतपत्रातून प्रसिध्द करण्यात आली?",
        "options": [
        {
            "a": "ज्ञानप्रकाश ",
            "b": "इंदूप्रकाश ",
            "c": "दर्पण",
            "d": "प्रभाकर",
        }
        ],
        "answer": "प्रभाकर",
        "score": 0,
        "status": ""
        }
    ]
    }
    var quizApp = function () {
        this.score = 0;
        this.qno = 1;
        this.currentque = 0;
        var totalque = quiz.JS.length;
    
        this.displayQuiz = function (cque) {
            this.currentque = cque;
            if (this.currentque < totalque) {
                $("#tque").html(totalque);
                $("#previous").attr("disabled", false);
                $("#next").attr("disabled", false);
                $("#qid").html(quiz.JS[this.currentque].id + '.');
                $("#question").html(quiz.JS[this.currentque].question);
                $("#question-options").html("");
                for (var key in quiz.JS[this.currentque].options[0]) {
                    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
                        $("#question-options").append(
                            "<div class='form-check option-block'>" +
                            "<label class='form-check-label'>" +
                            "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
                            quiz.JS[this.currentque].options[0][key] +
                            "</span></label>"
                        
                        );
                    }
                }
                startTimer();
            }
            var timerInterval;
            var timeLeft = 600; // 10 minutes in seconds
        
            var startTimer = function () {
                timerInterval = setInterval(function () {
                    timeLeft--;
                    var minutes = Math.floor(timeLeft / 60);
                    var seconds = timeLeft % 60;
                    $("#timer").text(minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        submitQuiz();
                    }
                }, 1000);
            };
        
            if (this.currentque <= 0) {
                $("#previous").attr("disabled", true);
            }
            if (this.currentque >= totalque) {
                $('#next').attr('disabled', true);
                for (var i = 0; i < totalque; i++) {
                    this.score = this.score + quiz.JS[i].score;
                }
                return this.showResult(this.score);
            }
        };
    
        this.showResult = function (scr) {
            $("#result").addClass('result');
            $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
            for (var j = 0; j < totalque; j++) {
                var res;
                if (quiz.JS[j].score == 0) {
                    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
                } else {
                    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
                }
                $("#result").append(
                    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
                    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
                    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                    '</div>'
                );
            }
        };
    
        this.checkAnswer = function (option) {
            var answer = quiz.JS[this.currentque].answer;
            option = option.replace(/</g, "&lt;"); //for <
            option = option.replace(/>/g, "&gt;"); //for >
            option = option.replace(/"/g, "&quot;");
            if (option == quiz.JS[this.currentque].answer) {
                if (quiz.JS[this.currentque].score == "") {
                    quiz.JS[this.currentque].score = 1;
                    quiz.JS[this.currentque].status = "correct";
                }
            } else {
                quiz.JS[this.currentque].status = "wrong";
            }
        };
    
        this.changeQuestion = function (cque) {
            this.currentque = this.currentque + cque;
            this.displayQuiz(this.currentque);
        };
    };
    
    var jsq = new quizApp();
    var selectedopt;
    
    $(document).ready(function () {
        jsq.displayQuiz(0);
        $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
            $(this).prop("checked", true);
            selectedopt = $(this).val();
        });
    });
    
    $('#next').click(function (e) {
        e.preventDefault();
        if (selectedopt) {
            jsq.checkAnswer(selectedopt);
        }
        jsq.changeQuestion(1);
    });
    
    $('#previous').click(function (e) {
        e.preventDefault();
        if (selectedopt) {
            jsq.checkAnswer(selectedopt);
        }
        jsq.changeQuestion(-1);
    });
    
    // Function to print and download the result
    function printResult() {
        var doc = new jsPDF();
        doc.text(20, 20, 'Quiz Result');
        doc.text(20, 30, '--------------------------------------');
        
        var yPos = 40;
        for (var j = 0; j < totalque; j++) {
            var res = quiz.JS[j].score == 0 ? 'Wrong' : 'Correct';
            doc.text(20, yPos, 'Q ' + quiz.JS[j].id + ': ' + quiz.JS[j].question);
            doc.text(20, yPos + 10, 'Correct Answer: ' + quiz.JS[j].answer);
            doc.text(20, yPos + 20, 'Your Answer: ' + selectedopt);
            doc.text(20, yPos + 30, 'Result: ' + res);
            doc.text(20, yPos + 40, '--------------------------------------');
            yPos += 50;
        }
        
        doc.save('quiz_result.pdf');
    }
    
    
    


