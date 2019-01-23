function upper(strings, ...values) {}

var name = 'Nguyen Van A',
  account = 'ANV',
  classname = 'FrontEnd AngularJS';

console.log(
  upper`Hello ____ (@____), welcome to the ____!` ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRONTEND ANGULARJS!'
);
