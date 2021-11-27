import axios from 'axios';

export const getAllOperations = () => {
  try {
    return axios.get(`http://localhost:4000/operation/`);
  } catch (error) {
    console.log(error);
  }
}

export const getLatestOperations = (quantity) => {
  try {
    return axios.get(`http://localhost:4000/operation/${quantity}`);
  } catch (error) {
    console.log(error);
  }
}
