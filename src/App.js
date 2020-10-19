import React, { Component } from 'react';
import './App.css';
import paper from './images/paper.jpg';
import volleyball from './images/volleyball.jpg';
import dundee from './images/dundee.jpg';
import mcpaper from './images/mcpaper.png';
import movie from './images/movie.jpg';
import ListOfItems from './components/listOfItems';
import NavBar from './components/navbar';
import Footer from './components/footer';

class App extends Component {
  state = { 
    lists: [],
    time: new Date().toLocaleString()
  }

  save = () => {
    localStorage.setItem('data', JSON.stringify(this.state.lists))
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
      this.save()
    }, 1000)

    if (localStorage.getItem('data')) {
      const lists = JSON.parse(localStorage.getItem('data'));
      console.log(lists)
      this.setState({lists})
    }
  }

  createNewList = () => {
    if (this.state.lists.length === 0) {
      const lists = [{
        id: 1,
        title: "",
        priority: 0,
        deadline: "",
        text: "",
        items: [] 
      }];
      this.setState({lists});
      console.log("Initialized a new List");
    } else {
      const lists = [...this.state.lists];
      lists.push({ 
        id: lists[lists.length-1].id + 1, 
        title: "",
        priority: 0,
        deadline: "",
        text: "",
        items: [] 
      });
      this.setState({lists});
      console.log("Added a new List");
    }
  }

  deleteList = (listId) => {
    const lists = this.state.lists.filter(l => l.id !== listId);
    for (let i = listId-1; i <= lists.length-1; i++) {
      lists[i].id = lists[i].id - 1;
    }
    this.setState({lists});
    console.log("List Deleted")
  }

  addItem = (listId) => {
    if (this.state.lists[listId-1].items.length === 0) {
      const lists = [...this.state.lists]
      lists[listId-1].items.push({
        id: 1,
        title: "",
        priority: 0,
        deadline: "",
        text: ""
      });
      this.setState({lists});
      console.log("Initialized a new List")
    } else {
      const lists = [...this.state.lists];
      lists[listId-1].items.push({
        id: lists[listId-1].items[lists[listId-1].items.length - 1].id + 1,
        title: "",
        priority: 0,
        deadline: "",
        text: ""
      });
      this.setState({lists});
      console.log("Added a new Item");
    }
  }

  deleteItem = (listId, itemId) => {
    const lists = [...this.state.lists]
    const items = this.state.lists[listId-1].items.filter(i => i.id !== itemId)
    for (let i = itemId-1; i <= items.length-1; i++) {
      items[i].id = items[i].id - 1;
    }
    lists[listId-1].items = items
    this.setState({lists});
    console.log("Item Deleted")
  }

  handleList_title = (event, listId) => {
    var title = event.target.value;
    const lists = [...this.state.lists]
    lists[listId-1].title = title;
    this.setState({lists})
    console.log("List Title Changed")
  }

  handleList_priority = (event, listId) => {
    var priority = event.target.value;
    const lists = [...this.state.lists];
    lists[listId-1].priority = priority;
    this.setState({lists})
    console.log("List Priority Changed")
  }

  handleList_deadline = (event, listId) => {
    var deadline = event.target.value;
    const lists = [...this.state.lists]
    lists[listId-1].deadline = deadline;
    this.setState({lists})
    console.log("List Deadline Changed")
  }

  handleList_text = (event, listId) => {
    var text = event.target.value;
    const lists = [...this.state.lists]
    lists[listId-1].text = text;
    this.setState({lists})
    console.log("List Text Changed")
  }

  handleItem_title = (event, listId, itemId) =>{
    var title = event.target.value;
    const lists = [...this.state.lists];
    lists[listId-1].items[itemId-1].title = title;
    this.setState({lists})
    console.log("Item Title Changed")
  }

  handleItem_priority = (event, listId, itemId) =>{
    var priority = event.target.value;
    const lists = [...this.state.lists];
    lists[listId-1].items[itemId-1].priority = priority;
    this.setState({lists})
    console.log("Item Priority Changed")
  }

  handleItem_deadline = (event, listId, itemId) =>{
    var deadline = event.target.value;
    const lists = [...this.state.lists];
    lists[listId-1].items[itemId-1].deadline = deadline;
    this.setState({lists})
    console.log("Item Deadline Changed")
  }

  handleItem_text = (event, listId, itemId) =>{
    var text = event.target.value;
    const lists = [...this.state.lists];
    lists[listId-1].items[itemId-1].text = text;
    this.setState({lists})
    console.log("Item Text Changed")
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container-fluid text-center">    
          <div className="row content">
            <div height="100%" className="col-sm-2 sidenav">
              <p>{ this.state.time }</p>
              <hr/>
              <span className="font-weight-bold" role="img" aria-label="cake">All Employee Birthdays 🎂</span>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Michael Scott | 3/15/1965</li>
                <li className="list-group-item">Jim Halpert | 10/1/1978</li>
                <li className="list-group-item">Pam Beesly | 3/25/1979</li>
                <li className="list-group-item">Dwight Schrute | 1/20/1970</li>
                <li className="list-group-item">Erin Hannan | 5/1/1986</li>
                <li className="list-group-item">Oscar Martinez | 3/8/1972</li>
                <li className="list-group-item">Toby Flanderson | No Birthday Celebration</li>
                <li className="list-group-item">Angela Martin | 11/11/1974</li>
                <li className="list-group-item">Kelly Kapoor | 2/5/1980</li>
                <li className="list-group-item">Phyllis Vance | 7/10/1980</li>
                <li className="list-group-item">Creed Bratton | 11/1/####</li>
                <li className="list-group-item">Holly Scott | 3/3/1972</li>
              </ul>
            </div>

            <div className="col-sm-8 text-left"> 
              <h1>Welcome</h1>
              <h4>Employee Website for Lists, Tasks & Company Things</h4>
              <p>Paper supply company Dunder Mifflin has developped a web app that will 
                allow employees to keep track of multiple lists of items grouped by category.
                The app allows employees to create custom categories for each list of items, and also 
                to create and manage the list of items under each category. For example, an employee planning 
                an office party may wish to create food, drinks and games categories.</p>
              <hr/>
              <h3>Lists</h3>
              <button onClick={this.createNewList} className="btn btn-dark m-2"> Create New List </button>
              { this.state.lists.map( list =>
                    <ListOfItems
                      key={list.id}
                      id={list.id}
                      title={list.title}
                      priority={list.priority}
                      deadline={list.deadline}
                      text={list.text}
                      items={list.items} 
                      onDeleteList={this.deleteList}
                      onAddItem={this.addItem}
                      onDeleteItem={this.deleteItem}
                      onhandleList_title={this.handleList_title}
                      onhandleList_priority={this.handleList_priority}
                      onhandleList_deadline={this.handleList_deadline}
                      onhandleList_text={this.handleList_text}
                      onhandleItem_title={this.handleItem_title}
                      onhandleItem_priority={this.handleItem_priority}
                      onhandleItem_deadline={this.handleItem_deadline}
                      onhandleItem_text={this.handleItem_text}
                    />
                )}
            </div>
            <div className="col-sm-2 sidenav">
              <div className="well">
                <img src={paper} width="175" height="100" className="rounded m-4" alt="paperReam"/>
                <span role="img" aria-label="paper">Paper Ream 📝 for $5.99</span>
              </div>
              <hr/>
              <div className="well">
                <img src={volleyball} width="175" height="100" className="rounded m-4" alt="volleyball"/>
                <span role="img" aria-label="picnic">Company Picnic 🥪 and Volleyball Tournament 🏐 Comming Soon in Spring!</span>
              </div>
              <hr/>
              <div className="well">
                <img src={dundee} width="175" height="100" className="rounded m-4" alt="dundee"/>
                <span>Dundee photos are out! Ask Angela for link to album and for printed photos</span>
              </div>
              <hr/>
              <div className="well">
                <img src={mcpaper} width="175" height="100" className="rounded m-4" alt="mcpaper"/>
                <span role="img" aria-label="pray">RIP 🙏</span>
              </div>
              <hr/>
              <div className="well">
                <img src={movie} width="175" height="100" className="rounded m-4" alt="movie"/>
                <span role="img" aria-label="movie">Threat Level Midnight 🔫🕵️💥 Coming Soon in theatres near you</span>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;