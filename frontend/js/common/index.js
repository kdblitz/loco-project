import angular from 'angular';
import Navbar from './navbar';

let commonModule = angular.module('app.common', [
  Navbar
]);

export default commonModule.name;
