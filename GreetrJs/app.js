// initial tests
const g1 = G$('John', 'Doe'); // get new object with shorthand notation

console.log(g1);

// chainable methods
g1.greet().setLang('es').greet().log();

const g2 = G$('Mary', 'Poppins', 'es');

console.log(g2);

g2.greet(true).setLang('en').greet(true).log();

// use Greetr with jQuery
// will show an appropriate greeting once the Login button is clicked
$('#login').click(function() {
    const loginGrtr = G$('Nat', 'Turner');

    $('#logindiv').hide();
    
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', $('#type').val() === 'formal').log();
});