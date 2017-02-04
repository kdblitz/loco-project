import angular from 'angular';
import NewExpense from './newExpense/newExpense';

let componentModule = angular.module('app.components', [
  NewExpense
]);

export default componentModule.name;
