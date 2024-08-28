import express from "express";
import { LoanController } from "@/controller/loan.controller";
import { loanSubmissionValidation } from "@/middleware/data.validation";
const { loanApplicationSubmission } = new LoanController();
const router = express.Router();
router.post("", loanSubmissionValidation, loanApplicationSubmission);

export default router;
