const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {

  askName: () => {
    const questions = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter your name:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a normal name :(.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
   askOption: () => {
    const questions = [
      {
        type: 'checkbox',
        name: 'option',
        message: 'Choose an option:',
        choices: ['1. Copy one playlist to another', '2. Get Playlist songs', '3. CCCC']
      }
    ];
    return inquirer.prompt(questions);
  },
  askPlaylist: () => {
    const questions = [
      {
        name: 'playlist',
        type: 'input',
        message: 'Playlist link:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please valid link.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  back: () => {
    const questions = [
      {
        name: 'answer',
        type: 'input',
        message: 'Another query? y/N:',
        validate: function( value ) {
          if (value=='y') {
            return true;
          } else if (value=='N'){
            return true;
          } else {
            return 'Please introduce "y" or "N".';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },

}