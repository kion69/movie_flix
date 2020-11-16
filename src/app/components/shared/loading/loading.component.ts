import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  showLoading: boolean;
  constructor() {
    this.showLoading = false;
  }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    this.showLoading = true;
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }
}
