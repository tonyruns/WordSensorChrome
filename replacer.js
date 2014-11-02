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
    this.data = this.data.replace(/pussy/ig,'female reproductive organ');
    this.data = this.data.replace(/queer/ig,'homosexual');
    this.data = this.data.replace(/slut/ig,'sexually popular woman');
    this.data = this.data.replace(/skank/ig,'dirty girl');
    this.data = this.data.replace(/shitty/ig,'bad');
    this.data = this.data.replace(/shit/ig,'poop');
    this.data = this.data.replace(/tit/ig,'breast');
    this.data = this.data.replace(/tits/ig,'breast');
    this.data = this.data.replace(/testicle/ig,'male genitalia');
    this.data = this.data.replace(/vajina/ig,'female genitalia');
    this.data = this.data.replace(/whore/ig,'hussy');
};

$('body').textWalk(filter);

// Create a MutationObserver to handle events
// (e.g. filtering TextNode elements)
var observer = new MutationObserver(function(mutations) {
    $('body').textWalk(filter);
});

// Start observing "childList" events in document and its descendants
observer.observe(document, {
    childList: true,
    subtree:   true
});