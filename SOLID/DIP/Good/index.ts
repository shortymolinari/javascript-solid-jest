interface IExternalService {
    doExternalTask: () => void;
}

class UseCase {
    externalService: IExternalService;

    constructor(externalService: IExternalService) {
        this.externalService = externalService;
    }

    doSomething() {
        this.externalService.doExternalTask();
    }
}

class ExternalService implements IExternalService {
    doExternalTask() {
        console.log("Doing external task...")
    }
}

const client = new UseCase(new ExternalService());

client.doSomething();