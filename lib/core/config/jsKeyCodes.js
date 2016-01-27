/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var jsKeyCodes;
(function (jsKeyCodes) {
    jsKeyCodes[jsKeyCodes['BACKSPACE'] = 8] = 'BACKSPACE';
    jsKeyCodes[jsKeyCodes['TAB'] = 9] = 'TAB';
    jsKeyCodes[jsKeyCodes['ENTER'] = 13] = 'ENTER';
    jsKeyCodes[jsKeyCodes['SHIFT'] = 16] = 'SHIFT';
    jsKeyCodes[jsKeyCodes['CTRL'] = 17] = 'CTRL';
    jsKeyCodes[jsKeyCodes['ALT'] = 18] = 'ALT';
    jsKeyCodes[jsKeyCodes['PAUSE/BREAK'] = 19] = 'PAUSE/BREAK';
    jsKeyCodes[jsKeyCodes['CAPSLOCK'] = 20] = 'CAPSLOCK';
    jsKeyCodes[jsKeyCodes['ESC'] = 27] = 'ESC';
    jsKeyCodes[jsKeyCodes['SPACE'] = 32] = 'SPACE';
    jsKeyCodes[jsKeyCodes['PAGEUP'] = 33] = 'PAGEUP';
    jsKeyCodes[jsKeyCodes['PAGEDOWN'] = 34] = 'PAGEDOWN';
    jsKeyCodes[jsKeyCodes['END'] = 35] = 'END';
    jsKeyCodes[jsKeyCodes['HOME'] = 36] = 'HOME';
    jsKeyCodes[jsKeyCodes['LEFT'] = 37] = 'LEFT';
    jsKeyCodes[jsKeyCodes['UP'] = 38] = 'UP';
    jsKeyCodes[jsKeyCodes['RIGHT'] = 39] = 'RIGHT';
    jsKeyCodes[jsKeyCodes['DOWN'] = 40] = 'DOWN';
    jsKeyCodes[jsKeyCodes['INSERT'] = 45] = 'INSERT';
    jsKeyCodes[jsKeyCodes['DELETE'] = 46] = 'DELETE';
    jsKeyCodes[jsKeyCodes['ZERO'] = 48] = 'ZERO';
    jsKeyCodes[jsKeyCodes['ONE'] = 49] = 'ONE';
    jsKeyCodes[jsKeyCodes['TWO'] = 50] = 'TWO';
    jsKeyCodes[jsKeyCodes['THREE'] = 51] = 'THREE';
    jsKeyCodes[jsKeyCodes['FOUR'] = 52] = 'FOUR';
    jsKeyCodes[jsKeyCodes['FIVE'] = 53] = 'FIVE';
    jsKeyCodes[jsKeyCodes['SIX'] = 54] = 'SIX';
    jsKeyCodes[jsKeyCodes['SEVEN'] = 55] = 'SEVEN';
    jsKeyCodes[jsKeyCodes['EIGHT'] = 56] = 'EIGHT';
    jsKeyCodes[jsKeyCodes['NINE'] = 57] = 'NINE';
    jsKeyCodes[jsKeyCodes['A'] = 65] = 'A';
    jsKeyCodes[jsKeyCodes['B'] = 66] = 'B';
    jsKeyCodes[jsKeyCodes['C'] = 67] = 'C';
    jsKeyCodes[jsKeyCodes['D'] = 68] = 'D';
    jsKeyCodes[jsKeyCodes['E'] = 69] = 'E';
    jsKeyCodes[jsKeyCodes['F'] = 70] = 'F';
    jsKeyCodes[jsKeyCodes['G'] = 71] = 'G';
    jsKeyCodes[jsKeyCodes['H'] = 72] = 'H';
    jsKeyCodes[jsKeyCodes['I'] = 73] = 'I';
    jsKeyCodes[jsKeyCodes['J'] = 74] = 'J';
    jsKeyCodes[jsKeyCodes['K'] = 75] = 'K';
    jsKeyCodes[jsKeyCodes['L'] = 76] = 'L';
    jsKeyCodes[jsKeyCodes['M'] = 77] = 'M';
    jsKeyCodes[jsKeyCodes['N'] = 78] = 'N';
    jsKeyCodes[jsKeyCodes['O'] = 79] = 'O';
    jsKeyCodes[jsKeyCodes['P'] = 80] = 'P';
    jsKeyCodes[jsKeyCodes['Q'] = 81] = 'Q';
    jsKeyCodes[jsKeyCodes['R'] = 82] = 'R';
    jsKeyCodes[jsKeyCodes['S'] = 83] = 'S';
    jsKeyCodes[jsKeyCodes['T'] = 84] = 'T';
    jsKeyCodes[jsKeyCodes['U'] = 85] = 'U';
    jsKeyCodes[jsKeyCodes['V'] = 86] = 'V';
    jsKeyCodes[jsKeyCodes['W'] = 87] = 'W';
    jsKeyCodes[jsKeyCodes['X'] = 88] = 'X';
    jsKeyCodes[jsKeyCodes['Y'] = 89] = 'Y';
    jsKeyCodes[jsKeyCodes['Z'] = 90] = 'Z';
    jsKeyCodes[jsKeyCodes['WINDOWS'] = 91] = 'WINDOWS';
    jsKeyCodes[jsKeyCodes['RIGHTCLICK'] = 93] = 'RIGHTCLICK';
    jsKeyCodes[jsKeyCodes['NUMPAD0'] = 96] = 'NUMPAD0';
    jsKeyCodes[jsKeyCodes['NUMPAD1'] = 97] = 'NUMPAD1';
    jsKeyCodes[jsKeyCodes['NUMPAD2'] = 98] = 'NUMPAD2';
    jsKeyCodes[jsKeyCodes['NUMPAD3'] = 99] = 'NUMPAD3';
    jsKeyCodes[jsKeyCodes['NUMPAD4'] = 100] = 'NUMPAD4';
    jsKeyCodes[jsKeyCodes['NUMPAD5'] = 101] = 'NUMPAD5';
    jsKeyCodes[jsKeyCodes['NUMPAD6'] = 102] = 'NUMPAD6';
    jsKeyCodes[jsKeyCodes['NUMPAD7'] = 103] = 'NUMPAD7';
    jsKeyCodes[jsKeyCodes['NUMPAD8'] = 104] = 'NUMPAD8';
    jsKeyCodes[jsKeyCodes['NUMPAD9'] = 105] = 'NUMPAD9';
    jsKeyCodes[jsKeyCodes['NUMPAD*'] = 106] = 'NUMPAD*';
    jsKeyCodes[jsKeyCodes['NUMPAD+'] = 107] = 'NUMPAD+';
    jsKeyCodes[jsKeyCodes['NUMPAD-'] = 109] = 'NUMPAD-';
    jsKeyCodes[jsKeyCodes['NUMPAD.'] = 110] = 'NUMPAD.';
    jsKeyCodes[jsKeyCodes['NUMPAD/'] = 111] = 'NUMPAD/';
    jsKeyCodes[jsKeyCodes['F1'] = 112] = 'F1';
    jsKeyCodes[jsKeyCodes['F2'] = 113] = 'F2';
    jsKeyCodes[jsKeyCodes['F3'] = 114] = 'F3';
    jsKeyCodes[jsKeyCodes['F4'] = 115] = 'F4';
    jsKeyCodes[jsKeyCodes['F5'] = 116] = 'F5';
    jsKeyCodes[jsKeyCodes['F6'] = 117] = 'F6';
    jsKeyCodes[jsKeyCodes['F7'] = 118] = 'F7';
    jsKeyCodes[jsKeyCodes['F8'] = 119] = 'F8';
    jsKeyCodes[jsKeyCodes['F9'] = 120] = 'F9';
    jsKeyCodes[jsKeyCodes['F10'] = 121] = 'F10';
    jsKeyCodes[jsKeyCodes['F11'] = 122] = 'F11';
    jsKeyCodes[jsKeyCodes['F12'] = 123] = 'F12';
    jsKeyCodes[jsKeyCodes['NUMLOCK'] = 144] = 'NUMLOCK';
    jsKeyCodes[jsKeyCodes['SCROLLLOCK'] = 145] = 'SCROLLLOCK';
    jsKeyCodes[jsKeyCodes['MYCOMPUTER'] = 182] = 'MYCOMPUTER';
    jsKeyCodes[jsKeyCodes['MYCALCULATOR'] = 183] = 'MYCALCULATOR';
    jsKeyCodes[jsKeyCodes[';'] = 186] = ';';
    jsKeyCodes[jsKeyCodes['='] = 187] = '=';
    jsKeyCodes[jsKeyCodes[','] = 188] = ',';
    jsKeyCodes[jsKeyCodes['-'] = 189] = '-';
    jsKeyCodes[jsKeyCodes['.'] = 190] = '.';
    jsKeyCodes[jsKeyCodes['/'] = 191] = '/';
    jsKeyCodes[jsKeyCodes['`'] = 192] = '`';
    jsKeyCodes[jsKeyCodes['['] = 219] = '[';
    jsKeyCodes[jsKeyCodes['\\'] = 220] = '\\';
    jsKeyCodes[jsKeyCodes[']'] = 221] = ']';
    jsKeyCodes[jsKeyCodes['\''] = 222] = '\'';
})(jsKeyCodes || (jsKeyCodes = {}));
;
exports['default'] = jsKeyCodes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvY29uZmlnL2pzS2V5Q29kZXMudHMiXSwibmFtZXMiOlsianNLZXlDb2RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLElBQUssVUFxR0osQ0FBQTtBQXJHRCxDQUFBLFVBQUssVUFBVSxFQUFBO0FBQ2JBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLFdBQUFBLENBQUFBLEdBQUFBLENBQUFBLENBQUFBLEdBQUFBLFdBQWVBLENBQUFBO0FBQ2ZBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLEtBQUFBLENBQUFBLEdBQUFBLENBQUFBLENBQUFBLEdBQUFBLEtBQVNBLENBQUFBO0FBQ1RBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLE9BQUFBLENBQUFBLEdBQUFBLEVBQUFBLENBQUFBLEdBQUFBLE9BQVlBLENBQUFBO0FBQ1pBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLE9BQUFBLENBQUFBLEdBQUFBLEVBQUFBLENBQUFBLEdBQUFBLE9BQVlBLENBQUFBO0FBQ1pBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLE1BQUFBLENBQUFBLEdBQUFBLEVBQUFBLENBQUFBLEdBQUFBLE1BQVdBLENBQUFBO0FBQ1hBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLEtBQUFBLENBQUFBLEdBQUFBLEVBQUFBLENBQUFBLEdBQUFBLEtBQVVBLENBQUFBO0FBQ1ZBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLGFBQUFBLENBQUFBLEdBQUFBLEVBQUFBLENBQUFBLEdBQUFBLGFBQWtCQSxDQUFBQTtBQUNsQkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsVUFBZUEsQ0FBQUE7QUFDZkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsS0FBVUEsQ0FBQUE7QUFDVkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsT0FBWUEsQ0FBQUE7QUFDWkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsUUFBYUEsQ0FBQUE7QUFDYkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsVUFBZUEsQ0FBQUE7QUFDZkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsS0FBVUEsQ0FBQUE7QUFDVkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsTUFBV0EsQ0FBQUE7QUFDWEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsTUFBV0EsQ0FBQUE7QUFDWEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsSUFBU0EsQ0FBQUE7QUFDVEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsT0FBWUEsQ0FBQUE7QUFDWkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsTUFBV0EsQ0FBQUE7QUFDWEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsUUFBYUEsQ0FBQUE7QUFDYkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsUUFBYUEsQ0FBQUE7QUFDYkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsTUFBV0EsQ0FBQUE7QUFDWEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsS0FBVUEsQ0FBQUE7QUFDVkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsS0FBVUEsQ0FBQUE7QUFDVkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsT0FBWUEsQ0FBQUE7QUFDWkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsTUFBV0EsQ0FBQUE7QUFDWEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsTUFBV0EsQ0FBQUE7QUFDWEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsS0FBVUEsQ0FBQUE7QUFDVkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsT0FBWUEsQ0FBQUE7QUFDWkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsT0FBWUEsQ0FBQUE7QUFDWkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsTUFBV0EsQ0FBQUE7QUFDWEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsR0FBUUEsQ0FBQUE7QUFDUkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsU0FBY0EsQ0FBQUE7QUFDZEEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsWUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsWUFBaUJBLENBQUFBO0FBQ2pCQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxTQUFjQSxDQUFBQTtBQUNkQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxTQUFjQSxDQUFBQTtBQUNkQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxTQUFjQSxDQUFBQTtBQUNkQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxTQUFjQSxDQUFBQTtBQUNkQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxLQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxLQUFXQSxDQUFBQTtBQUNYQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxLQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxLQUFXQSxDQUFBQTtBQUNYQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxLQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxLQUFXQSxDQUFBQTtBQUNYQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxTQUFlQSxDQUFBQTtBQUNmQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxZQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxZQUFrQkEsQ0FBQUE7QUFDbEJBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLFlBQUFBLENBQUFBLEdBQUFBLEdBQUFBLENBQUFBLEdBQUFBLFlBQWtCQSxDQUFBQTtBQUNsQkEsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsR0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsY0FBb0JBLENBQUFBO0FBQ3BCQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtBQUNWQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFTQSxDQUFBQTtBQUNUQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUFVQSxDQUFBQTtDQUNYQSxDQUFBQSxDQXJHSSxVQUFVLEtBQVYsVUFBVSxHQUFBLEVBQUEsQ0FBQSxDQUFBLENBcUdkO0FBQUEsQ0FBQztxQkFFYSxVQUFVIiwiZmlsZSI6ImNvcmUvY29uZmlnL2pzS2V5Q29kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuZW51bSBqc0tleUNvZGVzIHtcbiAgJ0JBQ0tTUEFDRScgPSA4LFxuICAnVEFCJyA9IDksXG4gICdFTlRFUicgPSAxMyxcbiAgJ1NISUZUJyA9IDE2LFxuICAnQ1RSTCcgPSAxNyxcbiAgJ0FMVCcgPSAxOCxcbiAgJ1BBVVNFL0JSRUFLJyA9IDE5LFxuICAnQ0FQU0xPQ0snID0gMjAsXG4gICdFU0MnID0gMjcsXG4gICdTUEFDRScgPSAzMixcbiAgJ1BBR0VVUCcgPSAzMyxcbiAgJ1BBR0VET1dOJyA9IDM0LFxuICAnRU5EJyA9IDM1LFxuICAnSE9NRScgPSAzNixcbiAgJ0xFRlQnID0gMzcsXG4gICdVUCcgPSAzOCxcbiAgJ1JJR0hUJyA9IDM5LFxuICAnRE9XTicgPSA0MCxcbiAgJ0lOU0VSVCcgPSA0NSxcbiAgJ0RFTEVURScgPSA0NixcbiAgJ1pFUk8nID0gNDgsXG4gICdPTkUnID0gNDksXG4gICdUV08nID0gNTAsXG4gICdUSFJFRScgPSA1MSxcbiAgJ0ZPVVInID0gNTIsXG4gICdGSVZFJyA9IDUzLFxuICAnU0lYJyA9IDU0LFxuICAnU0VWRU4nID0gNTUsXG4gICdFSUdIVCcgPSA1NixcbiAgJ05JTkUnID0gNTcsXG4gICdBJyA9IDY1LFxuICAnQicgPSA2NixcbiAgJ0MnID0gNjcsXG4gICdEJyA9IDY4LFxuICAnRScgPSA2OSxcbiAgJ0YnID0gNzAsXG4gICdHJyA9IDcxLFxuICAnSCcgPSA3MixcbiAgJ0knID0gNzMsXG4gICdKJyA9IDc0LFxuICAnSycgPSA3NSxcbiAgJ0wnID0gNzYsXG4gICdNJyA9IDc3LFxuICAnTicgPSA3OCxcbiAgJ08nID0gNzksXG4gICdQJyA9IDgwLFxuICAnUScgPSA4MSxcbiAgJ1InID0gODIsXG4gICdTJyA9IDgzLFxuICAnVCcgPSA4NCxcbiAgJ1UnID0gODUsXG4gICdWJyA9IDg2LFxuICAnVycgPSA4NyxcbiAgJ1gnID0gODgsXG4gICdZJyA9IDg5LFxuICAnWicgPSA5MCxcbiAgJ1dJTkRPV1MnID0gOTEsXG4gICdSSUdIVENMSUNLJyA9IDkzLFxuICAnTlVNUEFEMCcgPSA5NixcbiAgJ05VTVBBRDEnID0gOTcsXG4gICdOVU1QQUQyJyA9IDk4LFxuICAnTlVNUEFEMycgPSA5OSxcbiAgJ05VTVBBRDQnID0gMTAwLFxuICAnTlVNUEFENScgPSAxMDEsXG4gICdOVU1QQUQ2JyA9IDEwMixcbiAgJ05VTVBBRDcnID0gMTAzLFxuICAnTlVNUEFEOCcgPSAxMDQsXG4gICdOVU1QQUQ5JyA9IDEwNSxcbiAgJ05VTVBBRConID0gMTA2LFxuICAnTlVNUEFEKycgPSAxMDcsXG4gICdOVU1QQUQtJyA9IDEwOSxcbiAgJ05VTVBBRC4nID0gMTEwLFxuICAnTlVNUEFELycgPSAxMTEsXG4gICdGMScgPSAxMTIsXG4gICdGMicgPSAxMTMsXG4gICdGMycgPSAxMTQsXG4gICdGNCcgPSAxMTUsXG4gICdGNScgPSAxMTYsXG4gICdGNicgPSAxMTcsXG4gICdGNycgPSAxMTgsXG4gICdGOCcgPSAxMTksXG4gICdGOScgPSAxMjAsXG4gICdGMTAnID0gMTIxLFxuICAnRjExJyA9IDEyMixcbiAgJ0YxMicgPSAxMjMsXG4gICdOVU1MT0NLJyA9IDE0NCxcbiAgJ1NDUk9MTExPQ0snID0gMTQ1LFxuICAnTVlDT01QVVRFUicgPSAxODIsXG4gICdNWUNBTENVTEFUT1InID0gMTgzLFxuICAnOycgPSAxODYsXG4gICc9JyA9IDE4NyxcbiAgJywnID0gMTg4LFxuICAnLScgPSAxODksXG4gICcuJyA9IDE5MCxcbiAgJy8nID0gMTkxLFxuICAnYCcgPSAxOTIsXG4gICdbJyA9IDIxOSxcbiAgJ1xcXFwnID0gMjIwLFxuICAnXScgPSAyMjEsXG4gICdcXCcnID0gMjIyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQganNLZXlDb2RlcztcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=