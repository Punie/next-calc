'use client';

import { useState } from 'react';
import { TbEqual } from 'react-icons/tb';

import {
  buttons,
  compute,
  operatorIcon,
  type Digit,
  type Operation,
  type Operator,
} from './utils';

export default function Home() {
  const [operation, setOperation] = useState<Operation>({
    operator: null,
    current: 0,
    result: 0,
    decimalPoint: 0,
  });

  const onDigit = (digit: Digit) => () =>
    setOperation(({ operator, current, result, decimalPoint }) => ({
      operator,
      current:
        decimalPoint === 0
          ? current * 10 + digit
          : current + digit / 10 ** decimalPoint,
      result: operator ? result : 0,
      decimalPoint: decimalPoint > 0 ? decimalPoint + 1 : 0,
    }));

  const onReset = () =>
    setOperation({
      operator: null,
      current: 0,
      result: 0,
      decimalPoint: 0,
    });

  const onOperator = (operator: Operator) => () =>
    setOperation(({ current, result }) => ({
      operator,
      current: 0,
      result: current || result,
      decimalPoint: 0,
    }));

  const onEqual = () => {
    setOperation(({ operator, current, result, decimalPoint }) =>
      operator
        ? {
            operator: null,
            current: 0,
            result: compute(result, current, operator),
            decimalPoint: 0,
          }
        : { operator, current, result, decimalPoint },
    );
  };

  const onComa = () =>
    setOperation(({ operator, current, result, decimalPoint }) => ({
      operator,
      current,
      result,
      decimalPoint: decimalPoint > 0 ? decimalPoint : 1,
    }));

  return (
    <main className="grid place-content-center p-6">
      <div className="grid grid-cols-4 gap-6 text-5xl">
        <div className="col-span-4 bg-gray-600 text-gray-50 dark:bg-gray-300 dark:text-gray-900 rounded-xl p-4 text-right">
          {operation.current
            ? operation.current.toFixed(Math.max(operation.decimalPoint - 1, 0))
            : operation.result}
        </div>

        {buttons.map(button => {
          switch (button.type) {
            case 'reset':
              return (
                <button
                  onClick={onReset}
                  className="grid place-content-center w-24 h-24 rounded-full bg-gray-600 hover:bg-gray-500 active:bg-gray-400 text-gray-50 dark:bg-gray-400 dark:hover:bg-gray-300 dark:active:bg-gray-200 dark:text-gray-900"
                >
                  C
                </button>
              );

            case 'fill':
              return <div></div>;

            case 'digit':
              return (
                <button
                  onClick={onDigit(button.value)}
                  className="hover:bg-gray:300 active:bg-gray:400 grid place-content-center w-24 h-24 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500"
                >
                  {button.value}
                </button>
              );

            case 'operator':
              return (
                <button
                  onClick={onOperator(button.value)}
                  className={`grid place-content-center w-24 h-24 rounded-full ${
                    operation.operator === button.value
                      ? 'bg-gray-700 dark:bg-gray-50 text-orange-400'
                      : 'bg-orange-400 hover:bg-orange-300 text-gray-50'
                  }`}
                >
                  {operatorIcon[button.value]}
                </button>
              );

            case 'equals':
              return (
                <button
                  onClick={onEqual}
                  className="grid place-content-center w-24 h-24 rounded-full bg-orange-400 hover:bg-orange-300 active:bg-orange-200 text-gray-50"
                >
                  <TbEqual />
                </button>
              );

            case 'coma':
              return (
                <button
                  onClick={onComa}
                  className="grid place-content-center w-24 h-24 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500"
                >
                  ,
                </button>
              );
          }
        })}
      </div>
    </main>
  );
}
