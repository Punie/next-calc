'use client';

import { useState } from 'react';
import { TbDivide, TbEqual, TbMinus, TbPlus, TbX } from 'react-icons/tb';

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

enum Operator {
  Add = 'Add',
  Sub = 'Sub',
  Mul = 'Mul',
  Div = 'Div',
}

type Operation = {
  operator: Operator | null;
  current: number;
  result: number;
  decimalPoint: number;
};

function compute(a: number, b: number, op: Operator) {
  switch (op) {
    case Operator.Add:
      return a + b;

    case Operator.Sub:
      return a - b;

    case Operator.Mul:
      return a * b;

    case Operator.Div:
      return a / b;
  }
}

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
    <div className="grid grid-cols-4 gap-6 text-5xl">
      <div className="col-span-4 bg-gray-300 text-gray-900 rounded-xl p-4 text-right">
        {operation.current
          ? operation.current.toFixed(Math.max(operation.decimalPoint - 1, 0))
          : operation.result}
      </div>
      <button
        onClick={onReset}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-400 hover:bg-gray-300 active:bg-gray-200 text-gray-900"
      >
        C
      </button>
      <div></div>
      <div></div>
      <div></div>
      <button
        onClick={onDigit(7)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        7
      </button>
      <button
        onClick={onDigit(8)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        8
      </button>
      <button
        onClick={onDigit(9)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        9
      </button>
      <button
        onClick={onOperator(Operator.Div)}
        className={`grid place-content-center w-24 h-24 rounded-full ${
          operation.operator === Operator.Div
            ? 'bg-gray-50 text-orange-400'
            : 'bg-orange-400 hover:bg-orange-300'
        }`}
      >
        <TbDivide />
      </button>
      <button
        onClick={onDigit(4)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        4
      </button>
      <button
        onClick={onDigit(5)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        5
      </button>
      <button
        onClick={onDigit(6)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        6
      </button>
      <button
        onClick={onOperator(Operator.Mul)}
        className={`grid place-content-center w-24 h-24 rounded-full ${
          operation.operator === Operator.Mul
            ? 'bg-gray-50 text-orange-400'
            : 'bg-orange-400 hover:bg-orange-300'
        }`}
      >
        <TbX />
      </button>
      <button
        onClick={onDigit(1)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        1
      </button>
      <button
        onClick={onDigit(2)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        2
      </button>
      <button
        onClick={onDigit(3)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        3
      </button>
      <button
        onClick={onOperator(Operator.Sub)}
        className={`grid place-content-center w-24 h-24 rounded-full ${
          operation.operator === Operator.Sub
            ? 'bg-gray-50 text-orange-400'
            : 'bg-orange-400 hover:bg-orange-300'
        }`}
      >
        <TbMinus />
      </button>
      <button
        onClick={onDigit(0)}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        0
      </button>
      <button
        onClick={onComa}
        className="grid place-content-center w-24 h-24 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500"
      >
        ,
      </button>
      <button
        onClick={onEqual}
        className="grid place-content-center w-24 h-24 rounded-full bg-orange-400 hover:bg-orange-300"
      >
        <TbEqual />
      </button>
      <button
        onClick={onOperator(Operator.Add)}
        className={`grid place-content-center w-24 h-24 rounded-full ${
          operation.operator === Operator.Add
            ? 'bg-gray-50 text-orange-400'
            : 'bg-orange-400 hover:bg-orange-300'
        }`}
      >
        <TbPlus />
      </button>
    </div>
  );
}
