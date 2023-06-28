import { Employee } from '../ts';

const isEmpty = (formInput: string) => formInput === '';
const isEmptyMessage = 'The field is mandatory';

export const testName = (formInput: string) => {
  if (isEmpty(formInput)) return isEmptyMessage;

  let message = '';

  if (!/^[A-ZÀ-Þ][a-zA-Z\u00C0-\u017F'-\s]{1,}$/.test(formInput)) {
    message = 'Can you';
    if (!/^[A-ZÀ-Þ]+/g.test(formInput)) {
      message += ', put a capital letter at the beginning';
    }
    if (!/.{2,}/g.test(formInput)) {
      message += ', minimum two letters';
    }
    if (!/^[A-Za-z\u00C0-\u017F'-\s]+$/.test(formInput)) {
      message += ", that these special characters ('-)";
    }
  }

  return message;
};

const dayDiff = (d1: Date, d2: Date) =>
  Math.ceil((Number(d1) - Number(d2)) / (1000 * 60 * 60 * 24));

export const testDate = (formInput: string) => {
  if (isEmpty(formInput)) return isEmptyMessage;

  let message = '';
  const dayDiffConst = dayDiff(new Date(), new Date(formInput));
  if (
    /^[0-9]{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])$/g.test(
      formInput
    ) &&
    dayDiffConst / 365 > 13 &&
    dayDiffConst / 365 <= 120
  ) {
    return true;
  }
  if (dayDiffConst < 0) {
    message = 'The date is after the current date.';
  } else if (dayDiffConst / 365 <= 13) {
    message = 'An employee must be 15 years old.';
  } else if (dayDiffConst / 365 > 80) {
    message = 'An employee cannot be over 80.';
  }
  return message;
};

export const testZipCode = (formInput: string) => {
  if (isEmpty(formInput)) return isEmptyMessage;

  let message = '';

  if (!/^\d{5}(?:-\d{4})?$/.test(formInput)) {
    message =
      'Invalid ZIP code format. Please enter a valid ZIP code. (XXXXX or XXXXX-XXXX)';
  }

  return message;
};

export const checkAll = ({
  city,
  firstName,
  lastName,
  street,
  dateOfBirth,
  startDate,
  zipCode,
}: Employee) => {
  const firstNameErrorMessage = testName(firstName);
  const lastNameErrorMessage = testName(lastName);
  const streetErrorMessage = testName(street);
  const cityErrorMessage = testName(city);
  const zipCodeErrorMessage = testZipCode(zipCode);
  const dateOfBirthErrorMessage = isEmpty(dateOfBirth) ? isEmptyMessage : '';
  const startDateErrorMessage = isEmpty(startDate) ? isEmptyMessage : '';

  return {
    firstNameErrorMessage,
    lastNameErrorMessage,
    streetErrorMessage,
    cityErrorMessage,
    zipCodeErrorMessage,
    dateOfBirthErrorMessage,
    startDateErrorMessage,
  };
};
