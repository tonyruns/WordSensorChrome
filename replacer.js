$(document).ready(function() {
	alert("test");
	document.body.innerHTML = document.body.innerHTML.replace(new RegExp("the", "g"), "CHOP CHOP CHOP");
});

$(document).click(function() {
	alert("dweep chops");
});