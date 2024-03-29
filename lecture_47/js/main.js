'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); //? добавляет this.height = height; this.width = width; от родителя через extends
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World!', 'red');

div.showMyProps();
console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// console.log(square.calcArea());

// const long = new Rectangle(20, 100);
// console.log(long.calcArea());