(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-document-list ></app-document-list>\n<app-document ></app-document>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ChatAppClient';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_document_document_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/document/document.component */ "./src/app/components/document/document.component.ts");
/* harmony import */ var _components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/document-list/document-list.component */ "./src/app/components/document-list/document-list.component.ts");









var config = { url: 'https://henryk91-chatapp-server.glitch.me', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_document_document_component__WEBPACK_IMPORTED_MODULE_7__["DocumentComponent"],
                _components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_8__["DocumentListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(config)
            ],
            providers: [_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/document-list/document-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/document-list/document-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container' id='nav'>\n    <div class=\"header\">\n        <p id=\"loggedInParagraph\" *ngIf=!loggedIn>Login or Sign up</p>\n        <input class=\"loginInput\" #userName (keyup)=\"saveName(userName.value)\" type=\"text\" placeholder=\"Username...\" value=\"{{userame}}\"><br>\n        <div id=\"loggedOut\" *ngIf=!loggedIn>\n            <input class=\"loginInput\" (keydown.enter)='login(userName.value, userPass.value)' #userPass type=\"password\" placeholder=\"Password...\"><br>\n            <button id=\"loginButton\" (click)='login(userName.value, userPass.value)' >Login</button>\n        </div>\n    </div>\n    <div id=\"addContact\"><h3>Add New Contact</h3>\n        <input id=\"contactNameInput\" (keydown.enter)='newDoc(contactNameInput.value, userName.value); contactNameInput.value=\"\"' #contactNameInput type=\"text\" placeholder=\"Enter Name...\"><br>\n        <button id=\"addContButton\" (click)='newDoc(contactNameInput.value, userName.value); contactNameInput.value=\"\"' >Add</button>\n    </div>\n\n    <span [class.selected]='docId === currArr2' (click)='loadDoc(docId, userName.value); hideNav(); this.globals.userName=userName.value' *ngFor='let docId of documents | async'>{{ docId[1] }} </span>\n    <br>\n</div>\n"

/***/ }),

/***/ "./src/app/components/document-list/document-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/document-list/document-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  left: 0;\n  top: 0;\n  background-color: navy;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 10px;\n  z-index: 9999999;\n  display: block; }\n  .header #loggedInParagraph {\n    color: white;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 25px;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .header #loggedOut {\n    height: 100%;\n    top: 100px;\n    background-color: navy; }\n  div {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #d7dff5;\n  overflow-x: hidden;\n  text-align: center;\n  margin: 0;\n  z-index: 1500; }\n  div span {\n    text-decoration: none;\n    z-index: 999999;\n    font-size: 30px;\n    color: navy;\n    background-color: #f6f6f6;\n    width: 80%;\n    margin-left: 10%;\n    margin-top: 5px;\n    display: block;\n    border-radius: 2px; }\n  div .selected {\n    color: #e1e1e1; }\n  div :hover {\n    cursor: pointer; }\n  div .loginInput {\n    color: black;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 25px;\n    margin-bottom: 10px;\n    text-align: center; }\n  div #contactNameInput {\n    font-family: 'Times New Roman', Times, serif;\n    color: black;\n    font-size: 20px;\n    text-align: center;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  h3 {\n  margin-bottom: 0px;\n  padding-top: 4px;\n  font-size: 30px;\n  margin-top: 10px; }\n  button {\n  font-family: 'Times New Roman', Times, serif;\n  width: 80px;\n  height: 30px;\n  border-radius: 20px;\n  font-size: 20px;\n  border: none; }\n  #addContButton {\n  background-color: navy;\n  color: white; }\n  #loginButton {\n  background-color: white; }\n  #addContact {\n  position: relative;\n  z-index: 999999;\n  font-size: 20px;\n  color: navy;\n  background-color: #f6f6f6;\n  width: 90%;\n  height: auto;\n  margin-top: 65px;\n  margin-left: 5%;\n  margin-bottom: 3%;\n  padding-bottom: 10px;\n  border-radius: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlaW5yaWNoL0RldlByb2plY3RzL1BlcnNvbmFsL0NoYXRBcHAvQ2hhdEFwcENsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQtbGlzdC9kb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBTTtFQUNOLE9BQUs7RUFDTCx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLDRCQUFrQjtFQUFsQix5QkFBa0I7RUFBbEIsb0JBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsZUFBYyxFQWFqQjtFQXJCRDtJQVVRLGFBQVc7SUFDWCw2Q0FBNEM7SUFDNUMsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBQ3RCO0VBZkw7SUFpQlEsYUFBVztJQUNYLFdBQVc7SUFDWCx1QkFBc0IsRUFDekI7RUFFTDtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVc7RUFDWCxPQUFNO0VBQ04sVUFBUztFQUNULFFBQU87RUFDUCwwQkFBMEI7RUFDMUIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixVQUFRO0VBQ1IsY0FBYSxFQWtDaEI7RUE3Q0Q7SUFjUSxzQkFBcUI7SUFDckIsZ0JBQWU7SUFDZixnQkFBZTtJQUNmLFlBQVc7SUFDWCwwQkFBeUI7SUFDekIsV0FBUztJQUNULGlCQUFlO0lBQ2YsZ0JBQWM7SUFDZCxlQUFjO0lBQ2QsbUJBQWtCLEVBQ3JCO0VBeEJMO0lBeUJRLGVBQWMsRUFDakI7RUExQkw7SUEyQlEsZ0JBQWUsRUFDbEI7RUE1Qkw7SUErQlEsYUFBVztJQUNYLDZDQUE0QztJQUM1QyxnQkFBZTtJQUNmLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFDckI7RUFwQ0w7SUFzQ1EsNkNBQTRDO0lBQzVDLGFBQVc7SUFDWCxnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBQ3RCO0VBRUw7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWUsRUFDbEI7RUFDRDtFQUNJLDZDQUE0QztFQUM1QyxZQUFVO0VBQ1YsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGFBQVksRUFDZjtFQUNEO0VBQ0ksdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjtFQUNEO0VBQ0ksd0JBQXVCLEVBQzFCO0VBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsV0FBUztFQUNULGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxrQkFBZ0I7RUFDaEIscUJBQW9CO0VBQ3BCLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQtbGlzdC9kb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBsZWZ0OjA7XG4gICAgdG9wOjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7IFxuICAgIHotaW5kZXg6IDk5OTk5OTk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgI2xvZ2dlZEluUGFyYWdyYXBoe1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgI2xvZ2dlZE91dHtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIHRvcCA6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xuICAgIH1cbn1cbmRpdntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2Q3ZGZmNTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjowO1xuICAgIHotaW5kZXg6IDE1MDA7XG4gICAgXG4gICAgc3BhbntcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6IG5hdnk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgICAgIHdpZHRoOjgwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xuICAgICAgICBtYXJnaW4tdG9wOjVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9LnNlbGVjdGVkIHtcbiAgICAgICAgY29sb3I6ICNlMWUxZTE7XG4gICAgfTpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmxvZ2luSW5wdXR7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAjY29udGFjdE5hbWVJbnB1dHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5oM3tcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuYnV0dG9ue1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIHdpZHRoOjgwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbiNhZGRDb250QnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2xvZ2luQnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXG59XG4jYWRkQ29udGFjdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogbmF2eTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIHdpZHRoOjkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICBtYXJnaW4tbGVmdDo1JTtcbiAgICBtYXJnaW4tYm90dG9tOjMlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/document-list/document-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/document-list/document-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: DocumentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function() { return DocumentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/document.service */ "./src/app/services/document.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");




var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(documentService, globals) {
        this.documentService = documentService;
        this.globals = globals;
        this.loggedIn = false;
        this.userame = window.localStorage.getItem('UserName');
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInCheck();
        this.getContacts();
        this.logResponse = this.documentService.userConfirm;
        this._docSub = this.documentService.userConfirm.subscribe(function (docArr) { _this.logginReply(docArr); });
    };
    DocumentListComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    DocumentListComponent.prototype.loadDoc = function (id, creator) {
        this.documentService.loadDoc(id[0]);
    };
    DocumentListComponent.prototype.newDoc = function (name, creator) {
        this.documentService.newDocument(name, creator);
        this.getContacts();
    };
    DocumentListComponent.prototype.hideNav = function () {
        var x = document.getElementById('nav');
        x.style.display = "none";
    };
    DocumentListComponent.prototype.getContacts = function () {
        this.documentService.getContacts();
        this.documents = this.documentService.documents;
    };
    DocumentListComponent.prototype.saveName = function () {
        var storage = window.localStorage;
        storage.setItem('UserName', this.globals.userName);
    };
    DocumentListComponent.prototype.login = function (name, pass) {
        this.globals.userName = name;
        this.getContacts();
        this.documentService.addUser(name, pass);
        setTimeout(function () { window.location.reload(); }, 500);
    };
    DocumentListComponent.prototype.loggedInCheck = function () {
        var ls = window.localStorage.getItem('UserName');
        if (ls !== null && ls.indexOf('test') == -1) {
            this.loggedIn = true;
        }
        else {
            this.userame = '';
        }
    };
    DocumentListComponent.prototype.logginReply = function (ret) {
        if (ret.indexOf('confirm') > -1) {
            this.loggedIn = true;
            this.saveName();
        }
        else {
            alert(ret);
        }
    };
    DocumentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document-list',
            template: __webpack_require__(/*! ./document-list.component.html */ "./src/app/components/document-list/document-list.component.html"),
            styles: [__webpack_require__(/*! ./document-list.component.scss */ "./src/app/components/document-list/document-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], DocumentListComponent);
    return DocumentListComponent;
}());



/***/ }),

/***/ "./src/app/components/document/document.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/document/document.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"doc-body\">\n    <div id=\"header\">\n            <button id=\"backButton\" (click)=\"showNav()\">Back</button>\n            <strong><p id=\"receiver\">{{contactName()}}</p></strong>\n    </div>\n    <div id=\"messArea\" >\n        <div >\n        <div *ngFor='let msg of docArr.doc'>\n                <div *ngIf=notEmpty(msg.content)>\n                <div id=\"usrMsg\" *ngIf=isUser(msg.sender)><p >{{msg.content}} </p><p class=\"timeStamp\">{{msg.time}}</p></div>\n                <div id=\"ntUsr\" *ngIf=\"!isUser(msg.sender)\"><p >{{msg.content}} </p><p class=\"timeStamp\">{{msg.time}}</p></div>\n            </div>\n        </div>\n\n        </div>\n    </div>\n    <div id=\"bottom\">\n        <div id=\"typeArea\">\n            <input type=\"text\" (keydown.enter)=\"sendMsg(text.value); text.value=''\" id=\"msgType\" #text placeholder='Start typing...'>\n        </div>\n        <button id=\"sendButton\" (click)=\"sendMsg(text.value); text.value=''\">Send</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/document/document.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/document/document.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#doc-body {\n  position: fixed;\n  background-color: #d7dff5;\n  width: 100%;\n  left: 0;\n  padding-left: 3%; }\n\n#header {\n  display: block;\n  clear: right;\n  position: fixed;\n  display: inline;\n  text-align: center;\n  top: 0;\n  left: 0;\n  height: 55px;\n  width: 100%;\n  background-color: navy;\n  z-index: 600;\n  border: black 1px solid; }\n\n#receiver {\n  color: white;\n  margin-top: 13px !important;\n  font-size: 30px;\n  display: block; }\n\n#messArea {\n  position: fixed;\n  overflow: scroll;\n  width: 100%;\n  padding-top: 50px;\n  height: 79%;\n  background-color: #d7dff5;\n  bottom: 30px;\n  left: 0;\n  padding-bottom: 20px;\n  padding-left: 20px; }\n\n#container {\n  margin-top: 5px;\n  padding-right: 5px; }\n\n#usrMsg {\n  font-size: 18px;\n  border: black 1px solid;\n  border-radius: 2px;\n  clear: both;\n  float: right;\n  margin-right: 40px;\n  margin-top: 5px;\n  color: white;\n  background-color: navy;\n  padding: 0; }\n\n#usrMsg p {\n    margin: 3px; }\n\n#ntUsr {\n  margin-top: 5px;\n  font-size: 18px;\n  border: black 1px solid;\n  border-radius: 2px;\n  clear: both;\n  float: left;\n  background-color: white; }\n\n#ntUsr p {\n    margin: 3px; }\n\n.timeStamp {\n  font-size: 10px; }\n\n#msgType {\n  position: relative;\n  width: 75%;\n  left: calc(15% - 2px);\n  height: 80%;\n  margin-top: 5px;\n  font-size: 20px;\n  border: white 0px solid;\n  bottom: 1px;\n  z-index: 499;\n  border-radius: 2px;\n  font-family: 'Times New Roman', Times, serif;\n  text-align: center; }\n\ninput[type=text]:focus {\n  outline: none; }\n\n#bottom {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #d7dff5; }\n\n#typeArea {\n  -webkit-backface-visibility: none;\n          backface-visibility: none;\n  float: left;\n  height: 35px;\n  bottom: 0;\n  margin-top: 6px;\n  margin-left: 2%;\n  width: calc(94% - 42px);\n  z-index: 600;\n  background-color: white;\n  border-radius: 20px; }\n\n#sendButton {\n  margin-left: 2%;\n  padding-left: 5px;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  z-index: 499;\n  font-size: 10px;\n  background-color: navy;\n  color: white;\n  border: none;\n  font-family: 'Times New Roman', Times, serif; }\n\n#backButton {\n  position: fixed;\n  font-family: 'Times New Roman', Times, serif;\n  display: inline;\n  margin-top: 3px;\n  left: 0;\n  margin-left: 1%;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  z-index: 499;\n  background-color: white;\n  border: none; }\n\n::-webkit-scrollbar {\n  width: 0px;\n  background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlaW5yaWNoL0RldlByb2plY3RzL1BlcnNvbmFsL0NoYXRBcHAvQ2hhdEFwcENsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLDBCQUF3QjtFQUN4QixZQUFXO0VBQ1gsUUFBTTtFQUNOLGlCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGFBQVk7RUFDWixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsYUFBWTtFQUNaLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLHdCQUF1QixFQUcxQjs7QUFDRDtFQUNJLGFBQVc7RUFDWCw0QkFBMEI7RUFDMUIsZ0JBQWU7RUFDZixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixRQUFNO0VBQ04scUJBQW1CO0VBQ25CLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGdCQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsbUJBQWlCO0VBQ2pCLFlBQVU7RUFDVixhQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixXQUFVLEVBSWI7O0FBZEQ7SUFZUSxZQUFXLEVBQ2Q7O0FBRUw7RUFDSSxnQkFBZTtFQUNmLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLG1CQUFpQjtFQUNqQixZQUFVO0VBQ1YsWUFBVTtFQUNWLHdCQUF1QixFQUkxQjs7QUFYRDtJQVNRLFlBQVcsRUFDZDs7QUFFTDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixzQkFBcUI7RUFDckIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsNkNBQTRDO0VBQzVDLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxRQUFPO0VBQ1AsWUFBVztFQUNYLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUF5QjtVQUF6QiwwQkFBeUI7RUFDekIsWUFBVTtFQUNWLGFBQVk7RUFDWixVQUFTO0VBQ1QsZ0JBQWM7RUFDZCxnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGFBQVk7RUFDWixnQkFBZTtFQUNmLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osYUFBWTtFQUNaLDZDQUE0QyxFQUMvQzs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsNkNBQTRDO0VBQzVDLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixRQUFPO0VBQ1AsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLGFBQVksRUFDZjs7QUFDRDtFQUNJLFdBQVU7RUFDVix3QkFBdUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RvYy1ib2R5e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkN2RmZjU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDowO1xuICAgIHBhZGRpbmctbGVmdDozJTtcbn1cblxuI2hlYWRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogcmlnaHQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gICAgei1pbmRleDogNjAwO1xuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkOyAgIFxuXG4gICAgXG59XG4jcmVjZWl2ZXJ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLXRvcDoxM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuI21lc3NBcmVhe1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGhlaWdodDogNzklO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2RmZjU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGxlZnQ6MDtcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuI2NvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7IFxufVxuI3Vzck1zZ3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgY2xlYXI6Ym90aDtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgfVxufVxuI250VXNye1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgY2xlYXI6Ym90aDtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgIH1cbn1cbi50aW1lU3RhbXB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4jbXNnVHlwZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBsZWZ0OiBjYWxjKDE1JSAtIDJweCk7ICAgXG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXI6IHdoaXRlIDBweCBzb2xpZDtcbiAgICBib3R0b206IDFweDtcbiAgICB6LWluZGV4OiA0OTk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuI2JvdHRvbXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2RmZjU7XG59XG5cbiN0eXBlQXJlYXtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBub25lOyAgICBcbiAgICBmbG9hdDpsZWZ0O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDo2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIHdpZHRoOiBjYWxjKDk0JSAtIDQycHgpO1xuICAgIHotaW5kZXg6IDYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4jc2VuZEJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB6LWluZGV4OiA0OTk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbiNiYWNrQnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgei1pbmRleDogNDk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/document/document.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/document/document.component.ts ***!
  \***********************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/document.service */ "./src/app/services/document.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");





var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(documentService, globals) {
        this.documentService = documentService;
        this.globals = globals;
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._docSub = this.documentService.currDocument.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ id: '', users: [''], doc: [{ sender: '', content: '', time: '', date: '' }] })).subscribe(function (docArr) { _this.docArr = docArr; });
        this._docSub = this.documentService.currDocMsg.subscribe(function (docArr) { _this.docArr.doc.push(docArr.doc[0]); });
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    DocumentComponent.prototype.sendMsg = function (text) {
        var d = new Date;
        var time = d.getHours() + ":" + d.getMinutes();
        var date = d.getUTCDate() + "";
        var msgCont = { sender: this.globals.userName, content: text, time: time, date: date };
        var msg = { id: this.docArr.id, doc: [msgCont] };
        this.docArr.doc.push(msgCont);
        this.documentService.sendMsg(msg);
    };
    DocumentComponent.prototype.showNav = function () {
        var x = document.getElementById('nav');
        x.style.display = "block";
    };
    DocumentComponent.prototype.isUser = function (name) {
        var confirm = false;
        if (this.globals.userName == name) {
            confirm = true;
        }
        return confirm;
    };
    DocumentComponent.prototype.contactName = function () {
        if (this.docArr.users[0] == this.globals.userName) {
            return this.docArr.users[1];
        }
        else {
            return this.docArr.users[0];
        }
    };
    DocumentComponent.prototype.notEmpty = function (text) {
        if (text.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/components/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/components/document/document.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"], _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Globals = /** @class */ (function () {
    function Globals() {
        this.userName = 'test';
    }
    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/services/document.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/document.service.ts ***!
  \**********************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var DocumentService = /** @class */ (function () {
    function DocumentService(socket, globals) {
        this.socket = socket;
        this.globals = globals;
        this.uniqueOT = this.docId();
        this.username = window.localStorage.getItem('UserName');
        this.documents = this.socket.fromEvent('documents' + this.username + "END");
        this.currDocument = this.socket.fromEvent("doc-Arr");
        this.currDocMsg = this.socket.fromEvent("doc-Msg");
        this.userConfirm = this.socket.fromEvent('userAuth' + this.uniqueOT);
    }
    DocumentService.prototype.getContacts = function () {
        var storage = window.localStorage;
        var username = storage.getItem('UserName');
        this.socket.emit('arrDocuments', username);
    };
    DocumentService.prototype.loadDoc = function (id) {
        this.socket.emit('getDocArr', id);
    };
    DocumentService.prototype.newDocument = function (name, creator) {
        this.socket.emit('addDoc', { id: this.docId(), users: [creator, name], doc: [{ sender: '', content: '', time: '', date: '' }] });
    };
    DocumentService.prototype.addUser = function (name, pass) {
        this.socket.emit('userAuth', [name, pass, this.uniqueOT]);
    };
    DocumentService.prototype.sendMsg = function (msg) {
        this.socket.emit('sendMsg', msg);
    };
    DocumentService.prototype.docId = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 10; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/heinrich/DevProjects/Personal/ChatApp/ChatAppClient/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map