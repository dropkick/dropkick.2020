	
	if (document.readyState!='loading') init();
	// modern browsers
	else if (document.addEventListener) document.addEventListener('DOMContentLoaded', init);
	// IE <= 8
	else document.attachEvent('onreadystatechange', function(){
	    if (document.readyState=='complete') init();
	});


function init() {
    document.body.classList.add('js');
    document.body.classList.remove('loading', 'no-js');
    // menuToggler();

}

    // var menuToggle = document.getElementsByClassName('menu-toggle')[0];
    // var menuOverlay = document.getElementsByClassName('menu-overlay')[0];

    // menuToggle.addEventListener('click', function() {
    //     menuToggle.classList.toggle('open');
    //     menuOverlay.classList.toggle('show');
    // }, false);

