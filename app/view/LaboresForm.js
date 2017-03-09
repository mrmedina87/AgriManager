/*
 * File: app/view/LaboresForm.js
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

Ext.define('MyApp.view.LaboresForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.laboresform',

  requires: [
    'MyApp.view.LotesFormViewModel4',
    'Ext.tab.Panel',
    'Ext.tab.Tab',
    'Ext.form.field.Date',
    'Ext.form.field.ComboBox',
    'Ext.form.field.Number',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.form.field.Display',
    'Ext.grid.plugin.CellEditing',
    'Ext.selection.CheckboxModel',
    'Ext.form.Panel'
  ],

  config: {
    initialTitle: 'labor'
  },

  viewModel: {
    type: 'laboresform'
  },
  cls: 'formpanel',
  scrollable: true,
  bodyPadding: 10,
  trackResetOnLoad: true,
  defaultListenerScope: true,

  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  listeners: {
    activate: 'onFormActivate',
    render: 'onFormRender'
  },
  items: [
    {
      xtype: 'tabpanel',
      flex: 0,
      bodyPadding: 10,
      activeTab: 0,
      items: [
        {
          xtype: 'panel',
          title: 'Labor',
          items: [
            {
              xtype: 'textfield',
              hidden: true,
              fieldLabel: 'ID',
              name: 'id',
              allowBlank: false,
              blankText: 'Este campo es obligatorio',
              editable: false,
              enableKeyEvents: true
            },
            {
              xtype: 'datefield',
              itemId: 'fecha',
              width: '100%',
              fieldLabel: 'Fecha*',
              name: 'fecha',
              allowBlank: false,
              enableKeyEvents: true,
              format: 'd-m-Y'
            },
            {
              xtype: 'container',
              margin: '10 0',
              layout: {
                type: 'hbox',
                align: 'stretch'
              },
              items: [
                {
                  xtype: 'combobox',
                  defaultListenerScope: true,
                  itemId: 'fieldTarea',
                  width: '80%',
                  fieldLabel: 'Tarea*',
                  name: 'cod_tarea',
                  allowBlank: false,
                  blankText: 'Este campo es obligatorio',
                  enableKeyEvents: true,
                  displayField: 'descripcion',
                  forceSelection: true,
                  queryMode: 'local',
                  store: 'Tareas',
                  valueField: 'codigo'
                },
                {
                  xtype: 'button',
                  handler: function(button, e) {
                    var formWrapper = this.up('[cls=formpanel]');
                    formWrapper.dropdownId = "fieldTarea";
                    f_crud.openNestedForm('TareasPanel');
                  },
                  margins: '',
                  margin: '0 10',
                  width: '10%',
                  iconCls: 'x-fa fa-plus',
                  text: ''
                }
              ]
            },
            {
              xtype: 'numberfield',
              width: '100%',
              fieldLabel: 'Cantidad*',
              name: 'cantidad',
              inputType: 'tel',
              allowBlank: false,
              enableKeyEvents: true,
              allowDecimals: false,
              decimalPrecision: 0,
              minValue: 0,
              negativeText: 'Este valor debe ser positivo'
            },
            {
              xtype: 'numberfield',
              width: '100%',
              fieldLabel: 'Precio*',
              name: 'precio',
              inputType: 'tel',
              allowBlank: false,
              enableKeyEvents: true,
              minValue: 0,
              negativeText: 'Este valor debe ser positivo'
            },
            {
              xtype: 'container',
              margin: '10 0',
              layout: {
                type: 'hbox',
                align: 'stretch'
              },
              items: [
                {
                  xtype: 'combobox',
                  defaultListenerScope: true,
                  itemId: 'fieldContratista',
                  width: '80%',
                  fieldLabel: 'Contratista',
                  name: 'cod_contratista',
                  blankText: 'Este campo es obligatorio',
                  enableKeyEvents: true,
                  displayField: 'nombre',
                  forceSelection: true,
                  queryMode: 'local',
                  store: 'Contratistas',
                  valueField: 'codigo'
                },
                {
                  xtype: 'button',
                  handler: function(button, e) {
                    var formWrapper = this.up('[cls=formpanel]');
                    formWrapper.dropdownId = "fieldContratista";
                    f_crud.openNestedForm('ContratistasPanel');
                  },
                  margins: '',
                  margin: '0 10',
                  width: '10%',
                  iconCls: 'x-fa fa-plus',
                  text: ''
                }
              ]
            }
          ]
        },
        {
          xtype: 'panel',
          itemId: 'labores_insumos_tab',
          title: 'Insumos',
          items: [
            {
              xtype: 'gridpanel',
              itemId: 'labores_insumos_grid',
              header: false,
              title: 'InsumosGrid',
              store: 'Labores_insumos',
              columns: [
                {
                  xtype: 'gridcolumn',
                  hidden: true,
                  dataIndex: 'estado_registro',
                  text: 'Estado Registro',
                  editor: {
                    xtype: 'textfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  width: '20%',
                  dataIndex: 'id',
                  text: 'ID',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'id_labores',
                  text: 'Id Labores',
                  format: '00',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'uid',
                  text: 'Uid',
                  format: '00',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                    return f_crud.getDisplayValue('Insumos',value,'descripcion');
                  },
                  width: '20%',
                  dataIndex: 'cod_insumo',
                  text: 'Insumo',
                  format: '00',
                  editor: {
                    xtype: 'combobox',
                    displayField: 'descripcion',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'Insumos',
                    valueField: 'codigo'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  width: '20%',
                  dataIndex: 'dosis',
                  text: 'Dosis',
                  editor: {
                    xtype: 'numberfield',
                    inputType: 'tel'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  width: '20%',
                  dataIndex: 'cantidad',
                  text: 'Cantidad',
                  editor: {
                    xtype: 'numberfield',
                    inputType: 'tel',
                    allowDecimals: false
                  }
                },
                {
                  xtype: 'numbercolumn',
                  renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                    return f_crud.getDisplayValue('Depositos',value,'nombre');
                  },
                  width: '20%',
                  dataIndex: 'cod_deposito',
                  text: 'Deposito',
                  format: '00',
                  editor: {
                    xtype: 'combobox',
                    displayField: 'nombre',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'Depositos',
                    valueField: 'codigo'
                  }
                },
                {
                  xtype: 'gridcolumn',
                  hidden: true,
                  dataIndex: 'tipo',
                  text: 'Tipo',
                  editor: {
                    xtype: 'textfield'
                  }
                }
              ],
              plugins: [
                {
                  ptype: 'cellediting',
                  clicksToEdit: 1
                }
              ],
              listeners: {
                selectionchange: 'onGridpanelSelectionChange',
                beforerender: 'onLabores_insumos_gridBeforeRender'
              },
              selModel: {
                selType: 'checkboxmodel'
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
                  cls: 'tabCtrol',
                  itemId: 'tabCtrolInsumos',
                  layout: {
                    type: 'hbox',
                    align: 'stretch',
                    pack: 'center'
                  },
                  items: [
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var form_panel = this.up('[cls=formpanel]');
                        var id_labores  =  form_panel.getRecord().get('id');
                        var store = Ext.getStore('Labores_insumos');
                        var newrecord = Ext.create('MyApp.model.Labores_insumos');
                        f_crud.secuencia(function(rtn){
                          if (rtn !== -1){
                            newrecord.set('id',rtn);
                            newrecord.set('id_labores', id_labores);
                            newrecord.set('tipo','T');
                            store.add(newrecord);
                          }
                        });
                      },
                      cls: '',
                      iconCls: 'x-fa fa-plus',
                      text: ''
                    },
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var grid = this.up('#labores_insumos_tab').down("#labores_insumos_grid"),
                        //var gridSeletedRecord = this.up('#labores_insumos_tab').down("#labores_insumos_grid").record;
                          gridSeletedRecords = grid.getSelection();
                        grid.getStore().remove(gridSeletedRecords);
                      },
                      cls: '',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-trash',
                      text: ''
                    }
                  ]
                }
              ],
              dockedItems: [
                {
                  xtype: 'container',
                  columnWidth: 1,
                  cls: 'newButtons',
                  dock: 'bottom',
                  itemId: 'newButtonsInsumos',
                  margin: '20px 0 0 0 ',
                  layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                  },
                  items: [
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        f_crud.openNestedForm('InsumosPanel');
                      },
                      cls: 'sec-btn',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-plus',
                      text: 'Insumo'
                    },
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        f_crud.openNestedForm('DepositosPanel');
                      },
                      cls: 'sec-btn',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-plus',
                      text: 'Deposito'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          xtype: 'panel',
          itemId: 'labores_personal_tab',
          title: 'Personal',
          items: [
            {
              xtype: 'gridpanel',
              itemId: 'labores_personal_grid',
              header: false,
              title: 'PersonalGrid',
              store: 'Labores_personal',
              columns: [
                {
                  xtype: 'gridcolumn',
                  hidden: true,
                  dataIndex: 'estado_registro',
                  text: 'Estado Registro',
                  editor: {
                    xtype: 'textfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  width: '20%',
                  dataIndex: 'id',
                  text: 'ID',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'id_labores',
                  text: 'Id Labores',
                  format: '00',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'uid',
                  text: 'Uid',
                  format: '00',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                    return f_crud.getDisplayValue('Personal', value, 'nombre');
                  },
                  width: '20%',
                  dataIndex: 'cod_personal',
                  text: 'Personal',
                  format: '00',
                  editor: {
                    xtype: 'combobox',
                    displayField: 'nombre',
                    queryMode: 'local',
                    store: 'Personal',
                    valueField: 'codigo'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'cod_concepto',
                  text: 'Concepto',
                  format: '00',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  width: '20%',
                  dataIndex: 'cantidad',
                  text: 'Cantidad',
                  editor: {
                    xtype: 'numberfield',
                    inputType: 'tel',
                    allowDecimals: false
                  }
                },
                {
                  xtype: 'numbercolumn',
                  width: '20%',
                  dataIndex: 'precio',
                  text: 'Precio',
                  editor: {
                    xtype: 'numberfield',
                    inputType: 'tel'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  width: '20%',
                  dataIndex: 'importe',
                  text: 'Importe',
                  editor: {
                    xtype: 'numberfield',
                    inputType: 'tel'
                  }
                }
              ],
              plugins: [
                {
                  ptype: 'cellediting',
                  clicksToEdit: 1
                }
              ],
              listeners: {
                selectionchange: 'onGridpanelSelectionChange1',
                beforerender: 'onLabores_personal_gridBeforeRender'
              },
              selModel: {
                selType: 'checkboxmodel'
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
                  cls: 'tabCtrol',
                  itemId: 'tabCtrolPersonal',
                  layout: {
                    type: 'hbox',
                    align: 'stretch',
                    pack: 'center'
                  },
                  items: [
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var form_panel = this.up('[cls=formpanel]');
                        var id_labores  =  form_panel.getRecord().get('id');
                        var store = Ext.getStore('Labores_personal');
                        var newrecord = Ext.create('MyApp.model.Labores_personal');
                        f_crud.secuencia(function(rtn){
                          if (rtn !== -1){
                            newrecord.set('id',rtn);
                            newrecord.set('id_labores', id_labores);
                            newrecord.set('tipo','T');
                            store.add(newrecord);
                          }
                        });
                      },
                      cls: '',
                      iconCls: 'x-fa fa-plus',
                      text: ''
                    },
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var grid = this.up('#labores_personal_tab').down("#labores_personal_grid"),

                        /*var gridSeletedRecord = this.up('#labores_personal_tab').down("#labores_personal_grid").record;
                        grid.getStore().remove(gridSeletedRecord);*/
                          gridSeletedRecords = grid.getSelection();
                        grid.getStore().remove(gridSeletedRecords);
                      },
                      cls: '',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-trash',
                      text: ''
                    }
                  ]
                }
              ],
              dockedItems: [
                {
                  xtype: 'container',
                  columnWidth: 1,
                  cls: 'newButtons',
                  dock: 'bottom',
                  itemId: 'newButtonsPersonal',
                  margin: '20px 0 0 0 ',
                  layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                  },
                  items: [
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        f_crud.openNestedForm('PersonalPanel');
                      },
                      cls: 'sec-btn',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-plus',
                      text: 'Personal'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          xtype: 'panel',
          itemId: 'labores_maquinaria_tab',
          title: 'Maquinaria',
          items: [
            {
              xtype: 'gridpanel',
              itemId: 'labores_maquinaria_grid',
              header: false,
              title: 'My Grid Panel',
              store: 'Labores_maquinaria',
              columns: [
                {
                  xtype: 'gridcolumn',
                  hidden: true,
                  dataIndex: 'estado_registro',
                  text: 'Estado Registro',
                  editor: {
                    xtype: 'textfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  width: '33%',
                  dataIndex: 'id',
                  text: 'ID',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'id_labores',
                  text: 'Id Labores',
                  format: '00',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'uid',
                  text: 'Uid',
                  format: '00',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                    return f_crud.getDisplayValue('Maquinaria', value, 'nombre');
                  },
                  width: '33%',
                  dataIndex: 'cod_maquina',
                  text: 'Maquina',
                  format: '00',
                  editor: {
                    xtype: 'combobox',
                    displayField: 'nombre',
                    queryMode: 'local',
                    store: 'Maquinaria',
                    valueField: 'codigo'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  width: '33%',
                  dataIndex: 'cantidad',
                  text: 'Cantidad',
                  editor: {
                    xtype: 'numberfield',
                    inputType: 'tel',
                    allowDecimals: false
                  }
                }
              ],
              plugins: [
                {
                  ptype: 'cellediting',
                  clicksToEdit: 1
                }
              ],
              listeners: {
                selectionchange: 'onLabores_maquinaria_gridSelectionChange',
                beforerender: 'onLabores_maquinaria_gridBeforeRender'
              },
              selModel: {
                selType: 'checkboxmodel'
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
                  cls: 'tabCtrol',
                  itemId: 'tabCtrolMaquinaria',
                  layout: {
                    type: 'hbox',
                    align: 'stretch',
                    pack: 'center'
                  },
                  items: [
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var form_panel = this.up('[cls=formpanel]');
                        var id_labores  =  form_panel.getRecord().get('id');
                        var store = Ext.getStore('Labores_maquinaria');
                        var newrecord = Ext.create('MyApp.model.Labores_maquinaria');
                        f_crud.secuencia(function(rtn){
                          if (rtn !== -1){
                            newrecord.set('id',rtn);
                            newrecord.set('id_labores', id_labores);
                            newrecord.set('tipo','T');
                            store.add(newrecord);
                          }
                        });
                      },
                      cls: '',
                      iconCls: 'x-fa fa-plus',
                      text: ''
                    },
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var grid = this.up('#labores_maquinaria_tab').down("#labores_maquinaria_grid"),
                        /*var gridSeletedRecord = this.up('#labores_maquinaria_tab').down("#labores_maquinaria_grid").record;
                        grid.getStore().remove(gridSeletedRecord);*/
                          gridSeletedRecords = grid.getSelection();
                        grid.getStore().remove(gridSeletedRecords);
                      },
                      cls: '',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-trash',
                      text: ''
                    }
                  ]
                }
              ],
              dockedItems: [
                {
                  xtype: 'container',
                  columnWidth: 1,
                  cls: 'newButtons',
                  dock: 'bottom',
                  itemId: 'newButtonsMaquinaria',
                  margin: '20px 0 0 0 ',
                  layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                  },
                  items: [
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        f_crud.openNestedForm('MaquinariaPanel');
                      },
                      cls: 'sec-btn',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-plus',
                      text: 'Maquinaria'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
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

            /*MyApp.currentEditingCell.blur();*/
            var formWrapper = this.up('[cls=formpanel]');
            var tarea_cod = formWrapper.down("#fieldTarea").value;

            formWrapper.form._record.data.cod_lote_actividad = formWrapper.parent.codigo;
            formWrapper.form._record.data.cod_lote = formWrapper.parent.cod_lote;

            var pk_lote_actividad = formWrapper.parent.codigo;
            var sqlJoin = "select actividades.cod_periodo from actividades join lotes_actividades ";
            sqlJoin = sqlJoin + "on actividades.codigo=lotes_actividades.cod_actividad ";
            sqlJoin = sqlJoin + "where lotes_actividades.codigo = " + pk_lote_actividad;
            f_crud.sql_select(sqlJoin, function(periodResultSet){
              if(periodResultSet === -1 || !Array.isArray(periodResultSet)) {
                console.log("Query statement: " + sqlJoin);
                throw "Database error: Check your sql statement or your WebSql instance";
              }
              else {
                var query = "select cod_establecimiento from Lotes where codigo = " + formWrapper.parent.cod_lote;
                formWrapper.form._record.data.cod_periodo = periodResultSet[0].cod_periodo;
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
    var item = component.initialTitle;

    if(component.action === 'ADD') {
      component.setTitle('Nueva ' + item);
    }
    else if(component.action === 'EDIT') {
      component.setTitle('Editar ' + item);
    }
    else {
      component.setTitle(item);
    }
  },

  onFormRender: function(component, eOpts) {
    var form_panel = this;
    var item = component.initialTitle;
    var record = form_panel.getRecord();

    //empty labores_ stores
    for (var i=1; i < form_panel.store_array.length; i++){
      f_crud.load_store(form_panel.store_array[i],'id_labores = -1');
    }

    if(component.action === 'ADD') {
      var today = new Date();
      this.down('#fecha').setValue(today);
    }
    else if(component.action === 'EDIT') {
      var id = record.get('id');
      for (var i=1; i < form_panel.store_array.length; i++){
        f_crud.load_store(form_panel.store_array[i],'id_labores = ' + id);
      }
    }
  },

  onGridpanelSelectionChange: function(model, selected, eOpts) {
    this.down("#labores_insumos_grid").record = selected[0];
  },

  onLabores_insumos_gridBeforeRender: function(component, eOpts) {
    f_crud.renderGridWidth(component);
  },

  onGridpanelSelectionChange1: function(model, selected, eOpts) {
    this.down("#labores_personal_grid").record = selected[0];
  },

  onLabores_personal_gridBeforeRender: function(component, eOpts) {
    f_crud.renderGridWidth(component);
  },

  onLabores_maquinaria_gridSelectionChange: function(model, selected, eOpts) {
    this.down("#labores_maquinaria_grid").record = selected[0];
  },

  onLabores_maquinaria_gridBeforeRender: function(component, eOpts) {
    f_crud.renderGridWidth(component);
  }

});