"use strict";
(self["webpackChunkconsolaFrontEnd"] = self["webpackChunkconsolaFrontEnd"] || []).push([["src_app_Private_private_module_ts"],{

/***/ 761:
/*!**********************************************************************!*\
  !*** ./src/app/Private/Pages/consola-home/consola-home.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsolaHomeComponent": () => (/* binding */ ConsolaHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConsolaHomeComponent {
    constructor() { }
    ngOnInit() { }
}
ConsolaHomeComponent.ɵfac = function ConsolaHomeComponent_Factory(t) { return new (t || ConsolaHomeComponent)(); };
ConsolaHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConsolaHomeComponent, selectors: [["app-consola-home"]], decls: 2, vars: 0, consts: [[1, "title", "mt-5"]], template: function ConsolaHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bienvenido a la Consola Administrativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zb2xhLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6215:
/*!********************************************************************!*\
  !*** ./src/app/Private/Pages/form-client/form-client.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormClientComponent": () => (/* binding */ FormClientComponent)
/* harmony export */ });
/* harmony import */ var C_Users_gsoto_Desktop_prueba_ConsolaFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Dialogs_question_dialog_question_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Dialogs/question-dialog/question-dialog.component */ 3965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_core_client_service_client_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/client-service/client-service.service */ 8744);
/* harmony import */ var src_app_core_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/alert/alert.service */ 5085);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _two_decimal_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../two-decimal.directive */ 9973);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mask */ 4409);
/* harmony import */ var _two_decimal_monthlyFee_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../two-decimal-monthlyFee.directive */ 2717);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);



















function FormClientComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Detalles del Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function FormClientComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Agergar Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function FormClientComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_0_0 = ctx_r4.clientForm.get("chargeAccount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"]) ? "Se necesitan 10 caractares para este campo" : "Este campo es requerido");
  }
}

function FormClientComponent_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_0_0 = ctx_r5.clientForm.get("depositAccount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"]) ? "Se necesitan 10 caractares para este campo" : "Este campo es requerido");
  }
}

function FormClientComponent_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_0_0 = ctx_r6.clientForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["email"]) ? "Escriba un formato correcto de correo" : "Este campo es requerido");
  }
}

function FormClientComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FormClientComponent_div_86_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r9.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FormClientComponent_div_86_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r11.guardar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    cancelarDisabled: a0,
    cancelar: a1
  };
};

function FormClientComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FormClientComponent_div_87_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r12.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FormClientComponent_div_87_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r14.delete();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Borrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FormClientComponent_div_87_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r15.modificar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r8.clientForm.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c0, ctx_r8.clientForm.disabled, !ctx_r8.clientForm.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r8.clientForm.disabled);
  }
}

class FormClientComponent {
  constructor(fb, router, datePipe, clientService, alertService, activatedRoute, dialog) {
    this.fb = fb;
    this.router = router;
    this.datePipe = datePipe;
    this.clientService = clientService;
    this.alertService = alertService;
    this.activatedRoute = activatedRoute;
    this.dialog = dialog;
    this.clientForm = this.fb.group({
      id: [null],
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      registrationDate: [new Date()],
      cancelationDate: [new Date()],
      serviceCharge: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      chargeAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]],
      depositAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]],
      monthlyFee: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
      deliveryTime: [''],
      active: [false],
      sendFile: [false],
      sendMonthlyFeeFile: [false],
      transactionsLimit: [false]
    });
    this.url = '';
    this.idClient = '';
    this.activatedRoute.url.subscribe(params => {
      this.url = params[0].path;
    });

    if (this.url === 'searchClient') {
      this.activatedRoute.params.subscribe(params => {
        this.idClient = params['id'];
      });
      this.getClient(this.idClient);
    }

    this.clientForm.controls['id'].disable();
    console.log(this.url);
  }

  ngOnInit() {}

  formatData(data) {
    console.log(new Date(data.cancelationDate));
    console.log(data);
    const req = Object.assign(Object.assign({}, data), {
      status: '1',
      id: this.idClient === '' ? null : Number(this.idClient),
      serviceCharge: Number(data.serviceCharge),
      sendFile: data.sendFile === false ? '0' : '1',
      sendMonthlyFeeFile: data.sendMonthlyFeeFile === false ? 0 : 1,
      active: data.active === false ? 0 : 1,
      transactionsLimit: data.transactionsLimit === false ? '0' : '1',
      monthlyFee: Number(data.monthlyFee),
      registrationDate: this.datePipe.transform(data.registrationDate, 'yyyy-MM-dd'),
      cancelationDate: this.datePipe.transform(data.cancelationDate, 'yyyy-MM-dd')
    });
    return req;
  }

  guardar() {
    var _this = this;

    return (0,C_Users_gsoto_Desktop_prueba_ConsolaFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.clientForm.invalid) {
        return;
      }

      const response = yield _this.clientService.addClient(_this.formatData(_this.clientForm.value));

      if ((response === null || response === void 0 ? void 0 : response.responseCode) === 1 || response === undefined) {
        return;
      }

      _this.alertService.succes(response.description);
    })();
  }

  cancel() {
    this.url === 'searchClient' ? this.router.navigate(['./consola/searchClient']) : this.router.navigate(['./home']);
  }

  FormatDateForm(date) {
    console.log(date);

    if (date !== null && date !== '') {
      const arrDate = date.split('/');
      return new Date(`${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`);
    }

    return '';
  }

  getClient(id) {
    var _this2 = this;

    return (0,C_Users_gsoto_Desktop_prueba_ConsolaFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this2.clientService.searchClient(id);

      _this2.clientForm.reset(Object.assign(Object.assign({}, response === null || response === void 0 ? void 0 : response.result), {
        cancelationDate: _this2.FormatDateForm((response === null || response === void 0 ? void 0 : response.result.cancelationDate) || ''),
        registrationDate: _this2.FormatDateForm((response === null || response === void 0 ? void 0 : response.result.registrationDate) || ''),
        sendFile: (response === null || response === void 0 ? void 0 : response.result.sendFile) === '1' ? true : false,
        transactionsLimit: (response === null || response === void 0 ? void 0 : response.result.transactionsLimit) === '1' ? true : false,
        active: (response === null || response === void 0 ? void 0 : response.result.active) === 1 ? true : false
      }));

      if ((response === null || response === void 0 ? void 0 : response.result.status) === '2') _this2.clientForm.disable();
    })();
  }

  modificar() {
    var _this3 = this;

    return (0,C_Users_gsoto_Desktop_prueba_ConsolaFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.clientForm.invalid) {
        return;
      }

      const response = yield _this3.clientService.modifyClient(_this3.formatData(_this3.clientForm.value));

      if ((response === null || response === void 0 ? void 0 : response.responseCode) === 1 || response === undefined) {
        return;
      }

      _this3.alertService.succes(response.description);
    })();
  }

  delete() {
    var _this4 = this;

    const sendDialog = this.dialog.open(_Dialogs_question_dialog_question_dialog_component__WEBPACK_IMPORTED_MODULE_1__.QuestionDialogComponent, {
      autoFocus: false,
      data: {
        question: '¿Desea eliminar este Cliente?'
      }
    });
    sendDialog.afterClosed().toPromise().then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_gsoto_Desktop_prueba_ConsolaFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (res === true) {
          const response = yield _this4.clientService.deleteClient(_this4.idClient);

          if ((response === null || response === void 0 ? void 0 : response.responseCode) === 1 || response === undefined) {
            return;
          }

          _this4.alertService.succes(response.description);

          _this4.getClient(_this4.idClient);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

}

FormClientComponent.ɵfac = function FormClientComponent_Factory(t) {
  return new (t || FormClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_client_service_client_service_service__WEBPACK_IMPORTED_MODULE_2__.ClientServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};

FormClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FormClientComponent,
  selectors: [["app-form-client"]],
  decls: 88,
  vars: 12,
  consts: [[1, ".container-fluid"], [1, "title", "mt-4"], [4, "ngIf"], [1, "container__form", "mt-4"], ["autocomplete", "off", 1, "form", 3, "formGroup"], [1, "row", "mb-5"], [1, "col"], ["appearance", "outline", "color", "accent", 1, "input"], ["matInput", "", "formControlName", "id"], ["matInput", "", "formControlName", "name"], ["appearance", "outline", "color", "primary", 1, "input"], ["matInput", "", "formControlName", "registrationDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["registrationDate", ""], ["matInput", "", "formControlName", "cancelationDate", 3, "matDatepicker"], ["cancelationDate", ""], ["matInput", "", "formControlName", "serviceCharge", "appTwoDigitDecimaNumber", ""], ["matInput", "", "formControlName", "chargeAccount", "minlength", "10", "maxlength", "10", "mask", "0*"], ["matInput", "", "formControlName", "depositAccount", "minlength", "10", "maxlength", "10", "mask", "0*"], ["matInput", "", "formControlName", "monthlyFee", "appTwoDigitDecimaNumberMonthlyFee", ""], ["type", "email", "matInput", "", "formControlName", "email"], [1, "col", "col-md-4"], ["type", "time", "matInput", "", "name", "week", "formControlName", "deliveryTime", 1, "timePicker"], [1, "col", "prueba"], ["color", "primary", "formControlName", "sendFile", 1, "example-margin"], ["formControlName", "active", "color", "primary", 1, "example-margin"], ["color", "primary", "formControlName", "transactionsLimit", 1, "example-margin"], [1, "row"], ["class", "col actions", 4, "ngIf"], [1, "col", "actions"], [1, "actions__buttons"], ["mat-raised-button", "", 1, "cancelar", 3, "click"], ["mat-raised-button", "", 1, "aceptar", 3, "click"], ["mat-raised-button", "", 3, "disabled", "ngClass", "click"], ["mat-raised-button", "", 1, "aceptar", 3, "disabled", "click"]],
  template: function FormClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FormClientComponent_h2_2_Template, 2, 0, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, FormClientComponent_h2_3_Template, 2, 0, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "idCliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Nombre del Cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Este campo es requerido");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Fecha de Registro");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "mat-datepicker-toggle", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "mat-datepicker", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Fecha de Cancelaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "mat-datepicker-toggle", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "mat-datepicker", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Cargo por Servicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Este campo es requerido");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Cuenta Cargo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, FormClientComponent_mat_error_48_Template, 2, 1, "mat-error", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Cuenta Desposito");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, FormClientComponent_mat_error_54_Template, 2, 1, "mat-error", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Renta Mensual");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, FormClientComponent_mat_error_66_Template, 2, 1, "mat-error", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Hora de Entrega");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "dt");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Enviar Archivo(Conciliaci\u00F3n)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "mat-checkbox", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "dt");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "mat-checkbox", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "dt");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Sin Limite de Transacciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "mat-checkbox", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, FormClientComponent_div_86_Template, 6, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, FormClientComponent_div_87_Template, 8, 6, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](26);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);

      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.url === "searchClient");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.url === "addClient");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.clientForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.clientForm.get("chargeAccount")) == null ? null : tmp_7_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.clientForm.get("depositAccount")) == null ? null : tmp_8_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.clientForm.get("depositAccount")) == null ? null : tmp_9_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.url === "addClient");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.url === "searchClient");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepicker, _two_decimal_directive__WEBPACK_IMPORTED_MODULE_4__.TwoDigitDecimaNumberDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_14__.MaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _two_decimal_monthlyFee_directive__WEBPACK_IMPORTED_MODULE_5__.TwoDigitDecimaNumberMonthlyFeeDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass],
  styles: [".prueba3[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  min-height: 100%;\n  height: 100%;\n}\n\n.container__form[_ngcontent-%COMP%] {\n  margin: 0px 20px;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.prueba[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-left: 25px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.actions__buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.aceptar[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #eb0029;\n  width: 150px;\n}\n\n.aceptar[_ngcontent-%COMP%]:not([disabled]):hover {\n  background-color: #4e4044;\n  color: white;\n}\n\n.timePicker[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\n.cancelar[_ngcontent-%COMP%] {\n  border: 2px solid #eb0029;\n  color: #eb0029;\n  margin-right: 20px;\n  width: 100px;\n}\n\n.cancelar[_ngcontent-%COMP%]:not([disabled]):hover {\n  background-color: #4e4044;\n  color: white;\n}\n\n.cancelarDisabled[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUYiLCJmaWxlIjoiZm9ybS1jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJ1ZWJhMyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb250YWluZXJfX2Zvcm0ge1xyXG4gIG1hcmdpbjogMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBydWViYSB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4uYWN0aW9uc19fYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZWIwMDI5O1xyXG4gIC8vIHdpZHRoOiAxNTBweDtcclxufVxyXG4uYWNlcHRhciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjAwMjk7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uYWNlcHRhcjpub3QoW2Rpc2FibGVkXSk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTQwNDQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGltZVBpY2tlciB7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi5jYW5jZWxhciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ViMDAyOTtcclxuICBjb2xvcjogI2ViMDAyOTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY2FuY2VsYXI6bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0MDQ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhbmNlbGFyRGlzYWJsZWQge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 4468:
/*!************************************************************************!*\
  !*** ./src/app/Private/Pages/private-index/private-index.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateIndexComponent": () => (/* binding */ PrivateIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/side-navbar/side-navbar.component */ 887);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





const _c0 = function (a0) { return { height: a0 }; };
class PrivateIndexComponent {
    constructor() {
        this.modeMenu = 'side';
        this.windowHeight = `${window.innerHeight - 65}px`;
    }
    handleMenuMode() {
        this.windowHeight = `${window.innerHeight - 65}px`;
        // if (window.innerWidth >= 960) {
        //   this.modeMenu = "side";
        //   this.handleShowMenu();
        //   return;
        // }
        // this.modeMenu = "over";
        // this.handleShowMenu();
    }
    ngOnInit() { }
}
PrivateIndexComponent.ɵfac = function PrivateIndexComponent_Factory(t) { return new (t || PrivateIndexComponent)(); };
PrivateIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrivateIndexComponent, selectors: [["app-private-index"]], hostBindings: function PrivateIndexComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function PrivateIndexComponent_resize_HostBindingHandler() { return ctx.handleMenuMode(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 5, consts: [[1, "backgroundTransparent", 3, "ngStyle"], ["position", "start", "opened", "true", 3, "mode", "disableClose"], [1, "section"]], template: function PrivateIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-side-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.windowHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.modeMenu)("disableClose", false);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavContainer, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenav, _components_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_0__.SideNavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: [".backgroundTransparent[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.section[_ngcontent-%COMP%] {\r\n  min-width: 100%;\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhdGUtaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJwcml2YXRlLWluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFRyYW5zcGFyZW50IHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9763:
/*!************************************************************************!*\
  !*** ./src/app/Private/Pages/search-client/search-client.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchClientComponent": () => (/* binding */ SearchClientComponent)
/* harmony export */ });
/* harmony import */ var C_Users_gsoto_Desktop_prueba_ConsolaFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_core_client_service_client_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/client-service/client-service.service */ 8744);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);















function SearchClientComponent_div_13_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](col_r5.name);
  }
}

function SearchClientComponent_div_13_ng_container_2_td_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.getInformation(element_r9[col_r5.id], col_r5.name), " ");
  }
}

const _c0 = function (a1) {
  return ["clientes", a1];
};

function SearchClientComponent_div_13_ng_container_2_td_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, element_r9[col_r5.id]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r9[col_r5.id], " ");
  }
}

function SearchClientComponent_div_13_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchClientComponent_div_13_ng_container_2_td_2_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchClientComponent_div_13_ng_container_2_td_2_a_2_Template, 2, 4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r5.id !== "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r5.id === "id");
  }
}

function SearchClientComponent_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchClientComponent_div_13_ng_container_2_th_1_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchClientComponent_div_13_ng_container_2_td_2_Template, 3, 2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matColumnDef", col_r5.id);
  }
}

function SearchClientComponent_div_13_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
  }
}

function SearchClientComponent_div_13_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 24);
  }
}

const _c1 = function () {
  return [10, 20];
};

function SearchClientComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchClientComponent_div_13_ng_container_2_Template, 3, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchClientComponent_div_13_tr_3_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchClientComponent_div_13_tr_4_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-paginator", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1))("length", ctx_r0.dataSource.data.length);
  }
}

class SearchClientComponent {
  constructor(fb, clientService) {
    this.fb = fb;
    this.clientService = clientService;
    this.data = [{
      id: 'id',
      name: 'Id. Cliente'
    }, {
      id: 'name',
      name: 'Nombre'
    }, {
      id: 'registrationDate',
      name: 'Fecha registro'
    }, {
      id: 'cancelationDate',
      name: 'Fecha cancelación'
    }, {
      id: 'serviceCharge',
      name: 'Cargo por servicio'
    }, {
      id: 'depositAccount',
      name: 'Cuenta Deposito'
    }, {
      id: 'chargeAccount',
      name: 'Cuenta Cargo'
    }, {
      id: 'sendFile',
      name: 'Conciliación'
    }, {
      id: 'sendMonthlyFeeFile',
      name: 'Renta mensual'
    }, {
      id: 'active',
      name: 'Activo'
    }];
    this.clients = [];
    this.displayedColumns = ['id', 'name', 'registrationDate', 'cancelationDate', 'serviceCharge', 'depositAccount', 'chargeAccount', 'sendFile', 'sendMonthlyFeeFile', 'active'];
    this.searchForm = this.fb.group({
      idSearch: ['']
    });
  }

  FormatDateForm(date) {
    console.log(date);

    if (date !== null && date !== '') {
      const arrDate = date.split('-');
      return `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
    }

    return '';
  }

  getInformation(dato, name) {
    console.log(name);

    if (name === 'Conciliación' || name === 'Renta mensual' || name === 'Activo') {
      if (dato === 1 || dato === '1') {
        return 'Si';
      } else if (dato === 0 || dato == '0' || dato === null) {
        return 'No';
      }
    } else if (name === 'Fecha registro' || name === 'Fecha cancelación') {
      return this.FormatDateForm(dato);
    }

    return dato;
  }

  searchCliente() {
    var _this = this;

    return (0,C_Users_gsoto_Desktop_prueba_ConsolaFrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.searchForm.value.idSearch) {
        const response = yield _this.clientService.searchClients();

        if ((response === null || response === void 0 ? void 0 : response.responseCode) === 0) {
          _this.clients = response.result;
          _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(_this.clients);
          setTimeout(() => {
            _this.dataSource.paginator = _this.paginator;
          });
        }
      } else {
        const respose = yield _this.clientService.searchClient(_this.searchForm.value.idSearch);

        if ((respose === null || respose === void 0 ? void 0 : respose.responseCode) === 0) {
          _this.clients = [respose.result];
          _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(_this.clients);
          setTimeout(() => {
            _this.dataSource.paginator = _this.paginator;
          });
        }
      }
    })();
  }

}

SearchClientComponent.ɵfac = function SearchClientComponent_Factory(t) {
  return new (t || SearchClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_client_service_client_service_service__WEBPACK_IMPORTED_MODULE_1__.ClientServiceService));
};

SearchClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SearchClientComponent,
  selectors: [["app-search-client"]],
  viewQuery: function SearchClientComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 14,
  vars: 2,
  consts: [[1, "container-fluid", "containerBorder"], [1, "title", "mt-4"], [1, "mt-4"], ["action", "", "autocomplete", "off", 3, "formGroup"], ["color", "accent", "appearance", "outline", 1, "example-form-field"], ["matInput", "", "type", "text", "formControlName", "idSearch"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["class", "mat-elevation-z8 mb-4", 4, "ngIf"], [1, "mat-elevation-z8", "mb-4"], ["mat-table", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Registros por Pagina", 3, "pageSizeOptions", "length"], ["paginator", ""], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function SearchClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Buscar Cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Id de Cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchClientComponent_Template_button_click_10_listener() {
        return ctx.searchCliente();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SearchClientComponent_div_13_Template, 7, 7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.clients.length > 0);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow],
  styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0FBRkY7O0FBSUE7RUFDRSxXQUFBO0FBREYiLCJmaWxlIjoic2VhcmNoLWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJCb3JkZXIge1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 2463:
/*!***********************************************************************************!*\
  !*** ./src/app/Private/components/side-navbar-item/side-navbar-item.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavbarItemComponent": () => (/* binding */ SideNavbarItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




function SideNavbarItemComponent_mat_expansion_panel_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "menu__element--active")("routerLink", link_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r3.text, " ");
} }
function SideNavbarItemComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SideNavbarItemComponent_mat_expansion_panel_0_div_5_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.links);
} }
function SideNavbarItemComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r1.text === "Home" ? "home" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "menu__element--active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.text, " ");
} }
class SideNavbarItemComponent {
    constructor() {
        this.text = '';
        this.notifications = 0;
        this.links = [];
        this.icon = '';
    }
    ngOnInit() { }
}
SideNavbarItemComponent.ɵfac = function SideNavbarItemComponent_Factory(t) { return new (t || SideNavbarItemComponent)(); };
SideNavbarItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavbarItemComponent, selectors: [["app-side-navbar-item"]], inputs: { text: "text", notifications: "notifications", links: "links", icon: "icon" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "menu__element_header", 3, "routerLinkActive", "routerLink", 4, "ngIf"], [1, "menu__element"], ["class", "element__text", 3, "routerLinkActive", "routerLink", 4, "ngFor", "ngForOf"], [1, "element__text", 3, "routerLinkActive", "routerLink"], [1, "menu__element_header", 3, "routerLinkActive", "routerLink"], [1, "element__text"]], template: function SideNavbarItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavbarItemComponent_mat_expansion_panel_0_Template, 6, 2, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavbarItemComponent_li_1_Template, 3, 3, "li", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.links.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.links.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: [".menu__element[_ngcontent-%COMP%] {\n  color: #4e4044;\n  display: flex;\n  flex-direction: row;\n  border: none;\n  box-shadow: none;\n  border-radius: 0;\n  cursor: pointer;\n  font-weight: bold;\n  font-family: inherit;\n}\n.menu__element[_ngcontent-%COMP%]   .element__icon[_ngcontent-%COMP%] {\n  color: #5b6670;\n  height: 20px;\n  margin-right: 10px;\n  width: 20px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n}\n.logout[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 3rem;\n}\n.menu__element--active[_ngcontent-%COMP%] {\n  background-color: rgba(235, 0, 41, 0.1);\n  border-right: 4px solid #eb0029;\n  color: #eb0029;\n  font-weight: bold;\n}\n.menu__element--active[_ngcontent-%COMP%]   .element__icon[_ngcontent-%COMP%] {\n  color: #ff742f;\n}\nul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.element__text[_ngcontent-%COMP%] {\n  list-style: none;\n  cursor: pointer;\n  padding: 8px 0 8px 10px;\n  font-family: inherit;\n}\n.element__text[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.menu__element_header[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  flex-direction: row;\n  cursor: pointer;\n  padding-left: 14px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2YmFyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBR0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBSUE7RUFDRSxVQUFBO0FBREY7QUFHQTtFQUNFLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFGIiwiZmlsZSI6InNpZGUtbmF2YmFyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudV9fZWxlbWVudCB7XHJcbiAgY29sb3I6ICM0ZTQwNDQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cclxuICAuZWxlbWVudF9faWNvbiB7XHJcbiAgICBjb2xvcjogIzViNjY3MDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5tZW51X19lbGVtZW50LS1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LCAwLCA0MSwgMC4xKTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjZWIwMDI5O1xyXG4gIGNvbG9yOiAjZWIwMDI5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vIHBhZGRpbmc6IDhweCAwIDhweCAxMHB4O1xyXG5cclxuICAuZWxlbWVudF9faWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmNzQyZjtcclxuICB9XHJcbn1cclxudWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9XCJtYXQtZWxldmF0aW9uLXpcIl0pIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZWxlbWVudF9fdGV4dCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDAgOHB4IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5lbGVtZW50X190ZXh0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ubWVudV9fZWxlbWVudF9oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 887:
/*!*************************************************************************!*\
  !*** ./src/app/Private/components/side-navbar/side-navbar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavbarComponent": () => (/* binding */ SideNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _side_navbar_item_side_navbar_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../side-navbar-item/side-navbar-item.component */ 2463);


class SideNavbarComponent {
    constructor() {
        this.liksClientes = [
            { text: 'Buscar Cliente', link: 'searchClient' },
            { text: 'Agregar Cliente', link: 'addClient' },
        ];
    }
    ngOnInit() { }
}
SideNavbarComponent.ɵfac = function SideNavbarComponent_Factory(t) { return new (t || SideNavbarComponent)(); };
SideNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideNavbarComponent, selectors: [["app-side-navbar"]], decls: 3, vars: 1, consts: [[1, "menu"], ["text", "Home", "link", "/consola/home"], ["text", "Clientes", 3, "links"]], template: function SideNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-side-navbar-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-side-navbar-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("links", ctx.liksClientes);
    } }, directives: [_side_navbar_item_side_navbar_item_component__WEBPACK_IMPORTED_MODULE_0__.SideNavbarItemComponent], styles: [".menu[_ngcontent-%COMP%] {\n  \n  margin-top: 20px;\n  list-style: none;\n  padding: 0 0px;\n  width: 100%;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNpZGUtbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMCAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1867:
/*!*********************************************************************************!*\
  !*** ./src/app/Private/components/table-consultas/table-consultas.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableConsultasComponent": () => (/* binding */ TableConsultasComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);






function TableConsultasComponent_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r4.name);
} }
function TableConsultasComponent_ng_container_2_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const col_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8[col_r4.id], " ");
} }
function TableConsultasComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableConsultasComponent_ng_container_2_th_1_Template, 2, 1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableConsultasComponent_ng_container_2_td_2_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", col_r4.id);
} }
function TableConsultasComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function TableConsultasComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const _c0 = function () { return [10, 20]; };
class TableConsultasComponent {
    constructor() {
        this.data = [];
        this.displayedColumns = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.data);
        setTimeout(() => {
            this.dataSource.paginator = this.paginator;
        });
    }
    ngOnInit() { }
}
TableConsultasComponent.ɵfac = function TableConsultasComponent_Factory(t) { return new (t || TableConsultasComponent)(); };
TableConsultasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableConsultasComponent, selectors: [["app-table-consultas"]], viewQuery: function TableConsultasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { data: "data", displayedColumns: "displayedColumns" }, decls: 7, vars: 7, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Registros por Pagina", 3, "pageSizeOptions", "length"], ["paginator", ""], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableConsultasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableConsultasComponent_ng_container_2_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableConsultasComponent_tr_3_Template, 1, 0, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableConsultasComponent_tr_4_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-paginator", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("length", ctx.dataSource.data.length);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1jb25zdWx0YXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7737:
/*!***************************************************!*\
  !*** ./src/app/Private/private-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateRoutingModule": () => (/* binding */ PrivateRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _Pages_private_index_private_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/private-index/private-index.component */ 4468);
/* harmony import */ var _Pages_consola_home_consola_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/consola-home/consola-home.component */ 761);
/* harmony import */ var _security_session_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/session.guard */ 6997);
/* harmony import */ var _Pages_form_client_form_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/form-client/form-client.component */ 6215);
/* harmony import */ var _Pages_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/search-client/search-client.component */ 9763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        component: _Pages_private_index_private_index_component__WEBPACK_IMPORTED_MODULE_0__.PrivateIndexComponent,
        children: [
            {
                path: 'home',
                canActivate: [_security_session_guard__WEBPACK_IMPORTED_MODULE_2__.SessionGuard],
                component: _Pages_consola_home_consola_home_component__WEBPACK_IMPORTED_MODULE_1__.ConsolaHomeComponent,
            },
            {
                path: 'addClient',
                canActivate: [_security_session_guard__WEBPACK_IMPORTED_MODULE_2__.SessionGuard],
                component: _Pages_form_client_form_client_component__WEBPACK_IMPORTED_MODULE_3__.FormClientComponent,
            },
            {
                path: 'searchClient',
                canActivate: [_security_session_guard__WEBPACK_IMPORTED_MODULE_2__.SessionGuard],
                component: _Pages_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_4__.SearchClientComponent,
            },
            {
                path: 'searchClient/clientes/:id',
                canActivate: [_security_session_guard__WEBPACK_IMPORTED_MODULE_2__.SessionGuard],
                component: _Pages_form_client_form_client_component__WEBPACK_IMPORTED_MODULE_3__.FormClientComponent,
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ],
    },
];
class PrivateRoutingModule {
}
PrivateRoutingModule.ɵfac = function PrivateRoutingModule_Factory(t) { return new (t || PrivateRoutingModule)(); };
PrivateRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PrivateRoutingModule });
PrivateRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PrivateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 8293:
/*!*******************************************!*\
  !*** ./src/app/Private/private.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateModule": () => (/* binding */ PrivateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _Pages_private_index_private_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/private-index/private-index.component */ 4468);
/* harmony import */ var _Pages_consola_home_consola_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/consola-home/consola-home.component */ 761);
/* harmony import */ var _private_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private-routing.module */ 7737);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ 898);
/* harmony import */ var _components_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/side-navbar/side-navbar.component */ 887);
/* harmony import */ var _components_side_navbar_item_side_navbar_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-navbar-item/side-navbar-item.component */ 2463);
/* harmony import */ var _Pages_form_client_form_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/form-client/form-client.component */ 6215);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mask */ 4409);
/* harmony import */ var _two_decimal_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../two-decimal.directive */ 9973);
/* harmony import */ var _two_decimal_monthlyFee_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../two-decimal-monthlyFee.directive */ 2717);
/* harmony import */ var _Pages_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/search-client/search-client.component */ 9763);
/* harmony import */ var _components_table_consultas_table_consultas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/table-consultas/table-consultas.component */ 1867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
















const maskConfig = {
    validation: false,
};
class PrivateModule {
}
PrivateModule.ɵfac = function PrivateModule_Factory(t) { return new (t || PrivateModule)(); };
PrivateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: PrivateModule });
PrivateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _private_routing_module__WEBPACK_IMPORTED_MODULE_2__.PrivateRoutingModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_14__.NgxMaskModule.forRoot(maskConfig),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](PrivateModule, { declarations: [_Pages_private_index_private_index_component__WEBPACK_IMPORTED_MODULE_0__.PrivateIndexComponent,
        _Pages_consola_home_consola_home_component__WEBPACK_IMPORTED_MODULE_1__.ConsolaHomeComponent,
        _components_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_4__.SideNavbarComponent,
        _components_side_navbar_item_side_navbar_item_component__WEBPACK_IMPORTED_MODULE_5__.SideNavbarItemComponent,
        _Pages_form_client_form_client_component__WEBPACK_IMPORTED_MODULE_6__.FormClientComponent,
        _two_decimal_directive__WEBPACK_IMPORTED_MODULE_7__.TwoDigitDecimaNumberDirective,
        _two_decimal_monthlyFee_directive__WEBPACK_IMPORTED_MODULE_8__.TwoDigitDecimaNumberMonthlyFeeDirective,
        _Pages_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_9__.SearchClientComponent,
        _components_table_consultas_table_consultas_component__WEBPACK_IMPORTED_MODULE_10__.TableConsultasComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _private_routing_module__WEBPACK_IMPORTED_MODULE_2__.PrivateRoutingModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_mask__WEBPACK_IMPORTED_MODULE_14__.NgxMaskModule] }); })();


/***/ }),

/***/ 8744:
/*!***************************************************************!*\
  !*** ./src/app/core/client-service/client-service.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientServiceService": () => (/* binding */ ClientServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _base_service_base_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service/base-service.service */ 5292);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.service */ 3746);



class ClientServiceService {
    constructor(baseService, storageService) {
        this.baseService = baseService;
        this.storageService = storageService;
    }
    addClient(request) {
        return this.baseService.post('/client/add-client', request);
    }
    searchClients() {
        return this.baseService.get('/client/get-all');
    }
    searchClient(id) {
        return this.baseService.get(`/client/get/${id}`);
    }
    modifyClient(request) {
        const session = this.storageService.getSession();
        return this.baseService.post(`/client/modify-client/${session === null || session === void 0 ? void 0 : session.userId}`, request);
    }
    deleteClient(id) {
        const session = this.storageService.getSession();
        return this.baseService.post(`/client/delete-client/${id}/${session === null || session === void 0 ? void 0 : session.userId}`, {});
    }
}
ClientServiceService.ɵfac = function ClientServiceService_Factory(t) { return new (t || ClientServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_service_base_service_service__WEBPACK_IMPORTED_MODULE_0__.BaseServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService)); };
ClientServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ClientServiceService, factory: ClientServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2717:
/*!*****************************************************!*\
  !*** ./src/app/two-decimal-monthlyFee.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoDigitDecimaNumberMonthlyFeeDirective": () => (/* binding */ TwoDigitDecimaNumberMonthlyFeeDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TwoDigitDecimaNumberMonthlyFeeDirective {
    constructor(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^\d*\.?\d{0,2}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = [
            'Backspace',
            'Tab',
            'End',
            'Home',
            '-',
            'ArrowLeft',
            'ArrowRight',
            'Del',
            'Delete',
        ];
    }
    onKeyDown(event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current = this.el.nativeElement.value;
        const position = this.el.nativeElement.selectionStart;
        const next = [
            current.slice(0, position),
            event.key == 'Decimal' ? '.' : event.key,
            current.slice(position),
        ].join('');
        if (next.length < 7 || next.includes('.')) {
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
        else if (next.length > 8) {
            event.preventDefault();
        }
    }
}
TwoDigitDecimaNumberMonthlyFeeDirective.ɵfac = function TwoDigitDecimaNumberMonthlyFeeDirective_Factory(t) { return new (t || TwoDigitDecimaNumberMonthlyFeeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
TwoDigitDecimaNumberMonthlyFeeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TwoDigitDecimaNumberMonthlyFeeDirective, selectors: [["", "appTwoDigitDecimaNumberMonthlyFee", ""]], hostBindings: function TwoDigitDecimaNumberMonthlyFeeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TwoDigitDecimaNumberMonthlyFeeDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } } });


/***/ }),

/***/ 9973:
/*!******************************************!*\
  !*** ./src/app/two-decimal.directive.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoDigitDecimaNumberDirective": () => (/* binding */ TwoDigitDecimaNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TwoDigitDecimaNumberDirective {
    constructor(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^\d*\.?\d{0,2}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = [
            'Backspace',
            'Tab',
            'End',
            'Home',
            '-',
            'ArrowLeft',
            'ArrowRight',
            'Del',
            'Delete',
        ];
    }
    onKeyDown(event) {
        console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current = this.el.nativeElement.value;
        const position = this.el.nativeElement.selectionStart;
        const next = [
            current.slice(0, position),
            event.key == 'Decimal' ? '.' : event.key,
            current.slice(position),
        ].join('');
        if (next.length < 3 || next.includes('.')) {
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
        else if (next.length > 4) {
            event.preventDefault();
        }
    }
}
TwoDigitDecimaNumberDirective.ɵfac = function TwoDigitDecimaNumberDirective_Factory(t) { return new (t || TwoDigitDecimaNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
TwoDigitDecimaNumberDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TwoDigitDecimaNumberDirective, selectors: [["", "appTwoDigitDecimaNumber", ""]], hostBindings: function TwoDigitDecimaNumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TwoDigitDecimaNumberDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } } });


/***/ }),

/***/ 4929:
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 4409:
/*!*****************************************************!*\
  !*** ./node_modules/ngx-mask/fesm2015/ngx-mask.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_CONFIG": () => (/* binding */ INITIAL_CONFIG),
/* harmony export */   "MaskApplierService": () => (/* binding */ MaskApplierService),
/* harmony export */   "MaskDirective": () => (/* binding */ MaskDirective),
/* harmony export */   "MaskPipe": () => (/* binding */ MaskPipe),
/* harmony export */   "MaskService": () => (/* binding */ MaskService),
/* harmony export */   "NEW_CONFIG": () => (/* binding */ NEW_CONFIG),
/* harmony export */   "NgxMaskModule": () => (/* binding */ NgxMaskModule),
/* harmony export */   "_configFactory": () => (/* binding */ _configFactory),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "initialConfig": () => (/* binding */ initialConfig),
/* harmony export */   "timeMasks": () => (/* binding */ timeMasks),
/* harmony export */   "withoutValidation": () => (/* binding */ withoutValidation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);





const config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('config');
const NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NEW_CONFIG');
const INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('INITIAL_CONFIG');
const initialConfig = {
  suffix: '',
  prefix: '',
  thousandSeparator: ' ',
  decimalMarker: ['.', ','],
  clearIfNotMatch: false,
  showTemplate: false,
  showMaskTyped: false,
  placeHolderCharacter: '_',
  dropSpecialCharacters: true,
  hiddenInput: undefined,
  shownMaskExpression: '',
  separatorLimit: '',
  allowNegativeNumbers: false,
  validation: true,
  // eslint-disable-next-line @typescript-eslint/quotes
  specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
  leadZeroDateTime: false,
  patterns: {
    '0': {
      pattern: new RegExp('\\d')
    },
    '9': {
      pattern: new RegExp('\\d'),
      optional: true
    },
    X: {
      pattern: new RegExp('\\d'),
      symbol: '*'
    },
    A: {
      pattern: new RegExp('[a-zA-Z0-9]')
    },
    S: {
      pattern: new RegExp('[a-zA-Z]')
    },
    d: {
      pattern: new RegExp('\\d')
    },
    m: {
      pattern: new RegExp('\\d')
    },
    M: {
      pattern: new RegExp('\\d')
    },
    H: {
      pattern: new RegExp('\\d')
    },
    h: {
      pattern: new RegExp('\\d')
    },
    s: {
      pattern: new RegExp('\\d')
    }
  }
};
const timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
const withoutValidation = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'];

class MaskApplierService {
  constructor(_config) {
    this._config = _config;
    this.maskExpression = '';
    this.actualValue = '';
    this.shownMaskExpression = '';

    this._formatWithSeparators = (str, thousandSeparatorChar, decimalChars, precision) => {
      var _a, _b;

      let x = [];
      let decimalChar = '';

      if (Array.isArray(decimalChars)) {
        const regExp = new RegExp(decimalChars.map(v => '[\\^$.|?*+()'.indexOf(v) >= 0 ? `\\${v}` : v).join('|'));
        x = str.split(regExp);
        decimalChar = (_b = (_a = str.match(regExp)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : '';
      } else {
        x = str.split(decimalChars);
        decimalChar = decimalChars;
      }

      const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : '';
      let res = x[0];
      const separatorLimit = this.separatorLimit.replace(/\s/g, '');

      if (separatorLimit && +separatorLimit) {
        if (res[0] === '-') {
          res = `-${res.slice(1, res.length).slice(0, separatorLimit.length)}`;
        } else {
          res = res.slice(0, separatorLimit.length);
        }
      }

      const rgx = /(\d+)(\d{3})/;

      while (thousandSeparatorChar && rgx.test(res)) {
        res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
      }

      if (precision === undefined) {
        return res + decimals;
      } else if (precision === 0) {
        return res;
      }

      return res + decimals.substr(0, precision + 1);
    };

    this.percentage = str => {
      return Number(str) >= 0 && Number(str) <= 100;
    };

    this.getPrecision = maskExpression => {
      const x = maskExpression.split('.');

      if (x.length > 1) {
        return Number(x[x.length - 1]);
      }

      return Infinity;
    };

    this.checkAndRemoveSuffix = inputValue => {
      var _a, _b, _c;

      for (let i = ((_a = this.suffix) === null || _a === void 0 ? void 0 : _a.length) - 1; i >= 0; i--) {
        const substr = this.suffix.substr(i, (_b = this.suffix) === null || _b === void 0 ? void 0 : _b.length);

        if (inputValue.includes(substr) && (i - 1 < 0 || !inputValue.includes(this.suffix.substr(i - 1, (_c = this.suffix) === null || _c === void 0 ? void 0 : _c.length)))) {
          return inputValue.replace(substr, '');
        }
      }

      return inputValue;
    };

    this.checkInputPrecision = (inputValue, precision, decimalMarker) => {
      if (precision < Infinity) {
        // TODO need think about decimalMarker
        if (Array.isArray(decimalMarker)) {
          const marker = decimalMarker.find(dm => dm !== this.thousandSeparator); // eslint-disable-next-line no-param-reassign

          decimalMarker = marker ? marker : decimalMarker[0];
        }

        const precisionRegEx = new RegExp(this._charToRegExpExpression(decimalMarker) + `\\d{${precision}}.*$`);
        const precisionMatch = inputValue.match(precisionRegEx);

        if (precisionMatch && precisionMatch[0].length - 1 > precision) {
          const diff = precisionMatch[0].length - 1 - precision; // eslint-disable-next-line no-param-reassign

          inputValue = inputValue.substring(0, inputValue.length - diff);
        }

        if (precision === 0 && this._compareOrIncludes(inputValue[inputValue.length - 1], decimalMarker, this.thousandSeparator)) {
          // eslint-disable-next-line no-param-reassign
          inputValue = inputValue.substring(0, inputValue.length - 1);
        }
      }

      return inputValue;
    };

    this._shift = new Set();
    this.clearIfNotMatch = this._config.clearIfNotMatch;
    this.dropSpecialCharacters = this._config.dropSpecialCharacters;
    this.maskSpecialCharacters = this._config.specialCharacters;
    this.maskAvailablePatterns = this._config.patterns;
    this.prefix = this._config.prefix;
    this.suffix = this._config.suffix;
    this.thousandSeparator = this._config.thousandSeparator;
    this.decimalMarker = this._config.decimalMarker;
    this.hiddenInput = this._config.hiddenInput;
    this.showMaskTyped = this._config.showMaskTyped;
    this.placeHolderCharacter = this._config.placeHolderCharacter;
    this.validation = this._config.validation;
    this.separatorLimit = this._config.separatorLimit;
    this.allowNegativeNumbers = this._config.allowNegativeNumbers;
    this.leadZeroDateTime = this._config.leadZeroDateTime;
  }

  applyMaskWithPattern(inputValue, maskAndPattern) {
    const [mask, customPattern] = maskAndPattern;
    this.customPattern = customPattern;
    return this.applyMask(inputValue, mask);
  }

  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false, cb = () => {}) {
    var _a, _b;

    if (!maskExpression || typeof inputValue !== 'string') {
      return '';
    }

    let cursor = 0;
    let result = '';
    let multi = false;
    let backspaceShift = false;
    let shift = 1;
    let stepBack = false;

    if (inputValue.slice(0, this.prefix.length) === this.prefix) {
      // eslint-disable-next-line no-param-reassign
      inputValue = inputValue.slice(this.prefix.length, inputValue.length);
    }

    if (!!this.suffix && (inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) > 0) {
      // eslint-disable-next-line no-param-reassign
      inputValue = this.checkAndRemoveSuffix(inputValue);
    }

    const inputArray = inputValue.toString().split('');

    if (maskExpression === 'IP') {
      this.ipError = inputArray.filter(i => i === '.').length < 3 && inputArray.length < 7; // eslint-disable-next-line no-param-reassign

      maskExpression = '099.099.099.099';
    }

    const arr = [];

    for (let i = 0; i < inputValue.length; i++) {
      if ((_a = inputValue[i]) === null || _a === void 0 ? void 0 : _a.match('\\d')) {
        arr.push(inputValue[i]);
      }
    }

    if (maskExpression === 'CPF_CNPJ') {
      this.cpfCnpjError = arr.length !== 11 && arr.length !== 14;

      if (arr.length > 11) {
        // eslint-disable-next-line no-param-reassign
        maskExpression = '00.000.000/0000-00';
      } else {
        // eslint-disable-next-line no-param-reassign
        maskExpression = '000.000.000-00';
      }
    }

    if (maskExpression.startsWith('percent')) {
      if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._stripToDecimal(inputValue);
        const precision = this.getPrecision(maskExpression); // eslint-disable-next-line no-param-reassign

        inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      }

      if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
        const base = inputValue.substring(0, inputValue.indexOf('.') - 1); // eslint-disable-next-line no-param-reassign

        inputValue = `${base}${inputValue.substring(inputValue.indexOf('.'), inputValue.length)}`;
      }

      if (this.percentage(inputValue)) {
        result = inputValue;
      } else {
        result = inputValue.substring(0, inputValue.length - 1);
      }
    } else if (maskExpression.startsWith('separator')) {
      if (inputValue.match('[wа-яА-Я]') || inputValue.match('[ЁёА-я]') || inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\[\]:";<>.?\/]/) || inputValue.match('[^A-Za-z0-9,]')) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._stripToDecimal(inputValue);
      } // eslint-disable-next-line no-param-reassign


      inputValue = inputValue.length > 1 && inputValue[0] === '0' && !this._compareOrIncludes(inputValue[1], this.decimalMarker, this.thousandSeparator) && !backspaced ? inputValue.slice(1, inputValue.length) : inputValue;

      if (backspaced) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._compareOrIncludes(inputValue[inputValue.length - 1], this.decimalMarker, this.thousandSeparator) ? inputValue.slice(0, inputValue.length - 1) : inputValue;
      } // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
      //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK


      const thousandSeparatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);

      let invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(thousandSeparatorCharEscaped, ''); //.replace(decimalMarkerEscaped, '');

      if (Array.isArray(this.decimalMarker)) {
        for (const marker of this.decimalMarker) {
          invalidChars = invalidChars.replace(this._charToRegExpExpression(marker), '');
        }
      } else {
        invalidChars = invalidChars.replace(this._charToRegExpExpression(this.decimalMarker), '');
      }

      const invalidCharRegexp = new RegExp('[' + invalidChars + ']');

      if (inputValue.match(invalidCharRegexp) || inputValue.length === 1 && this._compareOrIncludes(inputValue, this.decimalMarker, this.thousandSeparator)) {
        // eslint-disable-next-line no-param-reassign
        inputValue = inputValue.substring(0, inputValue.length - 1);
      }

      const precision = this.getPrecision(maskExpression); // eslint-disable-next-line no-param-reassign

      inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      const strForSep = inputValue.replace(new RegExp(thousandSeparatorCharEscaped, 'g'), '');
      result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
      const commaShift = result.indexOf(',') - inputValue.indexOf(',');
      const shiftStep = result.length - inputValue.length;

      if (shiftStep > 0 && result[position] !== ',') {
        backspaceShift = true;
        let _shift = 0;

        do {
          this._shift.add(position + _shift);

          _shift++;
        } while (_shift < shiftStep);
      } else if (commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3) || !(result.indexOf('.') >= position && position > 3) && shiftStep <= 0) {
        this._shift.clear();

        backspaceShift = true;
        shift = shiftStep; // eslint-disable-next-line no-param-reassign

        position += shiftStep;

        this._shift.add(position);
      } else {
        this._shift.clear();
      }
    } else {
      for ( // eslint-disable-next-line
      let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
        if (cursor === maskExpression.length) {
          break;
        }

        if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
          result += inputSymbol;
          cursor += 2;
        } else if (maskExpression[cursor + 1] === '*' && multi && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
          result += inputSymbol;
          cursor += 3;
          multi = false;
        } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '*') {
          result += inputSymbol;
          multi = true;
        } else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
          result += inputSymbol;
          cursor += 3;
        } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
          if (maskExpression[cursor] === 'H') {
            if (Number(inputSymbol) > 2) {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          if (maskExpression[cursor] === 'h') {
            if (result === '2' && Number(inputSymbol) > 3) {
              cursor += 1;
              i--;
              continue;
            }
          }

          if (maskExpression[cursor] === 'm') {
            if (Number(inputSymbol) > 5) {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          if (maskExpression[cursor] === 's') {
            if (Number(inputSymbol) > 5) {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          const daysCount = 31;

          if (maskExpression[cursor] === 'd') {
            if (Number(inputSymbol) > 3 && this.leadZeroDateTime || Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          if (maskExpression[cursor] === 'M') {
            const monthsCount = 12; // mask without day

            const withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for input

            const day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') && (inputValue[cursor - 2] === '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/' || inputValue[cursor] === '/' || inputValue[cursor - 3] === '/' && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/' || inputValue[cursor - 1] === '/'); // 10<day<31 && month<12 for input

            const day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] === '/' && (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for paste whole data

            const day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && !inputValue.slice(cursor - 2, cursor).includes('/') && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount; // 10<day<31 && month<12 for paste whole data

            const day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] !== '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;

            if (Number(inputSymbol) > 1 && this.leadZeroDateTime || withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          result += inputSymbol;
          cursor++;
        } else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
          result += maskExpression[cursor];
          cursor++;

          this._shiftStep(maskExpression, cursor, inputArray.length);

          i--;
        } else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 && this.maskAvailablePatterns[maskExpression[cursor]] && ((_b = this.maskAvailablePatterns[maskExpression[cursor]]) === null || _b === void 0 ? void 0 : _b.optional)) {
          if (!!inputArray[cursor] && maskExpression !== '099.099.099.099' && maskExpression !== '000.000.000-00' && maskExpression !== '00.000.000/0000-00') {
            result += inputArray[cursor];
          }

          cursor++;
          i--;
        } else if (this.maskExpression[cursor + 1] === '*' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.maskExpression[cursor + 1] === '?' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
          stepBack = true;
        }
      }
    }

    if (result.length + 1 === maskExpression.length && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
      result += maskExpression[maskExpression.length - 1];
    }

    let newPosition = position + 1;

    while (this._shift.has(newPosition)) {
      shift++;
      newPosition++;
    }

    let actualShift = justPasted ? cursor : this._shift.has(position) ? shift : 0;

    if (stepBack) {
      actualShift--;
    }

    cb(actualShift, backspaceShift);

    if (shift < 0) {
      this._shift.clear();
    }

    let onlySpecial = false;

    if (backspaced) {
      onlySpecial = inputArray.every(char => this.maskSpecialCharacters.includes(char));
    }

    let res = `${this.prefix}${onlySpecial ? '' : result}${this.suffix}`;

    if (result.length === 0) {
      res = `${this.prefix}${result}`;
    }

    return res;
  }

  _findSpecialChar(inputSymbol) {
    return this.maskSpecialCharacters.find(val => val === inputSymbol);
  }

  _checkSymbolMask(inputSymbol, maskSymbol) {
    this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
    return this.maskAvailablePatterns[maskSymbol] && this.maskAvailablePatterns[maskSymbol].pattern && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
  }

  _stripToDecimal(str) {
    return str.split('').filter((i, idx) => {
      return i.match('^-?\\d') || i.match('\\s') || i === '.' || i === ',' || i === '-' && idx === 0 && this.allowNegativeNumbers;
    }).join('');
  }

  _charToRegExpExpression(char) {
    // if (Array.isArray(char)) {
    // 	return char.map((v) => ('[\\^$.|?*+()'.indexOf(v) >= 0 ? `\\${v}` : v)).join('|');
    // }
    if (char) {
      const charsToEscape = '[\\^$.|?*+()';
      return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? `\\${char}` : char;
    }

    return char;
  }

  _shiftStep(maskExpression, cursor, inputLength) {
    const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputLength : cursor;

    this._shift.add(shiftStep + this.prefix.length || 0);
  }

  _compareOrIncludes(value, comparedValue, excludedValue) {
    return Array.isArray(comparedValue) ? comparedValue.filter(v => v !== excludedValue).includes(value) : value === comparedValue;
  }

}

MaskApplierService.ɵfac = function MaskApplierService_Factory(t) {
  return new (t || MaskApplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](config));
};

MaskApplierService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MaskApplierService,
  factory: MaskApplierService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskApplierService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [config]
      }]
    }];
  }, null);
})();

class MaskService extends MaskApplierService {
  constructor(document, _config, _elementRef, _renderer) {
    super(_config);
    this.document = document;
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.maskExpression = '';
    this.isNumberValue = false;
    this.placeHolderCharacter = '_';
    this.maskIsShown = '';
    this.selStart = null;
    this.selEnd = null;
    /**
     * Whether we are currently in writeValue function, in this case when applying the mask we don't want to trigger onChange function,
     * since writeValue should be a one way only process of writing the DOM value based on the Angular model value.
     */

    this.writingValue = false;
    this.maskChanged = false;

    this.onChange = _ => {};
  } // eslint-disable-next-line complexity


  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false, cb = () => {}) {
    if (!maskExpression) {
      return inputValue;
    }

    this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';

    if (this.maskExpression === 'IP' && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || '#');
    }

    if (this.maskExpression === 'CPF_CNPJ' && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || '#');
    }

    if (!inputValue && this.showMaskTyped) {
      this.formControlResult(this.prefix);
      return this.prefix + this.maskIsShown;
    }

    const getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] : '';
    let newInputValue = '';

    if (this.hiddenInput && !this.writingValue) {
      let actualResult = this.actualValue.split(''); // eslint-disable  @typescript-eslint/no-unused-expressions
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions

      inputValue !== '' && actualResult.length ? typeof this.selStart === 'number' && typeof this.selEnd === 'number' ? inputValue.length > actualResult.length ? actualResult.splice(this.selStart, 0, getSymbol) : inputValue.length < actualResult.length ? actualResult.length - inputValue.length === 1 ? actualResult.splice(this.selStart - 1, 1) : actualResult.splice(this.selStart, this.selEnd - this.selStart) : null : null : actualResult = [];

      if (this.showMaskTyped) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this.removeMask(inputValue);
      } // eslint-enable  @typescript-eslint/no-unused-expressions


      newInputValue = this.actualValue.length && actualResult.length <= inputValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
    }

    newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
    const result = super.applyMask(newInputValue, maskExpression, position, justPasted, backspaced, cb);
    this.actualValue = this.getActualValue(result); // handle some separator implications:
    // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot

    if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
      this.decimalMarker = ',';
    } // b) remove decimal marker from list of special characters to mask


    if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
      this.maskSpecialCharacters = this.maskSpecialCharacters.filter(item => !this._compareOrIncludes(item, this.decimalMarker, this.thousandSeparator));
    }

    this.formControlResult(result);

    if (!this.showMaskTyped) {
      if (this.hiddenInput) {
        return result && result.length ? this.hideInput(result, this.maskExpression) : result;
      }

      return result;
    }

    const resLen = result.length;
    const prefNmask = this.prefix + this.maskIsShown;

    if (this.maskExpression.includes('H')) {
      const countSkipedSymbol = this._numberSkipedSymbols(result);

      return result + prefNmask.slice(resLen + countSkipedSymbol);
    } else if (this.maskExpression === 'IP' || this.maskExpression === 'CPF_CNPJ') {
      return result + prefNmask;
    }

    return result + prefNmask.slice(resLen);
  } // get the number of characters that were shifted


  _numberSkipedSymbols(value) {
    const regex = /(^|\D)(\d\D)/g;
    let match = regex.exec(value);
    let countSkipedSymbol = 0;

    while (match != null) {
      countSkipedSymbol += 1;
      match = regex.exec(value);
    }

    return countSkipedSymbol;
  }

  applyValueChanges(position = 0, justPasted, backspaced, cb = () => {}) {
    const formElement = this._elementRef.nativeElement;
    formElement.value = this.applyMask(formElement.value, this.maskExpression, position, justPasted, backspaced, cb);

    if (formElement === this.document.activeElement) {
      return;
    }

    this.clearIfNotMatchFn();
  }

  hideInput(inputValue, maskExpression) {
    return inputValue.split('').map((curr, index) => {
      var _a, _b;

      if (this.maskAvailablePatterns && this.maskAvailablePatterns[maskExpression[index]] && ((_a = this.maskAvailablePatterns[maskExpression[index]]) === null || _a === void 0 ? void 0 : _a.symbol)) {
        return (_b = this.maskAvailablePatterns[maskExpression[index]]) === null || _b === void 0 ? void 0 : _b.symbol;
      }

      return curr;
    }).join('');
  } // this function is not necessary, it checks result against maskExpression


  getActualValue(res) {
    const compare = res.split('').filter((symbol, i) => this._checkSymbolMask(symbol, this.maskExpression[i]) || this.maskSpecialCharacters.includes(this.maskExpression[i]) && symbol === this.maskExpression[i]);

    if (compare.join('') === res) {
      return compare.join('');
    }

    return res;
  }

  shiftTypedSymbols(inputValue) {
    let symbolToReplace = '';
    const newInputValue = inputValue && inputValue.split('').map((currSymbol, index) => {
      if (this.maskSpecialCharacters.includes(inputValue[index + 1]) && inputValue[index + 1] !== this.maskExpression[index + 1]) {
        symbolToReplace = currSymbol;
        return inputValue[index + 1];
      }

      if (symbolToReplace.length) {
        const replaceSymbol = symbolToReplace;
        symbolToReplace = '';
        return replaceSymbol;
      }

      return currSymbol;
    }) || [];
    return newInputValue.join('');
  }

  showMaskInInput(inputVal) {
    if (this.showMaskTyped && !!this.shownMaskExpression) {
      if (this.maskExpression.length !== this.shownMaskExpression.length) {
        throw new Error('Mask expression must match mask placeholder length');
      } else {
        return this.shownMaskExpression;
      }
    } else if (this.showMaskTyped) {
      if (inputVal) {
        if (this.maskExpression === 'IP') {
          return this._checkForIp(inputVal);
        }

        if (this.maskExpression === 'CPF_CNPJ') {
          return this._checkForCpfCnpj(inputVal);
        }
      }

      return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
    }

    return '';
  }

  clearIfNotMatchFn() {
    const formElement = this._elementRef.nativeElement;

    if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== formElement.value.replace(/_/g, '').length) {
      this.formElementProperty = ['value', ''];
      this.applyMask(formElement.value, this.maskExpression);
    }
  }

  set formElementProperty([name, value]) {
    Promise.resolve().then(() => this._renderer.setProperty(this._elementRef.nativeElement, name, value));
  }

  checkSpecialCharAmount(mask) {
    const chars = mask.split('').filter(item => this._findSpecialChar(item));
    return chars.length;
  }

  removeMask(inputValue) {
    return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.maskSpecialCharacters.concat('_').concat(this.placeHolderCharacter));
  }

  _checkForIp(inputVal) {
    var _a;

    if (inputVal === '#') {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }

    const arr = [];

    for (let i = 0; i < inputVal.length; i++) {
      if ((_a = inputVal[i]) === null || _a === void 0 ? void 0 : _a.match('\\d')) {
        arr.push(inputVal[i]);
      }
    }

    if (arr.length <= 3) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }

    if (arr.length > 3 && arr.length <= 6) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }

    if (arr.length > 6 && arr.length <= 9) {
      return this.placeHolderCharacter;
    }

    if (arr.length > 9 && arr.length <= 12) {
      return '';
    }

    return '';
  }

  _checkForCpfCnpj(inputVal) {
    var _a;

    const cpf = `${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    const cnpj = `${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;

    if (inputVal === '#') {
      return cpf;
    }

    const arr = [];

    for (let i = 0; i < inputVal.length; i++) {
      if ((_a = inputVal[i]) === null || _a === void 0 ? void 0 : _a.match('\\d')) {
        arr.push(inputVal[i]);
      }
    }

    if (arr.length <= 3) {
      return cpf.slice(arr.length, cpf.length);
    }

    if (arr.length > 3 && arr.length <= 6) {
      return cpf.slice(arr.length + 1, cpf.length);
    }

    if (arr.length > 6 && arr.length <= 9) {
      return cpf.slice(arr.length + 2, cpf.length);
    }

    if (arr.length > 9 && arr.length < 11) {
      return cpf.slice(arr.length + 3, cpf.length);
    }

    if (arr.length === 11) {
      return '';
    }

    if (arr.length === 12) {
      if (inputVal.length === 17) {
        return cnpj.slice(16, cnpj.length);
      }

      return cnpj.slice(15, cnpj.length);
    }

    if (arr.length > 12 && arr.length <= 14) {
      return cnpj.slice(arr.length + 4, cnpj.length);
    }

    return '';
  }
  /**
   * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
   * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
   * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
   * model value too. Therefore, we don't trigger onChange in this scenario.
   * @param inputValue the current form input value
   */


  formControlResult(inputValue) {
    if (this.writingValue || this.maskChanged) {
      this.maskChanged = false;
      return;
    }

    if (Array.isArray(this.dropSpecialCharacters)) {
      this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters)));
    } else if (this.dropSpecialCharacters) {
      this.onChange(this._toNumber(this._checkSymbols(inputValue)));
    } else {
      this.onChange(this._removeSuffix(inputValue));
    }
  }

  _toNumber(value) {
    if (!this.isNumberValue || value === '') {
      return value;
    }

    const num = Number(value);
    return Number.isNaN(num) ? value : num;
  }

  _removeMask(value, specialCharactersForRemove) {
    return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
  }

  _removePrefix(value) {
    if (!this.prefix) {
      return value;
    }

    return value ? value.replace(this.prefix, '') : value;
  }

  _removeSuffix(value) {
    if (!this.suffix) {
      return value;
    }

    return value ? value.replace(this.suffix, '') : value;
  }

  _retrieveSeparatorValue(result) {
    return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
  }

  _regExpForRemove(specialCharactersForRemove) {
    return new RegExp(specialCharactersForRemove.map(item => `\\${item}`).join('|'), 'gi');
  }

  _checkSymbols(result) {
    if (result === '') {
      return result;
    }

    const separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);

    let separatorValue = this._retrieveSeparatorValue(result);

    if (this.decimalMarker !== '.' && !Array.isArray(this.decimalMarker)) {
      separatorValue = separatorValue.replace(this.decimalMarker, '.');
    }

    if (!this.isNumberValue) {
      return separatorValue;
    }

    if (separatorPrecision) {
      if (result === this.decimalMarker) {
        return null;
      }

      return this._checkPrecision(this.maskExpression, separatorValue);
    } else {
      return Number(separatorValue);
    }
  } // TODO should think about helpers or separting decimal precision to own property


  _retrieveSeparatorPrecision(maskExpretion) {
    const matcher = maskExpretion.match(new RegExp(`^separator\\.([^d]*)`));
    return matcher ? Number(matcher[1]) : null;
  }

  _checkPrecision(separatorExpression, separatorValue) {
    if (separatorExpression.indexOf('2') > 0) {
      return Number(separatorValue).toFixed(2);
    }

    return Number(separatorValue);
  }

}

MaskService.ɵfac = function MaskService_Factory(t) {
  return new (t || MaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](config), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

MaskService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MaskService,
  factory: MaskService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [config]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, null);
})();

class MaskDirective {
  constructor(document, _maskService, _config) {
    this.document = document;
    this._maskService = _maskService;
    this._config = _config; // eslint-disable-next-line @angular-eslint/no-input-rename

    this.maskExpression = '';
    this.specialCharacters = [];
    this.patterns = {};
    this.prefix = '';
    this.suffix = '';
    this.thousandSeparator = ' ';
    this.decimalMarker = '.';
    this.dropSpecialCharacters = null;
    this.hiddenInput = null;
    this.showMaskTyped = null;
    this.placeHolderCharacter = null;
    this.shownMaskExpression = null;
    this.showTemplate = null;
    this.clearIfNotMatch = null;
    this.validation = null;
    this.separatorLimit = null;
    this.allowNegativeNumbers = null;
    this.leadZeroDateTime = null;
    this._maskValue = '';
    this._position = null;
    this._maskExpressionArray = [];
    this._justPasted = false;

    this.onChange = _ => {};

    this.onTouch = () => {};
  }

  ngOnChanges(changes) {
    const {
      maskExpression,
      specialCharacters,
      patterns,
      prefix,
      suffix,
      thousandSeparator,
      decimalMarker,
      dropSpecialCharacters,
      hiddenInput,
      showMaskTyped,
      placeHolderCharacter,
      shownMaskExpression,
      showTemplate,
      clearIfNotMatch,
      validation,
      separatorLimit,
      allowNegativeNumbers,
      leadZeroDateTime
    } = changes;

    if (maskExpression) {
      if (maskExpression.currentValue !== maskExpression.previousValue && !maskExpression.firstChange) {
        this._maskService.maskChanged = true;
      }

      if (maskExpression.currentValue && maskExpression.currentValue.split('||').length > 1) {
        this._maskExpressionArray = maskExpression.currentValue.split('||').sort((a, b) => {
          return a.length - b.length;
        });
        this._maskValue = this._maskExpressionArray[0];
        this.maskExpression = this._maskExpressionArray[0];
        this._maskService.maskExpression = this._maskExpressionArray[0];
      } else {
        this._maskExpressionArray = [];
        this._maskValue = maskExpression.currentValue || '';
        this._maskService.maskExpression = this._maskValue;
      }
    }

    if (specialCharacters) {
      if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
        return;
      } else {
        this._maskService.maskSpecialCharacters = specialCharacters.currentValue || [];
      }
    } // Only overwrite the mask available patterns if a pattern has actually been passed in


    if (patterns && patterns.currentValue) {
      this._maskService.maskAvailablePatterns = patterns.currentValue;
    }

    if (prefix) {
      this._maskService.prefix = prefix.currentValue;
    }

    if (suffix) {
      this._maskService.suffix = suffix.currentValue;
    }

    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator.currentValue;
    }

    if (decimalMarker) {
      this._maskService.decimalMarker = decimalMarker.currentValue;
    }

    if (dropSpecialCharacters) {
      this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
    }

    if (hiddenInput) {
      this._maskService.hiddenInput = hiddenInput.currentValue;
    }

    if (showMaskTyped) {
      this._maskService.showMaskTyped = showMaskTyped.currentValue;
    }

    if (placeHolderCharacter) {
      this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
    }

    if (shownMaskExpression) {
      this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
    }

    if (showTemplate) {
      this._maskService.showTemplate = showTemplate.currentValue;
    }

    if (clearIfNotMatch) {
      this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
    }

    if (validation) {
      this._maskService.validation = validation.currentValue;
    }

    if (separatorLimit) {
      this._maskService.separatorLimit = separatorLimit.currentValue;
    }

    if (allowNegativeNumbers) {
      this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;

      if (this._maskService.allowNegativeNumbers) {
        this._maskService.maskSpecialCharacters = this._maskService.maskSpecialCharacters.filter(c => c !== '-');
      }
    }

    if (leadZeroDateTime) {
      this._maskService.leadZeroDateTime = leadZeroDateTime.currentValue;
    }

    this._applyMask();
  } // eslint-disable-next-line complexity


  validate({
    value
  }) {
    if (!this._maskService.validation || !this._maskValue) {
      return null;
    }

    if (this._maskService.ipError) {
      return this._createValidationError(value);
    }

    if (this._maskService.cpfCnpjError) {
      return this._createValidationError(value);
    }

    if (this._maskValue.startsWith('separator')) {
      return null;
    }

    if (withoutValidation.includes(this._maskValue)) {
      return null;
    }

    if (this._maskService.clearIfNotMatch) {
      return null;
    }

    if (timeMasks.includes(this._maskValue)) {
      return this._validateTime(value);
    }

    if (value && value.toString().length >= 1) {
      let counterOfOpt = 0;

      for (const key in this._maskService.maskAvailablePatterns) {
        if (this._maskService.maskAvailablePatterns[key].optional) {
          if (this._maskValue.indexOf(key) !== this._maskValue.lastIndexOf(key)) {
            const opt = this._maskValue.split('').filter(i => i === key).join('');

            counterOfOpt += opt.length;
          } else if (this._maskValue.indexOf(key) !== -1) {
            counterOfOpt++;
          }

          if (this._maskValue.indexOf(key) !== -1 && value.toString().length >= this._maskValue.indexOf(key)) {
            return null;
          }

          if (counterOfOpt === this._maskValue.length) {
            return null;
          }
        }
      }

      if (this._maskValue.indexOf('{') === 1 && value.toString().length === this._maskValue.length + Number(this._maskValue.split('{')[1].split('}')[0]) - 4) {
        return null;
      }

      if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
        return null;
      } else if (this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*') || this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?') || this._maskValue.indexOf('{') === 1) {
        return this._createValidationError(value);
      }

      if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
        const length = this._maskService.dropSpecialCharacters ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt : this._maskValue.length - counterOfOpt;

        if (value.toString().length < length) {
          return this._createValidationError(value);
        }
      }
    }

    return null;
  }

  onPaste() {
    this._justPasted = true;
  }

  onModelChange(value) {
    // on form reset we need to update the actualValue
    if (!value && this._maskService.actualValue) {
      this._maskService.actualValue = this._maskService.getActualValue('');
    }
  }

  onInput(e) {
    const el = e.target;
    this._inputValue = el.value;

    this._setMask();

    if (!this._maskValue) {
      this.onChange(el.value);
      return;
    }

    const position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
    let caretShift = 0;
    let backspaceShift = false;

    this._maskService.applyValueChanges(position, this._justPasted, this._code === 'Backspace' || this._code === 'Delete', (shift, _backspaceShift) => {
      this._justPasted = false;
      caretShift = shift;
      backspaceShift = _backspaceShift;
    }); // only set the selection if the element is active


    if (this.document.activeElement !== el) {
      return;
    }

    this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
    let positionToApply = this._position ? this._inputValue.length + position + caretShift : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);

    if (positionToApply > this._getActualInputLength()) {
      positionToApply = this._getActualInputLength();
    }

    if (positionToApply < 0) {
      positionToApply = 0;
    }

    el.setSelectionRange(positionToApply, positionToApply);
    this._position = null;
  }

  onBlur() {
    if (this._maskValue) {
      this._maskService.clearIfNotMatchFn();
    }

    this.onTouch();
  }

  onClick(e) {
    if (!this._maskValue) {
      return;
    }

    const el = e.target;
    const posStart = 0;
    const posEnd = 0;

    if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length && // eslint-disable-next-line
    e.keyCode !== 38) {
      if (this._maskService.showMaskTyped) {
        // We are showing the mask in the input
        this._maskService.maskIsShown = this._maskService.showMaskInInput();

        if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
          // the input ONLY contains the mask, so position the cursor at the start
          el.focus();
          el.setSelectionRange(posStart, posEnd);
        } else {
          // the input contains some characters already
          if (el.selectionStart > this._maskService.actualValue.length) {
            // if the user clicked beyond our value's length, position the cursor at the end of our value
            el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
          }
        }
      }
    }

    const nextValue = !el.value || el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value;
    /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */

    if (el.value !== nextValue) {
      el.value = nextValue;
    }
    /** fix of cursor position with prefix when mouse click occur */


    if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
      el.selectionStart = this._maskService.prefix.length;
      return;
    }
    /** select only inserted text */


    if (el.selectionEnd > this._getActualInputLength()) {
      el.selectionEnd = this._getActualInputLength();
    }
  } // eslint-disable-next-line complexity


  onKeyDown(e) {
    var _a;

    if (!this._maskValue) {
      return;
    }

    this._code = e.code ? e.code : e.key;
    const el = e.target;
    this._inputValue = el.value;

    this._setMask();

    if (e.keyCode === 38) {
      e.preventDefault();
    }

    if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
      if (e.keyCode === 8 && el.value.length === 0) {
        el.selectionStart = el.selectionEnd;
      }

      if (e.keyCode === 8 && el.selectionStart !== 0) {
        // If specialChars is false, (shouldn't ever happen) then set to the defaults
        this.specialCharacters = ((_a = this.specialCharacters) === null || _a === void 0 ? void 0 : _a.length) ? this.specialCharacters : this._config.specialCharacters;

        if (this.prefix.length > 1 && el.selectionStart <= this.prefix.length) {
          el.setSelectionRange(this.prefix.length, el.selectionEnd);
        } else {
          if (this._inputValue.length !== el.selectionStart && el.selectionStart !== 1) {
            while (this.specialCharacters.includes(this._inputValue[el.selectionStart - 1].toString()) && (this.prefix.length >= 1 && el.selectionStart > this.prefix.length || this.prefix.length === 0)) {
              el.setSelectionRange(el.selectionStart - 1, el.selectionEnd);
            }
          }
        }
      }

      this.checkSelectionOnDeletion(el);

      if (this._maskService.prefix.length && el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
        e.preventDefault();
      }

      const cursorStart = el.selectionStart;

      if (e.keyCode === 8 && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
        this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;

        this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
      }
    }

    if (!!this.suffix && this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
      el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
    } else if (e.keyCode === 65 && e.ctrlKey || e.keyCode === 65 && e.metaKey // Cmd + A (Mac)
    ) {
      el.setSelectionRange(0, this._getActualInputLength());
      e.preventDefault();
    }

    this._maskService.selStart = el.selectionStart;
    this._maskService.selEnd = el.selectionEnd;
  }
  /** It writes the value in the input */


  writeValue(inputValue) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (typeof inputValue === 'object' && inputValue !== null && 'value' in inputValue) {
        if ('disable' in inputValue) {
          this.setDisabledState(Boolean(inputValue.disable));
        } // eslint-disable-next-line no-param-reassign


        inputValue = inputValue.value;
      }

      if (typeof inputValue === 'number') {
        // eslint-disable-next-line no-param-reassign
        inputValue = String(inputValue);

        if (!Array.isArray(this.decimalMarker)) {
          // eslint-disable-next-line no-param-reassign
          inputValue = this.decimalMarker !== '.' ? inputValue.replace('.', this.decimalMarker) : inputValue;
        }

        this._maskService.isNumberValue = true;
      }

      if (typeof inputValue !== 'string') {
        // eslint-disable-next-line no-param-reassign
        inputValue = '';
      }

      this._inputValue = inputValue;

      this._setMask();

      if (inputValue && this._maskService.maskExpression || this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)) {
        // Let the service we know we are writing value so that triggering onChange function wont happen during applyMask
        this._maskService.writingValue = true;
        this._maskService.formElementProperty = ['value', this._maskService.applyMask(inputValue, this._maskService.maskExpression)]; // Let the service know we've finished writing value

        this._maskService.writingValue = false;
      } else {
        this._maskService.formElementProperty = ['value', inputValue];
      }

      this._inputValue = inputValue;
    });
  }

  registerOnChange(fn) {
    this.onChange = fn;
    this._maskService.onChange = this.onChange;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  checkSelectionOnDeletion(el) {
    el.selectionStart = Math.min(Math.max(this.prefix.length, el.selectionStart), this._inputValue.length - this.suffix.length);
    el.selectionEnd = Math.min(Math.max(this.prefix.length, el.selectionEnd), this._inputValue.length - this.suffix.length);
  }
  /** It disables the input element */


  setDisabledState(isDisabled) {
    this._maskService.formElementProperty = ['disabled', isDisabled];
  }

  _repeatPatternSymbols(maskExp) {
    return maskExp.match(/{[0-9]+}/) && maskExp.split('').reduce((accum, currval, index) => {
      this._start = currval === '{' ? index : this._start;

      if (currval !== '}') {
        return this._maskService._findSpecialChar(currval) ? accum + currval : accum;
      }

      this._end = index;
      const repeatNumber = Number(maskExp.slice(this._start + 1, this._end));
      const replaceWith = new Array(repeatNumber + 1).join(maskExp[this._start - 1]);
      return accum + replaceWith;
    }, '') || maskExp;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  _applyMask() {
    this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
    this._maskService.formElementProperty = ['value', this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
  }

  _validateTime(value) {
    const rowMaskLen = this._maskValue.split('').filter(s => s !== ':').length;

    if (!value) {
      return null; // Don't validate empty values to allow for optional form control
    }

    if (+value[value.length - 1] === 0 && value.length < rowMaskLen || value.length <= rowMaskLen - 2) {
      return this._createValidationError(value);
    }

    return null;
  }

  _getActualInputLength() {
    return this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length;
  }

  _createValidationError(actualValue) {
    return {
      mask: {
        requiredMask: this._maskValue,
        actualValue
      }
    };
  }

  _setMask() {
    if (this._maskExpressionArray.length > 0) {
      this._maskExpressionArray.some(mask => {
        var _a, _b;

        const test = ((_a = this._maskService.removeMask(this._inputValue)) === null || _a === void 0 ? void 0 : _a.length) <= ((_b = this._maskService.removeMask(mask)) === null || _b === void 0 ? void 0 : _b.length);

        if (this._inputValue && test) {
          this._maskValue = mask;
          this.maskExpression = mask;
          this._maskService.maskExpression = mask;
          return test;
        } else {
          this._maskValue = this._maskExpressionArray[this._maskExpressionArray.length - 1];
          this.maskExpression = this._maskExpressionArray[this._maskExpressionArray.length - 1];
          this._maskService.maskExpression = this._maskExpressionArray[this._maskExpressionArray.length - 1];
        }
      });
    }
  }

}

MaskDirective.ɵfac = function MaskDirective_Factory(t) {
  return new (t || MaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MaskService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](config));
};

MaskDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MaskDirective,
  selectors: [["input", "mask", ""], ["textarea", "mask", ""]],
  hostBindings: function MaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function MaskDirective_paste_HostBindingHandler() {
        return ctx.onPaste();
      })("ngModelChange", function MaskDirective_ngModelChange_HostBindingHandler($event) {
        return ctx.onModelChange($event);
      })("input", function MaskDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("blur", function MaskDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function MaskDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown", function MaskDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    maskExpression: ["mask", "maskExpression"],
    specialCharacters: "specialCharacters",
    patterns: "patterns",
    prefix: "prefix",
    suffix: "suffix",
    thousandSeparator: "thousandSeparator",
    decimalMarker: "decimalMarker",
    dropSpecialCharacters: "dropSpecialCharacters",
    hiddenInput: "hiddenInput",
    showMaskTyped: "showMaskTyped",
    placeHolderCharacter: "placeHolderCharacter",
    shownMaskExpression: "shownMaskExpression",
    showTemplate: "showTemplate",
    clearIfNotMatch: "clearIfNotMatch",
    validation: "validation",
    separatorLimit: "separatorLimit",
    allowNegativeNumbers: "allowNegativeNumbers",
    leadZeroDateTime: "leadZeroDateTime"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
    multi: true
  }, MaskService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[mask], textarea[mask]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
        multi: true
      }, MaskService]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: MaskService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [config]
      }]
    }];
  }, {
    maskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mask']
    }],
    specialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    patterns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    thousandSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    decimalMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropSpecialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hiddenInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showMaskTyped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeHolderCharacter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shownMaskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearIfNotMatch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    validation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    separatorLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowNegativeNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    leadZeroDateTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['paste']
    }],
    onModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['ngModelChange', ['$event']]
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();

class MaskPipe {
  constructor(_maskService) {
    this._maskService = _maskService;
  }

  transform(value, mask, thousandSeparator = null) {
    if (!value && typeof value !== 'number') {
      return '';
    }

    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator;
    }

    if (typeof mask === 'string') {
      return this._maskService.applyMask(`${value}`, mask);
    }

    return this._maskService.applyMaskWithPattern(`${value}`, mask);
  }

}

MaskPipe.ɵfac = function MaskPipe_Factory(t) {
  return new (t || MaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MaskApplierService, 16));
};

MaskPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "mask",
  type: MaskPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'mask',
      pure: true
    }]
  }], function () {
    return [{
      type: MaskApplierService
    }];
  }, null);
})();
/**
 * @internal
 */


function _configFactory(initConfig, configValue) {
  return configValue instanceof Function ? Object.assign(Object.assign({}, initConfig), configValue()) : Object.assign(Object.assign({}, initConfig), configValue);
}

class NgxMaskModule {
  static forRoot(configValue) {
    return {
      ngModule: NgxMaskModule,
      providers: [{
        provide: NEW_CONFIG,
        useValue: configValue
      }, {
        provide: INITIAL_CONFIG,
        useValue: initialConfig
      }, {
        provide: config,
        useFactory: _configFactory,
        deps: [INITIAL_CONFIG, NEW_CONFIG]
      }, MaskApplierService]
    };
  }

  static forChild() {
    return {
      ngModule: NgxMaskModule
    };
  }

}

NgxMaskModule.ɵfac = function NgxMaskModule_Factory(t) {
  return new (t || NgxMaskModule)();
};

NgxMaskModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxMaskModule
});
NgxMaskModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMaskModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MaskDirective, MaskPipe],
      declarations: [MaskDirective, MaskPipe]
    }]
  }], null, null);
})();

const commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

(function () {
  if (!commonjsGlobal.KeyboardEvent) {
    commonjsGlobal.KeyboardEvent = function (_eventType, _init) {};
  }
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_Private_private_module_ts.11af5eb5a9ca252a.js.map