import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserProfile } from './userModel';

@Component({
  selector: 'app-avant-profile',
  templateUrl: './avant-profile.component.html',
  styleUrls: ['./avant-profile.component.css']
})

export class AvantProfileComponent implements OnInit {
  model: UserProfile = new UserProfile('', '', '');
  currentTabString: string;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    document.getElementById('defaultOpen').click();
    this.currentTabString = document.getElementById('defaultOpen').getAttribute('id').toString();
  }

  submitUpdatedUser() {
    const reqBody = new UserProfile(
      this.model.firstName,
      this.model.middleName,
      this.model.lastName);
      console.log('submitted');
      
  }

  showTabContent(e, tabType) {
    this.currentTabString = tabType;
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabType).style.display = 'block';
    e.currentTarget.className += ' active';
  }

}
