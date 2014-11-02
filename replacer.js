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

function replaceData(elem) {
    elem.data = elem.data.replace(/blowjob/ig, 'sexual act');
    elem.data = elem.data.replace(/fuck/ig,'frig');
    elem.data = elem.data.replace(/damn/ig,'darn');
    elem.data = elem.data.replace(/nigger/ig,'negro');
    elem.data = elem.data.replace(/nigga/ig,'negro');
    elem.data = elem.data.replace(/ass/ig,'butt');
    elem.data = elem.data.replace(/fag/ig,'homosexual');
    elem.data = elem.data.replace(/bitch/ig,'female dog');
    elem.data = elem.data.replace(/cunt/ig,'vagina');
    elem.data = elem.data.replace(/drunk/ig, 'blood alcohol content over 0.08%')
    elem.data = elem.data.replace(/gay/ig,'homosexual');
    elem.data = elem.data.replace(/hell/ig,'heck');
    elem.data = elem.data.replace(/kunt/ig,'vagina');
    elem.data = elem.data.replace(/lesbian/ig,'homosexual');
    elem.data = elem.data.replace(/piss/ig, 'urine');
    elem.data = elem.data.replace(/pussy/ig,'vagina');
    elem.data = elem.data.replace(/queer/ig,'homosexual');
    elem.data = elem.data.replace(/slut/ig,'sexually popular woman');
    elem.data = elem.data.replace(/skank/ig,'dirty girl');
    elem.data = elem.data.replace(/shitty/ig,'bad');
    elem.data = elem.data.replace(/shit/ig,'poop');
    elem.data = elem.data.replace(/tit/ig,'breast');
    elem.data = elem.data.replace(/tits/ig,'breast');
    elem.data = elem.data.replace(/whore/ig,'prostitute');
}

function replacePlaceholder(elem) {
    elem.placeholder = elem.placeholder.replace(/blowjob/ig, 'sexual act');
    elem.placeholder = elem.placeholder.replace(/fuck/ig,'frig');
    elem.placeholder = elem.placeholder.replace(/damn/ig,'darn');
    elem.placeholder = elem.placeholder.replace(/nigger/ig,'negro');
    elem.placeholder = elem.placeholder.replace(/nigga/ig,'negro');
    elem.placeholder = elem.placeholder.replace(/ass/ig,'butt');
    elem.placeholder = elem.placeholder.replace(/fag/ig,'homosexual');
    elem.placeholder = elem.placeholder.replace(/bitch/ig,'female dog');
    elem.placeholder = elem.placeholder.replace(/cunt/ig,'vagina');
    elem.placeholder = elem.placeholder.replace(/drunk/ig, 'blood alcohol content over 0.08%')
    elem.placeholder = elem.placeholder.replace(/gay/ig,'homosexual');
    elem.placeholder = elem.placeholder.replace(/hell/ig,'heck');
    elem.placeholder = elem.placeholder.replace(/kunt/ig,'vagina');
    elem.placeholder = elem.placeholder.replace(/lesbian/ig,'homosexual');
    elem.placeholder = elem.placeholder.replace(/piss/ig, 'urine');
    elem.placeholder = elem.placeholder.replace(/pussy/ig,'vagina');
    elem.placeholder = elem.placeholder.replace(/queer/ig,'homosexual');
    elem.placeholder = elem.placeholder.replace(/slut/ig,'sexually popular woman');
    elem.placeholder = elem.placeholder.replace(/skank/ig,'dirty girl');
    elem.placeholder = elem.placeholder.replace(/shitty/ig,'bad');
    elem.placeholder = elem.placeholder.replace(/shit/ig,'poop');
    elem.placeholder = elem.placeholder.replace(/tit/ig,'breast');
    elem.placeholder = elem.placeholder.replace(/tits/ig,'breast');
    elem.placeholder = elem.placeholder.replace(/whore/ig,'prostitute');
}

function replaceValue(elem) {
    elem.value = elem.value.replace(/blowjob/ig, 'sexual act');
    elem.value = elem.value.replace(/fuck/ig,'frig');
    elem.value = elem.value.replace(/damn/ig,'darn');
    elem.value = elem.value.replace(/nigger/ig,'negro');
    elem.value = elem.value.replace(/nigga/ig,'negro');
    elem.value = elem.value.replace(/ass/ig,'butt');
    elem.value = elem.value.replace(/fag/ig,'homosexual');
    elem.value = elem.value.replace(/bitch/ig,'female dog');
    elem.value = elem.value.replace(/cunt/ig,'vagina');
    elem.value = elem.value.replace(/drunk/ig, 'blood alcohol content over 0.08%')
    elem.value = elem.value.replace(/gay/ig,'homosexual');
    elem.value = elem.value.replace(/hell/ig,'heck');
    elem.value = elem.value.replace(/kunt/ig,'vagina');
    elem.value = elem.value.replace(/lesbian/ig,'homosexual');
    elem.value = elem.value.replace(/piss/ig, 'urine');
    elem.value = elem.value.replace(/pussy/ig,'vagina');
    elem.value = elem.value.replace(/queer/ig,'homosexual');
    elem.value = elem.value.replace(/slut/ig,'sexually popular woman');
    elem.value = elem.value.replace(/skank/ig,'dirty girl');
    elem.value = elem.value.replace(/shitty/ig,'bad');
    elem.value = elem.value.replace(/shit/ig,'poop');
    elem.value = elem.value.replace(/tit/ig,'breast');
    elem.value = elem.value.replace(/tits/ig,'breast');
    elem.value = elem.value.replace(/whore/ig,'prostitute');
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
