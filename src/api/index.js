import axios from 'axios';


let AUTH_TOKEN=(function(){
    return sessionStorage.getItem("token");
})();



let http = axios.create({
  baseURL: process.env.API_BASEURL,
  withCredentials: true,
  // headers: {
  //   // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  //   'Content-Type': 'application/json' ,
  // },
  headers: {
    'Content-Type': 'application/json' ,
    'token': AUTH_TOKEN
  },

  transformRequest: [function (data) {
    // let newData = '';
    // for (let k in data) {
    //   if (data.hasOwnProperty(k) === true) {
    //     newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
    //   }
    // }
    // return newData;
    data = JSON.stringify(data)
    return data
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}
 
export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}