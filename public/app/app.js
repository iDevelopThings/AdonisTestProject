/**
 * Created by Sam on 27/11/2016.
 */
var user = window.user;
var MyApp = angular.module('MyApp', []).config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

var socket = io('http://localhost:3000');
