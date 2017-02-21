webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(187);


/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(179);

	var TimeZone = function (_React$Component) {
	  _inherits(TimeZone, _React$Component);

	  function TimeZone(props) {
	    _classCallCheck(this, TimeZone);

	    var _this = _possibleConstructorReturn(this, (TimeZone.__proto__ || Object.getPrototypeOf(TimeZone)).call(this, props));

	    _this.state = {
	      date: _this.tick(),
	      timezone: 8
	    };

	    _this.getTime = _this.getTime.bind(_this);
	    _this.tick = _this.tick.bind(_this);

	    return _this;
	  }

	  _createClass(TimeZone, [{
	    key: 'tick',
	    value: function tick() {
	      var _this2 = this;

	      var that = this;
	      setInterval(function () {
	        _this2.setState({
	          date: that.getTime()
	        });
	      }, 1000);
	    }
	  }, {
	    key: 'getTime',
	    value: function getTime() {
	      this.date = new Date();
	      this.timeOffset = this.date.getTimezoneOffset() / 60;
	      this.timezone = -this.timeOffset;

	      if (Math.abs(this.timezone > 12)) {
	        return;
	      }

	      var now = Date.now();

	      var hours = 3600000;

	      // now + utc + local
	      var utcTime = now + this.timeOffset * hours + this.state.timezone * hours;

	      var result = new Date(utcTime).toLocaleString();

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: this.props.classname },
	          this.state.date
	        )
	      );
	    }
	  }]);

	  return TimeZone;
	}(React.Component);

	ReactDOM.render(React.createElement(TimeZone, { classname: 'box' }), document.getElementById('timezone'));

	// For webpackHotModule must have
	if (false) {
	  module.hot.accept();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(33)))

/***/ }

});