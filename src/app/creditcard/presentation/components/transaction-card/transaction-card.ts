import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { TransactionEntity } from '../../../domain/transaction.entity';

/**
 * @summary Renders one credit card transaction card.
 * @author Dilsen
 */
@Component({
  selector: 'app-transaction-card',
  imports: [MatCardModule, TranslateModule, DatePipe, CurrencyPipe],
  templateUrl: './transaction-card.html',
  styleUrl: './transaction-card.css',
})
export class TransactionCardComponent {
  public readonly transaction = input.required<TransactionEntity>();
}
