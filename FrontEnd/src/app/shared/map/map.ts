import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class MapComponent implements OnChanges, OnInit {
  @Input() lat?: number;
  @Input() lng?: number;
  mapUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    const url = `https://www.google.com/maps?q=${this.lat},${this.lng}&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    console.log(this.lat)
  }

}
