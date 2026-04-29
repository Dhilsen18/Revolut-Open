/**
 * @summary Resource model used by the transport layer.
 * @author Dilsen
 */
export interface TransactionResource {
  id: string;
  cardNumber: string;
  merchantName: string;
  productDetails: string;
  totalInstallments: number;
  schedule: string;
  transactionDate: string;
  amount: number;
  currency: string;
}
