import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCreator } from 'src/app/helper/image-creator';
import { CodeService } from 'src/app/services/code.service';

declare var domtoimage: any;

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  code: string = "";

  options: any = {
    lineNumbers: false,
    theme: 'material',
    mode: 'javascript'
  };

  themes: any = [];
  languages: any = [];

  selectedTheme: string = '';
  selectedLanguage: string = '';

  constructor(private codeService: CodeService, private router: Router) {

  }

  ngOnInit() {
    this.code = this.codeService.text;
    this.themes = this.codeService.codeMirror.themes;
    this.languages = this.codeService.codeMirror.languages;
  }

  changeTheme(event: any) {
    this.selectedTheme = event.target.value;
    this.updateCodeMirror();
  }

  changeLanguage(event: any) {
    this.selectedLanguage = event.target.value;
    this.updateCodeMirror();
  }

  updateCodeMirror() {
    this.options = {
      lineNumbers: false,
      theme: this.selectedTheme,
      mode: this.selectedLanguage
    };
  }

  download() {
    domtoimage.toSvg(document.getElementById('codeArea')).then((dataUrl: any) => {

      let imageCreator = new ImageCreator();
      
      imageCreator.convertSvgToPng(dataUrl).then((png: any) => {

        var link = document.createElement('a');
        link.download = Date.now() + '.png';
        link.href = png;
        link.click();

      });

    });
  }


}
