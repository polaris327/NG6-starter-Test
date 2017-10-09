import angular from 'angular';
import entityCreatorFormComponent from './entityCreatorForm.component';

import EntityListItemComponent from '../../components/entityListItem/entityListItem';

let entityCreatorFormModule = angular.module('entityCreatorForm', [
  EntityListItemComponent.name
])

.component('entityCreatorForm', entityCreatorFormComponent);

export default entityCreatorFormModule;
