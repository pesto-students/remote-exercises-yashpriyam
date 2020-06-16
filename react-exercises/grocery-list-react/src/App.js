import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryList: {},
      itemName: '',
    }
  }

  handleSubmit = () => {
    const { itemName, groceryList } = this.state;
    if (itemName === '') return;
    groceryList[itemName] = ++groceryList[itemName] || 1
    this.setState({ itemName: '' })
  }
  
  handleClear = () => {
    this.setState({ groceryList: {} })
  }

  handleChange = (e) => {
    this.setState({ itemName: e.target.value });
  }

  render() {
    const { groceryList } = this.state;
    const groceryMap = Object.entries(groceryList);
    return (
      <div className='App-header'>
        <h1>Grocery List</h1>
        <div className='functions'>
          <input className='input' type='text' placeholder='Write item name here' onChange={ this.handleChange } value={this.state.itemName}></input>
          <button className='btn' onClick={ this.handleSubmit }>Add Item</button>
          <button className='btn' onClick={ this.handleClear }>Clear All Items</button>
        </div>
        <div className='list-items'>
          <h3>Items &nbsp; - &nbsp;<span>Count</span></h3>
          <ul>
          { groceryMap.map(item => <li>{`${item[0]}`} &nbsp; <span className='count'>{`${item[1]}`}</span></li>) }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
