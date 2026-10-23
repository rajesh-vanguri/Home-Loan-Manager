/* ═════════════════════════ CONFIG ═════════════════════════
   Edit this file, commit, push. Everything on the page is calculated from it.
   Dates are YYYY-MM-DD. Each EMI is debited on the 5th of the month AFTER the interest
   cycle it pays for (the 5 Apr EMI pays the March cycle). Events are matched to the cycle
   month they fall in (a prepayment on any day of a month reduces the balance from the START of that
   cycle, as HDFC does; the "interest" paid with it is counted separately). Entries can be in any order.

   loan.onChange: "tenure" = keep the EMI, shorten the loan after a rate change/prepayment
                  "emi"    = keep the end date, reduce the EMI
*/
const CONFIG = {
  loan: {
    amount: 5000000,
    rate: 8.60,                 // starting rate, % p.a.
    tenureMonths: 180,
    firstEmiDate: "2025-04-05",   // first EMI debit (it pays the March cycle; the 5 Mar pre-EMI is not part of the schedule)
    onChange: "tenure",
    preEmiInterest: 11781       // pre-EMI interest paid on 5 Mar 2025 (disbursement to 1 Mar); counted as interest paid
  },

  rateChanges: [
    { date: "2025-05-01", rate: 8.35, note: "Repo rate cut by RBI" },
    { date: "2025-07-01", rate: 7.85, note: "Repo rate cut by RBI" },
    { date: "2026-01-01", rate: 7.60, note: "Repo rate cut by RBI" },
    { date: "2026-02-01", rate: 7.20, note: "Manual conversion requested" }
  ],

  prepayments: [
    // interest = extra interest paid along with the prepayment (counted in total interest)
    { date: "2025-11-12", principal: 500000, interest: 1828, note: "Lump-sum prepayment" },
    { date: "2026-07-08", principal: 1200000, interest: 1012, note: "Part prepayment (₹1,657 simple interest − ₹645 adjustment)" },
    { date: "2026-10-23", principal: 500000, interest: 2170, note: "Part prepayment (₹5,02,170 received)" }
  ],

  fees: [
    { date: "2025-11-12", amount: 300, desc: "Cheque dishonoured charge" },
    { date: "2026-01-21", amount: 3540, desc: "ROI conversion fee (incl. taxes)" }
  ]
};
