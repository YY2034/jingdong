$(function(){
    // 头部
    var hover=$(".hover");
    var dropdown=$(".dropdown");
    for (var i = 0; i < hover.length; i++) {
        hover[i].index=i;
        hover[i].onmouseover=function() {
            // hover[this.index].style.background="#fff"
            dropdown[this.index].style.display="block"
        }
        hover[i].onmouseout=function() {
            // hover[this.index].style.background="#f6f6f6"
            dropdown[this.index].style.display="none"
        }
    }

    // banner轮播
	var box=$(".content-middle")[0];
	var imgs=$(".im");
	var pt=$(".pt");
	var ll=$(".ll")[0];
	var rr=$(".rr")[0];
    var n=0;
    var next=0;
    var t=setInterval(move,1500);
    var sign=true;
    function move(){
    	if(!sign){
    		return;
    	}
    	sign=false;
    	next=n+1;
    	if(next>=imgs.length){
    		next=0;
    	}
    	for(var i=0;i<imgs.length;i++){
    		pt[i].style.background="#333";
    		animate(imgs[i],{opacity:0},500);
    	}
    	pt[next].style.background="#C81623";
    	// imgs[next].style.zIndex=1;
    	animate(imgs[next],{opacity:1},500,function(){
    		sign=true;
    	})
    	n=next;
    }
    move();
    function move1(){
    	if(!sign){
    		return;
    	}
    	sign=false;
    	next=n-1;
    	if(next<0){
    		next=imgs.length-1;
    	}
    	for(var i=0;i<imgs.length;i++){
    		pt[i].style.background="#333";
    		animate(imgs[i],{opacity:0},500);
    	}
    	pt[next].style.background="#C81623";
    	// imgs[next].style.zIndex=1;
    	animate(imgs[next],{opacity:1},500,function(){
    		sign=true;
    	})
    	n=next;
    }
    box.onmouseover=function(){
    	clearInterval(t);
    }
    box.onmouseout=function(){
    	t=setInterval(move,1500);
    }
    ll.onclick=function(){
    	move1();
    }
    rr.onclick=function(){
    	move();
    }
    for(var i=0;i<pt.length;i++){
    	pt[i].index=i;
    	pt[i].onmouseover=function(){
    		for(var i=0;i<imgs.length;i++){
    			pt[i].style.background="#333";
    			animate(imgs[i],{opacity:0},500);

    		}
    		pt[this.index].style.background="#C81623";
    		animate(imgs[this.index],{opacity:1},500,function(){
    			sign=true;
    		});
    		n=this.index;
    	}
    }
// banner下面的轮播
var fox=$(".content-two-right")[0];
    var im=$(".t-box")[0];
	var l=$(".lr1")[0];
	var r=$(".lr2")[0];
	var h=$(".today");
	var width=h[0].offsetWidth;
	var flag=true;
	// var m=setInterval(dong,1000);
	function dong(){
        console.log(2)
		if(!flag){
			return;
		}
		flag=false;
		var first=getFirst(im);
		animate(im,{left:-width},100,function(){
            console.log(width)
			im.appendChild(first);
			im.style.left=0;
			flag=true;
		})
	}
	function dong1(){
		if(!flag){
			return;
		}
		flag=false;
		var first=getFirst(im);
		var last=getLast(im);
		insertBefore(last,first);
		im.style.left=-width+"px";
		animate(im,{left:0},100,function(){
			flag=true;
        })
    }
	// fox.onmouseover=function(){
	// 	clearInterval(m);
	// }
	// fox.onmouseout=function(){
	// 	m = setInterval(dong, 1000);
	// }
	r.onclick = function() {
        console.log(1)
		dong();
	}
	l.onclick = function() {
		dong1();
	}


// 商品分类菜单栏
var goods=$(".goods");
var hd=$(".hd");
for(var i=0;i<hd.length;i++){
    hd[i].style.display="none";
    goods[i].index=i;
    goods[i].onmouseover=function(){
        hd[this.index].style.display="block";

    }
    goods[i].onmouseout=function(){
        hd[this.index].style.display="none";
    }
}

// 选项卡
var cla=$(".class");
var man=$(".man-first");
for(var i=0;i<man.length;i++){
    cla[i].index=i;
    man[i].zIndex=0;
    cla[i].onmouseover=function(){
        for (var i = cla.length - 1; i >= 0; i--) {
            cla[i].classList.remove('acaa')
            man[i].style.zIndex=0;
        };
        man[this.index].style.zIndex=1;
        cla[this.index].classList.add('acaa')
    }
   
}

var floor = $(".floor");
    var lis = $(".fs");
    var box = $(".f-box")[0];
    var cw = document.documentElement.clientWidth;
    var ch = document.documentElement.clientHeight;
    var bh = box.offsetHeight;
    box.style.top = (ch - bh) / 2 + "px";
    var flag=true;
    var flag1=true;
    var sign=true;
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            sign=false;
            var top = floor[this.index].offsetTop;//获取出现楼层到顶部的距离
            animate(document.documentElement,{scrollTop:top},300,function () {
                sign=true;
            })//滚动条到顶部距离
            animate(document.body,{scrollTop:top},300,function () {
                sign=true;
            })//滚动条到顶部距离
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.background = "#fff"
                lis[i].style.color = "#c81623"
                lis[i].innerHTML=i+1+"F";
            }
            lis[this.index].style.color = "#fff" 
            lis[this.index].style.background = "red"
            var aa = lis[this.index].getAttribute("aa");
            lis[this.index].innerHTML=aa;
        }
    }
    
    window.onscroll=function(){
        if(!sign){
            return
        }
        var obj = document.documentElement.scrollTop ? document.documentElement : document.body;
        for (var i = 0; i < floor.length; i++) {
            if (obj.scrollTop >= (floor[i].offsetTop-ch+100)) {
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.background = "#fff"
                    lis[j].style.color = "#c81623"
                    lis[j].innerHTML=j+1+"F";
                }
                
                var aa = lis[i].getAttribute("aa");
                lis[i].innerHTML=aa;
                
                lis[i].style.color = "#fff"
                lis[i].style.background = "#B6131D"
            }
        }
        if (obj.scrollTop >= (floor[0].offsetTop - ch)) {
            if (flag) {
                flag = false;
                animate(box, {opacity: 1},300, function() {flag1 = true;})
            } 
        }else {
                if (flag1) {
                flag1 = false;
                animate(box, {opacity: 0},300, function() {flag = true;})
            } 
        }
    }


// 每一楼层轮播
var bx=$(".bx");
for(var i=0;i<bx.length;i++){
    xz(bx[i]);
}


// 侧边栏的函数
    var nlas=$(".nla");
    var ntas=$(".nta");
    for(i=0;i<nlas.length;i++){
        nlas[i].index=i;
        nlas[i].onmouseover=function(){
            // 鼠标放上去的函数
            var ww=nlas[this.index].offsetWidth;
            nlas[this.index].background="#c81623"
            animate(ntas[this.index],{width:62},700)
        }
        nlas[i].onmouseout=function(){
            // 鼠标离开的函数
            animate(ntas[this.index],{width:0},700)
        }
    }





})