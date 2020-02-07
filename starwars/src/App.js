import React, { Component } from "react";
import "./App.css";
import WarsList from './components/StarWarsList';
class App extends Component {

  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next:null,
      previous:null,
      selected:[],
      loading:true
    };
  }

  componentDidMount() {
    setTimeout(()=> this.getCharacters("https://swapi.co/api/people/"),5000)
    
  }
 
  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results ,
          next: data.next ,
          previous:data.previous,
          loading:false,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  nextPage = (e)=>{
    return this.getCharacters(e)
  }
  previousPage =(e) =>{
    return this.getCharacters(e)
  }
  toggle =(e) =>{
    const selectedChar = this.state.starwarsChars.find(starwarsChar => starwarsChar.url === e )
    const newSelected = Object.assign({} ,this.state );
    if(newSelected.selected.includes(selectedChar.url)){
      const index = newSelected.selected.indexOf(selectedChar.url)
      newSelected.selected.pop(index)
      this.setState({
         selected:newSelected.selected
       })
    }
    else{
      newSelected.selected.push(selectedChar.url)
      this.setState({
           selected:newSelected.selected
        })
    }
}
  render() {
    return (
     
      <div className="App">
        <h1 className="Header">React Wars</h1> 
        <WarsList 
          loading ={this.state.loading}
          list={this.state.starwarsChars}  
          nextPage={this.nextPage}  
          previousPage ={this.previousPage} 
          next={this.state.next} 
          previous={this.state.previous} 
          onToggle={this.toggle} 
          selected={this.state.selected}/>
          </div>
    );
  }
}

export default App;
