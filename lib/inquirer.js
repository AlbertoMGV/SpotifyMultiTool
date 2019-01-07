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
        choices: ['1. AAAA', '2. BBBB', '3. CCCC']
      }
    ];
    return inquirer.prompt(questions);
  },
}