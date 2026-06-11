import axios from 'axios'
import { showMessage } from '@/utils'

const instance = axios.create()
instance.interceptors.response.use(function (response) {
  if (response.data.code === '0') {
    return response.data.data
  }
  showMessage({
    content: response.data.msg,
    type: 'error'
  })
  return false
})

export default instance