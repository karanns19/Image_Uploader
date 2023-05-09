import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url:any
  displayPages = [true, false, false]

  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.displayPages[0] = false
      this.displayPages[1] = true

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event:any) => {
        this.url = event.target.result;
        this.displayPages[1] = false
        this.displayPages[2] = true
        console.log(this.url)
      }
    }
  }

  copyText(){
    navigator.clipboard.writeText(this.url);
    Notiflix.Notify.success("Copied to Clipboard")
  }

}
