class ClusterTool extends ClassificationTool {
    constructor(appInstance: AppInstance) {
        super(
            appInstance,
            'Cluster',
            'Clustering Tool',
            'Cluster objects using the K-means algorithm', {
                templateUrl: '/templates/tools/modules/cluster/cluster.html',
                icon: 'CLU',
                defaultWindowHeight: 1025,
                defaultWindowWidth: 450
            }
          )
    }
}