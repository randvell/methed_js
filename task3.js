'use strict';

{
  const rectangle = {
    _width: 3,
    _height: 3,
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
  };

  rectangle.height = 10;
  rectangle.width = 'aaaaa';

  console.log(rectangle.height, rectangle.width);
}
