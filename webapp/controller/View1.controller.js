sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
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
                // var oItem = oEvent.getSource();
                // var sEmployeeId = oItem.getBindingContext().getProperty("employeeId");
            
                // this.getOwnerComponent().getRouter().navTo("detail", {
                //     id: sEmployeeId
                // });
            }
        });
    });
