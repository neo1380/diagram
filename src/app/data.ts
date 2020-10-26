import { EditorMode, PositionAnchor } from "diagram-maker";
import { DiagramMakerData } from "diagram-maker";

export const graph: DiagramMakerData<{}, {}> = {
  nodes: {
    node1: {
      id: "node1",
      diagramMakerData: {
        position: {
          x: 200,
          y: 150,
        },
        size: {
          width: 100,
          height: 50,
        },
      },
    },
    node2: {
      id: "node2",
      diagramMakerData: {
        position: {
          x: 400,
          y: 300,
        },
        size: {
          width: 100,
          height: 50,
        },
      },
    },
    "dm-node-8ebf38cd-36ec-4a3a-a0f6-15ace8890266": {
      id: "dm-node-8ebf38cd-36ec-4a3a-a0f6-15ace8890266",
      typeId: "testId-normalWithSize",
      diagramMakerData: {
        position: {
          x: 424,
          y: 132,
        },
        size: {
          width: 100,
          height: 50,
        },
      },
    },
  },
  edges: {
    edge1: {
      id: "edge1",
      src: "node1",
      dest: "node2",
      diagramMakerData: {},
    },
    "dm-edge-0f400ade-4a1f-47d0-8fcd-abb21248ea2f": {
      dest: "dm-node-8ebf38cd-36ec-4a3a-a0f6-15ace8890266",
      diagramMakerData: {},
      id: "dm-edge-0f400ade-4a1f-47d0-8fcd-abb21248ea2f",
      src: "node1",
    },
  },
  panels: {
    [`library`]: {
      id: `library`,
      position: { x: 20, y: 20 },
      size: { width: 250, height: 600 },
      positionAnchor: PositionAnchor.TOP_RIGHT,
    },
    [`tools`]: {
      id: `tools`,
      position: { x: 20, y: 20 },
      size: { width: 150, height: 400 },
    },
  },
  workspace: {
    position: { x: 0, y: 0 },
    scale: 1,
    canvasSize: { width: 3200, height: 1600 },
    viewContainerSize: { width: window.innerWidth, height: window.innerHeight },
  },
  editor: { mode: EditorMode.DRAG },
};
