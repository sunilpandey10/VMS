import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  hide=true;
  ngOnInit() {
  }
  constructor (
    private router: Router,
    private route:ActivatedRoute
   ) {}
  name: any;
  password: any;
  onSubmit(name, password) {
    if (name != null && password != null) {
      this.router.navigate(['/home'],{relativeTo:this.route});
      console.log("message logged");
    }
  }
}
