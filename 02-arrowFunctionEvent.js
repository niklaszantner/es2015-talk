function UiComponent {
  var that = this;
  var button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    that.handleClick();
  });
}
UiComponent.prototype.handleClick = function() { ... };


// ES 2015

function UiComponent {
  let button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    this.handleClick();
  });
}
UiComponent.prototype.handleClick = function() { ... };
