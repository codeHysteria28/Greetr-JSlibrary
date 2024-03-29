// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Branislav', 'Buna');

// use our chainable methods
g.greet().setLang('es').greet(true);

// let's use our object on the click of the loggin button
$('#login').click(function() {

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('Branislav', 'Buna');

    // hide the login on the screen
    $('#logindiv').hide();

    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen lang, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});