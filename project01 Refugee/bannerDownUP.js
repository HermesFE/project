var obanner =document.getElementById("banner");
var oimgBanner =document.getElementById("imgBanner");
var h=0;
var step=2;
var maxH=oimgBanner.height;
console.log(maxH);
function bannerDown(){
	obanner.style.height=h+"px";
	obanner.style.display="block";
	if(h<maxH){
		h+=step;
		setTimeout(bannerDown,1);
		console.log(h);
	}else{
		setTimeout(bannerUp,3000);
	}
}
function bannerUp(){
	if(h>0){
		h-=step;
		obanner.style.height=h+"px";
		setTimeout(bannerUp,1)
	}else{
	}
}
setTimeout(bannerDown,3000);