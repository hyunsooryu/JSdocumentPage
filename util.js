
var util = util || {};

(function(){
    function data(){
        var utilList = [
            makeData(
                "name",
                "print()",
                "args",
                "string",
                "explain",
                "string 문자열을 출력하는 함수입니다.",
                "detail",
                `function print(str){
                    console.log(str);
                }`
            )
        ];

        return {
            get utilList(){
                return utilList;
            }
        }
    }

    //디테일 세부 내용
    util.data = data;
    data.prototype.id = "SCM1";
    data.prototype.detail = "데이터를 반환해주는 함수입니다.";


    function makeData(...args){
        return args.reduce((box, curVal, curIdx)=>{
            if(curIdx % 2 == 0){
                box[curVal] = args[curIdx + 1];
            }
            return box;
        },{});
    } 

      //디테일 세부 내용
      util.makeData = makeData;
      makeData.prototype.id = "SCM2";
      makeData.prototype.detail = "리스트 데이터를 순서에 맞게 JSON으로 만들어주는 함수입니다.";
})();