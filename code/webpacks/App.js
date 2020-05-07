import imgSrc from './timg.jpg'

var App = {
    data(){
        return{
            imgSrc:imgSrc
        }
    },
    template:`<div>
    <img :src="imgSrc">
    </div>`
};

// export var num1 = 1;
// var num2 = 2;
// export {num2};
export default App;
// export function add(x, y){
//     return console.log(x*y)
// }