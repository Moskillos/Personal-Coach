import axios from 'axios'


export async function createUser(email, password){    
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCue2m_f0Xs01DUhA86uMsqk1HJbbRo3aU', {
        email : email,
        password: password,
        returnSecureToken: true
    })
    const token = response.data.idToken
    return token
}