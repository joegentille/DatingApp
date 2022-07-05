https://www.npmjs.com/package/ngx-spinner
Install ngx-spinner
ng add ngx-spinner

npm install @angular/cdk 

Con este me funciono:
npm install ngx-spinner

Luego en app.module.ts, agregar en Imports: NgxSpinnerModule

2. 
Installed Cloudinary from nuget package

3.
ng2-file-upload
npm install ng2-file-upload

For Angular Project:
=====================
When using reactive forms, we don't need name nor ngModel inside of inputs, take a look at register.component.html in section 11, before changin to reactive forms.

To import buttons:
https://valor-software.com/ngx-bootstrap/#/components/buttons?tab=api
Look at member-list.component.html
<button 
    type="button"
    class="btn btn-primary" 
    name="orderBy"
    (click)="loadMembers()"
    btnRadio="lastActive"
    [(ngModel)]="userParams.orderBy">Last Active</button>

<button 
    type="button"
    class="btn btn-primary" 
    name="orderBy"
    (click)="loadMembers()"
    btnRadio="created"
    [(ngModel)]="userParams.orderBy">Newest Members</button>

time ago package:
https://www.npmjs.com/package/ngx-timeago
npm install ngx-timeago --save

when we install packages we need to be at project level: client

Route resolvers:
==================
Root resolvers allow us to get access to the data before the component is constructed.

To install signalr in angular:
npm install @microsoft/signalr
