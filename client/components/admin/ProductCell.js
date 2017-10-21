import React, { Component } from "react";
import  {TableHeaderColumn,BootstrapTable} from 'react-bootstrap-table'


class ProductCell extends React.Component {
  constructor(props) {
    super(props);
  }

  remote(remoteObj) {
    // Only cell editing, insert and delete row will be handled by remote store
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    return remoteObj;
  }

  render() {
    const cellEditProp = {
      mode: 'click'
    };
    const selectRow = {
      mode: 'checkbox',
      cliclToSelct: true
    };
    console.log( " prop " +this.props.data )
    return (
      <BootstrapTable data={ this.props.data }
                      selectRow={ selectRow }
                      remote={ this.remote }
                      exportCSV={ true }
                      insertRow deleteRow search pagination keyBoardNav
                      cellEdit={ cellEditProp }
                      options={ {
                        onCellEdit: this.props.onCellEdit,
                        onDeleteRow: this.props.onDeleteRow,
                        onAddRow: this.props.onAddRow,
                        onExportToCSV: this.props.onExportToCSV
                      } }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default ProductCell