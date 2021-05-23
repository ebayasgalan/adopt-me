"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            photos: [],
            active: 0
        };
        _this.handleIndexClick = function (event) {
            if (!(event.target instanceof HTMLElement)) {
                return;
            }
            if (event.target.dataset.index) {
                _this.setState({
                    active: +event.target.dataset.index
                });
            }
        };
        return _this;
    }
    Carousel.getDerivedStateFromProps = function (_a) {
        var media = _a.media;
        var photos = ["http://placecorgi.com/600/600"];
        if (media.length) {
            photos = media.map(function (_a) {
                var large = _a.large;
                return large;
            });
        }
        return { photos: photos };
    };
    Carousel.prototype.render = function () {
        var _this = this;
        var _a = this.state, photos = _a.photos, active = _a.active;
        return (<div className="carousel">
        <img src={photos[active]} alt="animal"/>
        <div className="carousel-smaller">
          {photos.map(function (photo, index) { return (
        // eslint-disable-next-line
        <img key={photo} onClick={_this.handleIndexClick} data-index={index} src={photo} className={index === active ? "active" : ""} alt="animal thumbnail"/>); })}
        </div>
      </div>);
    };
    return Carousel;
}(react_1["default"].Component));
exports["default"] = Carousel;
