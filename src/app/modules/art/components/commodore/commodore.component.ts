import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ImageCreator } from 'src/app/helper/image-creator';

declare var p5: any;
declare var domtoimage: any;

@Component({
  selector: 'app-commodore',
  templateUrl: './commodore.component.html',
  styleUrls: ['./commodore.component.scss']
})
export class CommodoreComponent implements OnInit {

  p5Instance: any;
  canvas: any;

  width: number = 600;
  height: number = 600;

  x: number = 0;
  y: number = 0;
  spacing: number = 10;

  pattern: any;

  @ViewChild('canvas', { read: ElementRef, static: false })
  canvasElement: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    location.reload();
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    this.width = this.canvasElement.nativeElement.offsetWidth;
    this.height = this.canvasElement.nativeElement.offsetHeight;

    this.p5Instance = new p5(this.start.bind(this));
  }

  start(sketch: any) {

    sketch.setup = () => {
      this.setup(sketch);
    };

    sketch.draw = () => {
      this.draw();
    };

  }

  preload() {

  }

  setup(canvas: any) {
    this.canvas = canvas;
    this.canvas.createCanvas(this.width, this.height).parent("canvas");
    this.canvas.background(0);

  }

  draw() {

    this.canvas.stroke(255);

    if (this.canvas.random(1) < 0.5) {
      this.canvas.line(this.x, this.y, this.x + this.spacing, this.y + this.spacing);
    } else {
      this.canvas.line(this.x, this.y + this.spacing, this.x + this.spacing, this.y);
    }

    this.x += this.spacing;

    if (this.x > this.canvas.width) {
      this.x = 0;
      this.y += this.spacing;
    }

    if (this.y > this.canvas.height) { this.canvas.noLoop(); }

  }

  reset() {
    this.x = 0;
    this.y = 0;
    this.canvas.background(0);
    this.canvas.loop();
  }

  download() {
    domtoimage.toSvg(document.getElementById('canvas')).then((dataUrl: any) => {

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
