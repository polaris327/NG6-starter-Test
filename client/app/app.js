import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import uiBootstrap      from 'angular-ui-bootstrap';

import AppComponent from './app.component';
import HomeComponent from './pages/home/home';
import EntityCreateFormComponent from './containers/entityCreatorForm/entityCreatorForm';
import entityComponent from './containers/entity/entity';

import EntitiesService from './services/EntitiesService';

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../theme/mixins.scss';
import '../theme/variables.scss';


angular
  .module('app', [
    uiRouter,
    uiBootstrap,
    EntityCreateFormComponent.name,
    entityComponent.name,
    HomeComponent.name
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";

    // Define our app routing, we will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of our app views
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        template: '<app></app>'
      })

      .state('app.home', {
        url: '/home',
        template: '<home></home>'
      })

    $urlRouterProvider.otherwise('/app/home');
  })
  .component('app', AppComponent)
  .factory('EntitiesService', EntitiesService);
