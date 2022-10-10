import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  loading$!: Observable<boolean>;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loading$ = this.loadingService.loading$;
  }
}
