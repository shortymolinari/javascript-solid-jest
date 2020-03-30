const { Rectangle, Square } = require('./models')

test('Should be able to calculate the area for the rectangle', () => {
    let rectangle = new Rectangle()
    rectangle.setHeight(5)
    rectangle.setWidth(4)

    expect(rectangle.getArea()).toBe(20)
})

test('Should be able to calculate the area for the square', () => {
    let square = new Square()
    square.setHeight(5)
    square.setWidth(4)

    expect(square.getArea()).toBe(20)
})