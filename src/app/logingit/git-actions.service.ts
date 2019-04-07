import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './../services/session.service';
import { AuthGit } from './../interfaces/auth-git';

@Injectable({
  providedIn: 'root'
})
export class GitActionsService {

  constructor(private httpClient: HttpClient,
    private session: SessionService) { }

  valideSession(code:string){
    return this.httpClient.post<AuthGit>('https://pangitauth.herokuapp.com/api/auth', {
          code: code
    }, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })}
    );
  }
  getUserData(access_token:string){
    return this.httpClient.get(`https://api.github.com/user?access_token=${access_token}`, {
      headers: this.getHeader(access_token)
    });
  }
  getUserRepo(user:string){
    return this.httpClient.get(`https://api.github.com/users/${user}/repos`, {
      headers: this.getHeader(this.session.get('token'))
    });
  }
  getAccessToken(query:string){
    return query.split('&')[0].split('=')[1];
  }
  getHeader(token:string){
    return new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
  }
}
