var message = message || {};

(function(){

    function hello(){
        alert("HELLO");
    }

    //디테일 세부 내용
    message.hello = hello;
    hello.prototype.id = "MESSAGE_1";
    hello.prototype.detail = "HELLO MESSAGE를 출력해주는 void 함수입니다.";

    function bye(){
        alert("BYE");
    }

    //디테일 세부 내용
    message.bye = bye;
    bye.prototype.id = "MESSAGE_2";
    bye.prototype.detail = "BYE MESSAGE를 출력해주는 void 함수입니다.";

    function goodNight(){
        alert("GOOD NIGHT");
    }

    message.goodNight = goodNight;
    goodNight.prototype.id = "MESSAGE_3";
    goodNight.prototype.detail = "잘자라고 인사해주는 메시지입니다.";

})();