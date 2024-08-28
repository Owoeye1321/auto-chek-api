import { catchAsync } from "@/config";
import { LoanService } from "@/service";
import httpStatus from "http-status";

export class LoanController {
  private _loanService: LoanService;
  constructor() {
    this._loanService = new LoanService(); //this initializes the loan service class
  }

  /**
   * this controller is wrapped by the catch async function that catch error
   * it's the controller that handle loan application submission
   */
  loanApplicationSubmission = catchAsync(
    async (req: any, res: any, next: any) => {
      res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: "success",
        data: await this._loanService.loanApplicationSubmission(req.body),
      });
    }
  );

  /**
   * this controller is wrapped by the catch async function that catch error
   * it's the controller that handle update loan statuses
   */
  updateLoanStatus = catchAsync(async (req: any, res: any, next: any) => {
    res.status(httpStatus.OK).json({
      code: httpStatus.OK,
      message: "success",
      data: await this._loanService.updateLoanStatus(
        req.query.loanId,
        req.body.status
      ),
    });
  });

  /**
   * this controller is wrapped by the catch async function that catch error
   * it's the controller that handle viewing loan applications
   */
  viewLoanApplications = catchAsync(async (req: any, res: any, next: any) => {
    res.status(httpStatus.OK).json({
      code: httpStatus.OK,
      message: "success",
      data: await this._loanService.viewLoanApplications(req.query.loanId),
    });
  });
}
