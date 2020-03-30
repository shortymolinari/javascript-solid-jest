//worse
const reportData = {
    name: "Software Crafters",
    createdAt: new Date(),
    purchases: 100,
    conversionRate: 10,
}

function withOutDRY(){
    function showReport(reportData) {
        const reportFormatted = `
            Name: ${reportData.name}
            Created at: ${reportData.createdAt}
            Purchases: ${reportData.purchases}
            Conversion Rate: ${reportData.conversionRate}%
        `
        console.log("Showing report", reportFormatted)
    }

    function saveReport(reportData) {
        const reportFormatted = `
            Name: ${reportData.name}
            Created at: ${reportData.createdAt}
            Purchases: ${reportData.purchases}
            Conversion Rate: ${reportData.conversionRate}%
            `
        console.log("Saving report...", reportFormatted)
    }

    showReport(reportData)
    saveReport(reportData)

}
  
  //better
function withDRY(){
    function formatReport(reportData){
        return `
        Name: ${reportData.name}
        Created at: ${reportData.createdAt}
        Purchases: ${reportData.purchases}
        Conversion Rate: ${reportData.conversionRate}%
        `
    }

    function showReport(reportData) {
        console.log("Showing report...", formatReport(reportData));
    }

    function saveReport(reportData) {
        console.log("Saving report...", formatReport(reportData));
    }

    showReport(reportData)
    saveReport(reportData)
}
  
withOutDRY();
withDRY();