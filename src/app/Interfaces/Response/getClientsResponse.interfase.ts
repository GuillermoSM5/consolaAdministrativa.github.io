export interface getClientsResponse {
  id: number;
  name: string;
  registrationDate: string;
  cancelationDate: string;
  serviceCharge: number;
  depositAccount: string;
  chargeAccount: string;
  monthlyFee: number;
  email: string;
  sendFile: string;
  sendMonthlyFeeFile: number;
  active: number;
  transactionsLimit: string;
  deliveryTime: string;
  status: string;
}
