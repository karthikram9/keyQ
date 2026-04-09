import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, Check, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const SUBJECTS = [
    {
      id: "ps",
      code: "B23BS2201",
      name: "Probability & Statistics",
      shortName: "P & S",
      color: "#e85d04",
      lightColor: "#fff4ee",
      priority: "HARD",
      units: [
        {
          name: "Unit I — Descriptive Statistics",
          twoMark: [
            { q: "Explain briefly the types of variables (dependent, independent, categorical, continuous).", tag: "★★★ Must Do", type: "Theory" },
            { q: "Find the geometric mean of 2, 4, and 8.", tag: "★★★ Must Do", type: "Problem" },
            { q: "Explain features of a good questionnaire.", tag: "★★ Important", type: "Theory" },
            { q: "Explain measures of skewness — what do they indicate?", tag: "★★ Important", type: "Theory" },
            { q: "Define Mean, Median, and Mode. State which measure is used when.", tag: "★★ Important", type: "Theory" },
            { q: "What is the coefficient of variation? When is it used?", tag: "★★ Important", type: "Theory" },
            { q: "Define moments of a distribution. What is the first moment about origin?", tag: "★ Know", type: "Theory" },
            { q: "Differentiate between primary data and secondary data collection methods.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Find the Mean, Median, and Mode for a given frequency distribution (e.g., Marks: 0–10,10–20,20–30,30–40,40–50 | Students: 12,18,27,20,17).", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Find the Variance and Standard Deviation for a given frequency distribution (e.g., x: 1,2,3,4,5 | f: 3,9,15,10,8).", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Find Coefficients of Skewness and Kurtosis for a given frequency distribution (e.g., x: 11,12,14,15,16 | f: 7,18,25,16,3).", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Two batsmen (e.g., Kohli and Yadav) play 10 T20 matches. Calculate Mean, SD, and Coefficient of Variation for each. Determine who is more consistent.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Given Karl Pearson's coefficient of skewness = +0.32, SD = 6.5, Mean = 29.6 — find Mode and Median.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Find the Mean and Mode for a given discrete frequency distribution table.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Explain measures of central tendency and variability. State all formulas for Mean, Median, Mode, Variance, and SD.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain data visualization techniques used in descriptive statistics (bar chart, histogram, frequency polygon, ogive).", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit II — Probability & Random Variables",
          twoMark: [
            { q: "Define discrete and continuous random variables with examples.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Write the mean and variance of Uniform distribution.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Show that E(K) = K where K is a constant.", tag: "★★ Important", type: "Theory+Problem" },
            { q: "The mean and variance of a Binomial Distribution are 4 and 4/3 respectively. Find P(X ≥ 1).", tag: "★★★ Must Do", type: "Problem" },
            { q: "Define PMF, PDF, and CDF. State the properties of each.", tag: "★★ Important", type: "Theory" },
            { q: "State and write the Baye's Theorem formula.", tag: "★★ Important", type: "Theory" },
            { q: "Write the mean and variance of Poisson distribution.", tag: "★★ Important", type: "Theory" },
            { q: "Define Mathematical Expectation E(X) and write its properties.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Baye's Theorem problem: In a bolt factory, machines A, B, C manufacture 25%, 35%, 40% of total output and 5%, 4%, 2% are defective. A bolt is drawn and found defective. Find probabilities it came from A, B, and C.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "For a continuous probability function f(x) = kxe^(−x), x ≥ 0 — find (i) k (ii) Mean (iii) Variance.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Using recurrence formula, find probabilities for x = 0,1,2,3,4,5 when mean of Poisson distribution is 3.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "If X is a Poisson variate such that 3P(x=4) = ½P(x=2) + P(x=0), find (i) the mean of x (ii) P(X ≤ 2).", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "In a normal distribution, 31% of items are under 45 and 8% items are over 64. Find mean and variance.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "If X is a normal variate with mean 30 and SD 5, find probability that (i) 26 ≤ x ≤ 40 (ii) x ≥ 45.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "State and prove the Multiplication Theorem for two events.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "For a continuous random variable with PDF f(x) = ke^(−λx) for x ≥ 0, λ ≥ 0 — determine (i) k (ii) mean (iii) variance.", tag: "★★ Important", type: "Problem", marks: 5 }
          ]
        },
        {
          name: "Unit III — Correlation & Curve Fitting",
          twoMark: [
            { q: "Define rank correlation coefficient (Spearman's). When is it used?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Write the normal equations to fit a curve y = ae^(bx).", tag: "★★★ Must Do", type: "Theory" },
            { q: "From regression equations Y = 0.516X + 33.73 and X = 0.512Y + 32.52, find correlation coefficient ρ.", tag: "★★★ Must Do", type: "Problem" },
            { q: "What is the method of least squares? State its principle.", tag: "★★ Important", type: "Theory" },
            { q: "Define regression. Differentiate between regression of Y on X and X on Y.", tag: "★★ Important", type: "Theory" },
            { q: "What is the difference between correlation and regression?", tag: "★★ Important", type: "Theory" },
            { q: "Write the normal equations to fit a straight line y = a + bx.", tag: "★ Know", type: "Theory" },
            { q: "What are the properties of correlation coefficient r? What does r = 0 indicate?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Find the correlation coefficient and regression lines for given x and y values (e.g., x: 1,2,3,4,5,6 | y: 2,5,3,8,7,5). Also find x̄ and ȳ.", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "In a partially destroyed laboratory record, lines of regression are 4x − 5y + 33 = 0 and 20x − 9y = 107. Calculate x̄, ȳ, and coefficient of correlation between x and y.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Fit a second-degree parabola y = a + bx + cx² to given data (e.g., x: 2,4,6,8,10 | y: 6.07,12.85,31.47,57.38,91.29).", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Fit a curve of the form y = ae^(bx) to given data (e.g., x: 0,1,2,3 | y: 1.05,2.10,3.85,8.30).", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Obtain the value of correlation coefficient between X and Y for given tabular data (e.g., X: 65,66,67,67,68,69,70,72 | Y: 67,68,65,68,72,72,69,71).", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Fit a parabola to given data by method of least squares (e.g., x: 0,5,10,15,20,25 | y: 10,15,17,22,24,30).", tag: "★★ Important", type: "Problem", marks: 10 },
            { q: "From two regression equations calculate x̄, ȳ, byx, bxy, and hence r. Interpret the relationship.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Explain the method of least squares. What is the principle of curve fitting? Write normal equations for y = a + bx + cx².", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit IV — Sampling Distributions",
          twoMark: [
            { q: "Define point estimation and interval estimation with examples.", tag: "★★★ Must Do", type: "Theory" },
            { q: "A sample of size 900 is taken from a population whose standard deviation is 15. Find the standard error of mean.", tag: "★★★ Must Do", type: "Problem" },
            { q: "Define standard error of mean and state its formula.", tag: "★★ Important", type: "Theory" },
            { q: "Define maximum error of estimates for small samples.", tag: "★★ Important", type: "Theory" },
            { q: "What is a sampling distribution? What is the central limit theorem?", tag: "★★ Important", type: "Theory" },
            { q: "A normal population has SD = 1. A sample of size 400 is collected. Find standard error of sampling distribution of means.", tag: "★★ Important", type: "Problem" },
            { q: "What is the difference between a parameter and a statistic?", tag: "★ Know", type: "Theory" },
            { q: "Define degrees of freedom. What is a t-distribution?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Population: {4, 8, 12, 16, 20, 24}. Draw all samples of size 2 WITH replacement. Find (a) population mean (b) population SD (c) mean of sampling distribution (d) SD of sampling distribution of means.", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Population: {3, 6, 9, 15, 27}. List all possible samples of size 3 WITHOUT replacement from finite population. Calculate mean of each sample, mean of sampling distribution, and SD of sampling distribution of means.", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Mean and SD of a population are 11,795 and 14,054. If n = 50, find 95% confidence interval for the true mean.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "When a sample is taken from infinite population, what happens to the standard error if size decreases from 800 to 700?", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Determine a 95% confidence interval for the variance of a normal population with sample: 145.3, 145.1, 145.4, 146.2.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Mean and SD of population are 11795 and 14054. What can one assert with 95% confidence about maximum error if X̄ = 11795 and n = 50? Also construct 95% CI.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Explain the concept of sampling distribution. State and explain the Central Limit Theorem.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Differentiate between large sample tests and small sample tests. When do we use t-distribution?", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit V — Testing of Hypothesis",
          twoMark: [
            { q: "Define Type-I and Type-II errors in hypothesis testing.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Find the values of (i) t₀.₀₅ with d.f. 12 (ii) χ²₀.₀₀₁ with d.f. 16.", tag: "★★★ Must Do", type: "Theory+Problem" },
            { q: "Explain test of significance for single mean.", tag: "★★ Important", type: "Theory" },
            { q: "Explain chi-square test for goodness of fit and state its conditions.", tag: "★★ Important", type: "Theory" },
            { q: "What is a null hypothesis? What is an alternative hypothesis?", tag: "★★ Important", type: "Theory" },
            { q: "Define critical region and level of significance α.", tag: "★★ Important", type: "Theory" },
            { q: "What is the F-test? When is it used?", tag: "★ Know", type: "Theory" },
            { q: "State the conditions for applying the chi-square test.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "A die was thrown 9000 times and yielded 3 or 4 in 3240 times. Is this consistent with the hypothesis that the die is unbiased?", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Two pumpkin samples (n₁=11, n₂=9) show sample SDs of 0.8 and 0.5 for weights. Assuming normal distributions, test the hypothesis that true variances are equal.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "In a random sample of 60 workers, average commute = 33.8 min, SD = 6.1 min. Can we reject H₀: μ = 32.6 in favour of H₁: μ > 32.6 at α = 0.05?", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Nicotine content in mg in two tobacco samples: Sample A (24,27,26,21,25) and Sample B (27,30,28,31,22,36). Can it be said that samples come from the same normal population?", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Four coins are tossed 160 times. Observed distribution: x=0→8, x=1→34, x=2→69, x=3→43, x=4→6. Find expected frequencies and test goodness of fit at 5% level.", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Explain (i) Null hypothesis (ii) Critical region (iii) Types of error in hypothesis testing.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain the chi-square test for goodness of fit. What are its assumptions? When is it applicable?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Define Type-I and Type-II errors. Explain the trade-off between them with an example.", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        }
      ]
    },
    {
      id: "fm",
      code: "B23HS2202",
      name: "Financial Management",
      shortName: "FM",
      color: "#7b2d00",
      lightColor: "#fff4e6",
      priority: "HARD",

      units: [
        {
          name: "Unit I — Time Value of Money",
          twoMark: [
            { q: "Define Financial Management.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is Time Value of Money?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is annuity factor?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is compound interest? Define EAR.", tag: "★★ Important", type: "Theory" },
            { q: "What are financial management decisions?", tag: "★★ Important", type: "Theory" },
            { q: "Explain discounting and compounding.", tag: "★★ Important", type: "Theory" },
            { q: "What is simple interest?", tag: "★ Know", type: "Theory" },
            { q: "What is agency problem?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Explain the concept of Time Value of Money. What are the reasons for time preference of money?", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "Mukund needs ₹25 lakhs after 10 years. How much must be deposited now at 10% compound interest (compounded yearly)?", tag: "★★★ Must Do", type: "Problem", marks: "5M" },
            { q: "What is the scope and importance of Financial Management? What are the major types of financial management decisions?", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "What are the major types of financial decisions that business firms make? How do they involve risk-return trade-off?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "Infer and explain the Annuity Factor. How is it used in time value calculations? Give an example.", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "Evaluate common stock valuation methods. What factors affect stock value?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "Define Financial Management. What are the goals of financial management in a business firm?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "How does agency cost influence the risk and return of a firm? Explain the principal-agent problem.", tag: "★ Know", type: "Theory", marks: "5M" },
          ]
        },

        {
          name: "Unit II — Risk & Return",
          twoMark: [
            { q: "Define risk and return.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is CAPM?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is diversification?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is risk-return tradeoff?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is beta?", tag: "★★ Important", type: "Theory" },
            { q: "Explain agency cost.", tag: "★★ Important", type: "Theory" },
            { q: "What are attitudes toward risk?", tag: "★★ Important", type: "Theory" },
            { q: "Define probability distribution in risk.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "\"The risk-return tradeoff indicates that the higher the risk, the higher the potential reward.\" Comment with a suitable example.", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "What are the major types of financial decisions and how do they involve risk-return trade-off? Summarize attitudes toward risk.", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "Interpret the Capital Asset Pricing Model (CAPM). What does the Security Market Line represent?", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "Differentiate between financial leverage and operating leverage. Which is riskier and why?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "What is systematic and unsystematic risk? How does diversification reduce risk?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "Explain the concept of portfolio risk. How is beta used to measure systematic risk?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "How does agency cost influence the risk and return of a firm? Explain with example.", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "What is meant by risk? List and explain the various types of financial risk faced by a firm.", tag: "★ Know", type: "Theory", marks: "5M" },
          ]
        },

        {
          name: "Unit III — Cost of Capital",
          twoMark: [
            { q: "Define cost of capital.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is WACC?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is financial leverage?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Differentiate operating and financial leverage.", tag: "★★ Important", type: "Theory" },
            { q: "What is composite leverage?", tag: "★★ Important", type: "Theory" },
            { q: "Explain cost of equity.", tag: "★★ Important", type: "Theory" },
            { q: "What is dividend growth model?", tag: "★★ Important", type: "Theory" },
            { q: "Define explicit cost.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "What is WACC (Weighted Average Cost of Capital)? How is it computed? Calculate WACC for a given capital structure.", tag: "★★★ Must Do", type: "Theory+Problem", marks: "5M" },
            { q: "Alpha Ltd has sales ₹1,00,000, variable costs ₹60,000, fixed costs ₹20,000, long-term loans ₹80,000 at 10% interest. Calculate the composite leverage.", tag: "★★★ Must Do", type: "Problem", marks: "5M" },
            { q: "What do you understand by cost of capital? What is its significance in financial decision-making?", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "Discuss computation of specific cost of capital for equity. What is the dividend growth model?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "What is financial leverage? Explain types of leverages — operating, financial, and combined — with formulas.", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "Explain the concept of trading on equity. How does financial leverage affect EPS?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "What is the difference between explicit cost and implicit cost of capital? Give examples of each.", tag: "★ Know", type: "Theory", marks: "5M" },
            { q: "What is the impact of capital structure on the value of a firm? Briefly explain Modigliani-Miller theorem.", tag: "★ Know", type: "Theory", marks: "5M" },
          ]
        },

        {
          name: "Unit IV — Capital Budgeting & Working Capital",
          twoMark: [
            { q: "Define Capital Budgeting.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is NPV?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is IRR?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is Payback Period?", tag: "★★ Important", type: "Theory" },
            { q: "What is working capital?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is operating cycle?", tag: "★★ Important", type: "Theory" },
            { q: "Define ARR.", tag: "★★ Important", type: "Theory" },
            { q: "Define profitability index.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "What is Capital Budgeting? Why is it significant for a firm? Explain the nature and techniques of Capital Budgeting (NPV, IRR, Payback).", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "What are traditional methods of capital budgeting? Explain advantages and disadvantages of Payback Period and ARR.", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "Calculate working capital requirements for X Ltd — Sales at 3 months credit ₹4,0,000 | Raw material ₹1,20,000 | Wages avg lag 15 days ₹96,000 | Manufacturing expenses 1 month arrears ₹1,20,000 | Admin expenses 1 month arrears ₹48,000 | Sales promotion half-yearly advance ₹20,000. Company gets 1 month credit from suppliers, holds 2-month raw material stock and 1.5-month finished goods stock. Cash balance ₹10,000. Margin 10%. Find working capital requirements.", tag: "★★★ Must Do", type: "Problem", marks: "5M" },
            { q: "What are characteristic features of capital budgeting? How would you assess working capital requirements of a seasonal industry?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "Explain the Net Present Value (NPV) method. How is it superior to Payback Period?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "What is gross working capital? What is net working capital? What are the factors affecting working capital?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "Explain the operating cycle concept in working capital management.", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "What is the Profitability Index (PI)? How is it related to NPV in capital budgeting decisions?", tag: "★ Know", type: "Theory", marks: "5M" },
          ]
        },

        {
          name: "Unit V — Cash & Receivables",
          twoMark: [
            { q: "What are motives for holding cash?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is receivables management?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is factoring?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What are credit references?", tag: "★★ Important", type: "Theory" },
            { q: "Explain 5 Cs of credit.", tag: "★★ Important", type: "Theory" },
            { q: "What is cash budget?", tag: "★★ Important", type: "Theory" },
            { q: "What influences cash management?", tag: "★★ Important", type: "Theory" },
            { q: "Define receivables.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Explain the motives for holding cash (transaction, precautionary, speculative). Discuss basic strategies for cash management.", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "What are the advantages of receivables management? How does credit policy affect receivables?", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "Discuss basic strategies for cash management. What are the factors that influence cash management?", tag: "★★★ Must Do", type: "Theory", marks: "5M" },
            { q: "Interpret credit references. How do you analyse a credit applicant? What are the 5 Cs of credit?", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "What are the main factors that influence cash management? Explain Baumol's model for cash management.", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "What is the importance of receivables management? Explain the costs associated with maintaining receivables.", tag: "★★ Important", type: "Theory", marks: "5M" },
            { q: "Explain the concept of a cash budget. How is it useful in cash planning?", tag: "★ Know", type: "Theory", marks: "5M" },
            { q: "What is factoring? How does it help in managing receivables? Distinguish between recourse and non-recourse factoring.", tag: "★ Know", type: "Theory", marks: "5M" },
          ]
        }
      ]
    },
    {
      id: "ads",
      code: "B23CB2201",
      name: "Advanced Data Structures",
      shortName: "ADS",
      color: "#2d6a4f",
      lightColor: "#edf7f2",
      priority: "HARD",
      units: [
        {
          name: "Unit I — Trees & Graphs",
          twoMark: [
            { q: "Define Balanced Tree and state its properties.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is a Biconnected Graph? Give an example.", tag: "★★ Important", type: "Theory" },
            { q: "Write the properties of a B-Tree of order m.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define Euler Circuit. When does a graph have an Euler Circuit?", tag: "★★ Important", type: "Theory" },
            { q: "Write the applications of Heap data structure.", tag: "★★ Important", type: "Theory" },
            { q: "What is an AVL tree? State its balance factor condition.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is a Red-Black Tree? List its 5 properties.", tag: "★★ Important", type: "Theory" },
            { q: "Define Spanning Tree of a Graph.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Construct an AVL tree by inserting elements in order: 14,17,11,7,53,4,13,12,8,60,19,16,20. Show all rotations.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "What is an AVL tree? Explain all four types of rotations (LL, RR, LR, RL) with an example for each case.", tag: "★★★ Must Do", type: "Theory", marks: 10 },
            { q: "Create a Red-Black tree by inserting the following sequence: 8, 18, 5, 15, 17, 25, 40, 80. Explain all rules applied.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Demonstrate the process of deleting a node from a Red-Black Tree with an example. Show all cases.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Describe how graphs can be represented using (i) Adjacency Matrix (ii) Adjacency List. Compare both approaches.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Write an algorithm to construct a Min Heap Priority Queue and explain with an example.", tag: "★★ Important", type: "Algorithm", marks: 7 },
            { q: "Construct a B-Tree of order 3 for the set: {10, 20, 30, 60, 40, 50}. Show all insertions.", tag: "★★ Important", type: "Problem", marks: 3 },
            { q: "Define Balanced Tree. What is an Euler Circuit? Differentiate between Euler path and Euler circuit.", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit II — Divide & Conquer",
          twoMark: [
            { q: "Explain the characteristics of an algorithm (finiteness, definiteness, input, output, effectiveness).", tag: "★★★ Must Do", type: "Theory" },
            { q: "Derive the worst-case time complexity of the Quick Sort algorithm.", tag: "★★★ Must Do", type: "Theory+Problem" },
            { q: "How would you describe the complexity of an algorithm using Big O, Omega (Ω), and Theta (Θ) notations?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Compare time complexity with space complexity. Which is more important?", tag: "★★ Important", type: "Theory" },
            { q: "What is the general method of Divide and Conquer? State its steps.", tag: "★★ Important", type: "Theory" },
            { q: "Write the recurrence relation for Merge Sort. Solve it to get time complexity.", tag: "★★ Important", type: "Theory+Problem" },
            { q: "Define best-case, worst-case, and average-case complexity with examples.", tag: "★ Know", type: "Theory" },
            { q: "What is algorithm analysis? Why is asymptotic analysis preferred?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Write the Divide and Conquer recursive Merge Sort algorithm. Derive its time complexity using recurrence relation T(n) = 2T(n/2) + n.", tag: "★★★ Must Do", type: "Algorithm", marks: 5 },
            { q: "Write the Quick Sort algorithm using Divide and Conquer technique. Show worst-case complexity derivation.", tag: "★★★ Must Do", type: "Algorithm", marks: 5 },
            { q: "How would you describe the complexity of an algorithm using Big O, Omega, and Theta notations? Give examples for each.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Write an algorithm for DFS traversal of a graph and find its time complexity.", tag: "★★ Important", type: "Algorithm", marks: 5 },
            { q: "Write the General Method of Divide and Conquer. Explain with the control abstraction. State its applications.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain the significance of the Convex Hull problem. How is Divide and Conquer applied to solve it?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain Convex Hull problem using Divide and Conquer method.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain the characteristics of an algorithm. What makes a good algorithm? Compare iterative and recursive approaches.", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit III — Greedy Method & Backtracking",
          twoMark: [
            { q: "What is the importance of Knapsack algorithm in daily life?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Write the Control Abstraction of iterative Backtracking method.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Explain the control abstraction of a Greedy method.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define Spanning Tree. What is a Minimum Cost Spanning Tree?", tag: "★★ Important", type: "Theory" },
            { q: "What is Dynamic Programming? How does it differ from Greedy?", tag: "★★ Important", type: "Theory" },
            { q: "Define Sum of Subsets problem.", tag: "★★ Important", type: "Theory" },
            { q: "What is backtracking? Give one example of a problem solved by backtracking.", tag: "★★ Important", type: "Theory" },
            { q: "Define a feasibility function in the context of greedy algorithms.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Use greedy algorithm for Job Sequencing with Deadlines: n=7, profits=(3,5,20,18,1,6,30), deadlines=(1,3,4,3,2,1,2). Find optimal solution and total profit.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Apply greedy method for Job Sequencing with Deadlines: n=4, profits=(100,10,15,27), deadlines=(2,1,2,1). Find optimal schedule.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Explain the general principle of Greedy method. List and explain 4 applications of Greedy method.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Discuss the 4-Queens problem. Draw the portion of the state space tree for n=4 queens using backtracking.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Write Prim's algorithm to find Minimum Cost Spanning Tree using Greedy method. Find time complexity.", tag: "★★ Important", type: "Algorithm", marks: 5 },
            { q: "Explain the Graph Coloring problem. Draw state space tree for m=3 colours, n=4 vertices. Discuss time and space complexity.", tag: "★★ Important", type: "Theory+Problem", marks: 5 },
            { q: "Solve the String Editing problem to transform X = \"abcd\" into Y = \"bca\" using Dynamic Programming. Find minimum cost edit sequence.", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Write the Control Abstraction of iterative Backtracking. Explain the backtracking solution for Sum of Subsets problem.", tag: "★★ Important", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit IV — Dynamic Programming",
          twoMark: [
            { q: "List the features of Dynamic Programming.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Write the formula to solve the Travelling Salesperson Problem with Dynamic Programming.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is the String Editing Problem?", tag: "★★ Important", type: "Theory" },
            { q: "Define P and NP classes.", tag: "★★ Important", type: "Theory" },
            { q: "Explain Least Cost Search (LC Search) in Branch and Bound.", tag: "★★ Important", type: "Theory" },
            { q: "What is the 0/1 Knapsack Problem? How is it different from Fractional Knapsack?", tag: "★★ Important", type: "Theory" },
            { q: "What is an Optimal Binary Search Tree? Why is it needed?", tag: "★ Know", type: "Theory" },
            { q: "What is the principle of optimality in Dynamic Programming?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Describe Dynamic 0/1 Knapsack Problem. Solve: n=3, m=6, profits=(1,2,5), weights=(2,3,4). Show complete DP table.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Draw an Optimal Binary Search Tree for n=4 identifiers (a1,a2,a3,a4) = (do,if,read,while), P(1:4)=(3,3,1,1) and Q(0:4)=(2,3,1,1,1).", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Let X = a,a,b,a,a,b,a,a and Y = b,a,b,a,a,b,a,b. Find minimum cost edit sequence that transforms X into Y using Dynamic Programming.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Write the Backtracking algorithm to solve N-Queens problem. Draw the portion of the state space tree for 4-Queens.", tag: "★★★ Must Do", type: "Algorithm+Problem", marks: 10 },
            { q: "Explain how Branch and Bound technique is used to solve the Travelling Salesperson Problem with an example.", tag: "★★★ Must Do", type: "Theory", marks: 10 },
            { q: "Explain the methodology of Dynamic Programming. List the applications. How does it differ from Divide and Conquer?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "List features of Dynamic Programming. When is DP preferred over Greedy? Give examples.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "How is Branch and Bound different from Backtracking? Explain the general method of Branch and Bound.", tag: "★★ Important", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit V — Branch & Bound, NP Complexity",
          twoMark: [
            { q: "How are Branch and Bound different from backtracking?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Differentiate P and NP problems with examples.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define NP-Hard and NP-Complete. Give one example of each.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is Cook's Theorem? State it.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is the Clique Decision Problem?", tag: "★★ Important", type: "Theory" },
            { q: "What is the Travelling Salesperson Decision Problem?", tag: "★★ Important", type: "Theory" },
            { q: "Define the Satisfiability Problem (SAT). Why is it important in NP-completeness?", tag: "★ Know", type: "Theory" },
            { q: "What is the concept of polynomial-time reduction?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Explain Travelling Salesperson Problem using LCBB procedure. Given the cost matrix, draw state space tree and find optimal tour. (Use matrix: ∞,20,30,10,11 / 15,∞,16,4,2 / 3,5,∞,2,4 / 19,6,18,∞,3 / 16,4,7,16,∞)", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Explain Travelling Salesperson Decision Problem with an example. Write the Branch and Bound General Method.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Write and explain Cook's Theorem. What is its significance in complexity theory?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Differentiate P and NP. What are NP-Hard and NP-Complete problems? Give examples of each and explain the relationships.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is the difference between NP-Hard and NP-Complete problems? Provide examples. Why can't we prove NP ≠ P?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is the Clique Decision Problem (CDP), and why is it considered NP-Hard?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Give an example of a problem that is NP-Hard but NOT NP-Complete. Justify your answer.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain Branch and Bound General Method. How is Least Cost Search used in Branch and Bound?", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        }
      ]
    },
    {
      id: "se",
      code: "B23IT2202",
      name: "Software Engineering",
      shortName: "SE",
      color: "#6a0572",
      lightColor: "#f8eef9",
      priority: "MEDIUM",
      units: [
        {
          name: "Unit I — Process Models",
          twoMark: [
            { q: "What is the Agile process model?", tag: "★★★ Must Do", type: "Theory" },
            { q: "List the umbrella activities of a software process.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Distinguish between process and methods in software engineering.", tag: "★★ Important", type: "Theory" },
            { q: "What do you mean by the Spiral model?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is the Waterfall Model? Name three projects where it is most suitable.", tag: "★★ Important", type: "Theory" },
            { q: "Differentiate between perspective process models and iterative process models.", tag: "★★ Important", type: "Theory" },
            { q: "List the core principles and values of Agile methodology.", tag: "★★ Important", type: "Theory" },
            { q: "What are the generic process framework activities in software engineering?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Explain the Waterfall Model with a diagram. Mention three specific types of software projects where it is most suitable.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Draw and explain the Spiral Model of requirement and design. When is it most appropriate?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Explain Agile process with suitable example. What are its core values and principles?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Illustrate generic process framework activities for software engineering. What are umbrella activities and how are they distributed?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Compare between perspective and iterative process models. What are pros and cons of each?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Umbrella activities occur throughout the software process. Are they applied evenly or concentrated? Explain with examples.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Why does an iterative process make it easier to manage change? Is every Agile process iterative? Explain using Extreme Programming (XP) model.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain the evolution of software development and how it led to the emergence of software engineering as a discipline.", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit II — Requirements & Project Management",
          twoMark: [
            { q: "What happens when requirement validation uncovers an error? Who is involved in correcting it?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Explain Risk Management in software projects.", tag: "★★★ Must Do", type: "Theory" },
            { q: "List types of project plans used in software project management.", tag: "★★ Important", type: "Theory" },
            { q: "What is Risk Management? Name 4 types of risks in software projects.", tag: "★★ Important", type: "Theory" },
            { q: "What is an SRS document? What are its key contents?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is the COCOMO model? Name its three variants.", tag: "★★ Important", type: "Theory" },
            { q: "What is Delphi cost estimation technique?", tag: "★ Know", type: "Theory" },
            { q: "Differentiate between empirical and non-empirical project estimation techniques.", tag: "★★ Important", type: "Theory" }
          ],
          longAnswer: [
            { q: "Explain the SRS document. What are its contents and importance? What makes a good SRS?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Use the COCOMO II model to estimate effort for a simple ATM system with 12 screens, 10 reports, ~80 software components. Use application composition model with object points.", tag: "★★★ Must Do", type: "Theory+Problem", marks: 5 },
            { q: "Differentiate between project estimation techniques — empirical estimation techniques with examples.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Who should be involved in requirements review? Draw a process model showing how a requirements review might be organized.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Describe the process of risk management in software project management. What are its four main activities?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Differentiate between axiomatic, algebraic, and executable specification methods with suitable examples.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Choose a suitable process model for two scenarios: (i) Client has budget, vendor has manpower, requirements are clear (ii) Client wants risk assessment at each stage. Justify your choices.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "What do you think happens when requirement validation uncovers an error? What are the consequences if it is undetected?", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit III — Design",
          twoMark: [
            { q: "What is an SRS document? (repeat from exam — appeared in Unit 3 slot too)", tag: "★★★ Must Do", type: "Theory" },
            { q: "What are the key characteristics of a good user interface?", tag: "★★★ Must Do", type: "Theory" },
            { q: "How do you evaluate a user interface? List the criteria.", tag: "★★ Important", type: "Theory" },
            { q: "List the principles of Software Design.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is coupling in software design? Why should coupling be low?", tag: "★★ Important", type: "Theory" },
            { q: "What is cohesion? Why should cohesion be high?", tag: "★★ Important", type: "Theory" },
            { q: "What is Structured Analysis (SA)? Name two tools used in SA.", tag: "★★ Important", type: "Theory" },
            { q: "Define DFD (Data Flow Diagram). What are the 4 components of a DFD?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "What are coupling and cohesion? Explain all types. Why is high cohesion and low coupling required for efficient software?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Describe the process of developing a DFD model of a system. Explain how DFDs are used to represent and analyze system functionality.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is Structured Analysis? Explain the operational steps for software design using SA/SD methodology.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What are the four different models in user interface analysis and design? How do you evaluate a user interface?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Determine the core principles and values of Agile methodology. How does Agile relate to SA/SD?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Compare Coupling and Cohesion. Explain different types of Coupling and its effects on software modules.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Determine the SA/SD (Structured Analysis / Structured Design) methodology. How does it guide software design?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "List and explain the principles of software design. What is abstraction in software design?", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit IV — Testing & Quality",
          twoMark: [
            { q: "Define Software Quality.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define Software Reliability.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Compare alpha testing and beta testing.", tag: "★★ Important", type: "Theory" },
            { q: "Generalize your opinion about Smoke Testing. What is it used for?", tag: "★★ Important", type: "Theory" },
            { q: "What is Software Testing? What is the role of a Software Tester?", tag: "★★ Important", type: "Theory" },
            { q: "What are the key differences between Black Box and White Box testing?", tag: "★★★ Must Do", type: "Theory" },
            { q: "List any 4 principles of software testing.", tag: "★★ Important", type: "Theory" },
            { q: "What are coding standards? Why are they important?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Describe various White Box testing methods for any one example system. Include basis path testing and cyclomatic complexity.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is Software Testing? What is the role of a Software Tester? Compare Black Box and White Box testing in detail.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Explain Software McCall's Quality Attributes. What are the three perspectives of software quality?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Explain the importance of Software Quality Assurance. Also explain the different CMM levels.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Describe the Principles and Guidelines for Coding. Explain various coding standards.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "How do you broaden testing coverage and improve the quality of white box testing?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain various coding standards used in software development.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Provide the rules for evaluating the summary report of a code review. What is the purpose of a code review?", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit V — Maintenance & CASE",
          twoMark: [
            { q: "Define software reverse engineering. What is its purpose?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What are the basic issues in a reuse program?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is Delphi cost estimation technique? (also appears in unit 5 2M slot)", tag: "★★ Important", type: "Theory" },
            { q: "List any 4 categories of CASE tools.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is software maintenance? Name its 4 types.", tag: "★★ Important", type: "Theory" },
            { q: "What is CASE (Computer-Aided Software Engineering)? Give 2 examples.", tag: "★★ Important", type: "Theory" },
            { q: "What factors influence maintenance cost estimation?", tag: "★★ Important", type: "Theory" },
            { q: "What is software re-engineering? How is it different from reverse engineering?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Explain the types and characteristics of software maintenance. How are maintenance costs estimated?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Describe the scope of CASE. Explain how CASE tools support the software life cycle. Discuss characteristics of effective CASE tools.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Explain the architecture of a CASE environment. Discuss components and their interactions in a typical CASE environment.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is CASE? List any 4 categories of CASE tools and their advantages.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Discuss factors that influence the estimation of maintenance costs. How does accurate cost estimation contribute to effective maintenance planning?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain various CASE tools for project management. How do they support the software development life cycle?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Interpret several key aspects of software maintenance. What is reverse engineering and when is it used?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "What are the basic issues in a reuse program? Explain software reliability and how it is measured.", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        }
      ]
    },
    {
      id: "os",
      code: "B23IT2203",
      name: "Operating Systems",
      shortName: "OS",
      color: "#023e8a",
      lightColor: "#eef3fc",
      priority: "MEDIUM",
      units: [
        {
          name: "Unit I — OS Structure & Concepts",
          twoMark: [
            { q: "List the Computer System Components with a brief note on each.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is an Operating System?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define Operating System and mention two examples.", tag: "★★ Important", type: "Theory" },
            { q: "Summarize the services provided by the Operating System.", tag: "★★ Important", type: "Theory" },
            { q: "List out the operations performed on a process.", tag: "★★ Important", type: "Theory" },
            { q: "What is a system call? Give 2 examples.", tag: "★★ Important", type: "Theory" },
            { q: "What are the functions of an Operating System? List any 5.", tag: "★★ Important", type: "Theory" },
            { q: "What are the different types of OS (batch, time-sharing, real-time)? Give one example each.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "List out and elaborate on the functions of Operating Systems. How are operating systems used in a variety of computing environments?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Describe Operating System structures in detail. Examine the components of OS structure.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Illustrate the Booting process of an Operating System step by step.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Categorize and describe the different types of system calls (process control, file management, device management, information maintenance, communication).", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain the different process management system calls. What is the role of the OS in managing system calls?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Outline and discuss the content available in a Process Control Block (PCB).", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "How are OS used in a variety of computing environments? Discuss embedded, mobile, client-server, and distributed OS.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Summarize the services provided by the Operating System. Differentiate between OS services for users and services for efficient operation.", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit II — Processes & Scheduling",
          twoMark: [
            { q: "Compare and contrast Single-threaded and Multi-threaded process.", tag: "★★★ Must Do", type: "Theory" },
            { q: "List out the data fields associated with Process Control Blocks.", tag: "★★★ Must Do", type: "Theory" },
            { q: "List the operations on a process.", tag: "★★ Important", type: "Theory" },
            { q: "Differentiate between process and a thread.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Represent the solution to critical-section problem using mutex locks.", tag: "★★ Important", type: "Theory" },
            { q: "Mention the four necessary conditions to hold simultaneously in a system for a deadlock situation.", tag: "★★ Important", type: "Theory" },
            { q: "Compare logical address space with physical address space.", tag: "★★ Important", type: "Theory" },
            { q: "Why does thrashing occur in the OS?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Given 5 processes with arrival time, burst time, and priority — calculate average waiting time and average turnaround time using Priority Non-Pre-emptive scheduling. (P1:0,4,2 | P2:1,3,3 | P3:2,1,4 | P4:3,5,5 | P5:4,2,5)", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Explain process scheduling algorithms: FCFS, SJF, Round Robin, Priority. Calculate metrics for given process tables.", tag: "★★★ Must Do", type: "Theory+Problem", marks: 5 },
            { q: "Explain multi-threading models: Many-to-One, One-to-One, Many-to-Many. Analyze implementation.", tag: "★★★ Must Do", type: "Theory", marks: 4 },
            { q: "Explain about Message Passing Systems in IPC. Explore shared memory and message passing systems.", tag: "★★ Important", type: "Theory", marks: 6 },
            { q: "Outline and discuss the content available in a Process Control Block.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explore the task of shared memory and message passing systems in IPC.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain about process scheduling algorithms in OS scheduling (Full explanation of all algorithms).", tag: "★★★ Must Do", type: "Theory", marks: 10 },
            { q: "Analyze the implementation of multithreading models. Compare benefits of multithreading over single-threading.", tag: "★★ Important", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit III — Deadlocks & Synchronization",
          twoMark: [
            { q: "Define busy waiting and Spinlock in OS.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Give the condition necessary for a deadlock situation to arise.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Represent solution to critical-section problem using mutex locks.", tag: "★★ Important", type: "Theory" },
            { q: "Mention the four necessary conditions to hold simultaneously for deadlock.", tag: "★★ Important", type: "Theory" },
            { q: "What is a semaphore? Differentiate binary semaphore and counting semaphore.", tag: "★★ Important", type: "Theory" },
            { q: "What is Peterson's Solution? What problem does it solve?", tag: "★★ Important", type: "Theory" },
            { q: "Define Resource Allocation Graph. How is it used to detect deadlock?", tag: "★★ Important", type: "Theory" },
            { q: "What is deadlock recovery? Name the two approaches.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Describe Deadlock Avoidance using Banker's Algorithm with an example. Show the safe sequence.", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "How is the Banker's Algorithm useful in avoiding deadlock? Explain with a full example (allocation, max, need, available matrices).", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Illustrate the Critical Section Problem solution for Dining Philosophers using Semaphores.", tag: "★★★ Must Do", type: "Theory+Algorithm", marks: 5 },
            { q: "Interpret the role of resource-allocation graph in dealing with deadlocks.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Demonstrate the strategy of Semaphores in handling the critical section problem.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "How can deadlock be detected? Explain the detection algorithm.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Label the structure of Peterson's solution. Interpret Peterson's solution for mutual exclusion.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Define busy waiting. How can we avoid busy waiting using semaphores with an example?", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit IV — Memory Management",
          twoMark: [
            { q: "What is meant by Demand Paging?", tag: "★★★ Must Do", type: "Theory" },
            { q: "What are contiguous memory allocation techniques?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Compare logical address space with physical address space.", tag: "★★ Important", type: "Theory" },
            { q: "Why does thrashing occur in the OS?", tag: "★★ Important", type: "Theory" },
            { q: "What is Virtual Memory? State 2 benefits.", tag: "★★ Important", type: "Theory" },
            { q: "What is Segmentation? State its advantages.", tag: "★★ Important", type: "Theory" },
            { q: "What is a page fault? What happens when a page fault occurs?", tag: "★★ Important", type: "Theory" },
            { q: "What is the difference between paging and segmentation?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Find the seek distance of read/write head using SSTF disk scheduling. Cylinder requests: 82,170,43,140,24,16,190. Current position: 50.", tag: "★★★ Must Do", type: "Problem", marks: 6 },
            { q: "Find number of page faults using LRU page replacement algorithm. Frames = 3 and 4. Page requests: 5,7,6,0,7,1,7,2,0,1,7,1,0.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Explain the significance of Paging. What is Demand Paging? Illustrate step-by-step procedure for handling a page fault.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is Segmentation? Explain with example. Analyze techniques used for structuring the page table.", tag: "★★ Important", type: "Theory", marks: 6 },
            { q: "Compare logical address space with physical address space. How is address translation done using MMU?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "What is Virtual Memory? Discuss the benefits of virtual memory techniques.", tag: "★★ Important", type: "Theory", marks: 4 },
            { q: "What are contiguous memory allocation techniques? Explain first-fit, best-fit, worst-fit.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "With a neat diagram, elucidate the HDD moving-head disk mechanism.", tag: "★★ Important", type: "Theory", marks: 5 }
          ]
        },
        {
          name: "Unit V — File Systems & Protection",
          twoMark: [
            { q: "List various operations performed in a File.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What are the different methods for allocation in a File System?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Summarize the pieces of information associated with an open file.", tag: "★★ Important", type: "Theory" },
            { q: "Name the operations performed on a file.", tag: "★★ Important", type: "Theory" },
            { q: "What is free space management? Name the methods.", tag: "★★ Important", type: "Theory" },
            { q: "What is a directory? Name 3 types of directory structures.", tag: "★★ Important", type: "Theory" },
            { q: "What are the different file access methods?", tag: "★★ Important", type: "Theory" },
            { q: "What is protection in an OS? Name the mechanisms used.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Explain the concept of a File with example. Elaborate the functionality of various file access methods (sequential, direct, indexed).", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Explain different methods for allocation of secondary storage space (contiguous, linked, indexed). Compare their advantages and disadvantages.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Diagnose the most common schemes for defining the logical structure of a directory. Explain all directory organization types.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is free space management technique? Explain bit vector, linked list, grouping, counting methods.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Explain protection domains. How are they combined with an access matrix to specify resources a process may access?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain protection rings. What is the significance of protection in an OS?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "List various operations performed on a file. What information is associated with an open file?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Assess major methods of allocating secondary storage space. Which method is most efficient and why?", tag: "★ Know", type: "Theory", marks: 5 }
          ]
        }
      ]
    }
  ];
  const [view, setView] = useState('landing');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [doneQuestions, setDoneQuestions] = useState(() => {
    try {
      const saved = localStorage.getItem('keyQ-progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [activeSection, setActiveSection] = useState('2m');
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem('keyQ-progress', JSON.stringify(doneQuestions));
    } catch {
      // Storage full or unavailable
    }
  }, [doneQuestions]);

  function resetProgress() {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      setDoneQuestions({});
      localStorage.removeItem('keyQ-progress');
    }
  }

  useEffect(() => {
    document.body.className = theme === 'focus' ? 'theme-focus' : 'theme-light';
  }, [theme]);

  // Handle fake loading for shimmer
  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 400); // 400ms shimmer
    return () => clearTimeout(t);
  }, [view, selectedSubject, selectedUnit, activeSection, theme]);

  const toggleDone = (subjectId, unitIdx, section, qIdx) => {
    const key = `${subjectId}-${unitIdx}-${section}-${qIdx}`;
    setDoneQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getSubjectDoneCount = (subject, checked) => {
    let done = 0;
    let total = 0;
    subject.units.forEach((unit, ui) => {
      unit.twoMark.forEach((_, qi) => {
        total++;
        if (checked[`${subject.id}-${ui}-2m-${qi}`]) done++;
      });
      unit.longAnswer.forEach((_, qi) => {
        total++;
        if (checked[`${subject.id}-${ui}-long-${qi}`]) done++;
      });
    });
    return { done, total };
  };

  const getUnitDoneCount = (subject, unitIdx, checked) => {
    let done = 0;
    let total = 0;
    const unit = subject.units[unitIdx];
    unit.twoMark.forEach((_, qi) => {
      total++;
      if (checked[`${subject.id}-${unitIdx}-2m-${qi}`]) done++;
    });
    unit.longAnswer.forEach((_, qi) => {
      total++;
      if (checked[`${subject.id}-${unitIdx}-long-${qi}`]) done++;
    });
    return { done, total };
  };

  const navigateToSubject = (subject) => {
    setSelectedSubject(subject);
    setView('subject');
  };

  const navigateToUnit = (unitIndex) => {
    setSelectedUnit(unitIndex);
    setActiveSection('2m');
    setActiveFilter('all');
    setView('unit');
  };

  const navigateToDashboard = () => {
    setView('dashboard');
  };

  const renderCSS = () => (
    <style dangerouslySetInnerHTML={{
      __html: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap');
    
    html { 
      scroll-behavior: smooth; 
      scrollbar-width: thin;
      scrollbar-color: var(--card-border) transparent;
    }

    :root {
      --bg-color: #f9f9f7;
      --text-main: #1a1a2e;
      --text-muted: #888;
      --card-bg: rgba(255, 255, 255, 0.95);
      --card-border: #eee;
      --glass-bg: rgba(255, 255, 255, 0.85);
    }

    body.theme-focus {
      --bg-color: #0f172a;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --card-bg: rgba(30, 41, 59, 0.95);
      --card-border: #334155;
      --glass-bg: rgba(15, 23, 42, 0.9);
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      -webkit-font-smoothing: antialiased;
      transition: background-color 0.4s ease, color 0.4s ease;
    }
    * { box-sizing: border-box; }
    
    h1, h2, h3, .playfair { font-family: 'Playfair Display', serif; }

    .landing-btn {
      background: var(--text-main); color: var(--bg-color); padding: 14px 36px; border-radius: 50px;
      font-size: 15px; font-family: 'Inter', sans-serif; border: none; cursor: pointer;
      margin-top: 40px; transition: all 0.2s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }
    .landing-btn:hover {
      transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    }

    .subject-card {
      background: var(--card-bg); border-radius: 16px; padding: 28px 24px; border: 1px solid var(--card-border);
      cursor: pointer; transition: all 0.25s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      position: relative; overflow: hidden;
      display: flex; flex-direction: column; height: 100%; min-height: 220px;
    }

    .unit-card {
      background: var(--card-bg); border-radius: 14px; border: 1px solid var(--card-border); margin-bottom: 14px;
      overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: transform 0.2s ease;
    }
    .unit-card-header {
      padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;
    }
    .unit-card:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.08); }

    .filter-btn {
      background: var(--card-bg); border: 1px solid var(--card-border); color: var(--text-muted); padding: 7px 16px;
      border-radius: 20px; font-size: 12px; cursor: pointer; transition: all 0.2s;
    }

    .section-toggle-container {
      background: var(--card-bg); border-radius: 50px; padding: 4px; display: inline-flex; border: 1px solid var(--card-border);
      margin: 20px auto;
    }
    .section-toggle-btn {
      padding: 10px 28px; border-radius: 50px; border: none; font-size: 13px; cursor: pointer; transition: all 0.2s;
      background: transparent; color: var(--text-muted); font-family: 'Inter', sans-serif; font-weight: 500;
    }
    
    .question-card {
      background: var(--card-bg); border-radius: 12px; border: 1px solid var(--card-border); padding: 16px 20px;
      margin-bottom: 10px; display: flex; gap: 14px; transition: background 0.2s, opacity 0.3s;
    }
    
    .shimmer-bg {
      background: var(--card-border);
      position: relative;
      overflow: hidden;
    }
    .shimmer-bg::after {
      content: '';
      position: absolute;
      top: 0; left: -100%; width: 50%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
      animation: shimmer 1.5s infinite;
    }
    body.theme-light .shimmer-bg::after {
      background: linear-gradient(90deg, transparent, rgba(0,0,0,0.04), transparent);
    }
    @keyframes shimmer { 100% { left: 100%; } }

    .app-container { max-width: 960px; margin: 0 auto; padding: 40px 20px; position: relative; }
    @media (max-width: 600px) { .app-container { padding: 20px 16px; } }
    
    .tag { font-size: 10px; font-weight: 600; padding: 3px 8px; border-radius: 12px; border: 1px solid transparent; }

    .glass-tag {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    body.theme-light .glass-tag {
      color: #333;
    }
    body.theme-focus .glass-tag {
      color: #cbd5e1;
    }

    .glass-header {
      background: var(--glass-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--card-border);
    }

    .search-input {
      background: transparent;
      color: var(--text-main);
      outline: none;
      font-family: 'Inter', sans-serif;
      width: 100%; border: none;
    }
    .search-input::placeholder { color: var(--text-muted); }

    .difficulty-badge {
      font-size: 10px; font-weight: 800; letter-spacing: 0.5px;
      padding: 4px 12px; border-radius: 6px; text-transform: uppercase;
      display: inline-flex; align-items: center; justify-content: center;
      border-width: 1px; border-style: solid;
    }
    `}} />
  );

  const ProgressRing = ({ radius, stroke, progress }) => {
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <svg height={radius * 2} width={radius * 2} style={{ transform: 'rotate(-90deg)' }}>
        <circle stroke="var(--card-border)" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
        <motion.circle
          stroke="url(#golden-gradient)" fill="transparent" strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
          strokeLinecap="round" r={normalizedRadius} cx={radius} cy={radius}
        />
        <defs>
          <linearGradient id="golden-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB8C00" />
            <stop offset="100%" stopColor="#FFB74D" />
          </linearGradient>
        </defs>
      </svg>
    );
  };



  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: [0.43, 0.13, 0.23, 0.96], duration: 0.5 } }
  };

  const getTagStyle = (tagStr) => {
    if (theme === 'focus') {
      if (tagStr.includes('★★★ Must Do')) return { bg: 'rgba(239, 68, 68, 0.1)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.2)' };
      if (tagStr.includes('★★ Important')) return { bg: 'rgba(245, 158, 11, 0.1)', color: '#fcd34d', border: '1px solid rgba(245, 158, 11, 0.2)' };
      if (tagStr.includes('★ Know')) return { bg: 'rgba(59, 130, 246, 0.1)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.2)' };
      return { bg: 'rgba(148, 163, 184, 0.1)', color: '#cbd5e1', border: '1px solid rgba(148, 163, 184, 0.2)' };
    }
    if (tagStr.includes('★★★ Must Do')) return { bg: '#fff0f0', color: '#c1121f', border: '1px solid #fecaca' };
    if (tagStr.includes('★★ Important')) return { bg: '#fff8e6', color: '#b45309', border: '1px solid #fde68a' };
    if (tagStr.includes('★ Know')) return { bg: '#f0f4ff', color: '#2d5aa0', border: '1px solid #c7d7f5' };
    return { bg: '#f3f4f6', color: '#4b5563', border: '1px solid #e5e7eb' };
  };

  const getTypeStyle = (typeStr) => {
    if (theme === 'focus') {
      if (typeStr.includes('Theory+Problem')) return { bg: 'rgba(249, 115, 22, 0.15)', color: '#fdba74' };
      if (typeStr.includes('Theory')) return { bg: 'rgba(168, 85, 247, 0.15)', color: '#d8b4fe' };
      if (typeStr.includes('Problem')) return { bg: 'rgba(34, 197, 94, 0.15)', color: '#86efac' };
      if (typeStr.includes('Algorithm')) return { bg: 'rgba(56, 189, 248, 0.15)', color: '#7dd3fc' };
      return { bg: 'rgba(148, 163, 184, 0.15)', color: '#cbd5e1' };
    }
    if (typeStr.includes('Theory+Problem')) return { bg: '#fff3e0', color: '#e65100' };
    if (typeStr.includes('Theory')) return { bg: '#f3e5f5', color: '#6a1b9a' };
    if (typeStr.includes('Problem')) return { bg: '#e8f5e9', color: '#2e7d32' };
    if (typeStr.includes('Algorithm')) return { bg: '#e3f2fd', color: '#1565c0' };
    return { bg: '#f3f4f6', color: '#4b5563' };
  };

  const getMarksStyle = (marks) => {
    if (marks === 10) return { bg: theme === 'focus' ? 'rgba(239, 68, 68, 0.1)' : '#fef2f2', color: theme === 'focus' ? '#fca5a5' : '#991b1b' };
    return { bg: theme === 'focus' ? 'rgba(34, 197, 94, 0.1)' : '#f0fdf4', color: theme === 'focus' ? '#86efac' : '#166534' };
  };

  function SubjectCard({ subject, onClick }) {
    const cardRef = React.useRef(null);

    function handleMouseMove(e) {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -10;
      const rotateY = ((x - cx) / cx) * 10;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    }

    function handleMouseLeave() {
      cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    }

    const { done, total } = getSubjectDoneCount(subject, doneQuestions);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isDark = theme === 'focus';
    return (
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: isDark ? 'rgba(255,255,255,0.04)' : 'var(--card-bg)',
          border: isDark ? '1px solid rgba(124,58,237,0.3)' : '1px solid var(--card-border)',
          borderRadius: '20px', padding: '28px',
          cursor: 'pointer', transition: 'transform 0.1s ease, box-shadow 0.3s ease',
          boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.4)' : '0 2px 12px rgba(0,0,0,0.06)',
          backdropFilter: 'blur(16px)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', height: '100%', minHeight: '220px'
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: '120px', height: '120px',
          background: isDark
            ? 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)'
            : `radial-gradient(circle, ${subject.lightColor} 0%, transparent 70%)`,
          pointerEvents: 'none'
        }} />

        <h3 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '18px', marginBottom: '8px' }}>
          {subject.name}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '20px' }}>
          {total} Questions · 5 Units
        </p>

        <div style={{
          background: isDark ? 'rgba(255,255,255,0.08)' : 'var(--card-border)',
          borderRadius: '999px', height: '6px', overflow: 'hidden', marginBottom: '10px'
        }}>
          <div style={{
            width: `${pct}%`, height: '100%',
            background: isDark ? 'linear-gradient(90deg, #7c3aed, #06b6d4)' : subject.color,
            borderRadius: '999px', transition: 'width 0.6s ease',
            boxShadow: isDark ? '0 0 8px rgba(124,58,237,0.6)' : 'none'
          }} />
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
          {pct}% complete · {done}/{total} done
        </p>
      </div>
    );
  }


  const SkeletonDashboard = () => (
    <div className="app-container" style={{ paddingTop: 80 }}>
      <div style={{ width: 200, height: 40, marginBottom: 8, borderRadius: 8 }} className="shimmer-bg" />
      <div style={{ width: 300, height: 20, marginBottom: 32, borderRadius: 8 }} className="shimmer-bg" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {[1, 2, 3, 4].map(i => <div key={i} className="subject-card shimmer-bg" style={{ height: 220, borderRadius: 16 }} />)}
      </div>
    </div>
  );

  const SkeletonUnit = () => (
    <div className="app-container" style={{ paddingTop: 80 }}>
      <div style={{ width: 100, height: 20, marginBottom: 16, borderRadius: 8 }} className="shimmer-bg" />
      <div style={{ width: 250, height: 32, marginBottom: 8, borderRadius: 8 }} className="shimmer-bg" />
      <div style={{ width: 150, height: 20, marginBottom: 20, borderRadius: 8 }} className="shimmer-bg" />
      <div style={{ marginTop: 40 }}>
        {[1, 2, 3, 4].map(i => <div key={i} className="question-card shimmer-bg" style={{ height: 100, borderRadius: 12, marginBottom: 10 }} />)}
      </div>
    </div>
  );

  const GlobalHeader = () => (
    <header style={{
      position: "fixed", top: 0, right: 0, left: 0,
      zIndex: 110, display: "flex", gap: "10px",
      alignItems: "center", justifyContent: "flex-end",
      padding: "12px 20px",
      background: "transparent",
      pointerEvents: "none"
    }}>
      <div style={{ display: "flex", gap: "10px", pointerEvents: "auto" }}>
        <button onClick={resetProgress} style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--glass-bg)", border: "1px solid var(--card-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-main)", backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }} title="Reset Progress">
          <X size={18} />
        </button>
        <button onClick={() => setTheme(t => t === 'light' ? 'focus' : 'light')} style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--glass-bg)", border: "1px solid var(--card-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-main)", backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );

  if (view === 'landing') {
    return (
      <div className="anime-bg">
        {renderCSS()}
        {/* Particle-like decorative lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '80px 24px 40px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(124,58,237,0.2)',
              border: '1px solid rgba(124,58,237,0.5)',
              borderRadius: '999px', padding: '6px 16px', marginBottom: '32px',
              color: '#a78bfa', fontSize: '13px', fontWeight: 600,
              boxShadow: '0 0 20px rgba(124,58,237,0.3)'
            }}>
            <span>⚡</span>
            <span>EXAM SEASON — FINAL FORM</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 900, lineHeight: 1.05,
              background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 40%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '24px', letterSpacing: '-2px'
            }}>
            keyQ
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '18px', color: 'rgba(255,255,255,0.6)',
              maxWidth: '480px', lineHeight: 1.7, marginBottom: '48px'
            }}>
            400 questions across 5 subjects.<br />
            Track every mark. Own your exam.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setView('dashboard')}
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              border: 'none', borderRadius: '12px',
              padding: '16px 40px', fontSize: '16px', fontWeight: 700,
              color: 'white', cursor: 'pointer',
              boxShadow: '0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(6,182,212,0.2)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 50px rgba(124,58,237,0.7), 0 0 80px rgba(6,182,212,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(6,182,212,0.2)';
            }}
          >
            Begin Study Session →
          </motion.button>
        </div>
      </div>
    );
  }

  if (view === 'dashboard') {
    if (isLoading) return <><GlobalHeader />{renderCSS()}<SkeletonDashboard /></>;
    return (
      <div className="app-container">
        {renderCSS()}
        <GlobalHeader />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: "32px", paddingTop: "20px" }}>
          <h1 className="playfair" style={{ fontSize: "32px", color: "var(--text-main)", margin: 0 }}>Choose a Subject</h1>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: "6px" }}>5 subjects · 5 units each</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center',
            padding: '0 24px 48px'
          }}>
          {[
            { label: 'Subjects', value: '5' },
            { label: 'Total Questions', value: '400' },
            { label: 'Units Each', value: '5' },
            { label: 'Max Marks', value: '5M' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '16px', padding: '20px 32px',
              textAlign: 'center', minWidth: '120px'
            }}>
              <div style={{
                fontSize: '32px', fontWeight: 900,
                background: 'linear-gradient(135deg, #a78bfa, #06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{stat.value}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
          {SUBJECTS.map((sub, i) => {
            const { done, total } = getSubjectDoneCount(sub, doneQuestions);
            const pct = Math.round((done / total) * 100);
            return (
              <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", padding: "6px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 500, color: "var(--text-muted)", backdropFilter: "blur(8px)" }}>
                {sub.shortName} <span style={{ color: theme === 'focus' ? '#fbbf24' : sub.color, marginLeft: 4 }}>{pct}% done</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {SUBJECTS.map((sub) => (
            <motion.div key={sub.id} variants={itemVariants}>
              <SubjectCard subject={sub} onClick={() => navigateToSubject(sub)} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  if (view === 'subject') {
    if (isLoading) return <><GlobalHeader />{renderCSS()}<SkeletonDashboard /></>;
    const sub = selectedSubject;
    const { done: totalDone, total } = getSubjectDoneCount(sub, doneQuestions);

    return (
      <div className="app-container">
        {renderCSS()}
        <GlobalHeader />
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", fontSize: "13px", color: "var(--text-muted)", fontWeight: 500, marginTop: "20px" }} onClick={navigateToDashboard}>
          <ArrowLeft size={16} style={{ marginRight: 6 }} /> All Subjects
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="playfair" style={{ fontSize: "28px", color: "var(--text-main)", marginTop: "16px", marginBottom: "4px" }}>{sub.name}</h1>
          <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "1px" }}>{sub.code}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", gap: "10px", marginTop: "24px", flexWrap: "wrap" }}>
          {["5 Units", `${total} Questions`, `${totalDone} Done`].map((txt, i) => (
            <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", padding: "5px 12px", borderRadius: "20px", fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
              {txt}
            </div>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ marginTop: "40px" }}>
          {sub.units.map((unit, idx) => {
            const { done: unitDone, total: unitTotal } = getUnitDoneCount(sub, idx, doneQuestions);
            const pct = (unitDone / unitTotal) * 100;
            return (
              <motion.div variants={itemVariants} key={idx} className="unit-card" onClick={() => navigateToUnit(idx)}>
                <div className="unit-card-header">
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-main)" }}>{unit.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>{unit.twoMark.length} × 2M · {unit.longAnswer.length} × Long · {unitDone} done</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: 44, height: 44, position: "relative" }}>
                      <ProgressRing radius={22} stroke={3} progress={pct} color={sub.color} />
                      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "bold", color: "var(--text-main)" }}>
                        {Math.round(pct)}%
                      </div>
                    </div>
                    <ChevronDown size={20} color="var(--text-muted)" style={{ marginLeft: 12, transform: 'rotate(-90deg)' }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }

  if (view === 'unit') {
    if (isLoading) return <><GlobalHeader />{renderCSS()}<SkeletonUnit /></>;
    const sub = selectedSubject;
    const unit = sub.units[selectedUnit];

    const questionsList = activeSection === '2m' ? unit.twoMark : unit.longAnswer;

    const filteredQuestions = questionsList.filter(q => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'must' && q.tag.includes('★★★ Must Do')) return true;
      if (activeFilter === 'important' && q.tag.includes('★★ Important')) return true;
      if (activeFilter === 'know' && q.tag.includes('★ Know')) return true;
      return false;
    });

    const { done: unitDoneCount, total: unitTotalQuestions } = getUnitDoneCount(sub, selectedUnit, doneQuestions);

    return (
      <div style={{ paddingBottom: "30px", minHeight: "100vh", position: "relative" }}>
        {renderCSS()}
        <GlobalHeader />
        <div className="app-container" style={{ paddingTop: "40px" }}>
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", fontSize: "13px", color: "var(--text-muted)", fontWeight: 500, marginTop: "20px" }} onClick={() => { navigateToSubject(sub); }}>
            <ArrowLeft size={16} style={{ marginRight: 6 }} /> {sub.shortName}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
            <div className="section-toggle-container">
              <button
                className={`section-toggle-btn ${activeSection === '2m' ? 'active' : ''}`}
                style={activeSection === '2m' ? { background: theme === 'focus' ? '#fbbf24' : sub.color, color: theme === 'focus' ? '#0f172a' : 'white', boxShadow: "0 2px 10px rgba(0,0,0,0.1)" } : {}}
                onClick={() => { setActiveSection('2m'); setActiveFilter('all'); }}
              >
                2 Mark Questions
              </button>
              <button
                className={`section-toggle-btn ${activeSection === 'long' ? 'active' : ''}`}
                style={activeSection === 'long' ? { background: theme === 'focus' ? '#fbbf24' : sub.color, color: theme === 'focus' ? '#0f172a' : 'white', boxShadow: "0 2px 10px rgba(0,0,0,0.1)" } : {}}
                onClick={() => { setActiveSection('long'); setActiveFilter('all'); }}
              >
                Long Answers
              </button>
            </div>
          </motion.div>

          <div className="glass-header" style={{ position: "sticky", top: 0, zIndex: 100, padding: "20px 0", margin: "20px -20px", paddingLeft: "20px", paddingRight: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ overflow: "hidden" }}>
                <motion.h1 layout layoutId="unit-title" className="playfair" style={{ margin: 0, fontSize: "20px", color: "var(--text-main)", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{unit.name}</motion.h1>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600 }}>{sub.name} · Unit {selectedUnit + 1}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "16px", fontWeight: "900", color: "#FB8C00" }}>{Math.round((unitDoneCount / unitTotalQuestions) * 100)}%</span>
              </div>
            </div>
            <div style={{ height: 6, background: "var(--card-border)", borderRadius: 3, overflow: "hidden", marginBottom: "20px", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${(unitDoneCount / unitTotalQuestions) * 100}%` }} transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} style={{ height: "100%", background: 'linear-gradient(90deg, #FB8C00, #FFB74D)', boxShadow: "0 0 10px rgba(251, 140, 0, 0.4)" }} />
            </div>
            <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px", scrollbarWidth: "none" }}>
              {[
                { id: 'all', label: 'All' },
                { id: 'must', label: '★★★ Must Do' },
                { id: 'important', label: '★★ Important' },
                { id: 'know', label: '★ Know' }
              ].map(f => (
                <button
                  key={f.id}
                  className="filter-btn"
                  style={activeFilter === f.id ? { background: theme === 'focus' ? 'rgba(251, 191, 36, 0.2)' : sub.color, borderColor: theme === 'focus' ? '#fbbf24' : sub.color, color: theme === 'focus' ? '#fbbf24' : 'white' } : { whiteSpace: "nowrap" }}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>





          <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ display: "flex", flexDirection: "column" }}>
            <AnimatePresence mode="popLayout">
              {filteredQuestions.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: "center", padding: "40px 20px", color: "var(--text-muted)", fontSize: "14px", border: "1px dashed var(--card-border)", borderRadius: "12px", marginTop: "20px" }}>
                  No questions found.
                </motion.div>
              ) : (
                filteredQuestions.map((q) => {
                  const trueIdx = questionsList.findIndex(item => item.q === q.q);
                  const isDone = doneQuestions[`${sub.id}-${selectedUnit}-${activeSection}-${trueIdx}`];
                  const ts = getTagStyle(q.tag);
                  const ty = getTypeStyle(q.type);

                  return (
                    <motion.div
                      layout
                      variants={itemVariants}
                      initial="hidden" animate="show" exit={{ opacity: 0, scale: 0.95 }}
                      key={q.q}
                      className="question-card"
                      style={{ opacity: isDone ? 0.6 : 1 }}
                    >
                      <div style={{ width: "32px", display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "transparent", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "bold", marginBottom: 12, border: "1px solid var(--card-border)" }}>
                          {trueIdx + 1}
                        </div>
                        <motion.div whileTap={{ scale: 1.2 }} style={{ cursor: "pointer" }} onClick={() => toggleDone(sub.id, selectedUnit, activeSection, trueIdx)}>
                          {isDone ?
                            <div style={{ width: 22, height: 22, background: theme === 'focus' ? '#fbbf24' : sub.color, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><Check size={14} color={theme === 'light' ? 'white' : '#0f172a'} strokeWidth={3} /></div> :
                            <div style={{ width: 22, height: 22, border: "2px solid var(--text-muted)", borderRadius: 6, opacity: 0.5 }}></div>
                          }
                        </motion.div>
                      </div>
                      <div style={{ flex: 1, paddingLeft: 8 }}>
                        <div style={{ fontSize: "14px", color: "var(--text-main)", lineHeight: 1.7, textDecoration: isDone ? "line-through" : "none", transition: "all 0.3s" }}>
                          {q.q}
                        </div>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "12px" }}>
                          <span className="tag" style={{ background: ts.bg, color: ts.color, border: ts.border }}>{q.tag}</span>
                          <span className="tag" style={{ background: ty.bg, color: ty.color }}>{q.type}</span>
                          {q.marks && (
                            <span className="tag" style={{ background: getMarksStyle(q.marks).bg, color: getMarksStyle(q.marks).color }}>
                              {typeof q.marks === 'string' ? q.marks : `${q.marks}M`}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}
export default App;