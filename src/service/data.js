import axios from 'axios'

async function _axios(method, url, data) {
    let Data;
    await axios(url, {
        method: method,
        data: data
    }).then(res => {
        Data = res.data
    }).catch(err => {
        Data = err
    })

    return Data;
}

let a = _axios('get', 'https://www.easy-mock.com/mock/5b47fcbebad3321130bf0ab0/sigin_copy/student/myCourse#!method=get')

export default a