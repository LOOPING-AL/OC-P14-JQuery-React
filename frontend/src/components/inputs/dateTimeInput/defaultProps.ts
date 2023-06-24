const defaultProps = {
  minDate: '1900-01-01',
  maxDate: new Date().toISOString().split('T')[0],
  minTime: '08:00',
  maxTime: '18:00',
  required: false,
  type: 'date',
  value: '',
};
export default defaultProps;
