(()=>{

    function getFuncList(e){
        let boxList = [];
        for(const key in e){
            if(e.hasOwnProperty(key)){
                boxList.push(e[key]);
            }
        }
        return boxList;
    }
  
    window.onload = function(){
        var template = `
            <div class="card">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs" id="navigator">
                        <li class="nav-item" v-for="func in funcMenu">
                        <a class="nav-link" @click="pageChange(func)" href="#">{{func}}</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col" v-for="menu in tableMenu">{{menu}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="(fun,idx) in target">
                        <tr> 
                            <th scope="row">{{idx + 1}}</th>
                            <td>{{fun.prototype.id}}</td>
                            <td><pre>{{fun.toString()}}</pre></td>
                            <td>{{fun.prototype.detail}}</td>                
                            <td v-if="typeof fun.prototype.run === 'undefined'"><button @click=fun>실행</button></td>
                            <td v-else><button @click="dynamicFunc(fun.prototype.run)">실행</button></td>
                            </tr>
                    </template>
                    </tbody>
                </table>
                </div>
            </div>
        `
        var utilApp = new Vue({
            this : this,
            el : '#app',

            // data 값 넣어주기
            data : {
                        'funcMenu' : ['util','message','api'],
                        'tableMenu' : ['#','아이디','구현','설명'],
                        'target' : getFuncList(util),
                        'util'  : getFuncList(util),
                        'message' : getFuncList(message),
                        'api' : getFuncList(api),
            },

            template : template,

            methods : {
  
                pageChange(e){
                    while(this.target.length > 0){
                        this.target.pop();
                    }
                    for(const fun of this[e]){
                        this.target.push(fun);
                    }
                },

                dynamicFunc(strFun){
                    if(strFun != null && typeof strFun != 'undefined'){
                        new Function(strFun)();
                    }
                }
            },

        });
    }
})();

