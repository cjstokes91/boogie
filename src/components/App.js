import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import * as boogieAPI from '../pages/services/boogieAPI';
import BoogieList from './BoogieList/BoogieList';
import AddBoogie from '../pages/AddBoogie/AddBoogie';
import EditBoogie from '../pages/EditBoogie/EditBoogie';
import DetailBoogie from '../pages/DetailBoogie/DetailBoogie';

class App extends React.Component {
  state = {
    boogies: []
  };

  handleAddBoogie = async newBoogieData => {
    const newBoogie = await boogieAPI.create(newBoogieData);
    this.setState(state => ({
      boogies: [...state.boogies, newBoogie]
    }),
      () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const boogies = await boogieAPI.getAll();
    this.setState({ boogies });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Boogie's
          <nav>
            <NavLink exact to='/'>Boogie Store</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>Add Boogie</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/add' render={() =>
            <AddBoogie
              handleAddBoogie={this.handleAddBoogie}
            />
          } />
          <Route exact path='/' render={() =>
            <BoogieList
              boogies={this.state.boogies}
              handleDeleteBoogie={this.handleDeleteBoogie}
            />
          } />
          <Route exact path='/details' render={({ location }) =>
            <DetailBoogie location={location} />
          } />
          <Route exact path='/edit' render={({ location }) =>
            <EditBoogie
              handeUpdateBoogie={this.handleUpdateBoogie}
              location={location}
            />
          } />
        </main>
      </div>
    );
  }
}
export default App;
