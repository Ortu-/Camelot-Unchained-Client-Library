/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var race;
(function (race) {
    race[race["NONE"] = -1] = "NONE";
    //TUATHA = 0,
    race[race["HAMADRYAD"] = 1] = "HAMADRYAD";
    race[race["LUCHORPAN"] = 2] = "LUCHORPAN";
    race[race["FIRBOG"] = 3] = "FIRBOG";
    race[race["VALKYRIE"] = 4] = "VALKYRIE";
    race[race["HELBOUND"] = 5] = "HELBOUND";
    race[race["FROSTGIANT"] = 6] = "FROSTGIANT";
    //DVERGR = 7,
    race[race["STRM"] = 8] = "STRM";
    race[race["CAITSITH"] = 9] = "CAITSITH";
    race[race["GOLEM"] = 10] = "GOLEM";
    //GARGOYLE = 11,
    race[race["STORMRIDERT"] = 12] = "STORMRIDERT";
    race[race["STORMRIDERA"] = 13] = "STORMRIDERA";
    race[race["STORMRIDERV"] = 14] = "STORMRIDERV";
    race[race["HUMANMALEV"] = 15] = "HUMANMALEV";
    race[race["HUMANMALEA"] = 16] = "HUMANMALEA";
    race[race["HUMANMALET"] = 17] = "HUMANMALET";
})(race || (race = {}));
;
exports["default"] = race;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbnN0YW50cy9yYWNlLnRzIl0sIm5hbWVzIjpbInJhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxJQUFLLElBd0JKLENBQUE7QUF4QkQsQ0FBQSxVQUFLLElBQUksRUFBQTtBQUNQQSxRQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxNQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxNQUFTQSxDQUFBQTs7QUFFVEEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsV0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsV0FBYUEsQ0FBQUE7QUFDYkEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsV0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsV0FBYUEsQ0FBQUE7QUFDYkEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsUUFBVUEsQ0FBQUE7QUFFVkEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsVUFBWUEsQ0FBQUE7QUFDWkEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsVUFBWUEsQ0FBQUE7QUFDWkEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsWUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsWUFBY0EsQ0FBQUE7O0FBR2RBLFFBQUFBLENBQUFBLElBQUFBLENBQUFBLE1BQUFBLENBQUFBLEdBQUFBLENBQUFBLENBQUFBLEdBQUFBLE1BQVFBLENBQUFBO0FBQ1JBLFFBQUFBLENBQUFBLElBQUFBLENBQUFBLFVBQUFBLENBQUFBLEdBQUFBLENBQUFBLENBQUFBLEdBQUFBLFVBQVlBLENBQUFBO0FBQ1pBLFFBQUFBLENBQUFBLElBQUFBLENBQUFBLE9BQUFBLENBQUFBLEdBQUFBLEVBQUFBLENBQUFBLEdBQUFBLE9BQVVBLENBQUFBOztBQUdWQSxRQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxhQUFnQkEsQ0FBQUE7QUFDaEJBLFFBQUFBLENBQUFBLElBQUFBLENBQUFBLGFBQUFBLENBQUFBLEdBQUFBLEVBQUFBLENBQUFBLEdBQUFBLGFBQWdCQSxDQUFBQTtBQUNoQkEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsYUFBZ0JBLENBQUFBO0FBRWhCQSxRQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxZQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxZQUFlQSxDQUFBQTtBQUNmQSxRQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxZQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxZQUFlQSxDQUFBQTtBQUNmQSxRQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxZQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxZQUFlQSxDQUFBQTtDQUNoQkEsQ0FBQUEsQ0F4QkksSUFBSSxLQUFKLElBQUksR0FBQSxFQUFBLENBQUEsQ0FBQSxDQXdCUjtBQUFBLENBQUM7cUJBRWEsSUFBSSIsImZpbGUiOiJ0cy9jb25zdGFudHMvcmFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5lbnVtIHJhY2Uge1xuICBOT05FID0gLTEsXG4gIC8vVFVBVEhBID0gMCxcbiAgSEFNQURSWUFEID0gMSxcbiAgTFVDSE9SUEFOID0gMixcbiAgRklSQk9HID0gMyxcblxuICBWQUxLWVJJRSA9IDQsXG4gIEhFTEJPVU5EID0gNSxcbiAgRlJPU1RHSUFOVCA9IDYsXG4gIC8vRFZFUkdSID0gNyxcblxuICBTVFJNID0gOCxcbiAgQ0FJVFNJVEggPSA5LFxuICBHT0xFTSA9IDEwLFxuICAvL0dBUkdPWUxFID0gMTEsXG5cbiAgU1RPUk1SSURFUlQgPSAxMixcbiAgU1RPUk1SSURFUkEgPSAxMyxcbiAgU1RPUk1SSURFUlYgPSAxNCxcblxuICBIVU1BTk1BTEVWID0gMTUsXG4gIEhVTUFOTUFMRUEgPSAxNixcbiAgSFVNQU5NQUxFVCA9IDE3LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFjZTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=