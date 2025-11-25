(function(){
	// identifica o link ativo no menu
	const path = (location.pathname.split('/').pop() || 'index.html');
	document.querySelectorAll('.main-nav a').forEach(a=>{
		const href = a.getAttribute('href');
		if(href === path) a.classList.add('active');
	});

	// espaço para futuras interações simples
})();