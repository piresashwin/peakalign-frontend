import { AfterViewInit, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { JsPlumbService } from '../../services/js-plumb-service.service';
import { newInstance } from '@jsplumb/browser-ui';

interface NodeData {
  id: string;
  type: string;
  x: number;
  y: number;
  template?: TemplateRef<any>;
  ref?: any
}

interface ConnectionData {
  source: string;
  target: string;
}

@Component({
  selector: 'theme-js-plumb-canvas',
  templateUrl: './js-plumb-canvas.component.html',
  styleUrl: './js-plumb-canvas.component.css'
})
export class JsPlumbCanvasComponent implements AfterViewInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  @Input() nodes: NodeData[] = [];
  @Input() connections: ConnectionData[] = [];

  constructor(private jsPlumbService: JsPlumbService, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const instance = newInstance({ container: this.canvas.nativeElement });
    this.jsPlumbService.setInstance(instance);

    this.renderNodesAndConnections();
  }

  renderNodesAndConnections() {
    this.nodes.forEach((node) => {
      this.addNode(node);
    });

    this.connections.forEach((connection) => {
      const source = this.nodes.find(x => x.id == connection.source);
      const target = this.nodes.find(x => x.id == connection.target);
      this.jsPlumbService.connect(source?.ref, target?.ref);
    });
  }

  addNode(nodeData: NodeData) {
    const nodeElement = this.renderer.createElement('div');
    this.renderer.addClass(nodeElement, 'node');
    this.renderer.setStyle(nodeElement, 'position', 'absolute');
    this.renderer.setStyle(nodeElement, 'top', `${nodeData.y}px`);
    this.renderer.setStyle(nodeElement, 'left', `${nodeData.x}px`);
    this.renderer.setProperty(nodeElement, 'id', nodeData.id);
    this.renderer.appendChild(this.canvas.nativeElement, nodeElement);

    // Apply the appropriate template based on node type
    if (nodeData.template) {
      const viewContainer = document.createElement('div');
      viewContainer.appendChild(nodeData.template.createEmbeddedView({ $implicit: { id: 1 } }).rootNodes[0]);
      nodeElement.appendChild(viewContainer);
    } else {
      // Default content if no template is provided
      nodeElement.innerHTML = `<p>${nodeData.type}</p>`;
    }

    nodeData.ref = nodeElement;

    this.jsPlumbService.addNode({ ...nodeData, element: nodeElement });
  }
}
