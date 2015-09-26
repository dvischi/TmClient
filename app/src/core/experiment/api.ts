interface GetExperimentResponse {
    owned: ExperimentAPIObject[];
    shared: ExperimentAPIObject[];
}

interface LayerAPIObject {
    name: string;
    imageSize: number[];
    pyramidPath: string;
}

interface ExperimentAPIObject {
    id: string;
    name: string;
    description: string;
    owner: string;
    layers: LayerAPIObject[];
}