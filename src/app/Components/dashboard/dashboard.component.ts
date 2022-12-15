import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  value: any;
  constructor(media: MediaMatcher, changeDetectorRef: ChangeDetectorRef, private router:Router ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

}
Notes(){
  this.router.navigateByUrl('/dashboard/note')
}
trashopen(){
  this.router.navigateByUrl('/dashboard/trash')
}
archiveopen(){
this.router.navigateByUrl('/dashboard/archiv')
}
}

