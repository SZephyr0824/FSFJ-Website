//将每一类动作设置为“未被选择的状态”写成函数，方便后续使用

var firstMoveSeq = 0;
var secondMoveSeq = 0;
var thirdMoveSeq = 0;

$.windowbox = {
    //定义所有“初始动作”未被选中的clearSerie1方法
    clearSerie1: function(){
        $(".choices:eq(2) img:eq(0)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(1)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(2)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(3)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(4)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(5)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(6)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(7)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(8)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(9)").removeClass("pic-selected");
        $(".choices:eq(2) img:eq(10)").removeClass("pic-selected");
    },
    //定义所有“承接动作”未被选中的clearSerie2方法
    clearSerie2:function(){
        $(".choices:eq(3) img:eq(0)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(1)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(2)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(3)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(4)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(5)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(6)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(7)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(8)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(9)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(10)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(11)").removeClass("pic-selected");
        $(".choices:eq(3) img:eq(12)").removeClass("pic-selected");
        
    },
    //定义所有“终结动作”未被选中的clearSerie3方法
    clearSerie3:function(){
        $(".choices:eq(4) img:eq(0)").removeClass("pic-selected");
        $(".choices:eq(4) img:eq(1)").removeClass("pic-selected");
        $(".choices:eq(4) img:eq(2)").removeClass("pic-selected");
        $(".choices:eq(4) img:eq(3)").removeClass("pic-selected");
        $(".choices:eq(4) img:eq(4)").removeClass("pic-selected");
        $(".choices:eq(4) img:eq(5)").removeClass("pic-selected");
        $(".choices:eq(4) img:eq(6)").removeClass("pic-selected");
    },
    // 定义清除预览图片的方法
    clearPreview:function(){
        $(".preview-moves-pic:eq(0)").prop("src","../asset/blankgrey.png");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/blankgrey.png");
        $(".preview-moves-pic:eq(2)").prop("src","../asset/blankgrey.png");
        firstMoveSeq = 0;
        secondMoveSeq = 0;
        thirdMoveSeq = 0;
    }
}
// 有些啰嗦的交互代码
$(document).ready(function(){

    // 设置"初始动作"-Start
    $(".choices:eq(2) img:eq(0)").click(function(){
        // 将本类别动作都先设置为“未被选择的状态”
        $.windowbox.clearSerie1();
        // 将pic-selected的样式添加到此时点击的图片
        $(this).addClass("pic-selected");
        // 将预览区域对应的图片进行修改
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Pan.png");
        firstMoveSeq = 1;
    });
    $(".choices:eq(2) img:eq(1)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Beng.png");
        firstMoveSeq = 2;
    });
    $(".choices:eq(2) img:eq(2)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Ke.png");
        firstMoveSeq = 3;
    });
    $(".choices:eq(2) img:eq(3)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Guai.png");
        firstMoveSeq = 4;
    });
    $(".choices:eq(2) img:eq(4)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Mo.png");
        firstMoveSeq = 5;
    });
    $(".choices:eq(2) img:eq(5)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Ting-FB.png");
        firstMoveSeq = 6;
    });
    $(".choices:eq(2) img:eq(6)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Ting-FI.png");
        firstMoveSeq = 7;
    });
    $(".choices:eq(2) img:eq(7)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Ting-FH.png");
        firstMoveSeq = 8;
    });
    $(".choices:eq(2) img:eq(8)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Ting-BK.png");
        firstMoveSeq = 9;
    });
    $(".choices:eq(2) img:eq(9)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Ting-FT.png");
        firstMoveSeq = 10;
    });
    $(".choices:eq(2) img:eq(10)").click(function(){
        $.windowbox.clearSerie1();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(0)").prop("src","../asset/MovesStaticPics/Spic-Rao.png");
        firstMoveSeq = 11;
    });
    //设置“初始动作”-End

    // 设置"承接动作"-Start
    $(".choices:eq(3) img:eq(0)").click(function(){
        // 将本类别动作都先设置为“未被选择的状态”
        $.windowbox.clearSerie2();
        // 将pic-selected的样式添加到此时点击的图片
        $(this).addClass("pic-selected");
        // 将预览区域对应的图片进行修改
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Pan-2.png");
        secondMoveSeq = 1;
    });
    $(".choices:eq(3) img:eq(1)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Beng-2.png");
        secondMoveSeq = 2;
    });
    $(".choices:eq(3) img:eq(2)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Ke-2.png");
        secondMoveSeq = 3;
    });
    $(".choices:eq(3) img:eq(3)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Guai-2.png");
        secondMoveSeq = 4;
    });
    $(".choices:eq(3) img:eq(4)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Mo-2.png");
        secondMoveSeq = 5;
    });
    $(".choices:eq(3) img:eq(5)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Ting-FB-2.png");
        secondMoveSeq = 6;
    });
    $(".choices:eq(3) img:eq(6)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Ting-FI-2.png");
        secondMoveSeq = 7;
    });
    $(".choices:eq(3) img:eq(7)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Ting-FH-2.png");
        secondMoveSeq = 8;
    });
    $(".choices:eq(3) img:eq(8)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Ting-BK-2.png");
        secondMoveSeq = 9;
    });
    $(".choices:eq(3) img:eq(9)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Ting-FI-2.png");
        secondMoveSeq = 10;
    });
    $(".choices:eq(3) img:eq(10)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Ting-QX.png");
        secondMoveSeq = 11;
    });
    $(".choices:eq(3) img:eq(11)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Shuai.png");
        secondMoveSeq = 12;
    });
    $(".choices:eq(3) img:eq(12)").click(function(){
        $.windowbox.clearSerie2();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(1)").prop("src","../asset/MovesStaticPics/Spic-Rao-2.png");
        secondMoveSeq = 13;
    });
    //设置“承接动作”-End

    //设置"终结动作"-Start
    $(".choices:eq(4) img:eq(0)").click(function(){
        // 将本类别动作都先设置为“未被选择的状态”
        $.windowbox.clearSerie3();
        // 将pic-selected的样式添加到此时点击的图片
        $(this).addClass("pic-selected");
        // 将预览区域对应的图片进行修改
        $(".preview-moves-pic:eq(2)").prop("src","../asset/MovesStaticPics/Spic-Chuai.png");
        thirdMoveSeq = 1;
    });
    $(".choices:eq(4) img:eq(1)").click(function(){
        $.windowbox.clearSerie3();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(2)").prop("src","../asset/MovesStaticPics/Spic-Bei.png");
        thirdMoveSeq = 2;
    });
    $(".choices:eq(4) img:eq(2)").click(function(){
        $.windowbox.clearSerie3();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(2)").prop("src","../asset/MovesStaticPics/Spic-Gou.png");
        thirdMoveSeq = 3;
    });
    $(".choices:eq(4) img:eq(3)").click(function(){
        $.windowbox.clearSerie3();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(2)").prop("src","../asset/MovesStaticPics/Spic-TK.png");
        thirdMoveSeq = 4;
    });
    $(".choices:eq(4) img:eq(4)").click(function(){
        $.windowbox.clearSerie3();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(2)").prop("src","../asset/MovesStaticPics/Spic-FGT.png");
        thirdMoveSeq = 5;
    });
    $(".choices:eq(4) img:eq(5)").click(function(){
        $.windowbox.clearSerie3();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(2)").prop("src","../asset/MovesStaticPics/Spic-360.png");
        thirdMoveSeq = 6;
    });
    $(".choices:eq(4) img:eq(6)").click(function(){
        $.windowbox.clearSerie3();
        $(this).addClass("pic-selected");
        $(".preview-moves-pic:eq(2)").prop("src","../asset/MovesStaticPics/Spic-DT.png");
        thirdMoveSeq = 7;
    });
    //设置“终结动作”-End

    // 设置重置按钮
    $("#reset-button").click(function(){
        // alert("fuckyou");
        $.windowbox.clearSerie1();
        $.windowbox.clearSerie2();
        $.windowbox.clearSerie3();
        $.windowbox.clearPreview();
    });

});

window.onload = ()=> {

    let btn = document.getElementById("download-button");

    btn.onclick = downloadProcess
    function downloadProcess(){

        // 检查能否正确获得用户选择的三个动作
        alert("firstNumber: "+firstMoveSeq);
        alert("secondNumber: "+secondMoveSeq);
        alert("thirdNumber: "+thirdMoveSeq);

        if (firstMoveSeq != 0 && secondMoveSeq != 0 && thirdMoveSeq != 0) {

            // alert("Now you can download");

            var imglist1 =[];
            var imglist2 =[];
            var imglist3 =[];

            var gif = new GIF({
            workers: 2,
            quality: 10,
            width: 600,
            height: 600,
            });

            if (firstMoveSeq == 1) {
                let imglist1 = document.getElementsByClassName("imgSeq-1-1");
            } else if (firstMoveSeq == 2){
                let imglist1 = document.getElementsByClassName("imgSeq-1-2");
            } else if (firstMoveSeq == 3){
                let imglist1 = document.getElementsByClassName("imgSeq-1-3");
            } else if (firstMoveSeq == 4){
                let imglist1 = document.getElementsByClassName("imgSeq-1-4");
            } else if (firstMoveSeq == 5){
                let imglist1 = document.getElementsByClassName("imgSeq-1-5");
            } else if (firstMoveSeq == 6){
                let imglist1 = document.getElementsByClassName("imgSeq-1-6");
            } else if (firstMoveSeq == 7){
                let imglist1 = document.getElementsByClassName("imgSeq-1-7");
            } else if (firstMoveSeq == 8){
                let imglist1 = document.getElementsByClassName("imgSeq-1-8");
            } else if (firstMoveSeq == 9){
                let imglist1 = document.getElementsByClassName("imgSeq-1-9");
            } else if (firstMoveSeq == 10){
                let imglist1 = document.getElementsByClassName("imgSeq-1-10");
            } else if (firstMoveSeq == 11){
                imglist1 = document.getElementsByClassName("imgSeq-1-11");
            };
            // 第一个序列的选择

            if (secondMoveSeq == 1) {
                let imglist2 = document.getElementsByClassName("imgSeq-2-1");
            } else if (secondMoveSeq == 2){
                let imglist2 = document.getElementsByClassName("imgSeq-2-2");
            } else if (secondMoveSeq == 3){
                let imglist2 = document.getElementsByClassName("imgSeq-2-3");
            } else if (secondMoveSeq == 4){
                let imglist2 = document.getElementsByClassName("imgSeq-2-4");
            } else if (secondMoveSeq == 5){
                let imglist2 = document.getElementsByClassName("imgSeq-2-5");
            } else if (secondMoveSeq == 6){
                let imglist2 = document.getElementsByClassName("imgSeq-2-6");
            } else if (secondMoveSeq == 7){
                let imglist2 = document.getElementsByClassName("imgSeq-2-7");
            } else if (secondMoveSeq == 8){
                let imglist2 = document.getElementsByClassName("imgSeq-2-8");
            } else if (secondMoveSeq == 9){
                imglist2 = document.getElementsByClassName("imgSeq-2-9");
            } else if (secondMoveSeq == 10){
                let imglist2 = document.getElementsByClassName("imgSeq-2-10");
            } else if (secondMoveSeq == 11){
                let imglist2 = document.getElementsByClassName("imgSeq-2-11");
            } else if (secondMoveSeq == 12){
                let imglist2 = document.getElementsByClassName("imgSeq-2-12");
            } else if (secondMoveSeq == 13){
                let imglist2 = document.getElementsByClassName("imgSeq-2-13");
            };
            // 第二个序列的选择

            if (thirdMoveSeq == 1) {
                let imglist3 = document.getElementsByClassName("imgSeq-3-1");
            } else if (thirdMoveSeq == 2){
                let imglist3 = document.getElementsByClassName("imgSeq-3-2");
            } else if (thirdMoveSeq == 3){
                let imglist3 = document.getElementsByClassName("imgSeq-3-3");
            } else if (thirdMoveSeq == 4){
                let imglist3 = document.getElementsByClassName("imgSeq-3-4");
            } else if (thirdMoveSeq == 5){
                imglist3 = document.getElementsByClassName("imgSeq-3-5");
            } else if (thirdMoveSeq == 6){
                let imglist3 = document.getElementsByClassName("imgSeq-3-6");
            } else if (thirdMoveSeq == 7){
                let imglist3 = document.getElementsByClassName("imgSeq-3-7");
            };
            // 第三个序列的选择

            for (var i = 0; i < imglist1.length; i++) {
                    gif.addFrame(imglist1[i], {delay: 42})
                };

            for (var i = 0; i < imglist2.length; i++) {
                    gif.addFrame(imglist2[i], {delay: 42})
                };

            for (var i = 0; i < imglist3.length; i++) {
                    gif.addFrame(imglist3[i], {delay: 42})
                };

            alert(imglist1.length);
            alert(imglist2.length);
            alert(imglist3.length);
            
            gif.render();

            gif.on('finished', (blob) => {
                    let a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    console.log(URL.createObjectURL(blob));
                    a.download = 'FSFJ.gif';
                    a.click();
                    alert("renderDone!");
                    gif.abort();
                });
            
            // gif.on('finished', (blob) => {
            //     let a = document.createElement('a');
            //     a.href = URL.createObjectURL(blob);
            //     console.log(URL.createObjectURL(blob));
            //     a.download = 'result.gif';
            //     a.click();
            //     gif.abort();
            //     });

        }  else if (firstMoveSeq == 0 || secondMoveSeq == 0 || thirdMoveSeq == 0) {
            alert("Sorry, you can't download GIF without Moves all selected");
        };

    };
    
}