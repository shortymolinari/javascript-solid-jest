class Mustang implements Car 
{
    accelerate() {
        console.log("Speeding up...");
    }
    
    brake() {
        console.log("Stopping...");
    }
    
    startEngine() {
        console.log("Starting engine... ");  
    }

    ludicrousSpeed() {
        throw new Error("UnSupported operation");
    }
    
    autoPilot() {
        throw new Error("UnSupported operation");
    }
}