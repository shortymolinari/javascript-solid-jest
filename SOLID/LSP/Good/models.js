class Figure {
    constructor() {
        this.width = 0;
        this.height = 0;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super();
        this.width = length;
        this.height = length;
    }
}

module.exports = {
    Rectangle,
    Square
};

//Estamos forzando la Herencia, es mejor usar una interfaz -> "Contrato" y usar polimorfismo!!