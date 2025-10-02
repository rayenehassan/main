(function(){
	// lazy load images assigned via data-src
	document.querySelectorAll('img.card-bg').forEach(img=>{
		const src = img.getAttribute('data-src');
		if(!src) return;
		img.src = src;
	});

	// Respect reduced motion: reduce transforms if user prefers reduced motion
	if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
		document.documentElement.classList.add('reduce-motion');
		// simple fallback: remove hover transform transitions
		document.querySelectorAll('.category-card').forEach(c=>c.style.transition='none');
	}
})();
