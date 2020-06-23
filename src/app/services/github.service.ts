import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



//https://api.github.com/users/ankitbinjola
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

    // gives user details 
  getUserDetails(username: string){
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  //return repo details of user
  getRepos(repoUrl: string){
    return this.http.get(repoUrl);
  }

}
