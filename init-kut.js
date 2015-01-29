setTimeout(function(){
	var article = document.getElementById('article');
	article.innerHTML = article.innerHTML
		.replace(/[。、]/g, '<kut>$&</kut>')
		.replace(/[，]/g, '<kut>、</kut>')
	article.style.display = "none";
	article.style.display = "block";
	var figures = article.getElementsByTagName('figure');
	for(var j = 0; j < figures.length; j++){
		figures[j].innerHTML = '<span>' + figures[j].innerHTML + '</span><pad></pad><pad></pad>'
	}
	setTimeout(function(){
		for(var j = 0; j < figures.length; j++){
		 	var span = figures[j].getElementsByTagName('span')[0];
		 	var pad = figures[j].getElementsByTagName('pad')[0]
		 	if(span && pad){
		 		var offset = pad.getBoundingClientRect();
		 		span.style.top = (offset.top + window.pageYOffset )+ 'px'
		 	}
		}		
	}, 1)
}, 1)