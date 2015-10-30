/**
 * @ngdoc function
 * @name utiElizaldeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utiElizaldeApp
 */
  'use strict';
  angular.
  	module('utiElizaldeApp')
    .controller('MainCtrl', function($scope, $mdDialog, $timeout) {
      var self = this;
      self.hidden = false;
      self.isOpen = false;
      self.hover = false;
      // On opening, add a delayed property which shows tooltips after the speed dial has opened
      // so that they have the proper position; if closing, immediately hide the tooltips
      $scope.$watch('demo.isOpen', function(isOpen) {
        if (isOpen) {
          $timeout(function() {
            $scope.tooltipVisible = self.isOpen;
          }, 600);
        } else {
          $scope.tooltipVisible = self.isOpen;
        }
      });
      self.items = [
        { name: "Agregar Laboratorios", icon: "images/icons/lab.svg", direction: "bottom" , locate: "views/dialogs/laboratorio.html"},
        { name: "Agregar Variables Paciente", icon: "images/icons/notesuser.svg", direction: "bottom", locate: "views/dialogs/variablespaciente.html" },
        { name: "Agregar Ventilaciones Invasivas", icon: "images/icons/vetinvasivas.svg", direction: "bottom", locate: "views/dialogs/ventilacionesinvasivas.html"}
      ];
      self.openDialog = function($event, item) {
        // Show the dialog
        $mdDialog.show({
          clickOutsideToClose: true,
          controller: function($mdDialog) {
            // Save the clicked item
            this.item = item;
            // Setup some handlers
            this.close = function() {
              $mdDialog.cancel();
            };
            this.submit = function() {
              $mdDialog.hide();
            };
          },
          controllerAs: 'dialog',
          templateUrl: item.locate,
          targetEvent: $event
        });
      }
    });