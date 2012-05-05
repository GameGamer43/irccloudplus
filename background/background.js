/**
 * General request listiner
 */
chrome.extension.onRequest.addListener(	function(req, sender, sendResponse) {
		//console.log(req, sender, sendResponse);
		switch (req.action) {
			case 'getSettings':
				loadSettings(sendResponse);
				break;
		}
});

/**
 * Browser action click handler
 * will create the tab if it doesnt exists, show it if it dose
 */
chrome.browserAction.onClicked.addListener(function(tab) {
	//onclick, see if we have a tab open
	chrome.tabs.query({url: 'https://irccloud.com/'}, function (tabs){
		if (tabs.length === 0) {			
			chrome.tabs.create({'url': 'https://irccloud.com/'});
		} else {
			chrome.tabs.update(tabs[0].id, {active: true});
		}
	});
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


