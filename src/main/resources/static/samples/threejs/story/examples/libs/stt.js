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
    recognition.interimResults = false; //중간 결과가 반환되어야 하는지(true) 아니면 반환 되지 않아야 하는지 (false) 제어
    recognition.maxAlternatives = 10; // 결과당 제공되는 최대 s 수를 설정
    //recognition.continuous = true;

    recognition.start(); //stt 시작
    isRecognizing = true;

    recognition.onspeechstart = function () {
      // console.log("음성인식이 시작 되었습니다. 이제 마이크에 무슨 말이든 하세요.");
    };

    recognition.onspeechend = function () {
      //음성 인식 서비스에서 인식한 음성이 감지되지 않을 때
      recognition.stop(); //stt 정지 및 기본값 복귀
      recognition.onspeechstart();
    };

    recognition.onresult = function (event) {
      // console.log("You said: ", event.results[0][0].transcript);
      this._parent.call(event.results[0][0].transcript);
    }.bind(this);

    // recognition.onresult = (event) => {
    // 	// console.log("You said: ", event.results[0][0].transcript);
    // 	this._parent.call(event.results[0][0].transcript);

    // 	// 결과를 출력
    // 	var resText = event.results[0][0].transcript;

    // 	if (resText == "체크포인트") {
    // 		return (this.page = 3);
    // 	}
    // };

    recognition.addEventListener("end", recognition.start);
  }
}

export { STT };
