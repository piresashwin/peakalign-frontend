import { AfterViewInit, Component, OnInit, TemplateRef, viewChild, ViewChild } from '@angular/core';
import { DialogService } from 'projects/theme/src/lib/services/dialog.service';
import { CreateObjectiveComponent } from '../create-objective/create-objective.component';
import { first } from 'rxjs';
import { JsPlumbCanvasComponent } from 'projects/theme/src/lib/components/js-plumb-canvas/js-plumb-canvas.component';
import { newInstance } from '@jsplumb/browser-ui';

@Component({
  selector: 'okr-okr-management',
  templateUrl: './okr-management.component.html',
  styleUrl: './okr-management.component.css'
})
export class OkrManagementComponent implements OnInit, AfterViewInit {

  @ViewChild(JsPlumbCanvasComponent, { static: true }) jsPlumbCanvas: JsPlumbCanvasComponent;
  @ViewChild('defaultNode', { static: true }) defaultNodeTemplate: TemplateRef<any>;
  @ViewChild('specialNode', { static: true }) specialNodeTemplate: TemplateRef<any>;

  @ViewChild("c", { read: true }) c: any;

  nodes = [];
  connections = [];

  jsInstance;

  /**
   *
   */
  constructor(private dialogService: DialogService) {

  }

  ngAfterViewInit(): void {
    this.jsInstance = newInstance({
      container: this.c.nativeElement
    })
  }

  ngOnInit(): void {

    this.nodes = [
      { id: 'node1', type: 'default', x: 100, y: 100, template: this.defaultNodeTemplate },
      { id: 'node2', type: 'special', x: 300, y: 100, template: this.specialNodeTemplate },
      { id: 'node3', type: 'default', x: 500, y: 200, template: this.defaultNodeTemplate },
    ];

    this.connections = [
      { source: 'node1', target: 'node2' },
      { source: 'node2', target: 'node3' },
    ];

    this.jsPlumbCanvas.nodes = this.nodes;
    this.jsPlumbCanvas.connections = this.connections;

  }


  openCreateOKR() {
    this.dialogService.open(CreateObjectiveComponent, { data: { objective: null } })
      .pipe(first())
      .subscribe();
  }
}
