import { switchCase } from "@babel/types";

const liveUrl = 'http://139.59.82.247/v1/customer/'
const products = 'http://139.59.82.247/product/search/?'

export const fetchApiData = (apiMethod, authToken, apiCase, body) => {
  switch (apiCase) {
    case 'GET':
      return new Promise(function (resolve, reject) {
        fetch(liveUrl + apiMethod, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + authToken,
          },
        }).then(response => {
          resolve(response.json())
        }).catch(err => {
          reject(err);
        })
      })
      break;
    case 'PATCH':
      return new Promise(function (resolve, reject) {
        fetch(liveUrl + apiMethod, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + authToken
          },
          body: JSON.stringify(body),
        }).then(response => {
          resolve(response.json())
        }).catch(err => {
          reject(err);
        })
      })
      break;
    case 'POST':
      return new Promise(function (resolve, reject) {
        fetch(liveUrl + apiMethod, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + authToken
          },
          body: JSON.stringify(body),
        }).then(response => {
          resolve(response.json())
        }).catch(err => {
          reject(err);
        })
      })
      break;
    default:
      break;
  }
}

