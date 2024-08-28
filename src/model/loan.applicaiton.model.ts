import { Document, model, Schema } from "mongoose";
import Double from "mongodb";

export interface ILoanApplication {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email_address: string;
  phone: string;
  nim: string;
  awareness_note: string;
  bnv: string;
  nationality: string;
  gender: string;
  national_status: string;
  profession: string;
  desired_equity_contribution: string;
  desired_monthly_payment: string;
  interest_rate_type: string;
  desired: string;
  balloon_percentage: string;
  desired_loan_term: string;
  desired_repayment_date: string;
  roadworthiness: string;
  licence_renewal: string;
  fee_payment_type: string;
  status: string;
}
export default interface ILoanApplicationModel
  extends Document,
    ILoanApplication {}

const loanApplicationSchema = new Schema(
  {
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    date_of_birth: { type: String, default: null },
    email_address: { type: String, default: null },
    phone: { type: String, default: null },
    nim: { type: String, default: null },
    awareness_note: { type: String, default: null },
    bnv: { type: String, default: null },
    nationality: { type: String, default: null },
    status: { type: String, default: null },
    gender: { type: String, default: null },
    national_status: { type: String, default: null },
    profession: { type: String, default: null },
    desired_equity_contribution: { type: String, default: null },
    desired_monthly_payment: { type: String, default: null },
    interest_rate_type: { type: String, default: null },
    desired: { type: String, default: null },
    balloon_percentage: { type: String, default: null },
    desired_loan_term: { type: String, default: null },
    desired_repayment_date: { type: String, default: null },
    roadworthiness: { type: String, default: null },
    licence_renewal: { type: String, default: null },
    fee_payment_type: { type: String, default: null },
  },
  { timestamps: true }
);

export const LoanApplication = model<ILoanApplicationModel>(
  "loanApplication",
  loanApplicationSchema
);
