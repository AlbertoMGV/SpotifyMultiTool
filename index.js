const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');


clear();

function reset (op) {

	clear();
	banner();			
	
}

function banner () {
	console.log(
			chalk.yellow(
		    		figlet.textSync('Spotify Multi Tool', { horizontalLayout: 'full' })
		  	)
	);
	console.log('Developed by Alberto Miranda [albertomgv.com]');
	console.log('v1.0.0');
	console.log();
}


const name = async () => {
	const user = await inquirer.askName();
  	reset();
  	console.log('Welcome '+user.name+'!');
  	console.log('');
  	option();
  	

}

function options() {
	option();
}

const option = async () => {
  	const option = await inquirer.askOption();
  	reset();
  	if (option.option[1]==null) {
  		console.log('You`ve selected ['+option.option[0]+']')
  		switch (option.option[0].charAt(0)) {
			case '1':
	    		option1();
	    		break;
  			case '2':
    			option2();
    			break;
    		case '3':
    			option2();
    			break;

		}
  	} else {
  		reset();
  		console.log('* Select only one option!');
  		options();
  	}
  	

}

const option1 = async () => {
		console.log('Not defined yet sorry');
}

const option2 = async () => {  	
		console.log('Not defined yet sorry');
}

const option3 = async () => {
  		console.log('Not defined yet sorry');
}

banner();
name();
