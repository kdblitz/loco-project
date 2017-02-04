import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newExpenseComponent from './newExpense.component';

let newExpenseModule = angular.module('newExpense', [
  uiRouter
]).config(($stateProvider) => {
  'ngInject';
  $stateProvider.state('newExpense', {
    url: 'newExpense',
    component: 'newExpense'
    // template: '<new-expense></new-expense>'
  });
}).component('newExpense', newExpenseComponent);

export default newExpenseModule.name;
