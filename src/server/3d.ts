import { cache } from "react";
import { type BufferGeometry, CatmullRomCurve3, Line, Vector3 } from "three";
import { type OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export const loadModelAndCreateCurve = cache(
  async (loader: OBJLoader, modelPath: string) => {
    return new Promise((resolve, _reject) => {
      loader.load(modelPath, (object) => {
        const pointsArray: Vector3[] = [];
        object.traverse((child) => {
          if (child instanceof Line) {
            const curveGeometry = child.geometry as BufferGeometry;
            if (curveGeometry.attributes.position) {
              for (
                let i = 0;
                i < curveGeometry.attributes.position.array.length;
                i += 3
              ) {
                pointsArray.push(
                  new Vector3(
                    curveGeometry.attributes.position.array[i],
                    curveGeometry.attributes.position.array[i + 1],
                    curveGeometry.attributes.position.array[i + 2],
                  ),
                );
              }
            }
          }
        });
        const curve = new CatmullRomCurve3(pointsArray);
        resolve(curve);
      });
    });
  },
);
