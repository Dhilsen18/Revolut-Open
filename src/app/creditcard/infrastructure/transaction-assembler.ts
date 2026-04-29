import { Injectable } from '@angular/core';
import { TransactionEntity } from '../domain/transaction.entity';
import { TransactionResource } from './transaction-resource';

/**
 * @summary Maps transaction resources into domain entities.
 * @author Dilsen
 */
@Injectable({ providedIn: 'root' })
export class TransactionAssembler {
  /**
   * @summary Converts one resource object to a domain entity.
   * @param resource Resource from API or fallback JSON.
   */
  public toEntity(resource: TransactionResource): TransactionEntity {
    return new TransactionEntity(
      resource.id,
      resource.cardNumber,
      resource.merchantName,
      resource.productDetails,
      resource.totalInstallments,
      resource.schedule,
      resource.transactionDate,
      resource.amount,
      resource.currency,
    );
  }
}
