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
  layout: 'card',
  defaultListenerScope: true,

  items: [
    {
      xtype: 'panel',
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
          },
          listeners: {
            activate: 'onTreepanelActivate'
          }
        }
      ],
      listeners: {
        render: 'onPanelRender'
      }
    }
  ],
  listeners: {
    render: 'onViewportRender'
  },

  onViewItemClick: function(dataview, record, item, index, e, eOpts) {
    var createPanel = function(panelClass) {
        var cardClass = "MyApp.view." + panelClass;
        if(Ext.ClassManager.get(cardClass)) {
            var newPan = Ext.create(cardClass);
            MyApp.main.add(newPan);
            MyApp.main.getLayout().next();
        }
        else {
            var errorMsg = "Error: Panel " + panelClass + " does not exist";
            throw errorMsg;
        }
    };
    var panelClass = record.get('panelClass');
    createPanel(panelClass);
  },

  onTreepanelActivate: function(component, eOpts) {
    var prevPanel = MyApp.main.prevCard;
    if(prevPanel) {
        prevPanel.close();
        delete MyApp.main.prevCard;
    }
  },

  onPanelRender: function(component, eOpts) {
    MyApp.main = component;
    MyApp.archivo_base = 'AgriManager';
  },

  onViewportRender: function(component, eOpts) {
    MyApp.vp = component;
  }

});