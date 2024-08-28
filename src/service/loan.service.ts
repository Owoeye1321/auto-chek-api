import { ApiError } from "@/config";
import {
  ILoanApplication,
  LoanApplication,
} from "@/model/loan.applicaiton.model";
import httpStatus from "http-status";
import { Schema } from "mongoose";
import joi from "joi";

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
