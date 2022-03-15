import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/alert/alert.service';
import { ClientServiceService } from 'src/app/core/client-service/client-service.service';
import { addClient } from 'src/app/Interfaces/Request/addClient.interface';
import { QuestionDialogComponent } from '../../../Dialogs/question-dialog/question-dialog.component';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  clientForm = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    registrationDate: [new Date()],
    cancelationDate: [new Date()],
    serviceCharge: ['', [Validators.required]],
    chargeAccount: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    depositAccount: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    monthlyFee: [''],
    email: ['', [Validators.required, Validators.email]],
    deliveryTime: [''],
    active: [false],
    sendFile: [false],
    sendMonthlyFeeFile: [false],
    transactionsLimit: [false],
  });
  url: string = '';
  idClient: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
    private clientService: ClientServiceService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.activatedRoute.url.subscribe((params) => {
      this.url = params[0].path;
    });

    if (this.url === 'searchClient') {
      this.activatedRoute.params.subscribe((params) => {
        this.idClient = params['id'];
      });

      this.getClient(this.idClient);
    }

    this.clientForm.controls['id'].disable();
    console.log(this.url);
  }

  ngOnInit(): void {}

  formatData(data: any): addClient {
    console.log(new Date(data.cancelationDate));
    console.log(data);
    const req = {
      ...data,
      status: '1',
      id: this.idClient === '' ? null : Number(this.idClient),
      serviceCharge: Number(data.serviceCharge),
      sendFile: data.sendFile === false ? '0' : '1',
      sendMonthlyFeeFile: data.sendMonthlyFeeFile === false ? 0 : 1,
      active: data.active === false ? 0 : 1,
      transactionsLimit: data.transactionsLimit === false ? '0' : '1',
      monthlyFee: Number(data.monthlyFee),
      registrationDate: this.datePipe.transform(
        data.registrationDate,
        'yyyy-MM-dd'
      ),
      cancelationDate: this.datePipe.transform(
        data.cancelationDate,
        'yyyy-MM-dd'
      ),
    };
    return req;
  }

  async guardar() {
    if (this.clientForm.invalid) {
      return;
    }

    const response = await this.clientService.addClient(
      this.formatData(this.clientForm.value)
    );

    if (response?.responseCode === 1 || response === undefined) {
      return;
    }

    this.alertService.succes(response.description);
  }

  cancel() {
    this.url === 'searchClient'
      ? this.router.navigate(['./consola/searchClient'])
      : this.router.navigate(['./home']);
  }

  FormatDateForm(date: string) {
    console.log(date);
    if (date !== null && date !== '') {
      const arrDate = date.split('/');
      return new Date(`${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`);
    }

    return '';
  }

  async getClient(id: string) {
    const response = await this.clientService.searchClient(id);

    this.clientForm.reset({
      ...response?.result,
      cancelationDate: this.FormatDateForm(
        response?.result.cancelationDate || ''
      ),
      registrationDate: this.FormatDateForm(
        response?.result.registrationDate || ''
      ),
      sendFile: response?.result.sendFile === '1' ? true : false,
      transactionsLimit:
        response?.result.transactionsLimit === '1' ? true : false,
      active: response?.result.active === 1 ? true : false,
    });

    if (response?.result.status === '2') this.clientForm.disable();
  }

  async modificar() {
    if (this.clientForm.invalid) {
      return;
    }

    const response = await this.clientService.modifyClient(
      this.formatData(this.clientForm.value)
    );

    if (response?.responseCode === 1 || response === undefined) {
      return;
    }

    this.alertService.succes(response.description);
  }

  delete() {
    const sendDialog = this.dialog.open(QuestionDialogComponent, {
      autoFocus: false,
      data: {
        question: '¿Desea eliminar este Cliente?',
      },
    });
    sendDialog
      .afterClosed()
      .toPromise()
      .then(async (res) => {
        if (res === true) {
          const response = await this.clientService.deleteClient(this.idClient);
          if (response?.responseCode === 1 || response === undefined) {
            return;
          }

          this.alertService.succes(response.description);
          this.getClient(this.idClient);
        }
      });
  }
}
