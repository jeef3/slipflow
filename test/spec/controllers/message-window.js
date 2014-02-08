'use strict';

describe('Controller: MessageWindowCtrl', function () {

  // load the controller's module
  beforeEach(module('hipFlowApp'));

  var MessageWindowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessageWindowCtrl = $controller('MessageWindowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
