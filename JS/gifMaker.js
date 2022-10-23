// var btn = document.getElementById("download-button");

window.onload = ()=> {

    //按钮被点击后会执行
    let btn = document.getElementById("download-button");

    btn.onclick = gifMaking
    function gifMaking(){
        // 初始设置
        // var index = 1;
        var gif = new GIF({
        workers: 2,
        quality: 10,
        });
        

        let imglist = document.getElementsByClassName("imgSeq-1-1");

        // let imgEle1 = document.getElementById('gif1');
        // let imgEle2 = document.getElementById('gif2');
        // let imgEle3 = document.getElementById('gif3');
        // let imgEle4 = document.getElementById('gif4');
        // imglist = [imgEle1, imgEle2, imgEle3, imgEle4];

        // imglist.push(newElement);返回数组新的长度值

        // 生成GIF的部分，delay控制了帧率；本项目24fps的话，delay可以设置为42
        // alert(imglist.length);

        for (var i = 0; i < imglist.length; i++) {
            gif.addFrame(imglist[i], {delay: 42})
        }

        // imglist.forEach(element => {
        //     gif.addFrame(element, {delay: 42});
        // });

        gif.render();
        gif.on('finished', (blob) => {
            let a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            console.log(URL.createObjectURL(blob));
            a.download = 'result.gif';
            a.click();
            gif.abort();
          });

    };
}