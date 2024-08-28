import { catchAsync } from "@/config";
import { LoanService } from "@/service";
import httpStatus from "http-status";

export class LoanController {
  private _loanService: LoanService;
  constructor() {
    this._loanService = new LoanService();
  }
  loanApplicationSubmission = catchAsync(
    async (req: any, res: any, next: any) => {
      res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: "success",
        data: await this._loanService.loanApplicationSubmission(req.body),
      });
    }
  );
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
  viewLoanApplications = catchAsync(async (req: any, res: any, next: any) => {
    res.status(httpStatus.OK).json({
      code: httpStatus.OK,
      message: "success",
      data: await this._loanService.viewLoanApplications(req.query.loanId),
    });
  });
}
