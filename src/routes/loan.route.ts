import express from "express";
import { LoanController } from "@/controller/loan.controller";
import {
  loanSubmissionValidation,
  updateLoanStatusValidation,
} from "@/middleware/data.validation";
const { loanApplicationSubmission, updateLoanStatus, viewLoanApplications } =
  new LoanController();
const router = express.Router();
router.post("", loanSubmissionValidation, loanApplicationSubmission);
router.post("/update", updateLoanStatusValidation, updateLoanStatus);
router.get("/", viewLoanApplications);

export default router;
