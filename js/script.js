	

var doCoolStuff = function() {
    document.getElementById('cool').className = 'cool red';
}


var whatsMyName = function (name) {
 
		alert('My name is: '+ name);
}




console.log ('Working on transferring the javascript and css to an external file(s). Making the java functions change and animate objects on the page')
var car = {
		make: 'VW',
	    type: 'Polo',
	    color: 'blue',
	    isTurnedOn: false,
	    numberOfWheels: 4, 
	    seats: 
		[	'seat 1',
		    'seat 2',
		    'seat 3',
		    'seat 4',
	    ],

	    turnOn: function() {
	    	this.isTurnedOn = true;
	    },	
	    fly: function() {
	    	alert('fly!');
	    },
	    switchCar: function(isOn) {
	    	console.log('turn car '+isOn)
	    }
	    	if(isOn == true) {
	    		this.isTurnedOn = true;
	    	}
	    	else {
	    		this.isTurnedOn = false;
	    		}	
	   } 	
	    
