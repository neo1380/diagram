import { Component, OnInit } from "@angular/core";
import { DiagramMaker } from "diagram-maker";
import { ConnectorPlacement, VisibleConnectorTypes } from "diagram-maker";
import { ContextMenuRenderCallbacks } from "diagram-maker";
import {
  DiagramMakerData,
  DiagramMakerNode,
  DiagramMakerPotentialNode,
} from "diagram-maker";
import "diagram-maker/dist/diagramMaker.css";

import {
  createCircularNode,
  createEdgeContextMenu,
  createLibraryPanel,
  createNodeContextMenu,
  createNodeWithDropdown,
  createNodeWithInput,
  createPanelContextMenu,
  createPotentialNode,
  createRectangularNode,
  createToolsPanel,
  createWorkspaceContextMenu,
  updateActionInLogger,
} from "./utils";

import { graph } from "./data";

const windowAsAny = window as any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "diagram";
  currentState: any;
  diagramMaker: any;

  ngOnInit() {
    this.diagramMaker = new DiagramMaker(
      "diagramMakerContainer",
      {
        options: {
          showArrowhead: true,
          connectorPlacement: ConnectorPlacement.LEFT_RIGHT,
        },
        renderCallbacks: {
          destroy: () => undefined,
          node: (node: DiagramMakerNode<{}>, container: HTMLElement) => {
            if (node.typeId === "testId-centered") {
              return createCircularNode(node, container);
            }
            if (node.typeId === "testId-input") {
              return createNodeWithInput(node, container);
            }
            if (node.typeId === "testId-dropdown") {
              return createNodeWithDropdown(node, container);
            }
            return createRectangularNode(node, container);
          },
          potentialNode: (
            node: DiagramMakerPotentialNode,
            container: HTMLElement
          ) => createPotentialNode(node, container),
          panels: {
            library: (panel: any, state: any, container: HTMLElement) =>
              createLibraryPanel(container),
            tools: (panel: any, state: any, container: HTMLElement) =>
              createToolsPanel(container, () => this.diagramMaker),
          },
          contextMenu: {
            node: (id: string | undefined, container: HTMLElement) =>
              createNodeContextMenu(id, container),
            edge: (id: string | undefined, container: HTMLElement) =>
              createEdgeContextMenu(id, container),
            panel: (id: string | undefined, container: HTMLElement) =>
              createPanelContextMenu(id, container),
            workspace: (container: HTMLElement) =>
              createWorkspaceContextMenu(container),
          } as ContextMenuRenderCallbacks,
        },
      },
      {
        initialData: graph,
      }
    );
  }

  getCurrentState() {
    this.currentState = this.diagramMaker.store.getState();
    console.log("AppComponent -> this.currentState", this.currentState);
  }
}
