function EntitiesService() {
  "ngInject";

  // private variable to store our available entities
  var entities = [
    {id: 0, 'name': 'Arrivals', 'type': 'BPM', isConnected: false},
    {id: 1, 'name': 'Car Wash', 'type': 'BPM', isConnected: false},
    {id: 2, 'name': 'Maintenance', 'type': 'Project', isConnected: false},
    {id: 3, 'name': 'Customer Payment', 'type': 'BPM', isConnected: false},
    {id: 4, 'name': 'Technical Issues', 'type': 'Project', isConnected: false},
    {id: 5, 'name': 'Arrivals Database', 'type': 'Database', isConnected: false},
    {id: 6, 'name': 'Calculator', 'type': 'Application', isConnected: false},
    {id: 7, 'name': 'California', 'type': 'Server', isConnected: false}
  ];
  var modalInstance;

  return {
    // Will retrieve our entities list for displaying
    getEntities() {
      return entities;
    },

    getConnectedEntities() {
      var tmp = angular.copy(entities);
      var connectedEntities = [];

      for(var k=0; k < tmp.length; k++){
        if(tmp[k].isConnected){
          connectedEntities.push(tmp[k]);
        }
      }
      return connectedEntities;
    },

    getDisconnectedEntities() {
      var tmp = angular.copy(entities);
      var disconnectedEntities = [];

      for(var k = 0; k < tmp.length; k++){
        if(!tmp[k].isConnected){
          disconnectedEntities.push(tmp[k]);
        }
      }
      return disconnectedEntities;
    },

    connectEntities(ens) {
      for (var i = 0; i < ens.length; i++) {
        entities[ens[i].id].isConnected = ens[i].isConnected;
      }
    },

    disconnectEntity(e) {
      entities[e.id].isConnected = false;
    },

    getModalInstance() {
      return modalInstance;
    },

    setModalInstance(e) {
      modalInstance = e;
    }
  }
}

export default EntitiesService;
