var prefs = {};
prefs.beep  = new Audio('data:audio/mp3;base64,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69W1ZoJ+mldJTZb72WbuVd8tdy/LOtznKu7necx7zuqmGX3918e7v3vz53/v6/O1+PccM9Yawr9w/8eZ4a3j+u46399Im63VpNBiH/VcyL+Cf9/P347smw6imJLgOX8kVkkVAAgEAAAxVxgqieGJaBQYDIMBhqgkGBkEUY7YgJg3HGGEkCUYhgdpgADuGIsB+apoDBqID3GHckwbvRf5h4k4GpCW0Bo0PAZUAIGPquDQTAZPcQGgSKBgIFgsRQxASgGAAWI5AUPYGOA4AUYRfhiEV4QADjxCcnwuQHgAFAoA//uSxD8AI9ITLlnqgAMgnebLsYABIDDQycJdicLI5QuAplVEGzABwAD1AbvC4M3L5OJl8wTIuoqFgqCCYXMB8gpQMtiC5makTLiBfQTNCupNTDJiCgoAaAguKDHekvZNFUwl9FNR9BhKAuQdgoMXOQcWQLkIgzs33te6DtaLnGbImMwOYRAZsc8rjMDmLX7d/f279cnBzyDlccwcwqDnkXJ8ghFCoQci/////////+VyKEUKhbAW5W4l/SyICCXFZKzIs8WaewLgM7DjI5uBTmRmJpyuaTAYRaYAgMICyRbZAMisqViLuw7GYzDL+uy/z/Q9Go1Go1Go1GZbS0tLS0tLS01NTU2VampqalpcccccaWlpsssssssq1LS444440tLTWssssssqalpcccccaWlpqbLLLLKmpqWyCgoKDBQUFBQKCgoKDBQUFBQKCgoKDBQUFBQKCgoKDBQUFBQKCgoKDBQUFBQL/xQY7+BQK7wUGCvyCgUViCgwUFBQUkxBTUUzLjk3IChiZXRhKaqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7ksQSA8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=');
/*
prefs.playalert = function () {
	console.log(localStorage.playalert)
	return localStorage.playalert == 'true' ? true : false;
}
*/

chrome.extension.onRequest.addListener(
	function(req, sender, sendResponse) {
		//console.log('inj. received request',req)
		switch (req.action) {
			case 'loadSettings':
				getSettings();
				break;
		}
});

//follow blur/focus events
prefs.windowFocused = true;
window.addEventListener('focus', function() {
  prefs.windowFocused = true;
});

window.addEventListener('blur', function() {
  prefs.windowFocused = false;
});

main();
function main() {

	var socket = new WebSocket('wss://irccloud.com');
	socket.onopen = function(){  
		getSettings();
	}
	socket.onclose = function (error) {
		console.log('WebSocket Close ', error);
	
	};
	socket.onerror = function (error) {
		console.log('WebSocket Error ', error);
		setTimeout(main, 5000);//restart in 5 seconds
	};
	socket.onmessage = function(msg) {
		//prevent webkit from barfing at weird strings
		try {
			var msg = JSON.parse(msg.data);
		} catch (e) {
			msg = {};
		}
		
		messageHandler(msg);
	};
}

/**
 * Check incomming messages to see if there are actions we need to take
 */
function messageHandler(msg) {
	//console.log(msg)

	switch (msg.type) {
		case 'buffer_msg':
		case 'buffer_me_msg':
			//exit if the tab isnt hidden. We only alert when its not visable
			if (channelFocused(msg.chan)) {
				return true;
			}
			if (msg.highlight && prefs.playalert) {
				prefs.beep.play();
			} else if (matchedChannel(msg.chan)) {
				if (msg.type == 'buffer_msg') {
					popUp(title = 'From: ' 
								+ msg.from
								+ ' in '
								+ msg.chan, msg.msg, msg.chan);
				} else {
					popUp(title = 'In '
								+ msg.chan + ':',
								msg.from + ' ' + msg.msg,
								msg.chan);
				}
				
				if (prefs.playalert) {
					prefs.beep.play();
				}
			}
			break;
	}
}


/**
 * Check a channel to see if it matches one that user saved
 */
 function matchedChannel(chan) {
 	return ($.inArray(chan, prefs.chan_highlight) > -1)
 		|| ($.inArray(chan.substring(1), prefs.chan_highlight) > -1)
 }

/**
 * get initial setting from background page
 */
function getSettings() {
	chrome.extension.sendRequest({action: "getSettings"}, function(res) {
		console.log('setting from background', res)
		$.extend(prefs, res);
	});	
}

/**
 * Show popup
 */
function popUp(title, msg, chan) {
	var icon = 'https://irccloud.com/static/48x48.png';
	
	var notification = webkitNotifications.createNotification(
		 icon,
		 title,
		 msg
	);
	
	//hide after 15 seconds
	notification.ondisplay = function() {
		setTimeout(function () {
			notification.cancel();
		}, 15000);
	};
	
	notification.onclick = function() {
		notification.cancel();
		window.focus();
		var parser	= document.createElement('a');
		parser.href	= window.location.href;
		hash		= parser.hash.split('/');
		hash[2]		= encodeURI(chan);
		window.location.href = hash.join('/');
	}

	notification.show();
}

/**
 * Checks if a channel window is currently in focus
 */
function channelFocused(chan) {
	if(document.webkitHidden || !prefs.windowFocused) {
		return false;
	}
	
	var parser = document.createElement('a');
	parser.href = window.location.href;
	var FocusedChan = parser.hash.split('/');
	
	return decodeURIComponent(FocusedChan[FocusedChan.length - 1]) == chan;
}