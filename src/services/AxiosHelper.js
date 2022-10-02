import axios from 'axios';
import {useEffect} from 'react';
import {useNavigate} from 'react-router';
import {baseUrl} from 'Utils/Constant';

export const get = (path, params) => {
  //   const token = localStorage.getItem('token');
  if (params !== undefined) {
    if (params instanceof Object) {
      path +=
        '?' +
        Object.keys(params)
          .map(key => key + '=' + params[key])
          .join('&');
    } else {
      path += '/' + params;
    }
  }
  return axios
    .get(baseUrl + path, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': Bearer ${token},
      },
    })
    .then(res => {
      return new Promise(resolve => {
        resolve(res);
      });
    })
    .catch(err => {
      // handleErr(err)
      console.log(err);
    });
};

export const post = (path, postData) => {
  //   const token = localStorage.getItem('token');
  return axios
    .post(baseUrl + path, postData, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': Bearer ${token},
      },
    })
    .then(res => {
      return new Promise(resolve => {
        resolve(res);
      });
    })
    .catch(err => {
      // handleErr(err)
      return new Promise(resolve => {
        resolve(err.response);
      });
    });
};

export const deleteMethod = (path, id) => {
  //   const token = localStorage.getItem('token');
  return axios
    .delete(baseUrl + path + '?id=' + id, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': Bearer ${token},
      },
    })
    .then(res => {
      return new Promise(resolve => {
        resolve(res);
      });
    })
    .catch(err => {
      // handleErr(err)
      console.log(err);
    });
};

const handleErr = err => {
  // const navigate = useNavigate()
  // console.info("%cCalling API error", '"color: red; font-size: 50px; font-weight: bold; text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);"');

  if (err.response !== undefined) {
    switch (err.response.status) {
      case 401:
        // localStorage.clear();
        // navigate('/login')
        break;
      case 403:
        // navigate('/forbidden')
        break;
      case 404:
      // navigate('/notfound')
    }
  } else {
  }
  return Promise.reject(err);
};
