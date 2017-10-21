import React, { Component } from "react";
import {getProducts} from '../../api/api'
import ProductCell from './ProductCell'

class RemoteStoreAlternative extends React.Component {
  constructor(props) {
    super(props);
    this.products = [];
    this.state = {
      data: this.products
    };

    this.onCellEdit = this.onCellEdit.bind(this);
    this.onAddRow = this.onAddRow.bind(this);
    this.onDeleteRow = this.onDeleteRow.bind(this);
    this.onExportToCSV = this.onExportToCSV.bind(this);
  }

  componentWillMount() {
              getProducts().then(products => {
                  console.log("abababab" + products.data);
                this.setState({
                data: products.data
            });
      });


  }

  onCellEdit(row, fieldName, value) {
    const { data } = this.state;
    let rowIdx;
    const targetRow = data.find((prod, i) => {
      if (prod.id === row.id) {
        rowIdx = i;
        return true;
      }
      return false;
    });
    if (targetRow) {
      targetRow[fieldName] = value;
      data[rowIdx] = targetRow;
      this.setState({ data });
    }
  }

  onAddRow (row) {
    let { data } = this.state;
    data.push(row);

    console.log("delete: "+ data );
    this.setState({
      data: data
    });
  }

  onExportToCSV() {
    return this.state.data
  }

  onDeleteRow (row)  {
    let products = this.state.data;

    products = products.filter((product) => {
      return product.id !== row[0];
    });

    console.log("delete: "+ products )

    this.setState({
      data: products
    });
  }

  render() {

    const styles = {
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: 20 + 'px',
  color: '#08489D',
      marginHeight: 500 + 'px'
};

    return (
        <div>
        <h1>Product Editor</h1>
      <ProductCell style={styles}
        onCellEdit={ this.onCellEdit }
        onAddRow={ this.onAddRow }
        onDeleteRow={ this.onDeleteRow }
        onExportToCSV={ this.onExportToCSV }
        { ...this.state } />
        </div>
    );
  }
}


export default RemoteStoreAlternative