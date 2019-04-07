import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './../services/session.service';


@Injectable({
  providedIn: 'root'
})
export class GitActionsService {

  constructor(private httpClient: HttpClient,
    private session: SessionService) { }

  valideSession(code:string){
    return this.httpClient.post('/api/login/oauth/access_token', {
          client_id: 'cc5d6a52910648e97389',
          client_secret: '1163f8081f7a567b5cd264b2b42394236a293323',
          code: code
      }, { responseType: 'text' }
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
