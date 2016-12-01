/*
 * File: app/view/LaboresForm.js
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

Ext.define('MyApp.view.LaboresForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.laboresform',

  requires: [
    'MyApp.view.LotesFormViewModel2',
    'Ext.container.Container',
    'Ext.button.Button',
    'Ext.form.field.Number',
    'Ext.form.field.ComboBox'
  ],

  viewModel: {
    type: 'laboresform'
  },
  itemId: 'form',
  scrollable: true,
  bodyPadding: 10,
  title: 'Labor',
  defaultListenerScope: true,

  layout: {
    type: 'vbox',
    align: 'stretch'
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
            var formWrapper = this.up('#form');
            var tarea_cod = this.up('#form').down("#fieldTarea").value;
            var query = "select cod_establecimiento from Lotes where codigo = " + formWrapper.parent.cod_lote;
            formWrapper.form._record.data.cod_lote_actividad = formWrapper.parent.codigo;
            formWrapper.form._record.data.cod_lote = formWrapper.parent.cod_lote;
            formWrapper.form._record.data.cod_periodo = formWrapper.parent.cod_periodo;
            f_crud.sql_select(query, function(resultSet){
              if(resultSet === -1 || !Array.isArray(resultSet)) {
                console.log("Query statement: " + query);
                throw "Database error: Check your sql statement or your WebSql instance";
              }
              else {
                formWrapper.form._record.data.cod_establecimiento = resultSet[0].cod_establecimiento;
                //f_crud.save_form(formWrapper);
                if(formWrapper.getForm().isValid()) {
                  f_crud.save_form(formWrapper);
                }
              }
            });
          },
          margins: '',
          margin: 10,
          iconCls: 'x-fa fa-check',
          text: 'Aceptar'
        },
        {
          xtype: 'button',
          handler: function(button, e) {
            f_crud.close_form(this.up("#form"));
          },
          margin: 10,
          iconCls: 'x-fa fa-remove',
          text: 'Cancelar'
        }
      ]
    }
  ],
  items: [
    {
      xtype: 'numberfield',
      fieldLabel: 'ID',
      name: 'id',
      allowBlank: false,
      blankText: 'Este campo es obligatorio'
    },
    {
      xtype: 'combobox',
      defaultListenerScope: true,
      itemId: 'fieldTarea',
      fieldLabel: 'Tarea',
      name: 'cod_tarea',
      allowBlank: false,
      blankText: 'Este campo es obligatorio. Puedes agregar tareas ingresando en el item Tareas del menu principal',
      displayField: 'descripcion',
      forceSelection: true,
      queryMode: 'local',
      store: 'Tareas',
      valueField: 'codigo'
    }
  ],
  listeners: {
    activate: 'onFormActivate'
  },

  onFormActivate: function(component, eOpts) {
    var item = component.header.title.text;
    if(component.action === 'ADD') {
      component.setTitle('Nueva ' + item);
    }
    else if(component.action === 'EDIT') {
      component.setTitle('Editar ' + item);
    }
    else {
      component.setTitle(item);
    }
  }

});