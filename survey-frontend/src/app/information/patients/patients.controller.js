(function() {
    'use strict';

    angular
        .module('geniemd')
        .controller('PatientsController', PatientsController);

    function PatientsController($modal, $log, SurveyService) {
        
        var vm = this;
         vm.cellRender = function(params) {
            var eSpan = document.createElement('span');
         

            var starImageElement = '<button id="start-action" class="btn m-b-xs btn-sm btn-info" ng-click="physicianCtrl.start()">Start</button>' + " ";
                starImageElement += '<button id="stop-action" class="btn m-b-xs btn-sm btn-info" ng-click="physicianCtrl.stop()">Stop</button>' + " ";
                starImageElement += '<button id="delete-action" class="btn m-b-xs btn-sm btn-info" ng-click="physicianCtrl.delete()"><i class="fa fa-trash-o"></i></button>' + " ";
            var starImageSave = '<button id="save" class=" btn m-b-xs btn-sm btn-info" ng-click="physicianCtrl.save()"><i class="fa fa-thumb-up"></i> Save</button>';
            if (params.data && (params.data.name || params.data.email || params.data.cell || params.data.days_left)) {
                // return [starImageElement, starImageSave].join(" ");
                eSpan.innerHTML = starImageElement + " ";
                eSpan.innerHTML += starImageSave;

            
                eSpan.querySelector("#save").addEventListener('click', function() {
                    console.log('save:', params.data)
                    SurveyService.save(params.data).then(function(res){
                        $log.info("res", res);
                    }).catch(function(err){
                        $log.info("error", err);
                    });
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
               // eSpan.innerHTML = starImageElement;
            }
         
            return eSpan;
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
        
        var columnDefs = [
            {
                headerName: "Name",
                field: "name",
                editable: true,
                cellClass: 'vertical_text'
          
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
                cellClass: 'vertical_text',
                newValueHandler: vm.getData
            
            },
            {
                headerName: "Email",
                field: "email",
                editable: true,
                cellClass: 'vertical_text'
           
            },
            {
                headerName: "Days left",
                field: "days_left",
                editable: true,
                cellClass: 'vertical_text'
           
            },
            {
                headerName: "Action",
                field: "action",
               // width: 200,
                suppressSorting: true,
                cellRenderer: vm.cellRender
                
            }

        ];

        var datasource = [{}];
      
        vm.gridOptions = {
            //enableServerSideSorting: true,
            enableFilter: false,
            enableColResize: false,
            //rowSelection: 'single',
            rowDeselection: true,
           // cellValueChanged: vm.deselected,
            singleClickEdit : true,
            columnDefs: columnDefs,
            onCellFocused: vm.editDelete,
            rowHeight: 36,
            //showToolPanel: true,
            toolPanelSuppressValues: true,
            toolPanelSuppressPivot: true,
            // onRowSelected: vm.edit,
            // onRowDeselected: vm.de,

            onReady: function() {
                //vm.gridOptions.api.setDatasource(vm.datasource);
                vm.gridOptions.api.hideOverlay();
                vm.gridOptions.api.setRowData(datasource);
                 vm.gridOptions.api.sizeColumnsToFit();
            },
            rowData: null
        };
        
        vm.add = function() {
            datasource.push({});
            vm.gridOptions.api.setRowData(datasource);
        }
    }

})();