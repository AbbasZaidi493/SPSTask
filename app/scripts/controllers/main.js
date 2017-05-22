'use strict';
angular.module('spsTaskApp')
  .controller('MainCtrl', function ($scope, $http, $location, commentService) {
    var columnDefs = [
      {headerName: "postId", field: "postId"},
      {headerName: "id", field: "id"},
      {headerName: "name", field: "name"},
      {headerName: "email", field: "email"},
      {headerName: "body", field: "body"}
    ];

    $scope.getComments = function () {
      $http.get('https://jsonplaceholder.typicode.com/comments')
        .then(function(payload) {
          $scope.gridOptions.api.setRowData(payload.data);
        })
        .catch(function(err) {
          console.log(err);
        })
    };

    $scope.gridOptions = {
      columnDefs: columnDefs,
      pagination: true,
      suppressPaginationPanel: true,
      onPaginationChanged: onPaginationPageLoaded,
      rowSelection: 'single',
      onSelectionChanged: onSelectionChanged
    };

    function onSelectionChanged() {
      var selectedRow = $scope.gridOptions.api.getSelectedRows();
      if (selectedRow) {
        commentService.selectedComment = selectedRow[0];
        $location.path('/comment/' + selectedRow[0].id);
        $scope.$apply();
      }
    }

    function setText(selector, text) {
      document.querySelector(selector).innerHTML = text;
    }

    function onPaginationPageLoaded() {
      setText('#lbPageSize', $scope.gridOptions.api.paginationGetPageSize());
      setText('#lbCurrentPage', $scope.gridOptions.api.paginationGetCurrentPage() + 1);
      setText('#lbTotalPages', $scope.gridOptions.api.paginationGetTotalPages());
      setText('#lbTotalCount', $scope.gridOptions.api.getModel().getRowCount());
    }

    $scope.onBtFirst= function () {
      $scope.gridOptions.api.paginationGoToFirstPage();
    };

    $scope.onBtNext= function () {
      $scope.gridOptions.api.paginationGoToNextPage();
    };

    $scope.onBtPrevious= function () {
      $scope.gridOptions.api.paginationGoToPreviousPage();
    };

    $scope.onBtSecond= function () {
      $scope.gridOptions.api.paginationGoToPage(1);
    };

    $scope.onBtThird= function () {
      $scope.gridOptions.api.paginationGoToPage(2);
    };

    $scope.onBtFourth= function () {
      $scope.gridOptions.api.paginationGoToPage(3);
    };

    $scope.onBtFifth= function () {
      $scope.gridOptions.api.paginationGoToPage(4);
    };

  });

