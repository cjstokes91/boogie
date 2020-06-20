import React from 'react';
import BoogieCard from './BoogieCard/BoogieCard';
import BoogieList from './BoogieList/BoogieList';

class App extends React.Component {
  state = {
    boogies: []
  };

  handleAddBoogie = async newBoogieData => {
    const newBoogie = await boogieAPI.create(newBoogieData);
    this.setState(state => ({
      boogies: [...state.boogies, newBoogie]
    }))
  }

  render() {
    return (
      <div>
        Boogie
      </div>
    )
  }
}
export default App;
