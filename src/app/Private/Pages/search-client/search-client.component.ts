import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientServiceService } from 'src/app/core/client-service/client-service.service';
import { getClientsResponse } from '../../../Interfaces/Response/getClientsResponse.interfase';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss'],
})
export class SearchClientComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  data = [
    {
      id: 'id',
      name: 'Id. Cliente',
    },
    {
      id: 'name',
      name: 'Nombre',
    },
    {
      id: 'registrationDate',
      name: 'Fecha registro',
    },
    {
      id: 'cancelationDate',
      name: 'Fecha cancelación',
    },
    {
      id: 'serviceCharge',
      name: 'Cargo por servicio',
    },
    {
      id: 'depositAccount',
      name: 'Cuenta Deposito',
    },
    {
      id: 'chargeAccount',
      name: 'Cuenta Cargo',
    },

    {
      id: 'sendFile',
      name: 'Conciliación',
    },
    {
      id: 'sendMonthlyFeeFile',
      name: 'Renta mensual',
    },
    {
      id: 'active',
      name: 'Activo',
    },
  ];
  clients: getClientsResponse[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'registrationDate',
    'cancelationDate',
    'serviceCharge',
    'depositAccount',
    'chargeAccount',
    'sendFile',
    'sendMonthlyFeeFile',
    'active',
  ];

  dataSource: any;

  searchForm = this.fb.group({
    idSearch: [''],
  });

  constructor(
    private fb: FormBuilder,
    private clientService: ClientServiceService
  ) {}

  FormatDateForm(date: string) {
    console.log(date);
    if (date !== null && date !== '') {
      const arrDate = date.split('-');
      return `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
    }

    return '';
  }

  getInformation(dato: any, name: string): string {
    console.log(name);
    if (
      name === 'Conciliación' ||
      name === 'Renta mensual' ||
      name === 'Activo'
    ) {
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

  async searchCliente() {
    if (!this.searchForm.value.idSearch) {
      const response = await this.clientService.searchClients();
      if (response?.responseCode === 0) {
        this.clients = response.result;
        this.dataSource = new MatTableDataSource<getClientsResponse>(
          this.clients
        );
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        });
      }
    } else {
      const respose = await this.clientService.searchClient(
        this.searchForm.value.idSearch
      );
      if (respose?.responseCode === 0) {
        this.clients = [respose.result];
        this.dataSource = new MatTableDataSource<getClientsResponse>(
          this.clients
        );
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        });
      }
    }
  }
}
