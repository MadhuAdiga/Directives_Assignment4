"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Import required dependenices from angular core
// Directive decorator
var HiddenDirective = (function () {
    function HiddenDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.hasView = false; //Declare a variable hasview and assign it to false
    } //Constructor initiates two private variables of the type TemplateRef and ViewContainerRef
    Object.defineProperty(HiddenDirective.prototype, "myUnless", {
        set: function (display) {
            if (!display && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef); //Display the element in DOM
                this.hasView = true;
            }
            else if (display && this.hasView) {
                this.viewContainer.clear(); //Hide the element in DOM
                this.hasView = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        //Constructor initiates two private variables of the type TemplateRef and ViewContainerRef
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], HiddenDirective.prototype, "myUnless", null);
    HiddenDirective = __decorate([
        //Import required dependenices from angular core
        core_1.Directive({ selector: '[myUnless]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], HiddenDirective);
    return HiddenDirective;
}());
exports.HiddenDirective = HiddenDirective;
//# sourceMappingURL=app.directive.js.map