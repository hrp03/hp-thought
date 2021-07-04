import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var p5: any;
declare var clm: any;

@Component({
  selector: 'app-test-your-voice',
  templateUrl: './ring-the-bell.component.html',
  styleUrls: ['./ring-the-bell.component.scss']
})
export class TestYourVoiceComponent implements OnInit {

  p5Instance: any;
  canvas: any;
  video: any;
  clmTracker: any;
  
  soundBell: any;

  playing: boolean = false;

  width: any = 360;
  height: any = 280;

  pointArray: any = {
    // face: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    // leftEyebrow: [19, 20, 21, 22],
    // rightEyebrow: [18, 17, 16, 15],
    // leftEyes: [23, 63, 24, 64, 25, 65, 26, 66],
    // rightEyes: [30, 68, 29, 67, 28, 70, 31, 69],
    // nose: [33, 34, 35, 36, 42, 37, 43, 38, 39, 40],
    upperLips: [44, 45, 46, 47, 48, 49, 50, 59, 60, 61],
    bottomLips: [44, 56, 57, 58, 50, 51, 52, 53, 54, 55]
  }

  constructor() { }

  ngOnInit(): void {
    this.p5Instance = new p5(this.start.bind(this));
  }

  start(sketch: any) {

    sketch.setup = () => {
      this.setup(sketch);
    };

    sketch.draw = () => {
      this.draw(sketch);
    };

  }

  preload() {

  }

  setup(canvas: any) {
    canvas.createCanvas(this.width, this.height).parent("canvas");
    canvas.background(0);

    this.video = canvas.createCapture(this.p5Instance.VIDEO);
    this.video.size(this.width, this.height);
    this.video.hide();

    this.clmTracker = new clm.tracker();
    this.clmTracker.init();
    this.clmTracker.start(this.video.elt);

    this.soundBell = this.p5Instance.loadSound('/assets/mp3/doorbell.mp3');

  }

  draw(canvas: any) {
    canvas.background(255);
    // canvas.image(this.video, 0,0);

    let positions = this.clmTracker.getCurrentPosition();
    if (positions) {
      canvas.fill(0);

      canvas.stroke(10);
      Object.keys(this.pointArray).forEach(key => {

        let points = this.pointArray[key];

        canvas.beginShape();
        canvas.fill(255);
        for (let i = 0; i < points.length; i++) {
          canvas.vertex(
            positions[points[i]][0],
            positions[points[i]][1]
          );
        }
        canvas.vertex(
          positions[points[0]][0],
          positions[points[0]][1]
        );
        canvas.endShape(p5.CLOSE);

      });

      const mouthTop = canvas.createVector(positions[60][0], positions[60][1]);
      const mouthBottom = canvas.createVector(positions[57][0], positions[57][1]);

      const distance = mouthTop.sub(mouthBottom).mag();
      
      if (this.soundBell.isLoaded() && distance > 21 && !this.soundBell._playing) {
        this.soundBell.play();
      }

    }

  }

}
