jQuery.fn.textWalk = function( fn ) {
    this.contents().each( jwalk );
    function jwalk() {
        var name = this.nodeName.toLowerCase();
        if( name === '#text') {
            replaceData(this);
           // fn.call( this );
        } else if (name === 'input') {
            replacePlaceholder(this);
            replaceValue(this);
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && name !== 'script' && name !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};
//
var blacklist= [[/blowjob/ig, 'sexual act'],
                        [/fuck/ig, 'frig'],
                        [/damn/ig,'darn'],
                        [/nigger/ig,'negro'],
                        [/nigga/ig,'negro'],
                        [/ass/ig,'butt'],
                        [/fag/ig,'homosexual'],
                        [/bitch/ig,'female dog'],
                        [/drunk/ig, 'blood alcohol content over 0.08%'],
                        [/gay/ig,'homosexual'],
                        [/hell/ig,'heck'],
                        [/kunt/ig,'vagina'],
                        [/lesbian/ig,'homosexual'],
                        [/bastard/ig, 'one born of parents not married to each other'],
                        [/piss/ig, 'urine'],
                        [/cock/ig, 'penis'],
                        [/dick/ig, 'penis'],
                        [/pussy/ig,'vagina'],
                        [/queer/ig,'homosexual'],
                        [/slut/ig,'sexually popular woman'],
                        [/skank/ig,'dirty girl'],
                        [/shitty/ig,'bad'],
                        [/shit/ig,'poop'],
                        [/tit/ig,'breast'],
                        [/tits/ig,'breast'],
                        [/whore/ig,'prostitute']];
//words that need fixing
//hell
//cock
//dick
//tit
//tits
//ass
//shit

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

$('body').textWalk();

// Create a MutationObserver to handle events
// (e.g. filtering TextNode elements)
var observer = new MutationObserver(function(mutations) {
    $('body').textWalk();
});

// Start observing "childList" events in document and its descendants
observer.observe(document, {
    childList: true,
    subtree:   true
});
