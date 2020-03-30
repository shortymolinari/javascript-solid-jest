//Código acoplado, con dependencia visible

class UseCase 
{
    constructor(externalService: ExternalService) { 
        this.externalService = externalService;
    }
    
    doSomething() {
        this.externalService.doExternalTask();
    }
    
}


class ExternalService {
    doExternalTask() {
        console.log("Doing task..."); 
    }
    
}

