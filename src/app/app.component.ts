import { Component, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vetsite';

  constructor(
    private zone: NgZone,
    private router: Router,
    private route:ActivatedRoute){}

    ngOnInit(){
      this.zone.run(()=>{this.router.navigate(['home']);});
    }

}
