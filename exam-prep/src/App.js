import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, Check, Moon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import frame1 from './assets/frame1.png';
import frame2 from './assets/frame2.png';
import frame3 from './assets/frame3.png';
import frame4 from './assets/frame4.png';
const frames = [frame1, frame2, frame3, frame4];

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
            { q: "Find the Geometric Mean of 2, 4, 8, 12, 16 and 24.", tag: "★★★ Must Do", type: "Problem" },
            { q: "Define Skewness. What are the measures of Skewness?", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define moments. Write the relation between central and non-central moments.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define Primary data and Secondary data with examples.", tag: "★★ Important", type: "Theory" },
            { q: "Explain Frequency Polygon and Frequency Curve.", tag: "★★ Important", type: "Theory" },
            { q: "Find the median of: 40, 12, 35, 8, 60.", tag: "★★ Important", type: "Problem" },
            { q: "Define Quartile Deviation and Mean Deviation.", tag: "★★ Important", type: "Theory" },
            { q: "Define combined mean and combined standard deviation for two groups. Calculate for: n₁=50, n₂=100, x̄₁=54.1, x̄₂=50.3, σ₁=8, σ₂=7.", tag: "★★ Important", type: "Problem" },
            { q: "What are the different types of class intervals?", tag: "★ Know", type: "Theory" },
            { q: "Define Kurtosis. What does it measure about a distribution?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Find the Mean, Median, and Mode from the following data:\nSize (below): 5, 10, 15, 20, 25, 30, 35\nFrequency: 1, 3, 13, 17, 27, 36, 38", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "From the prices X and Y of shares A and B, state which share is more stable in value:\nX: 55, 54, 52, 53, 56, 58, 52, 50, 51, 49\nY: 108, 107, 105, 105, 106, 107, 104, 103, 104, 101", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Two batsmen A and B made the following scores. Whom will you select for the final? Justify using CV.\nA: 14, 13, 26, 53, 17, 29, 79, 36, 84, 49\nB: 37, 22, 56, 52, 28, 30, 37, 48, 20, 40", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Calculate the first four moments about the mean and find β₁ and β₂:\nx: 0, 1, 2, 3, 4, 5, 6, 7, 8\nf: 1, 8, 28, 56, 70, 56, 28, 8, 1", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Calculate Karl Pearson's coefficient of Skewness:\nSize: 1, 2, 3, 4, 5, 6, 7\nFrequency: 10, 18, 30, 25, 12, 3, 2", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "The mean weight of 150 students is 60 kg. Mean weights of boys and girls are 70 kg and 55 kg respectively, SDs are 10 and 15. Find number of boys and combined standard deviation.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "From the following data compute Q₁, Q₃, D₆, and P₈₀:\nAge: 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60\nNo. of Students: 60, 80, 90, 150, 180, 130, 140, 60", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Calculate moments about assumed mean 25 and convert to central moments. Find β₁ and β₂:\nVariable: 0-10, 10-20, 20-30, 30-40\nFrequency: 1, 3, 4, 2", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Analysis of monthly wages of two firms A and B:\nFirm A — Workers: 500, Avg wage: 186, Variance: 81\nFirm B — Workers: 600, Avg wage: 175, Variance: 100\n(i) Which has larger wage bill? (ii) Greater variability? (iii) Combined average and variance.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Find the mean, median, and mode:\nClass: 0-9, 10-19, 20-29, 30-39, 40-49, 50-59\nFrequency: 10, 40, 80, 70, 30, 20", tag: "★★ Important", type: "Problem", marks: 5 }
          ]
        },
        {
          name: "Unit II — Probability & Random Variables",
          twoMark: [
            { q: "State Baye's Theorem.", tag: "★★★ Must Do", type: "Theory" },
            { q: "A random variable X has distribution. Find P(X < 2):\nX: 0, 1, 2, 3, 4\nP(X): 1/16, 4/16, 6/16, 4/16, 1/16", tag: "★★★ Must Do", type: "Problem" },
            { q: "Define (i) Probability Mass Function (ii) Probability Density Function.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define Distribution Function and mention its properties.", tag: "★★ Important", type: "Theory" },
            { q: "Define Mathematical Expectation of a random variable and write any two properties.", tag: "★★ Important", type: "Theory" },
            { q: "Two unbiased dice are thrown. Find the probability that both dice show the same number.", tag: "★★ Important", type: "Problem" },
            { q: "Define (i) Axiomatic definition of probability (ii) Conditional Probability.", tag: "★★ Important", type: "Theory" },
            { q: "Define equally likely and mutually exclusive events.", tag: "★★ Important", type: "Theory" },
            { q: "A variate X has probability distribution. Find E(X²):\nX: −3, 6, 9\nP(X): 1/6, 1/2, 1/3", tag: "★ Know", type: "Problem" },
            { q: "Define Variance and Covariance in terms of Expectations.", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "In a bolt factory, machines A, B, C manufacture 25%, 35%, 40% of output and 5%, 4%, 2% are defective respectively. A bolt drawn at random is found defective. Find probability it was manufactured by A, B, and C.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "A restaurant serves dishes A and B to customers: 60% men and 40% women. 80% of men order A, rest order B. 70% of women order B, rest order A. In what ratio should A and B be prepared?", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "For a continuous PDF f(x) = kxe^(−x), x ≥ 0. Find (i) k (ii) Mean (iii) Variance.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Given PMF: X: −3,−2,−1,0,1,2,3 and p(x): 0.05,0.10,0.30,0,0.30,0.15,0.10. Compute (i) E(X) (ii) E(2X+3) (iii) V(X) (iv) V(2X+3).", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "State and prove Baye's Theorem. Apply: Probabilities of X, Y, Z becoming managers are 4/9, 2/9, 1/3. Probability bonus scheme introduced if X, Y, Z become manager is 3/10, 1/2, 4/5. Find (i) P(bonus introduced) (ii) P(manager was X | bonus introduced).", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "A random variable X has PDF f(x) = kx(1−x²) for 0 < x < 1, 0 otherwise. Find (i) constant k (ii) P(0.5 < X < 1.5) (iii) P(X > 1).", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "The probability of a man hitting a target is 1/3. (i) If he fires 5 times, find P(hitting at least twice). (ii) How many times must he fire so that P(hitting at least once) > 90%?", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Two dice are rolled. Let X = total points on upturned faces. Construct PMF table and draw probability chart. Also find distribution function F(X).", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "A die is tossed twice. Getting a number > 4 is a success. Find mean and variance of the probability distribution of successes.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "In a continuous distribution, relative frequency density is f(x) = y₀·x(2−x), 0 < x < 2. Find mean, variance, β₁ and β₂. Show the distribution is symmetrical.", tag: "★ Know", type: "Problem", marks: 5 }
          ]
        },
        {
          name: "Unit III — Correlation & Curve Fitting",
          twoMark: [
            { q: "Write the normal equations for curve Y = ae^(bx).", tag: "★★★ Must Do", type: "Theory" },
            { q: "Write the normal equations for straight line Y = a + bX for data: X: 2,4,6,8 and Y: 1,3,5,7.", tag: "★★★ Must Do", type: "Problem" },
            { q: "Distinguish between regression and multiple regression.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Write the normal equations for multiple regression equation Y on X₁ and X₂.", tag: "★★ Important", type: "Theory" },
            { q: "What are regression coefficients? Write the angle between two regression lines.", tag: "★★ Important", type: "Theory" },
            { q: "Define Rank Correlation under repeated ranks.", tag: "★★ Important", type: "Theory" },
            { q: "Find constants a and b for Y = a + bX given: Σx=14, Σy=36, Σx²=78, Σxy=210, n=4.", tag: "★★ Important", type: "Problem" },
            { q: "Two regression equations: x = 19.13 − 0.87y and y = 11.64 − 0.5x. Compute mean values of x and y.", tag: "★★ Important", type: "Theory" },
            { q: "Calculate Correlation Coefficient and SD of y: b_yx=0.88, b_xy=0.86, SD of x=2.", tag: "★ Know", type: "Problem" },
            { q: "What is regression? Why are there two regression lines?", tag: "★ Know", type: "Theory" }
          ],
          longAnswer: [
            { q: "Fit a curve of the form y = ab^x to the following data:\nx: 1, 2, 3, 4, 5, 6, 7, 8\ny: 1.0, 1.2, 1.8, 2.5, 3.6, 4.7, 6.6, 9.1", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Fit a parabola y = a + bx + cx² to the following data:\nX: 0, 1, 2, 3, 4, 5\nY: 1, 3, 7, 13, 21, 31", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Regression equations: 3x + 2y − 26 = 0 and 6x + y − 31 = 0. Find (i) Mean values of x and y (ii) Regression coefficients b_xy and b_yx (iii) Coefficient of correlation (iv) Most probable value of y when x = 5.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Ten competitors in a beauty contest ranked by three judges:\nJudge 1: 1,6,5,10,3,2,4,9,7,8\nJudge 2: 3,5,8,4,7,10,2,1,6,9\nJudge 3: 6,4,9,8,1,2,3,10,5,7\nFind which pair of judges has common taste in beauty.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Find Y when X₁=10 and X₂=6 from the least squares regression equation of Y on X₁ and X₂:\nY: 90,72,54,42,30,12\nX₁: 3,5,6,8,12,14\nX₂: 16,10,7,4,3,2", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Fit an exponential curve y = ae^(bx) to the data:\nX: 2, 4, 6, 8\nY: 25, 38, 56, 84", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Two regression lines of bivariate population: 8x − 10y + 66 = 0 and 40x − 18y = 214. Variance of x = 9. Find (i) Mean values (ii) Correlation between x and y (iii) SD of y.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Obtain correlation coefficient between X and Y:\nX: 68,64,75,50,64,80,75,40,55,64\nY: 62,58,68,45,81,60,68,48,50,70", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Fit a curve y = ax^b to the data and estimate y when x = 6:\nX: 1, 2, 3, 4, 5\nY: 0.5, 2, 4.5, 8, 12.5", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "From the following data obtain two regression lines:\nSales: 100,98,78,85,110,93,80\nPurchase: 85,90,70,72,95,81,74", tag: "★ Know", type: "Problem", marks: 5 }
          ]
        },
        {
          name: "Unit IV — Sampling Distributions",
          twoMark: [
            { q: "Define standard error and mention its importance.", tag: "★★★ Must Do", type: "Theory" },
            { q: "In a sample of size n=144, SD=4, Mean=150. Find the 95% confidence interval.", tag: "★★★ Must Do", type: "Problem" },
            { q: "State the Central Limit Theorem.", tag: "★★★ Must Do", type: "Theory" },
            { q: "What is the maximum error of estimation?", tag: "★★ Important", type: "Theory" },
            { q: "Define t-distribution. What are its applications?", tag: "★★ Important", type: "Theory" },
            { q: "Define F-distribution. What are its characteristics?", tag: "★★ Important", type: "Theory" },
            { q: "What is the critical region and acceptance region in hypothesis testing?", tag: "★★ Important", type: "Theory" },
            { q: "What are the criteria of good estimation?", tag: "★★ Important", type: "Theory" },
            { q: "Given: Sampling error E=10, SD=48, Zα/2=1.645. Find sample size n.", tag: "★ Know", type: "Problem" },
            { q: "If n=81, SD=4.5, Mean=32. Find 99% confidence interval for mean.", tag: "★ Know", type: "Problem" }
          ],
          longAnswer: [
            { q: "A population consists of five numbers 2, 3, 6, 8 and 11. All possible samples of size 2 drawn WITH replacement. Find (a) Population mean (b) Population SD (c) Mean of sampling distribution of means (d) SD of sampling distribution of means.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "A population consists of six numbers 4, 8, 12, 16, 20, 24. All possible samples of size 2 drawn WITHOUT replacement. Find (a) Population mean (b) Population SD (c) Mean of sampling distribution (d) SD of sampling distribution of means.", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "In two large populations, there are 30% and 25% respectively of blue-eyed people. Is this difference likely to be hidden in samples of 1200 and 900 respectively from the two populations?", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "In a big city, 325 men out of 600 men were found to be smokers. Does this support the conclusion that majority of men are smokers? Find 95% confidence interval for proportion of smokers.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "The mean breaking strength of copper wire is 575 lbs with SD = 8.3 lbs. How large a sample must be used so that there is one chance in 100 that mean breaking strength of sample is less than 572 lbs?", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "A random sample of 500 pineapples from a large consignment showed 65 were bad. Show SE of proportion = 0.015 and deduce that percentage of bad pineapples lies between 8.5 and 17.5.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "A population consists of four numbers 2, 3, 4, 5. All possible samples of size 2 drawn WITH replacement. Find (a) Population mean (b) Population SD (c) Mean of sampling distribution (d) SD of sampling distribution.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "A random sample of 100 teachers revealed mean weekly salary Rs.487 with SD Rs.48. With what degree of confidence can we assert that average weekly salary is between Rs.472 and Rs.502?", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "A random sample of 700 units showed 200 were damaged. Find 95% and 99% confidence limits for proportion of damaged units in consignment.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Determine mean and SD of sampling distribution of means of 300 random samples each of size n=36 from population N=1500, mean=22.4, SD=0.048. If sampling is (a) with replacement (b) without replacement.", tag: "★ Know", type: "Problem", marks: 5 }
          ]
        },
        {
          name: "Unit V — Testing of Hypothesis",
          twoMark: [
            { q: "Write the step-by-step procedure of testing a hypothesis.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Define chi-square distribution and write its applications.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Explain Type I and Type II errors in sampling.", tag: "★★ Important", type: "Theory" },
            { q: "Write the test statistic for difference of means and difference of variances.", tag: "★★ Important", type: "Theory" },
            { q: "What is the 95% confidence interval for population mean when sample size is 16?", tag: "★★ Important", type: "Theory" },
            { q: "Explain interval estimation. How is it different from point estimation?", tag: "★★ Important", type: "Theory" },
            { q: "Define Population and Sample with examples.", tag: "★★ Important", type: "Theory" },
            { q: "Define Sampling Distribution.", tag: "★★ Important", type: "Theory" },
            { q: "What are the different types of sampling?", tag: "★ Know", type: "Theory" },
            { q: "A sample of size 64 is taken from a population with SD=2, probability 0.99. Find maximum error.", tag: "★ Know", type: "Problem" }
          ],
          longAnswer: [
            { q: "A random sample of 10 boys had IQs: 70, 120, 110, 101, 88, 83, 95, 98, 107, 100. Do these data support the assumption of population mean IQ = 100? Find a reasonable range for mean IQ values of samples of 10 boys.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "A stimulus administered to 12 patients resulted in increase of blood pressure: 5, 2, 8, −1, 3, 0, −2, 1, 5, 0, 4, 6. Can it be concluded that the stimulus will in general be accompanied by an increase in blood pressure?", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Time taken by workers performing a job:\nMethod I: 20, 16, 26, 27, 23, 22\nMethod II: 27, 33, 42, 35, 32, 34, 38\nDo the data show that variances of time distribution do not differ significantly?", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Fit a binomial distribution and test for goodness of fit:\nX: 0, 1, 2, 3, 4\nf(x): 17, 52, 54, 31, 6", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "An IQ test administered to 5 persons before and after training:\nBefore: 110, 120, 123, 132, 125\nAfter: 120, 118, 125, 136, 121\nTest whether there is any change in IQ after the training programme. (Paired t-test)", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Samples of two types of electric bulbs tested for length of life:\nType I — Size: 8, Mean: 1234, SD: 36\nType II — Size: 7, Mean: 1036, SD: 40\nIs the difference in means sufficient to warrant that Type I is superior to Type II?", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Gains in weight (kg) of pigs fed on two diets:\nDiet A: 25,32,30,34,24,14,32,24,30,31,35,25\nDiet B: 44,34,22,10,47,31,40,30,32,35,18,21,35,29,22\nTest if two diets differ significantly.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "In one sample of 8 observations, sum of squares of deviations = 84.4. In another sample of 10 observations it was 102.6. Test whether this difference is significant at 5% level. (F critical for n₁=7, n₂=9 is 3.29)", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Mean weekly sale of soap bars was 146.3 per store. After advertising campaign, mean weekly sales in 22 stores = 153.7 with SD = 17.2. Was the advertising campaign successful?", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Out of 8000 graduates, 800 are female. Out of 1600 graduate employees, 120 are female. Use chi-square to determine if any distinction is made in appointment based on gender. (χ² at 5% level, df=1 is 3.84)", tag: "★ Know", type: "Problem", marks: 5 }
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
            { q: "Create a Red-Black tree by inserting the following sequence: 8, 18, 5, 15, 17, 25, 40, 80. Explain all rules applied.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Demonstrate the process of deleting a node from a Red-Black Tree with an example. Show all cases.", tag: "★★ Important", type: "Problem", marks: 5 },
            { q: "Describe how graphs can be represented using (i) Adjacency Matrix (ii) Adjacency List. Compare both approaches.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Write an algorithm to construct a Min Heap Priority Queue and explain with an example.", tag: "★★★ Must Do", type: "Algorithm", marks: 7 },
            { q: "Construct a B-Tree of order 3 for the set: {10, 20, 30, 60, 40, 50}. Show all insertions.", tag: "★★★ Must Do", type: "Problem", marks: 3 },
            { q: "Explain BFS and DFS traversal of a graph with algorithm and example. Find time complexity of each.", tag: "★★★ Must Do", type: "Algorithm", marks: 5 }
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
            { q: "Define Biconnected Component and Connected Component of a graph.", tag: "★★ Important", type: "Theory" }
          ],
          longAnswer: [
            { q: "Write the Divide and Conquer recursive Merge Sort algorithm. Derive its time complexity using recurrence relation T(n) = 2T(n/2) + n.", tag: "★★★ Must Do", type: "Algorithm", marks: 5 },
            { q: "Write the Quick Sort algorithm using Divide and Conquer technique. Show worst-case complexity derivation.", tag: "★★★ Must Do", type: "Algorithm", marks: 5 },
            { q: "How would you describe the complexity of an algorithm using Big O, Omega, and Theta notations? Give examples for each.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Write an algorithm for DFS traversal of a graph and find its time complexity.", tag: "★★ Important", type: "Algorithm", marks: 5 },
            { q: "Write the General Method of Divide and Conquer. Explain with the control abstraction. State its applications.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain the significance of the Convex Hull problem. How is Divide and Conquer applied to solve it?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Write an algorithm for BFS traversal. Explain Connected and Biconnected Components with examples.", tag: "★★ Important", type: "Algorithm", marks: 5 },
            { q: "Explain Strassen's Matrix Multiplication using Divide and Conquer. Derive its time complexity and compare with the standard method.", tag: "★★ Important", type: "Theory", marks: 5 }
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
            { q: "What is Graph Coloring? Define chromatic number.", tag: "★★ Important", type: "Theory" }
          ],
          longAnswer: [
            { q: "Use greedy algorithm for Job Sequencing with Deadlines: n=7, profits=(3,5,20,18,1,6,30), deadlines=(1,3,4,3,2,1,2). Find optimal solution and total profit.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Apply greedy method for Job Sequencing with Deadlines: n=4, profits=(100,10,15,27), deadlines=(2,1,2,1). Find optimal schedule.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Explain the general principle of Greedy method. List and explain 4 applications of Greedy method.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Discuss the 4-Queens problem. Draw the portion of the state space tree for n=4 queens using backtracking.", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Write Prim's algorithm to find Minimum Cost Spanning Tree using Greedy method. Find time complexity.", tag: "★★ Important", type: "Algorithm", marks: 5 },
            { q: "Explain the Graph Coloring problem. Draw state space tree for m=3 colours, n=4 vertices. Discuss time and space complexity.", tag: "★★ Important", type: "Theory+Problem", marks: 5 },
            { q: "Solve the String Editing problem to transform X = \"abcd\" into Y = \"bca\" using Dynamic Programming. Find minimum cost edit sequence.", tag: "★★★ Must Do", type: "Problem", marks: 10 },
            { q: "Write Kruskal's algorithm for Minimum Cost Spanning Tree. Compare with Prim's algorithm.", tag: "★★ Important", type: "Algorithm", marks: 5 }
          ]
        },
        {
          name: "Unit IV — Dynamic Programming",
          twoMark: [
            { q: "List the features of Dynamic Programming.", tag: "★★★ Must Do", type: "Theory" },
            { q: "Write the formula to solve the Travelling Salesperson Problem with Dynamic Programming.", tag: "★★★ Must Do", type: "Theory" },
            { q: "How is Branch and Bound different from Backtracking?", tag: "★★★ Must Do", type: "Theory" },
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
            { q: "Solve All-Pairs Shortest Path problem using Floyd-Warshall algorithm with an example matrix.", tag: "★★ Important", type: "Problem", marks: 5 },
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
            { q: "What is Scheduling Identical Processors? Is it NP-Hard?", tag: "★★ Important", type: "Theory" },
            { q: "Define Chromatic Number Decision Problem (CNDP).", tag: "★★ Important", type: "Theory" }
          ],
          longAnswer: [
            { q: "Explain Travelling Salesperson Problem using LCBB procedure. Given the cost matrix, draw state space tree and find optimal tour. (Use matrix: ∞,20,30,10,11 / 15,∞,16,4,2 / 3,5,∞,2,4 / 19,6,18,∞,3 / 16,4,7,16,∞)", tag: "★★★ Must Do", type: "Problem", marks: 5 },
            { q: "Explain Travelling Salesperson Decision Problem with an example. Write the Branch and Bound General Method.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Write and explain Cook's Theorem. What is its significance in complexity theory?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "Differentiate P and NP. What are NP-Hard and NP-Complete problems? Give examples of each and explain the relationships.", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is the difference between NP-Hard and NP-Complete problems? Provide examples. Why can't we prove NP ≠ P?", tag: "★★★ Must Do", type: "Theory", marks: 5 },
            { q: "What is the Clique Decision Problem (CDP), and why is it considered NP-Hard?", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Give an example of a problem that is NP-Hard but NOT NP-Complete. Justify your answer.", tag: "★★ Important", type: "Theory", marks: 5 },
            { q: "Explain Job Shop Scheduling problem. Why is it NP-Hard?", tag: "★★ Important", type: "Theory", marks: 5 }
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

  // Scroll animations Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          delay += 75; // stagger slightly
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -20px 0px", threshold: 0.05 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [view, selectedSubject, selectedUnit, activeFilter, activeSection, isLoading]);

  // Handle fake loading for shimmer
  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 400); // 400ms shimmer
    return () => clearTimeout(t);
  }, [view, selectedSubject, selectedUnit, activeSection]);

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
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
    
    html { 
      scroll-behavior: smooth; 
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.1) transparent;
    }

    :root {
      --bg-color: #1a1615;
      --text-main: rgba(255, 255, 255, 0.95);
      --text-secondary: rgba(255, 245, 235, 0.65);
      --text-muted: rgba(255, 245, 235, 0.4);
      
      --surface: rgba(40, 30, 25, 0.2);
      --glass-bg: linear-gradient(135deg, rgba(80, 60, 50, 0.15), rgba(20, 15, 10, 0.3));
      --card-border: rgba(255, 255, 255, 0.12);

      --accent-cyan: rgba(255, 160, 60, 0.9);
      --accent-violet: rgba(255, 100, 50, 0.8);
      --accent-green: rgba(180, 230, 100, 0.8);
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      -webkit-font-smoothing: antialiased;
      background-image: url("https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2525&auto=format&fit=crop");
      background-size: cover;
      background-position: center bottom;
      background-attachment: fixed;
    }
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background: linear-gradient(to top, rgba(15, 10, 5, 0.95) 0%, rgba(25, 15, 10, 0.6) 40%, rgba(25, 15, 10, 0.2) 100%);
      z-index: -1;
    }
    * { box-sizing: border-box; }
    
    h1, h2, h3, .playfair { font-family: 'Playfair Display', serif; }

    /* Scroll Animation */
    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .landing-btn {
      background: var(--glass-bg); 
      color: var(--text-main); 
      padding: 16px 40px; 
      border-radius: 50px;
      font-size: 16px; 
      font-weight: 500;
      font-family: 'Inter', sans-serif; 
      border: 1px solid var(--card-border); 
      cursor: pointer;
      backdrop-filter: blur(32px) saturate(120%);
      -webkit-backdrop-filter: blur(32px) saturate(120%);
      margin-top: 40px; 
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1); 
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.6);
    }
    .landing-btn:hover {
      transform: translateY(-4px) scale(1.02); 
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.4), 0 16px 48px rgba(0,0,0,0.8);
      background: linear-gradient(135deg, rgba(80, 60, 50, 0.25), rgba(20, 15, 10, 0.5));
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .subject-card {
      background: var(--glass-bg);
      backdrop-filter: blur(28px) saturate(110%);
      -webkit-backdrop-filter: blur(28px) saturate(110%);
      border-radius: 36px; 
      padding: 32px 28px; 
      border: 1px solid var(--card-border);
      cursor: pointer; transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.2), 0 12px 32px rgba(0,0,0,0.4);
      position: relative; overflow: hidden;
      display: flex; flex-direction: column; height: 100%; min-height: 240px;
    }
    .subject-card:hover {
        transform: translateY(-6px) scale(1.02);
        background: linear-gradient(135deg, rgba(100, 80, 70, 0.2), rgba(30, 20, 15, 0.4));
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: inset 0 1px 2px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.3), 0 20px 48px rgba(0,0,0,0.6);
        border-radius: 40px;
    }

    .unit-card {
      background: var(--glass-bg); 
      backdrop-filter: blur(24px) saturate(120%);
      -webkit-backdrop-filter: blur(24px) saturate(120%);
      border-radius: 28px; 
      border: 1px solid var(--card-border); 
      margin-bottom: 20px;
      overflow: hidden; 
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4); 
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .unit-card-header {
      padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;
    }
    .unit-card:hover { 
        transform: translateY(-4px) scale(1.01); 
        background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
        box-shadow: inset 0 1px 1px rgba(255,255,255,0.1), 0 12px 32px rgba(0,0,0,0.5);
    }

    .filter-btn {
      background: var(--glass-bg); border: 1px solid var(--card-border); color: var(--text-secondary); padding: 10px 20px;
      backdrop-filter: blur(24px) saturate(120%); -webkit-backdrop-filter: blur(24px) saturate(120%);
      border-radius: 30px; font-size: 12px; cursor: pointer; transition: all 0.3s;
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.2);
    }
    .filter-btn:hover {
      background: rgba(255,160,60,0.15);
      color: var(--text-main);
      border-color: rgba(255,160,60,0.3);
    }

    .section-toggle-container {
      background: var(--glass-bg); backdrop-filter: blur(24px) saturate(120%); border-radius: 50px; padding: 6px; display: inline-flex; border: 1px solid var(--card-border);
      margin: 20px auto;
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4);
    }
    .section-toggle-btn {
      padding: 10px 32px; border-radius: 50px; border: none; font-size: 13px; cursor: pointer; transition: all 0.3s;
      background: transparent; color: var(--text-muted); font-family: 'Inter', sans-serif; font-weight: 500;
    }
    .section-toggle-btn.active {
      background: rgba(40,30,25,0.4);
      color: var(--text-main);
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      border: 1px solid rgba(255,255,255,0.1);
    }
    
    .question-card {
      background: var(--glass-bg); backdrop-filter: blur(24px) saturate(120%); border-radius: 24px; border: 1px solid var(--card-border); padding: 20px 24px;
      margin-bottom: 16px; display: flex; gap: 16px; transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.08), 0 4px 16px rgba(0,0,0,0.3);
    }
    .question-card:hover {
      transform: translateY(-2px);
      background: rgba(255,255,255,0.08);
      box-shadow: inset 0 1px 2px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.5);
    }
    
    .shimmer-bg {
      background: var(--surface);
      position: relative;
      overflow: hidden;
    }
    .shimmer-bg::after {
      content: '';
      position: absolute;
      top: 0; left: -100%; width: 50%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer { 100% { left: 100%; } }

    .app-container { max-width: 960px; margin: 0 auto; padding: 40px 20px; position: relative; }
    @media (max-width: 600px) { .app-container { padding: 20px 16px; } }
    
    .tag { font-size: 10px; font-weight: 600; padding: 4px 10px; border-radius: 12px; border: 1px solid transparent; backdrop-filter: blur(4px); }

    .glass-header {
      background: rgba(11, 15, 20, 0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--card-border);
      transition: all 0.3s;
    }

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
      <svg height={radius * 2} width={radius * 2} style={{ transform: 'rotate(-90deg)', filter: 'drop-shadow(0 0 8px rgba(255,160,60,0.5))' }}>
        <circle stroke="rgba(255,255,255,0.05)" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
        <circle
          stroke="var(--accent-cyan)" fill="transparent" strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1)' }}
          strokeLinecap="round" r={normalizedRadius} cx={radius} cy={radius}
        />
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
    if (tagStr.includes('★★★ Must Do')) return { bg: 'rgba(124, 131, 253, 0.15)', color: 'rgba(124, 131, 253, 0.9)', border: '1px solid rgba(124, 131, 253, 0.2)' };
    if (tagStr.includes('★★ Important')) return { bg: 'rgba(79, 209, 197, 0.15)', color: 'rgba(79, 209, 197, 0.9)', border: '1px solid rgba(79, 209, 197, 0.2)' };
    if (tagStr.includes('★ Know')) return { bg: 'rgba(255, 255, 255, 0.08)', color: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)' };
    return { bg: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', border: '1px solid var(--card-border)' };
  };

  const getTypeStyle = (typeStr) => {
    if (typeStr.includes('Problem')) return { bg: 'rgba(110, 231, 183, 0.15)', color: 'rgba(110, 231, 183, 0.9)' };
    if (typeStr.includes('Theory')) return { bg: 'rgba(255, 255, 255, 0.08)', color: 'rgba(255, 255, 255, 0.7)' };
    return { bg: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)' };
  };

  const getMarksStyle = (marks) => {
    return { bg: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.7)' };
  };

  function SubjectCard({ subject, onClick }) {
    const { done, total } = getSubjectDoneCount(subject, doneQuestions);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    return (
      <div className="subject-card" onClick={onClick}>
        <h3 style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '18px', marginBottom: '8px', opacity: 1, filter: 'none', letterSpacing: '-0.01em' }}>
          {subject.name}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '20px' }}>
          {total} Questions · 5 Units
        </p>

        <div style={{
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '999px', height: '6px', overflow: 'hidden', marginBottom: '10px',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)'
        }}>
          <div style={{
            width: `${pct}%`, height: '100%',
            background: 'var(--accent-cyan)',
            borderRadius: '999px', transition: 'width 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
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
    <header className="glass-header" style={{
      position: "fixed", top: 0, right: 0, left: 0,
      zIndex: 110, display: "flex", gap: "10px",
      alignItems: "center", justifyContent: "flex-end",
      padding: "12px 20px",
      pointerEvents: "none",
      boxShadow: "0 4px 30px rgba(0,0,0,0.3)"
    }}>
      <div style={{ display: "flex", gap: "10px", pointerEvents: "auto" }}>
        <button onClick={resetProgress} style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--card-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)", transition: "all 0.3s", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)" }} title="Reset Progress" onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-main)"; e.currentTarget.style.background = "var(--glass-bg)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "var(--surface)"; }}>
          <X size={18} />
        </button>
        <button onClick={() => { }} style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--card-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)", transition: "all 0.3s", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)" }} title="Premium Theme" onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-main)"; e.currentTarget.style.background = "var(--glass-bg)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "var(--surface)"; }}>
          <Moon size={18} />
        </button>
      </div>
    </header>
  );

  if (view === 'landing') {
    return (
      <div className="landing-container">
        {renderCSS()}

        <div className="bg-slideshow">
          {frames.map((src, i) => (
            <div key={i} className="bg-slide" style={{ backgroundImage: `url(${src})` }} />
          ))}
          <div className="bg-overlay" />
        </div>

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '999px', padding: '6px 16px', marginBottom: '32px',
              fontSize: '13px', fontWeight: 600
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
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)',
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
              fontSize: '18px', color: 'var(--text-secondary)',
              maxWidth: '480px', lineHeight: 1.7, marginBottom: '48px',
              margin: '0 auto 48px auto'
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
            className="landing-btn"
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
            <div key={stat.label} className="reveal" style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(32px) saturate(130%)',
              WebkitBackdropFilter: 'blur(32px) saturate(130%)',
              border: '1px solid var(--card-border)',
              borderRadius: '40px', padding: '32px 32px',
              textAlign: 'center', minWidth: '130px',
              boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1), 0 16px 40px rgba(0,0,0,0.5)'
            }}>
              <div style={{
                fontSize: '32px', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-1px'
              }}>{stat.value}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px", justifyContent: "center" }}>
          {SUBJECTS.map((sub, i) => {
            const { done, total } = getSubjectDoneCount(sub, doneQuestions);
            const pct = Math.round((done / total) * 100);
            return (
              <div key={i} className="reveal" style={{ background: "var(--surface)", border: "1px solid var(--card-border)", padding: "10px 20px", borderRadius: "24px", fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)", backdropFilter: "blur(24px) saturate(120%)" }}>
                {sub.shortName} <span style={{ color: "var(--accent-cyan)", marginLeft: 6 }}>{pct}% done</span>
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
            <div key={i} className="glass-tag" style={{ padding: "6px 14px", borderRadius: "20px", fontSize: "12px", color: "var(--text-secondary)", fontWeight: 500 }}>
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
                onClick={() => { setActiveSection('2m'); setActiveFilter('all'); }}
              >
                2 Mark Questions
              </button>
              <button
                className={`section-toggle-btn ${activeSection === 'long' ? 'active' : ''}`}
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
            <div style={{ height: 6, background: "rgba(0,0,0,0.3)", borderRadius: 3, overflow: "hidden", marginBottom: "20px", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${(unitDoneCount / unitTotalQuestions) * 100}%` }} transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} style={{ height: "100%", background: 'var(--accent-cyan)', boxShadow: "0 0 10px rgba(79, 209, 197, 0.4)" }} />
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
                  style={activeFilter === f.id ? { background: 'var(--surface)', borderColor: 'var(--accent-cyan)', color: 'var(--text-main)', whiteSpace: "nowrap" } : { whiteSpace: "nowrap" }}
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
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "transparent", color: "var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "bold", marginBottom: 12, border: "1px solid var(--card-border)" }}>
                          {trueIdx + 1}
                        </div>
                        <div style={{ cursor: "pointer", transition: "transform 0.2s" }} onClick={() => toggleDone(sub.id, selectedUnit, activeSection, trueIdx)} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                          <div style={{ width: 26, height: 26, background: isDone ? 'var(--accent-cyan)' : 'rgba(20,15,10,0.4)', border: isDone ? 'none' : '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)', boxShadow: isDone ? 'inset 0 1px 3px rgba(255,255,255,0.4), 0 0 12px rgba(255,160,60,0.6)' : 'inset 0 2px 4px rgba(0,0,0,0.5)' }}>
                            {isDone && <Check size={16} color="#1a1615" strokeWidth={3} />}
                          </div>
                        </div>
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