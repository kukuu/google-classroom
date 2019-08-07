window.onload = Linkz;

function Linkz(){
	let links= document.getElementsByTagName("a");
	for( let i=0; i < links.length; i++){
		if(links[i].getAttribute("class")=="popup"){
			links[i].onclick = function() {
				popUp(this.getAttribute("href"));
				return false;
			}
		}	
	}			
}

function popUp(winURL) {
	window.open(winURL, "popup","width=320, height=480");
}
//not working for some reason. Found out what was wrong