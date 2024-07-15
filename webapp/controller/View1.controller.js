sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator, Fragment) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(this.getOwnerComponent().getModel("employee").getData());
                sap.ui.getCore().setModel(oModel, 'oModel');
            },
            onNav: function(oEvent){
                var oItem, oCtx;
                oItem = oEvent.getSource();
                oCtx = oItem.getBindingContext("employee");
                var oIndexData = oCtx.getProperty();
                var EmpDetail = new sap.ui.model.json.JSONModel();
                EmpDetail.setData(oIndexData);
                sap.ui.getCore().setModel(EmpDetail, 'EmpDetail');
                this.getOwnerComponent().getRouter().navTo("detail");
            },
            onLiveChange: function(oEvent){
                // var aFilter = [];
                // var sQuery = oEvent.getSource().getValue();
                // if(sQuery){
                //     aFilter.push(new Filter("lastName", FilterOperator.Contains, sQuery));
                // }
                // var oTab = this.getView().byId("idForTreeTable");
                // var oBinding = oTab.getBinding("items");
                // oBinding.filter(aFilter);
                var that = this;

                var sQuery = oEvent.getParameter("newValue"); // Use newValue to capture the user's input
                var oTab = sap.ui.core.Fragment.byId("idForTreeTable");
                var oTable = this.byIdFragment("idForTreeTable");
            var oBinding = oTable.getBinding("row");
            var aFilters = [];

            if (sQuery && sQuery.length > 0) {
                // Create a filter for the lastName field
                var oFilter = new Filter("firstName", FilterOperator.Contains, sQuery);
                aFilters.push(oFilter);
            }

            // Apply the filter to the binding
            oBinding.filter(aFilters);
            }
        });
    });
