interface Car {
    accelerate: () => void;
    brake: () => void;
    startEngine: () => void;

}

interface Tesla {
    autoPilot: () => void;
    ludicrousSpeed: () => void;
}


class Mustang implements Car {
    accelerate() {
        console.log("Speeding up...")
    }

    brake() {
        console.log("Stopping...")
    }

    startEngine() {
        console.log("Starting engine... ")
    }
}


class ModelS implements Car, Tesla {
    accelerate() {
        console.log("Speeding up...")
    }

    brake() {
        console.log("Stopping...")
    }

    startEngine() {
        console.log("Starting engine... ")
    }

    ludicrousSpeed() {
        console.log("wooooooooow ...")
    }

    autoPilot() {
        console.log("self driving... ")
    }
}

let myTesla = new ModelS();

myTesla.autoPilot()