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
    this.data = this.data.replace(/fuck/ig,'frig');
    this.data = this.data.replace(/shit/ig,'poo');
    this.data = this.data.replace(/damn/ig,'darn');
    this.data = this.data.replace(/nigger/ig,'negro');
    this.data = this.data.replace(/nigga/ig,'negro');
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
