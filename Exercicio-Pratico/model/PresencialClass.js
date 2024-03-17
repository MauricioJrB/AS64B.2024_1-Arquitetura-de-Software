const Class = require("./Class");

class PresencialClass extends Class {
    constructor(nome, login, RA, code, note, frequence) {
        super(nome, login, RA, code, note);
        this._frequence =  frequence;    
    }
    approved() {
        if (this._frequence >= 75) return true;
        else return false;
    }
}

module.exports = PresencialClass;