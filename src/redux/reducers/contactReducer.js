// File created in this feature

const initialState = [
  {
    id: 0,
    name: 'German Cobian',
    email: 'germancobian@hotmail.com',
    number: 6789,
  },
  {
    id: 1,
    name: 'Namreg Naimboc',
    email: 'namregnaimboc@gmail.com',
    number: 9876,
  },
];

const contactReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default contactReducer;