{
    "translatorID": "da113503-70fd-4482-9fe7-10d15210b4ad",
    "label": "org-mode",
    "creator": "Wenping Guo",
    "target": "txt",
    "minVersion": "2.1.9",
    "maxVersion": "",
    "priority": 200,
    "inRepository": false,
    "translatorType": 2,
    "browserSupport": "gcs",
    "displayOptions": {
        "Alternate (@DoeTitle2000)": false
    },
    "lastUpdated": "2018-07-30 07:03:17"
}

function doExport () {
    var item;
    var first = true;
    while((item = Zotero.nextItem())) {
        // http://zotero.org/users/15074/items/WZKAZKJG
        var str = item.uri;
        var n = str.lastIndexOf('/');
        var result = str.substring(n + 1);
        // [[zotero://select/items/1_WZKAZKJG][W2017SCC]
        var url = '[[zotero://select/items/1_' + result + ']' + '[zotero]';
        Zotero.write(url);
    }
}
