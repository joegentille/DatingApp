import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { UserParams } from 'src/app/_models/userParams';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  //members$: Observable<Member[]>; // The dollar is to specify that is an observable
  members: Member[];
  pagination: Pagination;
  userParams: UserParams;
  user: User;
  genderList = [{value: 'male', display: 'Males'}, {value: 'female', display: 'Females'}];
  
  constructor(private memberService: MembersService) { 
    this.userParams = this.memberService.getUserParams();
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.setUserParams(this.userParams);
    this.memberService.getMembers(this.userParams)
      .subscribe({
        next: (response: PaginatedResult<Member[]>) => {
          this.members = response.result;
          this.pagination = response.pagination;
        }
      })
  }

  resetFilters() {
    this.userParams = this.memberService.resetUserParams();
    this.loadMembers();
  }

  pageChanged(event: any) {
    this.userParams.pageNumber = event.page;
    this.memberService.setUserParams(this.userParams);
    this.loadMembers();
  }

  /*
  Formas de usar el subscribe

  loadMember() {
      this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
        this.member = member;
        this.galleryImages = this.getImages();
      })
    }

  get500Error() {
      this.http.get(this.baseUrl + 'buggy/server-error')
        .subscribe({
          next: (response: any) => { console.log(response) },
          error: (error: any) => { console.log(error) }
        })
    }

  */
}
