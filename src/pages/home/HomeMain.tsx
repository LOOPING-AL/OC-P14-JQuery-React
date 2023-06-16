import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  department as departmentInformations,
  states,
  style,
} from '../../assets';
import { TextInput, Header, MainDateTimeInput } from '../../components';
import { Type } from '../../components/inputs/dateTimeInput/enums';
import SelectInput from '../../components/inputs/selectInput/SelectInput';
import { Pages, Form, ErrorMessage } from '../../ts';
import { checkAll } from '../../utils/form';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>();

  const handleSubmit = (e: React.FormEvent<Form>) => {
    e.preventDefault();

    const firstName = e.currentTarget.elements.firstName.value;
    const lastName = e.currentTarget.elements.lastName.value;
    const dateOfBirth = e.currentTarget.elements.dateOfBirth.value;
    const startDate = e.currentTarget.elements.startDate.value;
    const street = e.currentTarget.elements.street.value;
    const city = e.currentTarget.elements.city.value;
    const state = e.currentTarget.elements.state.value;
    const zipCode = e.currentTarget.elements.zipCode.value;
    const department = e.currentTarget.elements.department.value;

    setErrorMessage(
      checkAll({
        firstName,
        lastName,
        street,
        city,
        dateOfBirth,
        startDate,
        state,
        department,
        zipCode,
      })
    );

    setModalOpen(!modalOpen);
  };

  return (
    <div className={style.main}>
      <Header />
      <div className={style.container}>
        <Link to={Pages.EMPLOYEElIST} className={style.link}>
          View Current Employees
        </Link>

        <h1 className={style.title}>Form</h1>

        <form
          id="create-employee"
          onSubmit={handleSubmit}
          className={style.form}
        >
          <div className={style.formInputLine}>
            <TextInput
              id="firstName"
              label="First Name"
              errorMessage={errorMessage?.firstNameErrorMessage}
            />
            <TextInput
              id="lastName"
              label="Last Name"
              errorMessage={errorMessage?.lastNameErrorMessage}
            />
          </div>
          <div className={style.formInputLine}>
            <MainDateTimeInput
              type={Type.DATE}
              id="dateOfBirth"
              label="Date of Birth"
              errorMessage={errorMessage?.lastNameErrorMessage}
            />
            <MainDateTimeInput
              type={Type.DATETIME}
              id="startDate"
              label="Start Date"
              errorMessage={errorMessage?.lastNameErrorMessage}
            />
          </div>

          <fieldset className={style.address}>
            <legend className={style.legend}>Address</legend>
            <div className={style.formInputLine}>
              <TextInput
                id="street"
                label="Street"
                errorMessage={errorMessage?.streetErrorMessage}
              />
              <TextInput
                id="city"
                label="City"
                errorMessage={errorMessage?.cityErrorMessage}
              />
            </div>
            <div className={style.formInputLine}>
              <SelectInput
                id="state"
                label="State"
                options={states.map(
                  (state) => `${state.abbreviation}, ${state.name}`
                )}
              />

              <TextInput
                id="zipCode"
                label="Zip Code"
                errorMessage={errorMessage?.zipCodeErrorMessage}
              />
            </div>
          </fieldset>

          <SelectInput
            id="department"
            label="Department"
            options={departmentInformations}
          />

          <button className={style.button} type="submit">
            Save
          </button>
        </form>
      </div>
      {/* <div id="confirmation" className={style.modal}>
        Employee Created!
      </div> */}
    </div>
  );
};

export default Home;
