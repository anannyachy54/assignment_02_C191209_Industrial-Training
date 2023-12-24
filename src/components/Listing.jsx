import React from 'react';
import IncomeList from "./incomelist";
import ExpenseList from "./expenselist"
export default function Listing() {
    return (
        <div
        className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2">
        <IncomeList />
        <ExpenseList />
        </div>
    );
}