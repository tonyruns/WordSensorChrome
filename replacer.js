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

$('body').textWalk(function() {
    this.data = this.data.replace('the','William Chops Tiffany');
});