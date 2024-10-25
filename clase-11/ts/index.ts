let fistName = "Luis";
let age = 10;

let lastName: any = "Mera";

interface NumbersOperations {
  num1: number;
  num2: number;
  num3?: number;
}
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum(20, 10);

export const res = (data: NumbersOperations): number => {
  return data.num1 + data.num2;
};

res({ num1: 10, num2: 20 });

const multi = (data: NumbersOperations): number => {
  return data.num1 * data.num2;
};

multi({ num1: 10, num2: 20 });
