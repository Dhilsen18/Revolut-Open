import { TransactionResource } from './transaction-resource';

/**
 * @summary Defines the API response contract for transactions.
 * @author Dilsen
 */
export interface TransactionsResponse {
  transactions: TransactionResource[];
}
