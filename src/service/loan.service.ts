import { ApiError } from "@/config";
import {
  ILoanApplication,
  LoanApplication,
} from "@/model/loan.applicaiton.model";
import httpStatus from "http-status";

export class LoanService {
  loanApplicationSubmission = async (
    payload: ILoanApplication
  ): Promise<ILoanApplication> => {
    try {
      return await LoanApplication.create({ ...payload });
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
}
