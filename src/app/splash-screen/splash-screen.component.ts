import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {
constructor(public router:Router)
{}
loadingshow=true;
logoshow=false;
ngOnInit(){
  setTimeout(()=>{ 
    // this.router.navigate(['/app']);
    this.loadingshow=false;
    this.router.navigate(['/login']);
  }, 5000) 
}
}
