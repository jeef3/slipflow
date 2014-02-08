'use strict';

describe('Filter: localBranchName', function () {

  // load the filter's module
  beforeEach(module('hipFlowApp'));

  // initialize a new instance of the filter before each test
  var localBranchName;
  beforeEach(inject(function ($filter) {
    localBranchName = $filter('localBranchName');
  }));

  it('should return the input prefixed with "localBranchName filter:"', function () {
    var text = 'angularjs';
    expect(localBranchName(text)).toBe('localBranchName filter: ' + text);
  });

});