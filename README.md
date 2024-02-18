# React - Budget App

React-based Budget Application for IBM Full-Stack Developer Course on Coursera

# Introduction

This is the final project for this course and had several steps to complete. I built on the Budget allocation application forked from IBMs' GitHub repo.

In this project, I was given tasks to complete and render them into the budget allocation app. The completed Budget Allocation application page is demo'd below:

![Application Demo GIF](images\BudgetAppExample.gif)


## Scenario

You have just joined RKL Insurance company’s IT department as a front-end engineer. The company wants you to create an application front end which will allow them to plan for budgeting expenses for various departments. The person that worked in this position before has completed the code but has not paid attention to some of the features that were specifically asked for. You are now entrusted with this responsibility and you are expected to deliver the project within expected timeline.

## Task 1: Budget Allocation Validation

Added validation to the existing budget allocation component. It now only acceps numerical values.

![](images\budget_allocation.png)

Added an alert to notify user the value cannot exceed the value of remaining funds.

![](images\budget_allocation_error_message.png)

## Task 2: Editable Budget Value

Updated the code to make `Budget` editable with an option to increase/decrease its value by 10.

![](images\budget_value.png)

Set the upper limit value to `20,000` and added an alert to present an error message when a user attempts to spend more in the `Allocated Budget` than is allowed by the `Budget`.

![](images\budget_not_exceeding.png)

Next, I set up an alert for when the budget is set to a lower value than what has already been allocated.

![](images\budget_morethan_spending.png)

## Task 3: Dropdown to Change Currency

Updated the code to allow the user the ability to change the currency. This is a vey simple implementation solely a symbol change.

> Rate conversions were not part of this change

![](images\currency_dropdown.png)

## Task 4: Currency Prefix to the Change Allocation Textbox

Added a currency prefix to the `Change Allocation` textbox.

![](images\budget_allocation_with_currency.png)

## Task 5: Currency Prefix to the Budget Value Textbox

Added a currency prefix to the `Budget Value` textbox.

![](images\budget_value_with_currency.png)

## Task 6: Change Event of the Currency Dropdown

Added an event handler to the dropdown for `Currency` component change event. On change of the dropdown value, all the currency representation on the screen changes, in the following places.
- Budget
- Remaining
- Spent so far
- Allocated Budget
- Change Allocation

![](images\currency_change.png)

## Task 7: Decrease and Increase Buttons

Added a decrease button, like the increase button, to all of the departments in the allocation, beside `increase by 10`.

![](images\mktgplus10.png)

![](images\itminus10.png)

