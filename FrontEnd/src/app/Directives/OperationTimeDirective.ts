import { Directive, ElementRef, OnInit, Renderer2, } from "@angular/core";
import { HostListener } from "@angular/core";
import { count } from "console";

let counter = 0;

@Directive({
    selector: '[nz-Operation]',
}) export class OperationTimeDirectvie {
    constructor(private elementRef: ElementRef, private renderer2: Renderer2, private hidden: OperationHidden) {

    }

    @HostListener('click') onMouseClick() {
        counter += 1;

        if (counter == 1) {
            this.hidden.Test()
            this.renderer2.addClass(this.elementRef.nativeElement, 'arrow-clicked');
        } else if (counter > 1) {
            this.hidden.Test()
            this.renderer2.removeClass(this.elementRef.nativeElement, 'arrow-clicked');
            this.renderer2.addClass(this.elementRef.nativeElement, 'arrow');
            counter = 0
        };
    }
}


@Directive({
    selector: '[nz-operation-text]'
}) export class OperationHidden {

    showtimeClass: string = 'show-time';
    showtimeClassHidden: string = 'show-time-hidden'


    constructor(private elementRef: ElementRef, private renderer2: Renderer2) {

    }

    // When counter Increments
    // Opertion details display/hidden
    Test() {
        if (counter == 1) {
            this.renderer2.addClass(this.elementRef.nativeElement, 'show-time-hidden');
        } else if (counter >= 1) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.showtimeClass);
            this.renderer2.addClass(this.elementRef.nativeElement, this.showtimeClassHidden);
        };
        console.log(counter)
    }

}