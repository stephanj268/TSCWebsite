import { Directive, ElementRef, OnInit, Renderer2, } from "@angular/core";
import { HostListener } from "@angular/core";
import { Operationservice } from "./Operationservice";

@Directive({
    selector: '[nz-Operation]',
}) export class OperationTimeDirectvie implements OnInit {
    counter: any;
    constructor(private elementRef: ElementRef, private renderer2: Renderer2, private operationservice: Operationservice) {

    }

    ngOnInit(): void {
        this.counter = this.operationservice.counter;
    }

    @HostListener('click') onMouseClick() {
        this.counter += 1;

        if (this.counter == 1) {
            //this.hidden.Test()
            this.renderer2.addClass(this.elementRef.nativeElement, 'arrow-clicked');
        } else if (this.counter > 1) {
            //this.hidden.Test()
            this.renderer2.removeClass(this.elementRef.nativeElement, 'arrow-clicked');
            this.renderer2.addClass(this.elementRef.nativeElement, 'arrow');
            this.counter = 0
        };
    }
}
