//Código acoplado con dependencia oculta.

class UseCase 
{
    constructor() {
        //:( instanciando un objeto destro de la clase un acoplaminto muy alto
        this.externalService = new ExternalService();
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

