import jwt_decode from "jwt-decode";

const authHelpers = {
  setToken(token){
    localStorage.setItem('token', JSON.stringify(token))
  },
  getToken(){
    let token = localStorage.getItem('token');
    return token
  },
  removeToken(){
    localStorage.removeItem('token')
  },
  async signin(data) {
    try {
      let request = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      let response = await request.json()
      if (response.token){
        this.setToken(response.token)
        var decoded = jwt_decode(response.token);
        return decoded
      }
      return undefined
    } catch (e) {
      console.log(e)
    }
  }
};
  
export { authHelpers };