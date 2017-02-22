/*
 * File: app/view/EstablecimientosPanel.js
 *
 * This file was generated by Sencha Architect version 4.1.1.
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

Ext.define('MyApp.view.EstablecimientosPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.establecimientospanel',

  requires: [
    'MyApp.view.EstablecimientosPanelViewModel',
    'MyApp.view.EstablecimientosPanelViewController',
    'Ext.panel.Tool',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.form.Panel',
    'Ext.button.Button'
  ],

  controller: 'establecimientospanel',
  viewModel: {
    type: 'establecimientospanel'
  },
  cls: 'gridpanel',
  scrollable: true,
  title: 'Establecimientos',
  titleAlign: 'center',
  defaultListenerScope: true,

  listeners: {
    render: 'onPanelRender'
  },
  tools: [
    {
      xtype: 'tool',
      alignTarget: '',
      cls: 'paneltool',
      iconCls: 'x-fa fa-arrow-left',
      listeners: {
        click: 'onToolClick'
      }
    }
  ],
  items: [
    {
      xtype: 'gridpanel',
      itemId: 'grid',
      header: false,
      title: 'Establecimientos',
      store: 'Establecimientos',
      columns: [
        {
          xtype: 'gridcolumn',
          hidden: true,
          width: '20%',
          dataIndex: 'estado_registro',
          text: 'Estado Registro'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'id',
          text: 'ID'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'uid',
          text: 'Uid',
          format: '00'
        },
        {
          xtype: 'gridcolumn',
          width: '50%',
          dataIndex: 'nombre',
          text: 'Nombre'
        },
        {
          xtype: 'numbercolumn',
          width: '50%',
          dataIndex: 'codigo',
          text: 'Codigo',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'zoom',
          text: 'Zoom',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'latitud',
          text: 'Latitud'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'longitud',
          text: 'Longitud'
        }
      ],
      listeners: {
        selectionchange: 'onGridSelectionChange',
        itemlongpress: 'onGridItemLongpress',
        itemclick: 'onGridItemClick',
        beforerender: 'onGridBeforeRender'
      }
    }
  ],
  dockedItems: [
    {
      xtype: 'form',
      dock: 'bottom',
      layout: 'column',
      bodyPadding: 10,
      header: false,
      title: 'My Form',
      items: [
        {
          xtype: 'container',
          columnWidth: 1,
          itemId: 'newBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                f_crud.form_open(this.up("[cls=gridpanel]"),'ADD');
              },
              cls: '',
              iconCls: 'x-fa fa-plus',
              text: 'Nuevo'
            }
          ]
        },
        {
          xtype: 'container',
          columnWidth: 0.33,
          hidden: true,
          itemId: 'editBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                f_crud.form_open(this.up('[cls=gridpanel]'),'EDIT');
              },
              cls: '',
              margin: '0 0 0 10',
              iconCls: 'x-fa fa-pencil',
              text: 'Editar'
            }
          ]
        },
        {
          xtype: 'container',
          columnWidth: 0.33,
          hidden: true,
          itemId: 'deleteBox',
          layout: {
            type: 'hbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                var gridPanel = this.up('[cls=gridpanel]');
                var checkConfig = {
                  table: 'Lotes',
                  field: 'cod_establecimiento',
                  msgTitle: 'Establecimiento no vacio',
                  message: 'No puede borrar un establecimiento con lotes, <br> borre todos sus lotes primero'
                };
                //debugger;
                f_crud.grid_check_delete(gridPanel,checkConfig);
              },
              cls: '',
              margin: '0 0 0 10',
              iconCls: 'x-fa fa-trash',
              text: 'Borrar'
            }
          ]
        }
      ]
    }
  ],

  onPanelRender: function(component, eOpts) {
    this.store_name = 'Establecimientos';
    this.model_name = 'MyApp.model.Establecimientos';
    this.form_name  = 'MyApp.view.EstablecimientosForm';
    var store = Ext.getStore(this.store_name);
    this.form_store_array = [store];
    f_crud.load_store(this.store_name);
  },

  onToolClick: function(tool, e, owner, eOpts) {
    var thisPanel = MyApp.main.getLayout().getActiveItem();
    MyApp.main.getLayout().prev();
    thisPanel.close();
  },

  onGridSelectionChange: function(model, selected, eOpts) {
    this.record = selected[0];
    /*
    var newbox = this.down("#newBox"),
        editbox = this.down("#editBox"),
        deletebox = this.down("#deleteBox"),
        len = selected.length;

    // clic selection code
    if(len === 0) {
      newbox.columnWidth = 1;
      editbox.columnWidth = 0;
      deletebox.columnWidth = 0;
      newbox.hide();
      newbox.show();
      editbox.hide();
      deletebox.hide();
    }
    else if(len >= 1) {
      newbox.columnWidth = 0.33;
      newbox.layout.pack = 'end';
      editbox.columnWidth = 0.33;
      deletebox.columnWidth = 0.33;
      newbox.hide();
      newbox.show();
      editbox.hide();
      editbox.show();
      deletebox.hide();
      deletebox.show();
    }
    else {
      console.log("Error: the selection amount is negative: " + len + "!");
    }*/
    /*else if(len > 1) {
      newbox.columnWidth = 0.5;
      editbox.columnWidth = 0;
      deletebox.columnWidth = 0.5;
      newbox.hide();
      newbox.show();
      editbox.hide();
      deletebox.hide();
      deletebox.show();
    }*/
  },

  onGridItemLongpress: function(dataview, record, item, index, e, eOpts) {
    var newbox = this.down("#newBox");
    var editbox = this.down("#editBox");
    var deletebox = this.down("#deleteBox");
    newbox.columnWidth = 0.33;
    newbox.layout.pack = 'end';
    newbox.hide();
    newbox.show();
    editbox.show();
    deletebox.show();
    this.longpress = true;

    // this was the oldfashion way

    /*
    var panelClass = "MyApp.view.LotesPanel";
    var newPan = Ext.create(panelClass);
    newPan.parent = record.data;
    MyApp.main.add(newPan);
    MyApp.main.getLayout().setActiveItem(newPan);*/
  },

  onGridItemClick: function(dataview, record, item, index, e, eOpts) {
    if(!this.longpress) {
      var panelClass = "MyApp.view.LotesPanel";
      var newPan = Ext.create(panelClass);
      newPan.parent = record.data;
      MyApp.main.add(newPan);
      MyApp.main.getLayout().setActiveItem(newPan);
    }
    this.longpress = false;
  },

  onGridBeforeRender: function(component, eOpts) {
    f_crud.renderGridWidth(component);
  }

});