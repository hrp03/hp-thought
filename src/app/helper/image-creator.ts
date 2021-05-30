export class ImageCreator {

    width: number = 1920;
    height: number = 1920;

    constructor() {

    }

    convertSvgToPng(svgDataUrl: any) {

        return new Promise((resolve, error) => {

            let image = new Image(this.width, this.height);

            image.onload = () => {

                let canvas = this.createCanvas(image);
                let pngImage = canvas.toDataURL("image/png");

                resolve(pngImage);

            };

            image.src = svgDataUrl;

        });

    }

    private createCanvas(image: any) {

        let canvas = document.createElement("canvas");
        let context: any = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0, this.width, this.height);
        this.addWaterMark(context);

        return canvas;
    }

    private addWaterMark(context: any) {

        let waterMark: string = "@hrp03_official";

        context.font = "48px 'Amaranth-Regular'";
        context.fillStyle = "white";
        context.textAlign = "right";

        let x = this.width - 30;
        let y = 64;

        context.fillText(waterMark, x, y);
    }

}
