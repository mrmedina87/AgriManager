/*
 * File: app/view/InsumosForm.js
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

Ext.define('MyApp.view.InsumosForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.insumosform',

  requires: [
    'MyApp.view.LotesFormViewModel11',
    'Ext.form.field.Number',
    'Ext.form.field.ComboBox',
    'Ext.container.Container',
    'Ext.button.Button'
  ],

  config: {
    initialTitle: 'insumo'
  },

  viewModel: {
    type: 'insumosform'
  },
  cls: 'formpanel',
  scrollable: true,
  bodyPadding: 10,
  title: '',
  trackResetOnLoad: true,
  defaultListenerScope: true,

  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [
    {
      xtype: 'textfield',
      fieldLabel: 'Codigo',
      name: 'codigo',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      editable: false,
      enableKeyEvents: true
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Descripcion',
      name: 'descripcion',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      enableKeyEvents: true
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Precio',
      name: 'precio',
      inputType: 'number',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      enableKeyEvents: true,
      decimalSeparator: ',',
      minValue: 0,
      negativeText: 'Este valor debe ser positivo'
    },
    {
      xtype: 'combobox',
      itemId: 'unidadMedida',
      fieldLabel: 'Unidad de Medida',
      name: 'um',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      enableKeyEvents: true,
      displayField: 'nombre',
      forceSelection: true,
      queryMode: 'local',
      store: 'UnidadesMedida',
      valueField: 'valor'
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Dias de Carencia',
      name: 'dias_carencia',
      inputType: 'number',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      enableKeyEvents: true,
      allowDecimals: false,
      minValue: 0,
      negativeText: 'Este valor debe ser positivo'
    },
    {
      xtype: 'container',
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [
        {
          xtype: 'combobox',
          itemId: 'fieldRubro',
          width: '80%',
          fieldLabel: 'Rubro',
          name: 'cod_rubro',
          allowBlank: false,
          blankText: 'Este campo es obligatorio',
          enableKeyEvents: true,
          displayField: 'descripcion',
          forceSelection: true,
          queryMode: 'local',
          store: 'Rubros',
          valueField: 'codigo'
        },
        {
          xtype: 'button',
          handler: function(button, e) {
            var formWrapper = this.up('[cls=formpanel]');
            formWrapper.dropdownId = "fieldRubro";
            f_crud.openNestedForm('RubrosPanel');
          },
          margins: '',
          margin: '0 10',
          width: '10%',
          iconCls: 'x-fa fa-plus',
          text: ''
        }
      ]
    }
  ],
  listeners: {
    activate: 'onFormActivate'
  },
  dockedItems: [
    {
      xtype: 'container',
      dock: 'bottom',
      layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'center'
      },
      items: [
        {
          xtype: 'button',
          handler: function(button, e) {
            var formWrapper = this.up('[cls=formpanel]');
            if(formWrapper.getForm().isValid()) {
              f_crud.save_form(formWrapper);
            }
          },
          margins: '',
          margin: 10,
          iconCls: 'x-fa fa-check',
          text: 'Aceptar'
        },
        {
          xtype: 'button',
          handler: function(button, e) {
            f_crud.close_form(this.up("[cls=formpanel]"));
          },
          margin: 10,
          iconCls: 'x-fa fa-remove',
          text: 'Cancelar'
        }
      ]
    }
  ],

  onFormActivate: function(component, eOpts) {
    f_crud.setFormTitle(component);
  }

});