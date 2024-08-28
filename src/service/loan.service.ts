import { ApiError } from "@/config";
import {
  ILoanApplication,
  LoanApplication,
} from "@/model/loan.applicaiton.model";
import httpStatus from "http-status";
import { Schema } from "mongoose";
import joi from "joi";

export class LoanService {
  /**
   *
   * @param payload This in include the loan application submission data
   * the abstraction below creates a new loan application submission
   * @returns
   */
  loanApplicationSubmission = async (
    payload: ILoanApplication
  ): Promise<ILoanApplication> => {
    try {
      return await LoanApplication.create({ ...payload });
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };

  /**
   *
   * @param loanId This is basically the loanid
   * @param status This in bacally the status to be updated
   * the abstraction below updates the loans status
   * @returns
   */
  updateLoanStatus = async (
    loanId: Schema.Types.ObjectId,
    status: string
  ): Promise<ILoanApplication> => {
    try {
      return await LoanApplication.findByIdAndUpdate(
        loanId,
        { status },
        { new: true }
      );
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };

  /**
   *
   * @param loanId This is basically the loanid
   * the abstraction below returns loan application details
   * @returns
   */
  viewLoanApplications = async (
    loanId?: Schema.Types.ObjectId
  ): Promise<ILoanApplication[] | ILoanApplication> => {
    try {
      if (loanId) {
        const validaiton = joi.object({
          loanId: joi
            .string()
            .pattern(/^[a-fA-F0-9]{24}$/)
            .required(),
        });
        await validaiton.validateAsync({ loanId });
      }
      if (loanId) {
        if (!(await LoanApplication.findById(loanId)))
          throw new ApiError(httpStatus.BAD_REQUEST, "Invalid LoanId");
        return await LoanApplication.findById(loanId);
      }
      return await LoanApplication.find();
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
}
