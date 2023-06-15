import { Type } from './enums';

type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToFive = 0 | 1 | 2 | 3 | 4 | 5;
type ZeroToFour = 0 | 1 | 2 | 3 | 4;
type ZeroToTwo = 0 | 1 | 2;
type ZeroOrOne = 0 | 1;
/**
 * Years
 */
type YYYY = `19${ZeroToNine}${ZeroToNine}` | `20${ZeroToNine}${ZeroToNine}`;
/**
 * Months
 */
type MoMo = `0${OneToNine}` | `1${ZeroToTwo}`;
/**
 * Days
 */
type DD = `${ZeroToTwo}${ZeroToNine}` | `3${ZeroOrOne}`;
/**
 * Hours
 */
type HH = `${ZeroOrOne}${ZeroToNine}` | `2${ZeroToFour}`;
/**
 * Minutes
 */
type MiMi = `${ZeroToFive}${ZeroToNine}` | '60';

type RawDateString = `${YYYY}-${MoMo}-${DD}`;
type RawTimeString = `${HH}:${MiMi}`;

export type MainDateTimeInputProps = {
  label: string;
  errorMessage: string | undefined;
} & ChooseDateTimeInputProps;

export type DateInputProps = {
  minDate?: RawDateString;
  maxDate?: RawDateString;
} & ChooseDateTimeInputProps;

export type TimeInputProps = {
  minTime?: RawTimeString;
  maxTime?: RawTimeString;
} & ChooseDateTimeInputProps;

export type DateTimeInputProps = {
  minDate?: RawDateString;
  maxDate?: RawDateString;
  minTime?: RawTimeString;
  maxTime?: RawTimeString;
} & ChooseDateTimeInputProps;

type ChooseDateTimeInputProps = {
  type: Type;
  id: string;
  required?: boolean;
};
