import template from './entityCreatorForm.html';
import controller from './entityCreatorForm.controller';
import './entityCreateForm.scss';

let entityCreatorFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default entityCreatorFormComponent;
