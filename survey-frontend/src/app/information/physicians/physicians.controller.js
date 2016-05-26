(function() {
    'use strict';

    angular
        .module('geniemd')
        .controller('PhysiciansController', PhysiciansController);

    function PhysiciansController($modal, $log) {

        var vm = this;

        vm.isLoading = false;

        vm.getData = function(params) {
            switch (params.colDef.field) {
                case 'cell':
                    vm.isLoading = true;
                    if (params.newValue != params.oldValue) {
                        params.data.cell = params.newValue;
                    } else {
                        params.data.cell = params.oldValue;
                    }
            }
         
        }

        vm.editDelete = function(result) {
            if ($(result.eventSource).find('.delete-action').length <= 0) {
             
                var node = [];
                node.push(result.node)

                vm.gridOptions.api.refreshCells(node, ['action']);

                //   if (!!$(result.eventSource).find('.save').length) {
                //       alert('saved');
                //   }else if (!!$(result.eventSource).find('.delete-action').length) {

                //     datasource.splice(result.rowIndex, 1);
                //     vm.gridOptions.api.setRowData(datasource);
            }
        }


        vm.cellRender = function(params) {


            var eSpan = document.createElement('span');

            var starImageElement = '<button id="delete-action" class="btn m-b-xs btn-sm btn-info" ng-click="physicianCtrl.delete()"><i class="fa fa-trash-o"></i></button>';
            var starImageSave = '<button id="save" class=" btn m-b-xs btn-sm btn-info" ng-click="physicianCtrl.save()"><i class="fa fa-thumb-up"></i> Save</button>';
            if (params.data && (params.data.name || params.data.email || params.data.cell)) {
                // return [starImageElement, starImageSave].join(" ");
                eSpan.innerHTML = starImageElement + " ";
                eSpan.innerHTML += starImageSave;

                
                eSpan.querySelector("#save").addEventListener('click', function() {
                    
                });
             eSpan.querySelector("#delete-action").addEventListener('click', function() {
                var modalInstance = $modal.open({
                    templateUrl: 'app/components/core/dialog/dialog.html',
                    controller: 'DialogController',
                    size: 'sm',
                    
                    resolve: {
                        config: function() {
                            return {title:"DELETE",
                                    message : "Are you sure to delete this record?"};
                        }
                    }
                });
     
                modalInstance.result.then(function() {                 
                    datasource.splice(params.rowIndex, 1);
                    vm.gridOptions.api.setRowData(datasource);
                }, function() {
                    $log.info('Modal dismissed at: ' + new Date());
                });


            });
            } else {
                // return starImageElement;
                //eSpan.innerHTML = starImageElement;
            }
  



            return eSpan;

        }
        var columnDefs = [
            {
                headerName: "Name",
                field: "name",
                editable: true,
                cellClass:'vertical_text',
                width:280
                // width: 50,
                // suppressSorting: true,
                // cellRenderer: function(params) {
                //     return params.node.id + 1;
                // }
            },
            {
                headerName: "CellNumber",
                field: "cell",
                editable: true,
                cellClass:'vertical_text',
                newValueHandler: vm.getData,
                width:280
                
            },
            {
                headerName: "Email",
                field: "email",
                editable: true,
                cellClass:'vertical_text',
                width:280
            },
            {
                headerName: "Action",
                field: "action",
               // width: 100,
                suppressSorting: true,
                cellRenderer: vm.cellRender,
                width:265
            }
        ];

        var datasource = [{}];

        vm.gridOptions = {
            //enableServerSideSorting: true,
            enableFilter: false,
            enableColResize: false,
            rowSelection: 'single',
            singleClickEdit:true,
            rowDeselection: true,
           // onSelectionChanged: vm.deselected,
            // rowClicked: vm.rowClicked,
            columnDefs: columnDefs,
            onCellFocused: vm.editDelete,
            rowHeight:36,            
            //showToolPanel: true,
            toolPanelSuppressValues: true,
            toolPanelSuppressPivot: true,
            // onRowSelected: vm.edit,
            // onRowDeselected: vm.de,

            onReady: function() {
                //vm.gridOptions.api.setDatasource(vm.datasource);
                 vm.gridOptions.api.sizeColumnsToFit();
                vm.gridOptions.api.hideOverlay();
                vm.gridOptions.api.setRowData(datasource);
          
               
            },
            rowData: null
        };

        vm.add = function() {
            datasource.push({});
            vm.gridOptions.api.setRowData(datasource);
        }
     }



})();