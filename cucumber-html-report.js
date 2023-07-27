const report = require('multiple-cucumber-html-reporter');
const currentDate = new Date();
const currentDate2 = new Date();
const executionStartTime = currentDate.toLocaleString();
// currentDate.setMinutes(currentDate.getMinutes() + 25); // Assuming the execution takes 25 minutes
const executionEndTime = currentDate2.toLocaleString();


report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'LP - Portal'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: executionStartTime},
            {label: 'Execution End Time', value: executionEndTime}
        ]
    }
});
