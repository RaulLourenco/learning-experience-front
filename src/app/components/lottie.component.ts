import { Component } from '@angular/core';

@Component({
    selector: 'lottie-animation',
    template: `<lottie-animation-view
                 [options]="lottieConfig"
                 [width]="300"
                 [height]="300"
                 (animCreated)="handleAnimation($event)">
                 </lottie-animation-view>`
})

export class LottieComponent {

    public lottieConfig: Object;
    private anim: any;
    private animationSpeed = 1;

    constructor() {
        this.lottieConfig = {
            path: 'assets/json/books.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }

    handleAnimation(anim: any) {
        this.anim = anim;
    }

    stop() {
        this.anim.stop();
    }

    play() {
        this.anim.play();
    }

    pause() {
        this.anim.pause();
    }

    setSpeed(speed: number) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    }
}
