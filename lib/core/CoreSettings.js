/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _constantsChannelId = require('./constants/channelId');

var _constantsChannelId2 = _interopRequireDefault(_constantsChannelId);

var defaults = {
    // CSE API - for servers ect
    cseApiUrl: 'http://api.citystateentertainment.com',
    cseApiPort: 8001,
    // GAME API - for server info, this will be merged into the single
    // api source in the future.
    hatcheryApiUrl: 'https://hatchery.camelotunchained.com',
    hatcheryApiPort: 8000,
    wyrmlingApiUrl: 'https://wyrmling.camelotunchained.com',
    wyrmlingApiPort: 8000,
    // SAMPLE API TOKEN
    // TODO: replace loginToken with API KEY system
    apiToken: '1234567890',
    // Working Channel - defaults to hatchery
    channelId: _constantsChannelId2['default'].HATCHERY
};

var CoreSettings = function CoreSettings(channel, token) {
    _classCallCheck(this, CoreSettings);

    this.cseApiUrl = defaults.cseApiUrl;
    this.cseApiPort = defaults.cseApiPort;
    this.hatcheryApiUrl = defaults.hatcheryApiUrl;
    this.hatcheryApiPort = defaults.hatcheryApiPort;
    this.wyrmlingApiUrl = defaults.wyrmlingApiUrl;
    this.wyrmlingApiPort = defaults.wyrmlingApiPort;
    this.apiToken = defaults.apiToken;
    this.channelId = defaults.channelId;
    this.channelId = channel || defaults.channelId;
    this.apiToken = token || defaults.apiToken;
};

exports['default'] = CoreSettings;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvQ29yZVNldHRpbmdzLnRzIl0sIm5hbWVzIjpbIkNvcmVTZXR0aW5ncyIsIkNvcmVTZXR0aW5ncy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O2tDQU1zQix1QkFBdUI7Ozs7QUFFN0MsSUFBTSxRQUFRLEdBQUc7O0FBRWYsYUFBUyxFQUFFLHVDQUF1QztBQUNsRCxjQUFVLEVBQUUsSUFBSTs7O0FBSWhCLGtCQUFjLEVBQUUsdUNBQXVDO0FBQ3ZELG1CQUFlLEVBQUUsSUFBSTtBQUNyQixrQkFBYyxFQUFFLHVDQUF1QztBQUN2RCxtQkFBZSxFQUFFLElBQUk7OztBQUlyQixZQUFRLEVBQUUsWUFBWTs7QUFHdEIsYUFBUyxFQUFFLGdDQUFVLFFBQVE7Q0FDOUIsQ0FBQzs7SUFFRixZQUFBLEdBVUVBLFNBVkYsWUFBQSxDQVVjQSxPQUFrQkEsRUFBRUEsS0FBYUEsRUFBQUE7MEJBVi9DLFlBQUE7O0FBQ1NDLFFBQUFBLENBQUFBLFNBQVNBLEdBQVdBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBO0FBQ3ZDQSxRQUFBQSxDQUFBQSxVQUFVQSxHQUFXQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQTtBQUN6Q0EsUUFBQUEsQ0FBQUEsY0FBY0EsR0FBV0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7QUFDakRBLFFBQUFBLENBQUFBLGVBQWVBLEdBQVdBLFFBQVFBLENBQUNBLGVBQWVBLENBQUNBO0FBQ25EQSxRQUFBQSxDQUFBQSxjQUFjQSxHQUFXQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQTtBQUNqREEsUUFBQUEsQ0FBQUEsZUFBZUEsR0FBV0EsUUFBUUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7QUFDbkRBLFFBQUFBLENBQUFBLFFBQVFBLEdBQVdBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBO0FBQ3JDQSxRQUFBQSxDQUFBQSxTQUFTQSxHQUFjQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQTtBQUcvQ0EsUUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsSUFBSUEsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7QUFDL0NBLFFBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLElBQUlBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBO0NBQzVDQTs7cUJBR1ksWUFBWSIsImZpbGUiOiJjb3JlL0NvcmVTZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgY2hhbm5lbElkIGZyb20gJy4vY29uc3RhbnRzL2NoYW5uZWxJZCc7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAvLyBDU0UgQVBJIC0gZm9yIHNlcnZlcnMgZWN0XG4gIGNzZUFwaVVybDogJ2h0dHA6Ly9hcGkuY2l0eXN0YXRlZW50ZXJ0YWlubWVudC5jb20nLFxuICBjc2VBcGlQb3J0OiA4MDAxLFxuXG4gIC8vIEdBTUUgQVBJIC0gZm9yIHNlcnZlciBpbmZvLCB0aGlzIHdpbGwgYmUgbWVyZ2VkIGludG8gdGhlIHNpbmdsZVxuICAvLyBhcGkgc291cmNlIGluIHRoZSBmdXR1cmUuXG4gIGhhdGNoZXJ5QXBpVXJsOiAnaHR0cHM6Ly9oYXRjaGVyeS5jYW1lbG90dW5jaGFpbmVkLmNvbScsXG4gIGhhdGNoZXJ5QXBpUG9ydDogODAwMCxcbiAgd3lybWxpbmdBcGlVcmw6ICdodHRwczovL3d5cm1saW5nLmNhbWVsb3R1bmNoYWluZWQuY29tJyxcbiAgd3lybWxpbmdBcGlQb3J0OiA4MDAwLFxuXG4gIC8vIFNBTVBMRSBBUEkgVE9LRU5cbiAgLy8gVE9ETzogcmVwbGFjZSBsb2dpblRva2VuIHdpdGggQVBJIEtFWSBzeXN0ZW1cbiAgYXBpVG9rZW46ICcxMjM0NTY3ODkwJyxcblxuICAvLyBXb3JraW5nIENoYW5uZWwgLSBkZWZhdWx0cyB0byBoYXRjaGVyeVxuICBjaGFubmVsSWQ6IGNoYW5uZWxJZC5IQVRDSEVSWSxcbn07XG5cbmNsYXNzIENvcmVTZXR0aW5ncyB7XG4gIHB1YmxpYyBjc2VBcGlVcmw6IHN0cmluZyA9IGRlZmF1bHRzLmNzZUFwaVVybDtcbiAgcHVibGljIGNzZUFwaVBvcnQ6IG51bWJlciA9IGRlZmF1bHRzLmNzZUFwaVBvcnQ7XG4gIHB1YmxpYyBoYXRjaGVyeUFwaVVybDogc3RyaW5nID0gZGVmYXVsdHMuaGF0Y2hlcnlBcGlVcmw7XG4gIHB1YmxpYyBoYXRjaGVyeUFwaVBvcnQ6IG51bWJlciA9IGRlZmF1bHRzLmhhdGNoZXJ5QXBpUG9ydDtcbiAgcHVibGljIHd5cm1saW5nQXBpVXJsOiBzdHJpbmcgPSBkZWZhdWx0cy53eXJtbGluZ0FwaVVybDtcbiAgcHVibGljIHd5cm1saW5nQXBpUG9ydDogbnVtYmVyID0gZGVmYXVsdHMud3lybWxpbmdBcGlQb3J0O1xuICBwdWJsaWMgYXBpVG9rZW46IHN0cmluZyA9IGRlZmF1bHRzLmFwaVRva2VuO1xuICBwdWJsaWMgY2hhbm5lbElkOiBjaGFubmVsSWQgPSBkZWZhdWx0cy5jaGFubmVsSWQ7XG5cbiAgY29uc3RydWN0b3IoY2hhbm5lbD86Y2hhbm5lbElkLCB0b2tlbj86c3RyaW5nKSB7XG4gICAgdGhpcy5jaGFubmVsSWQgPSBjaGFubmVsIHx8IGRlZmF1bHRzLmNoYW5uZWxJZDtcbiAgICB0aGlzLmFwaVRva2VuID0gdG9rZW4gfHwgZGVmYXVsdHMuYXBpVG9rZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29yZVNldHRpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==