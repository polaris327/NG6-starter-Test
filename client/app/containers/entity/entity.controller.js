class EntityController {
  constructor($uibModal, $scope, EntitiesService) {
    "ngInject";

    const self = this;
    this.$uibModal = $uibModal;
    this.EntitiesService = EntitiesService;

    this.entities = this.EntitiesService.getConnectedEntities();

    this.showModal = function() {
      var modalInstance = this.$uibModal.open({
        template: '<entity-creator-form></entity-creator-form>',
        backdrop: 'static',
        bindings: { // Previous resolve property (I assume)
          // myAttribute: 'myStringReferenceTo$scopeVariable'
        }
      });

      modalInstance.closed.then(function() {
        self.entities = self.EntitiesService.getConnectedEntities();
      });

      this.EntitiesService.setModalInstance(modalInstance);

      $scope.$on("entityremoved", function(evt, data) {
        self.entities = self.EntitiesService.getConnectedEntities();
      });
    };
  }
}

export default EntityController;
