import axios from "axios"

const SERVER_API = 'http://localhost:5000'

export const LogIn_req = async (data) => {
  return await axios({
    method: 'post',
    url: `${SERVER_API}/login`,
    data,
    withCredentials: true
  })
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}

export const add_tiket = async (data) => {
  return await axios({
    method: 'post',
    url: `${SERVER_API}/requisitions/add_ticket`,
    data,
    withCredentials: true
  })
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}

export const get_tickets = async() => {
  return await axios({
    method: 'get',
    url: `${SERVER_API}/requisitions/get_tickets`,
    withCredentials: true
  })
  .then(response => {
    return response.data
  })
  .catch(err => {
    return err.response.data
  })
}

export const del_ticket = async(code) => {
  return await axios({
    method: 'delete',
    url: `${SERVER_API}/requisitions/del_ticket/${code}`,
    withCredentials: true
  })
  .then(response => {
    console.log(response.data)
    return response.data
  })
  .catch(err => {
    console.log(err.response.data)
    return err.response.data
  })
}