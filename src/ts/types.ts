interface FormElements extends HTMLFormControlsCollection {
  firstName: { value: string };
  lastName: { value: string };
  dateOfBirth: { value: string };
  startDate: { value: string };
  street: { value: string };
  city: { value: string };
  state: { value: string };
  zipCode: { value: string };
  department: { value: string };
}

export interface Form extends HTMLFormElement {
  readonly elements: FormElements;
}

export interface CheckAllProps {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  zipCode: string;
}
export interface ErrorMessage {
  firstNameErrorMessage: string;
  lastNameErrorMessage: string;
  streetErrorMessage: string;
  cityErrorMessage: string;
  zipCodeErrorMessage: string;
  dateOFBirthErrorMessage: string;
  startDateErrorMessage: string;
}
