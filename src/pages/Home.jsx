import React, { Component } from 'react'

 class Home extends Component {
     
  render() {
    return (
        <div className="search">
            <input type="text"  name="searchField" onChange={""} value="name" />
            <p data-testid="home-initial-message"   >Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>     
    )
  }
}

export default Home;