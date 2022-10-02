const {get} = require('./axiosHelper');

const UserServices = {
  getUser(params) {
    return get('/', params);
  },
};

export default UserServices;
