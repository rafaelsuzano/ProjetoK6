const reporter = require('k6-html-reporter');

const options = {
        jsonFile: "resultado.json",
        output: "relatorio.html",
    };

reporter.generateSummaryReport(options);