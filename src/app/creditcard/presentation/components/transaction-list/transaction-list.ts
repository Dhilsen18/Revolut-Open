import { Component, OnInit, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { TransactionsStateService } from '../../../application/transactions-state.service';
import { TransactionCardComponent } from '../transaction-card/transaction-card';

/**
 * @summary Displays the list of transactions in card format.
 * @author Dilsen
 */
@Component({
  selector: 'app-transaction-list',
  imports: [TranslateModule, TransactionCardComponent, MatProgressSpinnerModule],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css',
})
export class TransactionListComponent implements OnInit {
  private readonly state = inject(TransactionsStateService);

  public readonly transactions = this.state.transactions;
  public readonly isLoading = this.state.isLoading;
  public readonly hasError = this.state.hasError;

  public ngOnInit(): void {
    this.state.loadTransactions();
  }
}
