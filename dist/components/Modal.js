"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    modalState,
    setModalState,
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    value: "".concat(modalState),
    className: "modal-close-btn",
    onClick: () => setModalState(modalState)
  }, "Close"), /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-text"
  }, text));
};

var _default = Modal;
exports.default = _default;