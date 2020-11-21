// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled
chrome.runtime.onInstalled.addListener(function() {
  for (let key of Object.keys(kLocales)) {
    chrome.contextMenus.create({
      id: key,
      title: kLocales[key],
      type: 'normal',
      contexts: ['selection'],
    });
  }
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url2 =
  'https://www.visualthesaurus.com/app/view?word=' + item.selectionText + '&lang=en';
chrome.tabs.create({url: url2, index: tab.index + 1});
  let url1 =
    'https://www.vocabulary.com/dictionary/' + item.selectionText;
  chrome.tabs.create({url: url1, index: tab.index + 1});
});

// Original code that gets item.menuItemId from locals.js
// chrome.contextMenus.onClicked.addListener(function(item, tab) {
//   let url =
//     'https://google.' + item.menuItemId + '/search?q=' + item.selectionText;
//   chrome.tabs.create({url: url, index: tab.index + 1});
// });

// // You can do if(item.menuItemID == POGO) {
//   let url2 =
//   'https://www.POGO.com/app/view?word=' + item.selectionText + '&lang=en';
// chrome.tabs.create({url: url2, index: tab.index + 1});
// } else if (item.menuItemID == PA4) {
//   let url2 =
//   'https://www.POGO.com/app/view?word=' + item.selectionText + '&lang=en';
// chrome.tabs.create({url: url2, index: tab.index + 1});  
// }


