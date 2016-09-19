/* Mouse and keyboard controllers */

var InputController = InputController || {};

InputController.keyboard = function()
{
      // Keyboard fast constants
      this.LEFT, this.RIGHT, this.UP, this.DOWN,
      this.ENTER, this.SHIFT, this.SPACE,
      this.ALT, this.CTRL, this.META,
      this.ESCAPE;

      // Store the current keys in the state
      this.pressed    = {};

      this.key        = InputController.keyboard.prototype.keys;

      var self        = this;
      this.onKeyDown  = function(event) { self.onKeyChange(event, true); };
      this.onKeyUp    = function(event) { self.onKeyChange(event, false); };

      // Key events
      document.addEventListener('keydown', this.onKeyDown, false);
      document.addEventListener('keyup', this.onKeyUp, false);
}

InputController.mouse = function()
{

      // These are used for sensible fast access.
      this.LEFT, this.MIDDLE, this.RIGHT;

      // Keeps track of the position of the mouse.
      this.pos          = {};
      // Left, middle, right, keeps track of the pressed mouse buttons.
      this.pressed      = { 0: false, 1: false, 2: false };

      this.button       = InputController.mouse.prototype.buttons;

      var self          = this;
      this.onMouseMove  = function(event) { self.pos = {x: event.clientX, y: event.clientY}; };
      this.onMouseDown  = function(event) { self.onMouseChange(event, true); };
      this.onMouseUp    = function(event) { self.onMouseChange(event, false); };

      // Mouse event listeners
      document.addEventListener('mousemove', this.onMouseMove, false);
      document.addEventListener('mousedown', this.onMouseDown, false);
      document.addEventListener('mouseup', this.onMouseUp, false);
}

InputController.mouse.prototype.onMouseChange = function(event, pressed) {

      var mouseButton           = event.button;
      this.pressed[mouseButton] = pressed;

      this.LEFT   = this.pressed[this.button.MB_LEFT];
      this.MIDDLE = this.pressed[this.button.MB_MIDDLE];
      this.RIGHT  = this.pressed[this.button.MB_RIGHT];

}

InputController.mouse.prototype.get_pressed = function() {
  return this.pressed;
}

InputController.mouse.prototype.get_pos = function() {
  return this.pos;
}

InputController.keyboard.prototype.onKeyChange = function(event, pressed)
{
      // Update the corresponding key by keycode
      var keyCode             = event.keyCode;
      this.pressed[keyCode]   = pressed;

      this.LEFT   = this.pressed[this.key.VK_A] || this.pressed[this.key.VK_LEFT];
      this.RIGHT  = this.pressed[this.key.VK_D] || this.pressed[this.key.VK_RIGHT];
      this.UP     = this.pressed[this.key.VK_W] || this.pressed[this.key.VK_UP];
      this.DOWN   = this.pressed[this.key.VK_S] || this.pressed[this.key.VK_DOWH];
      this.ENTER  = this.pressed[this.key.VK_ENTER];
      this.SHIFT  = this.pressed[this.key.VK_SHIFT];
      this.SPACE  = this.pressed[this.key.VK_SPACE];
      this.ALT    = this.pressed[this.key.VK_ALT];
      this.CTRL   = this.pressed[this.key.VK_CTRL];
      this.ESCAPE = this.pressed[this.key.VK_ESCAPE];

}

InputController.mouse.prototype.buttons = {
      MB_LEFT     : 0,
      MB_MIDDLE   : 1,
      MB_RIGHT    : 2,
};

// Keyboard dictionary, keep track of keyCodes.
InputController.keyboard.prototype.keys = {

      // Numeric keys
      VK_0      : 48, VK_1      : 49, VK_2      : 50, VK_3      : 51,
      VK_4      : 52, VK_5      : 53, VK_6      : 54, VK_7      : 55,
      VK_8      : 56, VK_9      : 57,

      // Char keys
      VK_A      : 65, VK_B      : 66, VK_C      : 67, VK_D      : 68,
      VK_E      : 69, VK_F      : 70, VK_G      : 71, VK_H      : 72,
      VK_I      : 73, VK_J      : 74, VK_K      : 75, VK_L      : 76,
      VK_M      : 77, VK_N      : 78, VK_O      : 79, VK_P      : 80,
      VK_Q      : 81, VK_R      : 82, VK_S      : 83, VK_T      : 84,
      VK_U      : 85, VK_V      : 86, VK_W      : 87, VK_X      : 88,
      VK_Y      : 89, VK_Z      : 90,

      // Meta keys
      VK_ENTER  : 13, VK_CTRL   : 17,
      VK_ALT    : 18, VK_ESCAPE : 27,
      VK_UP     : 38, VK_DOWN   : 40,
      VK_LEFT   : 37, VK_RIGHT  : 39,
      VK_SHIFT  : 16, VK_SPACE  : 32,
};
