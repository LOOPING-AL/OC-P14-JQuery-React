import { Employee } from '../../ts';
import department from './department';
import states from './states';

const initialValue: Employee = {
  city: '',
  dateOfBirth: '',
  firstName: '',
  lastName: '',
  startDate: '',
  street: '',
  zipCode: '',
  department: department[0],
  state: `${states[0].abbreviation}, ${states[0].name}`,
};

export default initialValue;
