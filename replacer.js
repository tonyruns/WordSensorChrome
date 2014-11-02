jQuery.fn.textWalk = function( flag ) {
    this.contents().each( jwalk );
    function jwalk() {
        var name = this.nodeName.toLowerCase();
        if( name === '#text') {
            replaceData(this);
        } else if (name === 'input') {
            replacePlaceholder(this);
            if (this.getAttribute("type")==='submit' || flag){
                replaceValue(this);
            }
            
            
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && name !== 'script' && name !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};
//
var blacklist= [[/blow( )?job/ig, 'sexual act'],
                        [/fuck/ig, 'frig'],
                        [/damn/ig,'darn'],
                        [/nigger/ig,'negro'],
                        [/nigga/ig,'negro'],
                        [/\bass\b/ig,'butt'],
                        [/asshole/ig, 'poophole'],
                        [/asswipe/ig, ' butt'],
                        [/fag/ig,'homosexual'],
                        [/bitch(es)?(ass)?/ig,'female dog'],
                        [/drunk/ig, 'blood alcohol content over 0.08%'],
                        [/gay/ig,'homosexual'],
                        [/\bhell\b/ig,'heck'],  
                        [/kunt/ig,'vagina'],
                        [/lesbian/ig,'homosexual'],
                        [/bastard/ig, 'one born of parents not married to each other'],
                        [/piss/ig, 'urine'],
                        [/\bcock\b/ig, 'penis'],
                        [/\bdick\b/ig, 'penis'],
                        [/pussy/ig,'vagina'],
                        [/queer/ig,'homosexual'],
                        [/slut/ig,'sexually popular woman'],
                        [/skank/ig,'dirty girl'],
                        [/shitty/ig,'bad'],
                        [/\b(bull)?shit\b/ig,'poop'],
                        [/\btit(ty)?\b/ig,'breast'],
                        [/\btit(tie)?s\b/ig,'breast'],
                        [/whore/ig,'prostitute']];

function replaceData(elem) {
    for (var i=0; i<blacklist.length; i++){
        if (elem.data.search(blacklist[i][0])!=-1){
            elem.data = elem.data.replace(blacklist[i][0], blacklist[i][1]);
        }
    }
}

function replacePlaceholder(elem) {
    for (var i=0; i<blacklist.length; i++){
        if (elem.placeholder.search(blacklist[i][0])!=-1){
            elem.placeholder = elem.placeholder.replace(blacklist[i][0], blacklist[i][1]);
        }   
    }
}

function replaceValue(elem) {
    for (var i=0; i<blacklist.length; i++){
        if (elem.value.search(blacklist[i][0])!=-1){
            elem.value = elem.value.replace(blacklist[i][0], blacklist[i][1]);
        }
    }
}


var elemLength = 0;
var enable = false;
$(document).ready(function() {
   /*chrome.storage.local.clear(function(result) {
        alert('cleared');
    });*/
    chrome.storage.local.get(function (result) {
        elemLength = result['1'];
        enable = result['2'];
        if (typeof elemLength === 'undefined')
            elemLength = 0;
        if (typeof enable === 'undefined')
            enable = true;
        var fixedLength = blacklist.length + elemLength;
        for (var i=blacklist.length; i < fixedLength; i++)
        {
            blacklist.push([new RegExp('\\b' + result[i][0] + '\\b','ig'),result[i][1]]);
        }
    });

   // if (!enable) {
        $('body').textWalk(true);
    //}
});


// Create a MutationObserver to handle events
// (e.g. filtering TextNode elements)
var observer = new MutationObserver(function(mutations) {
//    if (!enable) {
        $('body').textWalk(false);
  //  }
});

// Start observing "childList" events in document and its descendants
observer.observe(document, {
    childList: true,
    subtree:   true
});

$('#addition').click(function() {
    var replacedWord = $('#replacedWord').val();
    var replacingWord = $('#replacingWord').val();

    /* Table implementation
    if (replacingWord != "" && replacedWord != "") {
        addRow('blacklistTable', replacedWord, replacingWord);
    };
    */

    var dataObj = {};
    dataObj[blacklist.length] = [replacedWord,replacingWord];
    var thisname = 1;
    dataObj[thisname] = elemLength + 1;
    chrome.storage.local.set(dataObj, function() {
        blacklist.push([new RegExp('\\b' + replacedWord + '\\b','ig'),replacingWord]);
        chrome.tabs.reload(function(){});
    });
});

$('#check').change(function() {
    var val = $('#check').is(':checked');
    var dataObj = {};
    var enabled = 2;
    dataObj[enabled] = val;
    if(val)
        alert("yes");
    else
        alert("no");
    chrome.storage.local.set(dataObj, function() {
        chrome.tabs.reload(function(){});
    });
});

$('#removeAll').click(function() {
    chrome.storage.local.clear(function(result) {
        alert('cleared');
        chrome.tabs.reload(function(){});
    });
});

/*
function addRow(tableID, replacedWord, replacingWord) {
    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = rowCount + 1;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = replacedWord;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = replacedWord;
}

function deleteRow(tableID, replacedWord, replacingWord) {
    try{
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        for(var i=0; i < rowCount; i++){
            var row = table.row[i];
            var edWord = row.cells[1].innerHTML;
            var ingWord = row.cells[1].innerHTML;

            if(edWord == replacedWord & ingWord == replacingWord){
                if(rowCount <= 0) {
                    alert("Cannot delete all the rows.");
                    break;
                }
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    } catch(e) {
        alert(e);
    }
}*/
