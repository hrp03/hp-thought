import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arts: any = [
    {
      title: "Commodore",
      description: "Pattern drawn with lines",
      url: "/arts/commodore"
    }

  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openArt(url: string) {
    this.router.navigateByUrl(url);
  }

}
