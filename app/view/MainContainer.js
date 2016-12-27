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
    'Ext.tree.View',
    'Ext.panel.Tool'
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
      id: 'agrimobile',
      itemId: 'agrimobile',
      scrollable: true,
      layout: 'card',
      title: 'Agrimobile',
      titleAlign: 'center',
      items: [
        {
          xtype: 'treepanel',
          title: 'Menu',
          store: 'MainMenu',
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
      },
      tools: [
        {
          xtype: 'tool',
          cls: 'paneltool',
          itemId: 'mainmenu-tool',
          iconCls: 'x-fa fa-bars',
          listeners: {
            click: 'onToolClick'
          }
        },
        {
          xtype: 'tool',
          itemId: 'configmenu-tool',
          iconCls: 'x-fa fa-gear',
          listeners: {
            click: 'onToolClick1'
          }
        }
      ]
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

  onPanelRender: function(component, eOpts) {
    var mainMenuTool = component.down("#mainmenu-tool"),
        configMenuTool = component.down("#configmenu-tool"),
        mainMenuStoreRecords = Ext.getStore("MainMenu").getData().items,
        configMenuStoreRecords = Ext.getStore("ConfigMenu").getData().items,
        itemClicHandler = function(item, e) {
          this.parentMenu.openCard(item, e);
        };

    mainMenuTool.menu = Ext.create('MyApp.view.MainMenu');
    configMenuTool.menu = Ext.create('MyApp.view.ConfigMenu');

    for (var i = 0; i < mainMenuStoreRecords.length; i++) {
        mainMenuTool.menu.add({
          xtype: 'menuitem',
          iconCls: 'mainmenu-icon ' + mainMenuStoreRecords[i].data.iconCls,
          text: mainMenuStoreRecords[i].data.text,
          panelClass: mainMenuStoreRecords[i].data.panelClass,
          padding: '10px 0px',
          handler: itemClicHandler
        });
    }

    for (var i = 0; i < configMenuStoreRecords.length; i++) {
        configMenuTool.menu.add({
          xtype: 'menuitem',
          iconCls: 'mainmenu-icon ' + configMenuStoreRecords[i].data.iconCls,
          text: configMenuStoreRecords[i].data.text,
          panelClass: configMenuStoreRecords[i].data.panelClass,
          padding: '10px 0px',
          handler: itemClicHandler
        });
    }

    MyApp.main = component;
    MyApp.archivo_base = 'AgriManager';

    f_crud.load_store('Rubros');
    f_crud.load_store('Personal');
    f_crud.load_store('Maquinaria');
    f_crud.load_store('Contratistas');
    f_crud.load_store('Depositos');
    f_crud.load_store('Campanias');
    f_crud.load_store('Tareas');
  },

  onToolClick: function(tool, e, owner, eOpts) {
    var toolMenu = tool.menu;
    toolMenu.showBy(tool);
  },

  onToolClick1: function(tool, e, owner, eOpts) {
    var toolMenu = tool.menu;
    toolMenu.showBy(tool);
  },

  onViewportRender: function(component, eOpts) {
    MyApp.vp = component;

  }

});