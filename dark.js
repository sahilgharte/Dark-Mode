const moonPath="M43.5 54C43.5 82.1665 61.5 102 61.5 102C27.5345 102 0 79.1665 0 51C0 22.8335 27.5345 0 61.5 0C61.5 0 43.5 25.8335 43.5 54Z";
const sunPath="M123 51C123 79.1665 95.4655 102 61.5 102C27.5345 102 0 79.1665 0 51C0 22.8335 27.5345 0 61.5 0C95.4655 0 123 22.8335 123 51Z";

const darkMode=$("#darkMode");

	var toggle=false;

	darkMode.on("click",function(){
		const timeline=anime.timeline({
			duration:750,
			easing:"easeOutExpo"
		});

		timeline.add({
			targets:".sun",
			d:[
			{value:toggle?sunPath:moonPath}
			]
		});

		timeline.add({
			targets:'#darkMode',
			rotate:toggle?0:320,
			// duration:350
		},'-=350')/*Adding the duration faster*/
		
		timeline.add({
			targets:'section',
			background:toggle? 'rgb(255,255,255)':'rgb(22,22,22)'
		},'-=200')

		timeline.add({
			targets:'h1',
			color:toggle?'#000000':'#fff'
		},'-=100')

		if(!toggle){
			toggle=true;
		}else{
			toggle=false;
		}
	});