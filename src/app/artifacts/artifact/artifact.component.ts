import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { IArtifact } from '../../../api/artifact/artifact.interfaces';
import { ArtifactService } from '../../../api/artifact/artifact.service';
import { parseContent } from '../artifacts.utils';


@Component({
  selector: 'app-artifact',
  templateUrl: './artifact.component.html',
  styleUrls: ['./artifact.component.css']
})
export class ArtifactComponent implements AfterViewInit {
  artifact?: IArtifact;
  artifactContent?: any;
  values = '';

  @ViewChild('bg', { static: true })
  div: ElementRef<HTMLDivElement>;

  constructor(private route: ActivatedRoute,
              private sanitized: DomSanitizer,
              private artifactService: ArtifactService) { }

  ngAfterViewInit() {
    this.route.params
      .subscribe(params =>
        this
          .artifactService
          .read(params.location)
          .subscribe(artifact => {
            this.artifact = parseContent(artifact);
            if (this.artifact._content === 'img')
              this.div.nativeElement
                .style.background = `url(${this.artifact.location}) no-repeat`;
            else
              this.artifactContent = this.sanitized
                .bypassSecurityTrustHtml(artifact._content);
          })
      );
  }

  onKey(value: string) {
    this.values += value + ' | ';
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    console.log(`You typed`, event.key);
  }
}
