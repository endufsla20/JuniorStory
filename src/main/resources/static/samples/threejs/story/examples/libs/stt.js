class STT {
  constructor(parent) {
    this._parent = parent;
    console.dir(this._parent);

    var isRecognizing = false;

    if ("SpeechRecognition" in window) {
      console.log("음성인식을 지원하는 브라우저입니다.");
    }

    try {
      //음성인식 부여
      var recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition)();
    } catch (e) {
      console.error(e);
    }

    recognition.lang = "ko-KR";
    recognition.interimResults = false; //중간 결과를 반환 할 것인지 제어
<<<<<<< HEAD
    recognition.maxAlternatives = 10; // 발음 교정 메서드?
=======
    recognition.maxAlternatives = 10; // 발음 교정 메서드? 
>>>>>>> 1621b78363e9969dc41ea767d4a32f6cc36cfe50
    //숫자가 작을수록 발음대로 적고, 크면 문장의 적합도에 따라 알맞은 단어로 대체

    recognition.start(); //stt 시작
    isRecognizing = true;

    recognition.onspeechstart = function () {
      //소리가 감지될 떄 음성 인식 시작
    };

    recognition.onspeechend = function () {
      //음성 인식 서비스에서 인식한 음성이 감지되지 않을 때
      recognition.stop(); //stt 정지 및 기본값 복귀
      recognition.onspeechstart();
    };

    recognition.onresult = function (event) {
      // 결과 값을 story에 전달
      this._parent.call(event.results[0][0].transcript);
    }.bind(this);

    recognition.addEventListener("end", recognition.start);
  }
}

export { STT };
