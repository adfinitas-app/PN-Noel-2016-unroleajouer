$('#seeIntro').click(function(){
	console.log('HERE');
	woopra.track('interaction', {category:"SPOT_LP_unroleajouer16",action:"clic",url:document.location.href,title: document.title});
});
$('#seeMinute').click(function(){
	woopra.track('interaction', {category:"VIDEO1MIN_LP_unroleajouer16",action:"clic",url:document.location.href,title: document.title});
});
$('#share-fb').click(function(){
	woopra.track('interaction', {category:"PARTAGEFB_LP_unroleajouer16",action:"clic",url:document.location.href,title: document.title});
});
$('#share-tw').click(function(){
	woopra.track('interaction', {category:"PARTAGETW_LP_unroleajouer16",action:"clic",url:document.location.href,title: document.title});
});
$('#dw-kit').click(function(){
	woopra.track('interaction', {category:"KITAMBASSADEUR_LP_unroleajouer16",action:"clic",url:document.location.href,title: document.title});
});
