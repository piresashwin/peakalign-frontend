import { Injectable, ComponentFactoryResolver, ComponentRef, Injector } from '@angular/core';
import { newInstance, Connection, JsPlumbInstance, Endpoint, DotEndpoint } from '@jsplumb/browser-ui';

@Injectable({
  providedIn: 'root',
})
export class JsPlumbService {
  private jsPlumbInstance: JsPlumbInstance;

  constructor() {

  }

  setInstance(instance: JsPlumbInstance) {
    this.jsPlumbInstance = instance;
  }

  // Add a node based on its type and configuration
  addNode(nodeData: { id: string; type: string; x: number; y: number; element: HTMLElement }) {
    this.jsPlumbInstance.manage(nodeData.element, nodeData.id);
  }

  connect(sourceId: any, targetId: any, options?: any): Connection {
    debugger
    return this.jsPlumbInstance.connect({
      source: sourceId,
      target: targetId,
      anchor: "Center",
      endpoint: 'Dot',
      connector: 'Flowchart',
      ...options,
    });
  }

  setContainer(container: HTMLElement) {
    this.jsPlumbInstance.setContainer(container);
  }

  // Other methods like removeNode, reset, etc., remain the same
}
