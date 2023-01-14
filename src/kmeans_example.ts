import * as tf from "@tensorflow/tfjs-node";
import { KMeans, setBackend } from "scikitjs";
setBackend(tf);

const train = [
    [1,2],
    [1,4],
    [4,4],
    [4,0]
];

const kmean = new KMeans({ nClusters: 2});
kmean.fit(train);

const test = [
    [3,2],
    [2,1]
];

const result = kmean.predict(test);
console.log(result.array());