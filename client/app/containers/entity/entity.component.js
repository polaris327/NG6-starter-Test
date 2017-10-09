import template from './entity.html';
import controller from './entity.controller.js';
import './entity.scss';

let entityComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default entityComponent;
