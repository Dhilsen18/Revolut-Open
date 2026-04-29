import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TransactionEntity } from '../domain/transaction.entity';
import { TransactionAssembler } from './transaction-assembler';
import { TransactionsRequest } from './transactions-request';
import { TransactionsResponse } from './transactions-response';

/**
 * @summary Retrieves transactions from endpoint with local fallback.
 * @author Dilsen
 */
@Injectable({ providedIn: 'root' })
export class TransactionsApi {
  private readonly http = inject(HttpClient);
  private readonly assembler = inject(TransactionAssembler);

  /**
   * @summary Gets transactions from remote endpoint or local mock.
   * @param request Optional query data for API requests.
   */
  public getTransactions(request?: TransactionsRequest): Observable<TransactionEntity[]> {
    const endpoint = `${environment.apiBaseUrl}/transactions`;
    const params = request?.accountId ? { accountId: request.accountId } : undefined;

    return this.http.get<TransactionsResponse>(endpoint, { params }).pipe(
      map((response) => response.transactions.map((item) => this.assembler.toEntity(item))),
      catchError(() => this.getFallbackTransactions()),
    );
  }

  private getFallbackTransactions(): Observable<TransactionEntity[]> {
    return this.http.get<TransactionsResponse>(environment.fallbackTransactionsPath).pipe(
      map((response) => response.transactions.map((item) => this.assembler.toEntity(item))),
      catchError(() => of([])),
    );
  }
}
