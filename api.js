var api = api || {};

(function(apiTemplate){

    function getJson(url, data){
       apiTemplate.get(url)
        .then(function(obj){
            data = obj.data;
            console.log(data);
        }).catch(function(err){
            console.log(err);
        });  
    }

    api.getJson = getJson;
    getJson.prototype.id= "api_1";
    getJson.prototype.detail= "외부 api를 호출하는 axios를 활용한 data 처리 util입니다.";
    getJson.prototype.run= "api.getJson(`https://jsonplaceholder.typicode.com/users/1`, {})";

    function getJsonWithCB(url, func){
        apiTemplate.get(url)
        .then(function(obj){
            func(obj.data);
        }).catch(function(err){
            console.log(err);
        });  
    }

    api.getJsonWithCB = getJsonWithCB;
    getJsonWithCB.prototype.id="api_2";
    getJsonWithCB.prototype.detail="외부 api를 호출하는 axios를 활용한 비동기 callBack용 util입니다.";
    getJsonWithCB.prototype.run="api.getJsonWithCB(`https://jsonplaceholder.typicode.com/users/1`, (json)=>{alert(json)})"

})(axios);