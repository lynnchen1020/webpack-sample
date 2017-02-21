webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(179);

	var CountDownTimer = function (_React$Component) {
	  _inherits(CountDownTimer, _React$Component);

	  function CountDownTimer(props) {
	    _classCallCheck(this, CountDownTimer);

	    var _this = _possibleConstructorReturn(this, (CountDownTimer.__proto__ || Object.getPrototypeOf(CountDownTimer)).call(this, props));

	    _this.state = {
	      timeout: _this.setStartTime()
	    };

	    _this.secToTime = _this.secToTime.bind(_this);
	    _this.count = _this.count.bind(_this);
	    _this.start = _this.start.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    _this.reset = _this.reset.bind(_this);
	    _this.setStartTime = _this.setStartTime.bind(_this);

	    return _this;
	  }

	  _createClass(CountDownTimer, [{
	    key: 'showTimeFormat',
	    value: function showTimeFormat(s, n) {
	      var t = '' + s;
	      while (t.length < n) {
	        t = '0' + t;
	      }
	      return t;
	    }
	  }, {
	    key: 'secToTime',
	    value: function secToTime(sec) {
	      var seconds = Math.floor(sec % 60).toString();
	      var minutes = Math.floor(sec / 60 % 60).toString();
	      var hours = parseInt(sec / 3600, 10).toString();
	      var showTime = this.showTimeFormat(hours, 2) + ':' + this.showTimeFormat(minutes, 2) + ':' + this.showTimeFormat(seconds, 2);
	      return showTime;
	    }
	  }, {
	    key: 'setStartTime',
	    value: function setStartTime() {
	      this.setTime = 300;
	      return this.setTime;
	    }
	  }, {
	    key: 'count',
	    value: function count() {
	      this.setState({
	        timeout: this.state.timeout
	      });
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      var _this2 = this;

	      this.stop();
	      this.timer = setInterval(function () {
	        _this2.state.timeout--;
	        _this2.count();
	      }, 1000);
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      clearInterval(this.timer);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.setState({
	        timeout: this.setStartTime()
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var timeOut = this.state.timeout;
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h4',
	          null,
	          this.secToTime(timeOut)
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.start },
	          'Start'
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.stop },
	          'Stop'
	        ),
	        React.createElement(
	          'button',
	          { onClick: this.reset },
	          'Reset'
	        )
	      );
	    }
	  }]);

	  return CountDownTimer;
	}(React.Component);

	ReactDOM.render(React.createElement(CountDownTimer, null), document.getElementById('countDownTimer'));

	// For webpackHotModule must have
	if (false) {
	  module.hot.accept();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(33)))

/***/ }
]);