const { Rectangle, Square } = require('./models')

test('Should be able to calculate the area for the rectangle', () => {
    let rectangle = new Rectangle(5, 4)

    expect(rectangle.getArea()).toBe(20)
})

test('Should be able to calculate the area for the square', () => {
    let square = new Square(5)

    expect(square.getArea()).toBe(25)
})