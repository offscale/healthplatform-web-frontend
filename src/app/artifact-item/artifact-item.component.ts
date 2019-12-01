import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { IArtifact } from '../../api/artifact/artifact.interfaces';
import { ArtifactService } from '../../api/artifact/artifact.service';
import { parseContent } from '../artifacts/artifacts.utils';


@Component({
  selector: 'app-artifact-item',
  templateUrl: './artifact-item.component.html',
  styleUrls: ['./artifact-item.component.css']
})
export class ArtifactItemComponent implements AfterViewInit {
  @Input()
  artifact?: IArtifact;

  artifactContent?: any;
  isFullScreen = false;

  @ViewChild('artifactDiv', { static: true })
  artifactDiv: ElementRef<HTMLDivElement>;

  constructor(private route: ActivatedRoute,
              private sanitized: DomSanitizer,
              private artifactService: ArtifactService) { }

  ngAfterViewInit() {
    if (this.artifact == null)
      this.route.params
        .subscribe(params =>
          this
            .artifactService
            .read(params.location)
            .subscribe(artifact => {
              this.artifact = parseContent(artifact);
              /*if (this.artifact._content === 'img')
                this.div.nativeElement
                  .style.background = `url(${this.artifact.location}) no-repeat`;
              else*/
              this.artifactContent = this.sanitized
                .bypassSecurityTrustHtml(artifact._content);
            })
        );
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'f')
      return this.toggleFullScreen({
          target: this.artifactDiv.nativeElement
        } as unknown as MouseEvent
      );
  }

  toggleFullScreen($event: MouseEvent): void {
    const fullScreenToggle = () => this.isFullScreen = !this.isFullScreen;

    (this.isFullScreen ?
      window.document.exitFullscreen()
      : ($event.target as Element).requestFullscreen())
      .then(fullScreenToggle)
      .catch(() => {
        fullScreenToggle();
        this.toggleFullScreen($event);
      });
  }
}
