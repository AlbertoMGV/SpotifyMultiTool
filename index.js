const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');
const spoty  = require('./lib/spoty');


console.clear();

function reset (op) {

	console.clear();
	banner();			
	
}

function banner () {
	console.log(
			chalk.yellow(
		    		figlet.textSync('Spotify Multi Tool', { horizontalLayout: 'full' })
		  	)
	);
	console.log(chalk.yellow('Developed by Alberto Miranda [albertomgv.com]'));
	console.log(chalk.yellow('v1.0.0'));
	console.log();
}


const start = async () => {
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
  	if (option.option[0]==null) {
  		reset();
  		console.log(chalk.red('* Select only one option!'));
  		options();

  	} else if (option.option[1]==null) {
  	
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
		console.log(chalk.green('***** Playlist Copier *****'));
		console.log("");
		console.log("From:");
		const pl1 = await inquirer.askPlaylist();
		console.log("To:");
		const pl2 = await inquirer.askPlaylist();

	  	spoty.playCopier(pl1.playlist,pl2.playlist);
	  	
}

const option2 = async () => {  	
		console.log(chalk.green('***** Playlist List *****'));
		console.log("");
		const pl = await inquirer.askPlaylist();
		reset();
		console.log(chalk.green('***** Playlist Songs *****'));
		console.log('');
	  	spoty.getSongs(pl.playlist);
	  	back();
}

const option3 = async () => {
  		console.log(chalk.red('Not defined yet sorry'));
}

const back = async () => {
  		const back = await inquirer.back();
  		if (back.answer=='y' || back.answer=='Y') {
  			reset();
  			option();
  		} else {
  			console.log(chalk.green("See you soon <3"))
  		}

  		
	  	
}

banner();
start();
