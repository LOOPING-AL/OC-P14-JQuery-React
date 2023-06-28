import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  department as departmentInformations,
  states,
  style,
} from '../../assets';
import {
  Button,
  Header,
  MainDateTimeInput,
  Modal,
  SelectInput,
  TextInput,
} from '../../components';
import Type from '../../components/inputs/dateTimeInput/enums';
import { Employee, ErrorMessage, Form, Id, Label, Pages } from '../../ts';
import { checkAll } from '../../utils/form';
import initialValue from '../../assets/informations/initialValue';
import initialErrorMessage from '../../assets/informations/initialErrorMessage';
import { createEmployee, getEmployees } from '../../api/apiClient';

const HomeMain = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] =
    useState<ErrorMessage>(initialErrorMessage);
  const [values, setValues] = useState<Employee>(initialValue);

  // useEffect(() => {
  //   getEmployees().then((res) => console.log(res));
  // }, []);

  const initializeForm = () => {
    setValues(initialValue);
  };

  const handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();

    const employeeResponse = {
      firstName: values.firstName,
      lastName: values.lastName,
      street: values.street,
      city: values.city,
      dateOfBirth: values.dateOfBirth,
      startDate: values.startDate,
      zipCode: values.zipCode,
      department: values.department,
      state: values.state,
    };

    const checkAllErrorMessage = checkAll(employeeResponse);
    setErrorMessage(checkAllErrorMessage);

    const allInputIsGood = Object.keys(checkAllErrorMessage).every(
      (key) => checkAllErrorMessage[key as keyof ErrorMessage] === ''
    );

    if (allInputIsGood) {
      createEmployee(employeeResponse);
      setModalOpen(true);
      initializeForm();
    }
  };

  const handleChange = (key: Id, value: string) => {
    const updatedValue = { [key]: value };
    setValues((val) => ({ ...val, ...updatedValue }));
  };

  return (
    <div className={style.main}>
      <Header />
      <div className={style.container}>
        <Link to={Pages.EMPLOYEElIST} className={style.link}>
          View Current Employees
        </Link>

        <h1 className={style.title}>Form</h1>

        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formInputLine}>
            <TextInput
              id={Id.FirstName}
              label={Label.FirstName}
              errorMessage={errorMessage?.firstNameErrorMessage}
              value={values.firstName}
              handleChange={(value) => handleChange(Id.FirstName, value)}
            />

            <TextInput
              id={Id.LastName}
              label={Label.LastName}
              errorMessage={errorMessage?.lastNameErrorMessage}
              value={values.lastName}
              handleChange={(value) => handleChange(Id.LastName, value)}
            />
          </div>

          <div className={style.formInputLine}>
            <MainDateTimeInput
              type={Type.DATE}
              id={Id.DateOfBirth}
              label={Label.DateOfBirth}
              errorMessage={errorMessage?.dateOfBirthErrorMessage}
              value={values.dateOfBirth}
              handleChangeDate={(value) => handleChange(Id.DateOfBirth, value)}
            />

            <MainDateTimeInput
              type={Type.DATETIME}
              id={Id.StartDate}
              label={Label.StartDate}
              errorMessage={errorMessage?.startDateErrorMessage}
              value={values.startDate}
              handleChangeDate={(value) => handleChange(Id.StartDate, value)}
            />
          </div>

          <fieldset className={style.address}>
            <legend className={style.legend}>Address</legend>
            <div className={style.formInputLine}>
              <TextInput
                id={Id.Street}
                label={Label.Street}
                errorMessage={errorMessage?.streetErrorMessage}
                value={values.street}
                handleChange={(value) => handleChange(Id.Street, value)}
              />

              <TextInput
                id={Id.City}
                label={Label.City}
                errorMessage={errorMessage?.cityErrorMessage}
                value={values.city}
                handleChange={(value) => handleChange(Id.City, value)}
              />
            </div>
            <div className={style.formInputLine}>
              <SelectInput
                id={Id.State}
                label={Label.State}
                options={states.map(
                  (state) => `${state.abbreviation}, ${state.name}`
                )}
                handleChange={(value) => handleChange(Id.State, value)}
                value={values.state}
              />

              <TextInput
                id={Id.ZipCode}
                label={Label.ZipCode}
                errorMessage={errorMessage?.zipCodeErrorMessage}
                value={values.zipCode}
                handleChange={(value) => handleChange(Id.ZipCode, value)}
              />
            </div>
          </fieldset>

          <SelectInput
            id={Id.Department}
            label={Label.Department}
            options={departmentInformations}
            value={values.department}
            handleChange={(value) => handleChange(Id.Department, value)}
          />

          <Button label="Save" isSubmit />
        </form>
      </div>

      <Modal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        title="Employee Created!"
      />
    </div>
  );
};

export default HomeMain;
