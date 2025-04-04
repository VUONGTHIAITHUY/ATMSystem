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

  getAtms(
    search: string = '',
    limit: number = 10,
    page: number = 1
  ): Observable<ATMManagement[]> {
    return this.http.get<ATMManagement[]>(
      `${this.baseUrl}/atm-management?search=${search}&limit=${limit}&page=${page}`
    );
  }

  createAtm(body: ATMManagement): Observable<ATMManagement> {
    return this.http.post<ATMManagement>(
      `${this.baseUrl}/atm-management`,
      body
    );
  }

  updateAtm(id: number, body: ATMManagement): Observable<ATMManagement> {
    return this.http.put<ATMManagement>(
      `${this.baseUrl}/atm-management/${id}`,
      body
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/atm-management/${id}`);
  }

  getATMById(id: number): Observable<ATMManagement> {
    return this.http.get<ATMManagement>(`${this.baseUrl}/atm-management/${id}`);
  }
}
