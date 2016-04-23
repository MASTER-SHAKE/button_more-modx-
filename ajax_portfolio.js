var isBrowserIE = false;

$(window).load(function(){
	$('a.more_works').on('click', function(e){
		e.preventDefault();
		getWork($(this));
	});
	if($('a.more_works').length){
		getWork($('a.more_works'));
	}
});

function getUrlVars(link)
{
    var vars = [], hash;
    var hashes = link.slice(link.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    vars['page']++;
    var tmp = link.split('?');
    vars['link'] = tmp[0];
    return vars;
}
function getWork(link){
	$.ajax({
		type: "GET",
		url: link.attr('href'),
		success: function(msg){
			link.before(msg);
			//itsLastPortfolio();
		}
	});
	var arr = getUrlVars(link.attr('href'));
	if (arr['page'] <= arr['total']){
		link.attr('href',arr['link'] + "?" + "&page=" + arr['page'] + "&parent=" + arr['parent'] + "&total=" + arr['total'] +"&id_res="+ arr['id_res']);
	}else{
		link.hide();
	}
}
