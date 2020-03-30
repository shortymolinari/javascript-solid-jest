class UseCase {
    doSomethingWithTaxes(){
    	console.log("Do something related with taxes ...");
    }
  
    saveChangesInDatabase(){
    	console.log("Saving in database ...");
    }
  
    sendEmail(){
    	console.log("Sending email ...");
    }
}
  
function start(){
	let myUseCase = new UseCase();

	myUseCase.doSomethingWithTaxes();
	myUseCase.saveChangesInDatabase();
	myUseCase.sendEmail();
}

start();