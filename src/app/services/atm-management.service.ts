import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ATMManagement } from '../shared/models/atm-management.model';

@Injectable({
  providedIn: 'root',
})
export class AtmManagementService {
  readonly baseUrl = 'https://611e81179771bf001785c4e5.mockapi.io';

  constructor(private http: HttpClient) {}

  getAtms(search: string = "", limit: number = 10, page: number = 1): Observable<ATMManagement[]> {
    return this.http.get<ATMManagement[]>(`${this.baseUrl}/atm-management?search=${search}&limit=${limit}&page=${page}`);
  }
}
