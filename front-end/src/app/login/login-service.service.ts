import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

interface Login {
  email: string ;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url = 'http://localhost:3000/auth/login'
  constructor(private http: HttpClient) {}

  login(email: string, password:string){
    return this.http.post<Login>(this.url,{email,password})
  }

  saveSession(data:any)
  {
    sessionStorage.setItem('JwtToken',JSON.stringify(data.access_token))
  }

  getSession(){
    const data = sessionStorage.getItem('JwtToken')
    if (data)
    {
      console.log("Data JWT is : ", data)
      const user_info = jwtDecode(data)
      console.log("Decoded Data Is : " ,user_info)
      return user_info
    }
    else{
      return null
    }
  }

  logout(){ 
    sessionStorage.removeItem('JwtToken')
  }

}
