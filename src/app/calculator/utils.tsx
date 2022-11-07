import { TbDivide, TbMinus, TbPlus, TbX } from 'react-icons/tb';

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export enum Operator {
  Add = 'Add',
  Sub = 'Sub',
  Mul = 'Mul',
  Div = 'Div',
}

export type Operation = {
  operator: Operator | null;
  current: number;
  result: number;
  decimalPoint: number;
};

export function compute(a: number, b: number, op: Operator) {
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

export const buttons = [
  { type: 'reset' },
  { type: 'fill' },
  { type: 'fill' },
  { type: 'fill' },
  { type: 'digit', value: 7 },
  { type: 'digit', value: 8 },
  { type: 'digit', value: 9 },
  { type: 'operator', value: Operator.Div },
  { type: 'digit', value: 4 },
  { type: 'digit', value: 5 },
  { type: 'digit', value: 6 },
  { type: 'operator', value: Operator.Mul },
  { type: 'digit', value: 1 },
  { type: 'digit', value: 2 },
  { type: 'digit', value: 3 },
  { type: 'operator', value: Operator.Sub },
  { type: 'digit', value: 0 },
  { type: 'coma' },
  { type: 'equals' },
  { type: 'operator', value: Operator.Add },
] as const;

export const operatorIcon = {
  [Operator.Add]: <TbPlus />,
  [Operator.Sub]: <TbMinus />,
  [Operator.Mul]: <TbX />,
  [Operator.Div]: <TbDivide />,
};
