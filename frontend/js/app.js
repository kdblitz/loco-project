import 'angular-material/angular-material.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import Common from './common';
import Components from './components/components'
import AppComponent from './app.component';

let AppModule = angular.module('app', [
  Common,
  Components,
  ngMaterial,
  uiRouter
]).config(($locationProvider) => {
  'ngInject';
  // $locationProvider.html5Mode(true).hashPrefix('!');
}).component('app', AppComponent);

export default AppModule.name;
