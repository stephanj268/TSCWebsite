import { Directive, ElementRef, OnInit, Renderer2, } from "@angular/core";
import { HostListener } from "@angular/core";
import { count } from "console";

@Directive({
    selector: '[nz-Operation]'
}) export class OperationTimeDirectvie {
    constructor(private elementRef: ElementRef, private renderer2: Renderer2) {

    }


    counter: number = 0;
    @HostListener('click') onMouseClick() {
        this.counter += 1;

        if (this.counter == 1) {
            this.renderer2.addClass(this.elementRef.nativeElement, 'arrow-clicked');
        } else if(this.counter > 1) {
            this.renderer2.removeClass(this.elementRef.nativeElement, 'arrow-clicked');
            this.renderer2.addClass(this.elementRef.nativeElement, 'arrow');
            this.counter = 0
        };

        console.log(this.counter);
    }
}