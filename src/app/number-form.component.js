"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var number_1 = require("./number");
var NumberFormComponent = (function () {
    function NumberFormComponent() {
        this.model = new number_1.Number(null, null, null);
    }
    NumberFormComponent.prototype.showFormControls = function (form) {
        return form && form.controls['id'] &&
            form.controls['id'].value;
    };
    NumberFormComponent.prototype.addThousandSeparator = function (form) {
        return (form.controls['id'].value).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    };
    NumberFormComponent.prototype.addcommaintextfiled = function (form) {
        this.model.id = this.model.id.replace(',', '');
        this.model.id = (this.model.id).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    };
    NumberFormComponent.prototype.removecomma = function (stirng) {
        this.model.idTxt = this.model.id;
        return this.model.idTxt.replace(/,/g, "");
    };
    NumberFormComponent.prototype.chkNumber = function (ele) {
        var theEvent = ele || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    };
    NumberFormComponent.prototype.clear = function () {
        this.model.id = this.model.id.replace(/,/g, "");
        ;
    };
    return NumberFormComponent;
}());
NumberFormComponent = __decorate([
    core_1.Component({
        selector: 'number-form',
        templateUrl: './number-form.component.html'
    })
], NumberFormComponent);
exports.NumberFormComponent = NumberFormComponent;
//# sourceMappingURL=number-form.component.js.map