//尝试获取图片
window.onload = ()=> {
let requireModule = require.context(
    "../assets/MovesPngSequency/MPSS1/S1-Pan",
    false,
    /\.png$/
);
//关于require.context的参数：
//directory: 说明需要检索的目录
//useSubdirectories: 是否检索子目录
//regExp: 匹配文件的正则表达式, 一般是文件名（感觉他说的意思是文件类型）
alert("fuckyou");

let imagesNameArr = [];
for (var i = 0; i < requireModule.keys().length; i++) {
    imagesNameArr .push(requireModule.keys()[i].substr(2, requireModule.keys()[i].length));
    alert(requireModule.keys()[i].substr(2, requireModule.keys()[i].length));
}
}
// currentImageUrl = require("…/assets/images" + imagesNameArr[i]);

// 目标：通过点击网页里的一个按钮，生成一个gif

// 项目文件夹里面有png帧序列，要在js代码里面获取到这些图片元素（知道文件的路径，网页里没有png序列的文件，即无法使用“getElementBy..”的方法）