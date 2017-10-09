import angular from 'angular';
import entityListItemComponent from './entityListItem.component';

const entityListItemModule = angular.module('entityListItem', [])

.component('entityListItem', entityListItemComponent);

export default entityListItemModule;
