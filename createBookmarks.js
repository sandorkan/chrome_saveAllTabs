// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */

// Assigns a array of all open tabs from the current active window to tabs-variable
tabs = null;
chrome.tabs.query({windowId:chrome.windows.WINDOW_ID_CURRENT},function(tab){tabs = tab});

hal = null
function saveCurrentBookmarks(bookmarkParentNode)
{
	hal = bookmarkParentNode;
	var parentID = bookmarkParentNode.id;
	for(i = 0; i < tabs.length;i++)
	{
		chrome.bookmarks.create({	'parentId':parentID,
									'title':tabs[i].title,	
									'url':tabs[i].url
								},
								function(){})
	}
}

function createBookMarkFolder()
{
	chrome.bookmarks.create({'parentId':'1','title':'RenameToYourGusto'},function(bmpn){saveCurrentBookmarks(bmpn)});
}


chrome.browserAction.onClicked.addListener(function(tab) 
{ 
	alert('Bookmarks Created');
	createBookMarkFolder();
});