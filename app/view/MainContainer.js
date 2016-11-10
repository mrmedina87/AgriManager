/*
 * File: app/view/MainContainer.js
 *
 * This file was generated by Sencha Architect version 4.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.2.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.2.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainContainer', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.maincontainer',

    requires: [
        'MyApp.view.MainContainerViewModel',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],

    viewModel: {
        type: 'maincontainer'
    },
    flex: 1,
    defaultListenerScope: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'panel',
            flex: 1,
            layout: 'card',
            header: false,
            title: 'MainPanel',
            items: [
                {
                    xtype: 'treepanel',
                    title: 'Menu',
                    store: 'Menu',
                    rootVisible: false,
                    viewConfig: {
                        listeners: {
                            itemclick: 'onViewItemClick'
                        }
                    }
                }
            ],
            listeners: {
                render: 'onPanelRender'
            }
        }
    ],

    onViewItemClick: function(dataview, record, item, index, e, eOpts) {
        var createPanel = function(recordText) {
            var panelClass = "MyApp.view.Panel" + recordText;
            if(Ext.ClassManager.get(panelClass)) {
                var newPan = Ext.create(panelClass);
                MyApp.main.add(newPan);
                MyApp.main.getLayout().setActiveItem(newPan);
            }
            else {
                var errorMsg = "Error: Panel " + recordText + " does not exist";
                throw errorMsg;
            }
        };
        var recordText = record.get('text');

        createPanel(recordText);
    },

    onPanelRender: function(component, eOpts) {
        MyApp.main = component;
        MyApp.archivo_base = 'AgriManager';
    }

});