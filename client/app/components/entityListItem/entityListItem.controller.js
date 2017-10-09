class EntityItemController {
  constructor($scope, EntitiesService) {
    "ngInject";

    this.EntitiesService = EntitiesService;
    this.$scope = $scope;
  }

  removeEntity() {
    this.EntitiesService.disconnectEntity(this.entity);
    this.$scope.$emit('entityremoved', []);
  }
}

export default EntityItemController;
