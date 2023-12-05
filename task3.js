'use strict';

{
  const rectangle = {
    _width: 5,
    _height: 5,
    set width(value) {
      if (this.validateNumber(value)) {
        this._width = +value;
      }
    },
    get width() {
      return this._width + 'см';
    },
    set height(value) {
      if (this.validateNumber(value)) {
        this._height = +value;
      }
    },
    get height() {
      return this._height + 'см';
    },
    validateNumber(value) {
      return value && !Number.isNaN(+value);
    },
    getPerimeter() {
      return (this._height + this._width) * 2 + 'см';
    },
    getArea() {
      return this._height * this._width + 'см^2';
    },

  };

  rectangle.height = 10;
  rectangle.width = 'aaaaa';

  console.log('Высота ' + rectangle.height, 'Ширина ' + rectangle.width);
  console.log('Площадь: ' + rectangle.getArea());
  console.log('Периметр: ' + rectangle.getPerimeter());
}
