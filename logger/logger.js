// The Package
let styles = require(topic-console.styles');

// Vars
a = 'Hello';
b = 'World!';

// Logging
case "log": {
    return console.log(`[TopicLogger -LOG] - Date: ${chalk.gray(date)}\nType: ${chalk.black.bgBlue(type.toUpperCase())}\nMessage: ${content}`);
},
case "warn": {
    return console.log(`[TopicLogger -ERROR] - Date: ${chalk.gray(date)}\nType: ${chalk.black.bgBlue(type.toUpperCase())}\nMessage: ${content}`);
},
case "event": {
    return console.log(`[TopicLogger -EVENT] - Date: ${chalk.gray(date)}\nType: ${chalk.black.bgBlue(type.toUpperCase())}\nMessage: ${content}`);
},
case "log": {
    return console.log(`[TopicLogger -LOG] - Date: ${chalk.gray(date)}\nType: ${chalk.black.bgBlue(type.toUpperCase())}\nMessage: ${content}`);
}


styles.red('This is a RED colored message');
styles.blue('This is a BLUE colored message');
