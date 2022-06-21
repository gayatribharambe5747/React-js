import React, { Component } from "react";
class Form1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Reconcile');
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          System:
          <select>
            <option value="PLE">PLF</option>
            <option value="PLC">PLC</option>
            <option value="PLB">PLB</option>
          </select>
        </label>
        <br/>
        <label>
          Category:
          <select value={this.state.value} onChange={this.handleChange}>
          <option value="Individual">Individual</option>
            <option value="All">All</option>
          </select>
  
        </label>
        <br/> 
        {
          this.state.value == "All" ? (
             <><label>
             Type:
             <select>
               <option value="Static">Static</option>
               <option value="Transaction">Transaction</option>
               <option value="Balance">Balance</option>
               <option value="Audit">Audit</option>
             </select>
           </label>
           <br/>
           <label>
             Table Name:
             <select>
               <option value="Agent">Agent</option>
               <option value="Header">Header</option>
             </select>
           </label>
           <br/></>
          ) : null
        }
     
        
        <input type="submit" value="Reconcile" />
      </form>
    );
  }
}
export default Form1