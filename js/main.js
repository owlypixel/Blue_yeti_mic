(function(){
	var mutebutton = document.querySelector('.mute-btn');
	mutebutton.addEventListener('click', function(){
		mutebutton.classList.toggle('muted');
	})

	Draggable.create("#volume", {
		type:"rotation",
		throwProps:true
	});


})();