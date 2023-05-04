import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  mobileQuery: MediaQueryList;

  navLinks = [
    { label: 'Home', value: 'home' },
    { label: 'Calendário', value: 'calendario' }
  ];

  private _mobileQueryListener: () => void;

  constructor(
    cd: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 500px)');
    this._mobileQueryListener = () => cd.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener,);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  teste(input:any) {
    console.log(input)
  }
}
