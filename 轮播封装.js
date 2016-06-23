function xz(obj) {
		var m = 0;
	    var k = 0;
		var dians = $(".dianss",obj);
		var xlbimgs = $(".xlb-img",obj);
		var xlbr = $(".xlb-r",obj)[0]; //获取右按钮
		var xlbl = $(".xlb-l",obj)[0]; //获取左按钮
		var x=setInterval(xxlb,2000)
		function xxlb() {
			k=m+1;
			if (k>=xlbimgs.length) {
				k=0;
			}
			for (var i = 0; i < xlbimgs.length; i++) {
				dians[i].style.background = "#3e3e3e"
			}
			var width=xlbimgs[k].offsetWidth;
			xlbimgs[k].style.left=width+"px";
			xlbimgs[k].style.zIndex = 1;
			animate(xlbimgs[m], {left: -width}, 500)
			animate(xlbimgs[k], {left: 0}, 500)
			dians[k].style.background = "#b61b1f"
			m=k;
		}
		function xxlb1() {
			k=m-1;
			if (k<0) {
				k=xlbimgs.length-1;
			}
			for (var i = 0; i < xlbimgs.length; i++) {
				dians[i].style.background = "#3e3e3e";
			}
			var width=xlbimgs[m].offsetWidth;
			xlbimgs[k].style.left=-width+"px";
			xlbimgs[k].style.zIndex = 1;
			animate(xlbimgs[m], {left: width}, 500)
			animate(xlbimgs[k], {left: 0}, 500)
			dians[k].style.background = "#b61b1f"
			m=k;
		}
		obj.onmouseover=function(){
			xlbr.style.display="block";
			xlbl.style.display="block";
			clearInterval(x)
		}
		obj.onmouseout=function () {
			xlbr.style.display="none"
			xlbl.style.display="none"
			x=setInterval(xxlb,2000)
		}
		xlbr.onclick = function() {
			xxlb1()
		}
		xlbl.onclick = function() {
			xxlb()
		}
		for (var j = 0; j<xlbimgs.length; j++) {
			dians[j].index=j;
			dians[j].onmouseover=function() {
				for (var i = 0; i < xlbimgs.length; i++) {
						dians[i].style.background="#3e3e3e"
					}
				dians[this.index].style.background="#b61b1f"
				if (this.index==m) {
					return;
				}else if (this.index>m) {
					var width=xlbimgs[this.index].offsetWidth;
					xlbimgs[this.index].style.left=width+"px";
					xlbimgs[this.index].style.zIndex=1;
					animate(xlbimgs[m],{left:-width},500)
					animate(xlbimgs[this.index],{left:0},500);
				}else if (this.index<m) {
					var width=xlbimgs[this.index].offsetWidth;
					xlbimgs[this.index].style.left=-width+"px";
					xlbimgs[this.index].style.zIndex=1;
					animate(xlbimgs[m],{left:width},500)
					animate(xlbimgs[this.index],{left:0},500)
				}	
				m=this.index;
				k=this.index;
			}
		}
}