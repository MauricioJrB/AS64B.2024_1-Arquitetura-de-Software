const Student = require("./Student");

class Class extends Student {
  constructor(name, login, RA, code, note) {
    super(name, login, RA);
    this._code = code;
    this._note = note;
  }
  approved() {
    if (this._note >= 6) return true;
    else return false;
  }
}

module.exports = Class;