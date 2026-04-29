import { Injectable, computed, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { TransactionEntity } from '../domain/transaction.entity';
import { TransactionsApi } from '../infrastructure/transactions-api';

/**
 * @summary Manages transaction state with Angular Signals.
 * @author Dilsen
 */
@Injectable({ providedIn: 'root' })
export class TransactionsStateService {
  private readonly transactionsApi = inject(TransactionsApi);
  private readonly transactionsSignal = signal<TransactionEntity[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<boolean>(false);

  public readonly transactions = computed(() => this.transactionsSignal());
  public readonly isLoading = computed(() => this.loadingSignal());
  public readonly hasError = computed(() => this.errorSignal());

  /**
   * @summary Loads transactions and updates reactive state.
   */
  public loadTransactions(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(false);

    this.transactionsApi
      .getTransactions()
      .pipe(finalize(() => this.loadingSignal.set(false)))
      .subscribe({
        next: (items) => this.transactionsSignal.set(items),
        error: () => this.errorSignal.set(true),
      });
  }
}
