import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
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

  handleDeleteBoogie = async id => {
    await boogieAPI.deleteOne(id);
    this.setState(state => ({
      boogies: state.boogies.filter(boogie => boogie._id !== id)
    }), () => this.props.hisrory.push('/'));
  }

  handleUpdateBoogie = async updatedBoogieData => {
    const updatedBoogie = await boogieAPI.update(updatedBoogieData);
    const newBoogieArray = this.state.boogies.map(boogie =>
      boogie._id === updatedBoogie._id ? updatedBoogie : boogie);
    this.setState(
      { boogies: newBoogieArray },
      () => this.props.hisrory.push('/')
    );
  }

  async componentDidMount() {
    const boogies = await boogieAPI.getAll();
    this.setState({ boogies });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React CRUD
        </header>
        <main>
          <Router>
            <nav>
              <NavLink exact to='/'>Boogies LIST</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>ADD Boogie</NavLink>
            </nav>
            <Switch>
              <Route exact path='/' render={() =>
                <BoogieList
                  boogies={this.state.boogies}
                  handleDeleteBoogie={this.handleDeleteBoogie}
                />
              } />
              <Route exact path='/add' render={() =>
                <AddBoogie
                  handleAddBoogie={this.handleAddBoogie}
                />
              } />
              <Route exact path='/details' render={({ location }) =>
                <DetailBoogie location={location} />
              } />
              <Route exact path='/edit' render={({ location }) =>
                <EditBoogie
                  handleUpdateBoogie={this.handleUpdateBoogie}
                  location={location}
                />
              } />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
