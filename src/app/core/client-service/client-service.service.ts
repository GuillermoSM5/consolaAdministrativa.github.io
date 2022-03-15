import { Injectable } from '@angular/core';
import { addClient } from 'src/app/Interfaces/Request/addClient.interface';
import { BaseServiceService } from '../base-service/base-service.service';
import { getClientsResponse } from '../../Interfaces/Response/getClientsResponse.interfase';
import { ThrowStmt } from '@angular/compiler';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  constructor(
    private baseService: BaseServiceService,
    private storageService: StorageService
  ) {}

  addClient(request: addClient) {
    return this.baseService.post<{}, addClient>('/client/add-client', request);
  }

  searchClients() {
    return this.baseService.get<getClientsResponse[]>('/client/get-all');
  }

  searchClient(id: string) {
    return this.baseService.get<getClientsResponse>(`/client/get/${id}`);
  }

  modifyClient(request: addClient) {
    const session = this.storageService.getSession();
    return this.baseService.post<{}, addClient>(
      `/client/modify-client/${session?.userId}`,
      request
    );
  }

  deleteClient(id: string) {
    const session = this.storageService.getSession();
    return this.baseService.post<{}, {}>(
      `/client/delete-client/${id}/${session?.userId}`,
      {}
    );
  }
}
