import template   from './entityListItem.html';
import controller from './entityListItem.controller';
import './entityListItem.scss';

const entityListItemComponent = {
  restrict: 'E',
  bindings: {
    entity: '<',
    container: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default entityListItemComponent;
