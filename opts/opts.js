$(document).ready(function(){
	loadSettings();

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
		chrome.tabs.query({url: 'https://irccloud.com/'}, function (tabs){
			$.each(tabs, function(idx, tab) {
				chrome.tabs.sendRequest(tab.id, {action: 'loadSettings'});
			})
		});
	});
});



/**
 * load setting from storage and pass them to a callback
 */
function loadSettings() {
	chrome.extension.sendRequest({action: 'getSettings'}, function(res) {
 		console.log(res);
		popForm(res)
	});
}

/**
 * Popuplate form values
 */
function popForm(set) {
	$('input').each(function (){
		switch ($(this).attr('name')) {
			case 'playalert':
				$(this).prop('checked', set[$(this).attr('name')]);
				break;
			case 'chan_highlight':
				val = set[$(this).attr('name')].join(' ');
				$(this).val(val);
				break;
		}
	});
}
