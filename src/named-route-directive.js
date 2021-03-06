angular.module('ngNamedRoute').directive('namedRoute', function ($location, namedRouteService) {
    'use strict';

    return {
        restrict: 'A',
        scope: {
            name: '=namedRoute',
            args: '=routeParams',
            query_params: '=routeQueryParams'
        },
        link: function ($scope, $element) {

            function updateHref() {
                if ($scope.name !== undefined) {
                    $element.attr('href', ($location.$$html5 ? '' : '#' + namedRouteService.hashPrefix()) + namedRouteService.reverse($scope.name, $scope.args, $scope.query_params));
                }
            }

            $scope.$watch('name', updateHref);
            $scope.$watch('args', updateHref, true);
            $scope.$watch('query_params', updateHref, true);
        }
    };
});
