import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createEmployee } from '../../api/apiClient';
import {
  department as departmentInformations,
  initialErrorMessage,
  initialValue,
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
  InputType,
} from '../../components';
import {
  Employee,
  ErrorMessage,
  Form,
  Id,
  Label,
  ModalMessage,
  Pages,
} from '../../ts';
import checkAll from '../../utils/form';

const HomeMain = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] =
    useState<ErrorMessage>(initialErrorMessage);
  const [values, setValues] = useState<Employee>(initialValue);
  const [loader, setLoader] = useState(false);
  const [modalMessage, setModalMessage] = useState<ModalMessage>(
    ModalMessage.EmployeeCreated
  );

  const initializeForm = () => {
    setValues(initialValue);
  };

  const handleSubmit = (e: React.FormEvent<Form>) => {
    setLoader(true);
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
      setTimeout(() => {
        createEmployee(employeeResponse).then((res) => {
          setModalOpen(true);
          if (res === undefined) {
            setModalMessage(ModalMessage.Troubles);
          } else if (res.statusCode === 201) {
            initializeForm();
            setModalMessage(ModalMessage.EmployeeCreated);
          }
        });
        setLoader(false);
      }, 2000);
    } else setLoader(false);
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
              type={InputType.DATE}
              id={Id.DateOfBirth}
              label={Label.DateOfBirth}
              errorMessage={errorMessage?.dateOfBirthErrorMessage}
              valueDate={values.dateOfBirth}
              handleChangeDate={(value) => handleChange(Id.DateOfBirth, value)}
            />

            <MainDateTimeInput
              type={InputType.DATE}
              id={Id.StartDate}
              label={Label.StartDate}
              errorMessage={errorMessage?.startDateErrorMessage}
              valueDate={values.startDate}
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
                width="262px"
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

          <div className={style.footer}>
            {loader ? (
              <div className={style.loaderDualRing} />
            ) : (
              <Button label="Save" isSubmit />
            )}
          </div>
        </form>
      </div>

      <Modal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        title={modalMessage}
      />
    </div>
  );
};

export default HomeMain;
