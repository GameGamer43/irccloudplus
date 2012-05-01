$(document).ready(function(){
	setForm()
	$('input').bind('change click keyup', function(){
		switch ($(this).attr('name')) {
			case 'playalert':
				localStorage[$(this).attr('name')] = $(this).is(':checked');
				break;
			case 'chan_highlight':
				val = $(this).val().split(' ');
				localStorage[$(this).attr('name')] = JSON.stringify(val);
				break;
		}
	});

});

function setForm() {
	$('input').each(function (){
		switch ($(this).attr('name')) {
			case 'playalert':
				$(this).prop('checked', localStorage[$(this).attr('name')]);
				break;
			case 'chan_highlight':
				val = localStorage[$(this).attr('name')];
				$(this).val(JSON.parse(val).join(' '));
				break;
		}
	});
}
