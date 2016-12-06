$(function(){
    var langth=0;
    var height1 = parseInt($(".fullpage").css("height"));
    console.log($("body").css("height"));
    var fullpage = document.querySelector(".fullpage");
    console.log(fullpage.offsetHeight);
    touch.on("body","swipeup",".fullpage",function(){
        langth+=100;
        if(langth>1100){
            langth = height1;
        }
        $(".fullpage").css({
            top:-langth
        })
        console.log(langth);
    });
    touch.on("body","swipedown",".fullpage",function(){
        langth-=100;
        if(langth<=0){
            langth = 0;
        }
        $(".fullpage").css({
            top:-langth
        })
    })
});