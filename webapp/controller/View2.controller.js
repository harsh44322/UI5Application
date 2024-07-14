sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View2", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
                this.onInitVizFrame();
            },
            _onRouteMatched: function(oEvent){
                var newModel = new sap.ui.model.json.JSONModel();
                newModel.setData(sap.ui.getCore().getModel("EmpDetail").getData());
                sap.ui.getCore().setModel(newModel,'newModel');
                this.getOwnerComponent().setModel(newModel,'newModel');
                
            },
            _onBindingChange: function(oEvent){
                if(!this.getView().getBindingContext()){
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.getTarget();
                }
            },
            onInitVizFrame: function(){
                var oVizFrame = this.getView().byId("idForPerformanceChart");
                oVizFrame.setVizProperties({
                    plotArea: {
                        colorPalette: d3.scale.category20().range()
                    },
                    title: {
                        visible: true,
                        text: "Performance Chart"
                    }
                });
                
            }
        });
    });
