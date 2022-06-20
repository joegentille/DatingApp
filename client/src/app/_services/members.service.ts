import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  //   })
  // };

  constructor(private http: HttpClient) { }

  getMembers() {
    //return this.http.get<Member[]>(this.baseUrl + 'users', this.httpOptions);
    if(this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users')
              .pipe(
                map(members => {
                  this.members = members;
                  return members;
                })
              )
  }

  getMember(username: string) {
    //return this.http.get<Member>(this.baseUrl + 'user/' + username,this.httpOptions);
    const member = this.members.find(x => x.username === username);
    if(member !== undefined) { 
      return of(member);
    }
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {    
    return this.http.put(this.baseUrl + 'users', member)
              .pipe(
                map(() => {
                  const index = this.members.indexOf(member);
                  this.members[index] = member;
                })
              )
  }

}
