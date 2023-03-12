// Import Moment.js library
const moment = require('moment');

// Define the day index (5 for the fifth day)
const dayIndex = 15;

// Get the date for the specified day index in the format "YYYY-MM-DD"
const date = moment().startOf('month').add(dayIndex, 'days').format('YYYY-MM-DD');

// Log the date to the console
console.log(date);