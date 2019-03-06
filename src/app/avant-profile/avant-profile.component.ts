import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-avant-profile',
  templateUrl: './avant-profile.component.html',
  styleUrls: ['./avant-profile.component.css']
})
export class AvantProfileComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    document.getElementById('defaultOpen').click();
  }

  showTabContent(e, tabType) {
    // Declare all variables
    let i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabType).style.display = 'block';
    e.currentTarget.className += ' active';
  }

}
