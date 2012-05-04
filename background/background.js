chrome.extension.onRequest.addListener(
	function(req, sender, sendResponse) {
		//console.log(req, sender, sendResponse);
		switch (req.action) {
			case 'getSettings':
				loadSettings(sendResponse);
				break;
		}
});


/**
 * load setting from storage and pass them to a callback
 */
function loadSettings(callback) {
	set = {};
	for (var name in localStorage) {
		switch (name) {
			case 'playalert':
				set[name] = (localStorage[name] == 'true');
				break;
			case 'chan_highlight':
				try {
					set[name] = JSON.parse(localStorage[name]);	
				}	catch (e) {
					set[name] = {}
				}
				break;
		}
	}
	callback(set);
}


