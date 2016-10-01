'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Chaffle = _react2['default'].createClass({
	displayName: 'Chaffle',

	getInitialState: function getInitialState() {
		return {
			staticStr: ''
		};
	},
	render: function render() {
		if (!this.props.children) {
			return null;
		}

		var staticStr = this.state.staticStr;
		var random = this.randomStr();

		var speed = this.getSpeed();

		if (random.length) {
			setTimeout((function () {
				this.setState({
					staticStr: this.props.children.substr(0, staticStr.length + 1)
				});
			}).bind(this), speed);
		}

		return _react2['default'].createElement(
			'span',
			null,
			staticStr + random
		);
	},
	randomChar: function randomChar() {
		switch (this.props.language) {

			case 'ja':
				return String.fromCharCode(19968 + Math.round(Math.random() * 80));

			case 'en':
			default:
				return String.fromCharCode(33 + Math.round(Math.random() * 99));

		}
	},
	randomStr: function randomStr() {
		var max = this.props.children.length - this.state.staticStr.length;
		var str = '';
		for (var i = 0; i < max; i++) {
			str += this.randomChar();
		}
		return str;
	},
	getSpeed: function getSpeed() {
		var delay = this.props.delay;
		if (!delay) {
			return 20;
		}
		var length = this.props.children.length;
		return delay / length;
	}
});

Chaffle.defaultProps = {
	children: '',
	language: 'en'
};

exports['default'] = Chaffle;
module.exports = exports['default'];