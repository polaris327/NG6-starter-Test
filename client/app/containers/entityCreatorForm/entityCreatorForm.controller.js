class EntityCreatorFormController {
  constructor(EntitiesService) {
    "ngInject";

    this.EntitiesService = EntitiesService;
    this.entities = this.EntitiesService.getDisconnectedEntities();
  }

    connectEntity() {
      this.EntitiesService.connectEntities(this.entities);
      this.hideModal();
    }

    hideModal() {
      var modalInstance = this.EntitiesService.getModalInstance();
      modalInstance.close('true');
    }
}

export default EntityCreatorFormController;
