jQuery.fn.textWalk = function( fn ) {
    this.contents().each( jwalk );
    function jwalk() {
        var name = this.nodeName.toLowerCase();
        if( name === '#text' ) {
            fn.call( this );
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && name !== 'script' && name !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};
var filter = function() {
    this.data = this.data.replace(/blowjob/ig, 'sexual act');
    this.data = this.data.replace(/fuck/ig,'frig');
    this.data = this.data.replace(/damn/ig,'darn');
    this.data = this.data.replace(/nigger/ig,'negro');
    this.data = this.data.replace(/nigga/ig,'negro');
    this.data = this.data.replace(/ass/ig,'butt');
    this.data = this.data.replace(/fag/ig,'homosexual');
    this.data = this.data.replace(/bitch/ig,'female dog');
    this.data = this.data.replace(/cunt/ig,'vagina');
    this.data = this.data.replace(/drunk/ig, 'blood alcohol content over 0.08%')
    this.data = this.data.replace(/gay/ig,'homosexual');
    this.data = this.data.replace(/hell/ig,'heck');
    this.data = this.data.replace(/kunt/ig,'vagina');
    this.data = this.data.replace(/lesbian/ig,'homosexual');
    this.data = this.data.replace(/piss/ig, 'urine');
    this.data = this.data.replace(/pussy/ig,'female reproductive organ');
    this.data = this.data.replace(/queer/ig,'homosexual');
    this.data = this.data.replace(/slut/ig,'sexually popular woman');
    this.data = this.data.replace(/skank/ig,'dirty girl');
    this.data = this.data.replace(/shitty/ig,'bad');
    this.data = this.data.replace(/shit/ig,'poop');
    this.data = this.data.replace(/tit/ig,'breast');
    this.data = this.data.replace(/tits/ig,'breast');
    this.data = this.data.replace(/whore/ig,'hussy');
};
$('body').textWalk(filter);

// Create a MutationObserver to handle events
// (e.g. filtering TextNode elements)
var observer = new MutationObserver(function(mutations) {
    $('body').textWalk(filter);
    /*/$('body').textWalk(function() {
        this.data = this.data.replace(/the/ig,'th');
    });*/
});

// Start observing "childList" events in document and its descendants
observer.observe(document, {
    childList: true,
    subtree:   true
});
