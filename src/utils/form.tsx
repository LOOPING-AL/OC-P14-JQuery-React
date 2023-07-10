import { Employee } from '../ts';

const isEmpty = (formInput: string) => formInput === '';
const isEmptyMessage = 'The field is mandatory';

const testName = (formInput: string) => {
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

const testZipCode = (formInput: string) => {
  if (isEmpty(formInput)) return isEmptyMessage;

  let message = '';

  if (!/^\d{5}(?:-\d{4})?$/.test(formInput)) {
    message =
      'Invalid ZIP code format. Please enter a valid ZIP code. (XXXXX or XXXXX-XXXX)';
  }

  return message;
};

const checkAll = ({
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

export default checkAll;
