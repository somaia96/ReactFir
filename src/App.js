// import {default as Tes ,x as s,y,Test} from './module';
// import { Router } from "react-router-dom";
import { Component } from 'react';
import { BrowserRouter , Route, Routes } from "react-router-dom";

// import Child from './Child';
// import Items from './components/Items';
import About from './components/about';
import Blog from './components/Blog';
import Home from './components/home';
import Rout from './components/Rout';

import Nav from './components/Nav';

class App extends Component {

  // constructor(){
  //   super();
  //   console.log("constructor");
  // }
  // state={
  //   name:"hamza"
  // }


  // state={
  //   name:"hamza",
  //   age:25
  // }

  // componentDidMount(){
  //   console.log("componentDidMount");
  // }

  // componentDidUpdate(prevProps,prevState){
  //   console.log("componentDidUpdate");
  //   console.log(prevProps,prevState);
  // }

  // state={
  //   id:1,
  //   product:"T-shirt"
  // }

  

  // state={
  //   items:[
  //     {id:1,product:"T-shirt",count:2},
  //     {id:2,product:"skirt",count:1},
  //     {id:3,product:"skirt",count:4},
  //     {id:4,product:"skirt",count:4},
  //     {id:5,product:"skirt",count:4},
  //     {id:6,product:"skirt",count:4},
  //     {id:7,product:"skirt",count:4},
  //   ]
  // }

  // change=()=>{
  //   // console.log(this.state);
  //   this.setState({
  //     name: 'Mohamed',
  //     age:this.state.age + 1
  //   }
  //   )
  // }

  // Test(){
  //   console.log("test");
  // }

  // Test = ()=> console.log("test");

  // handleClick(){
  //   console.log("clicked");
  //   console.log(this.state.name);

  // }

  // state={
  //   name:"",
  // }

  // handleChange =(e)=>{
    // console.log(e.target.value);
  //   this.setState({
  //     name:e.target.value
  //   })
  // }

  // handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(this.state.name);
  // }

  // handleClick=(e)=>{
  //   let rand = Math.random();
  //   let items = this.state.items;
  //   items.push({id:rand,product:"shoes",count:3});
  //   this.setState(items)
  // }

  // handleDelete=(e)=>{
  //   let items = this.state.items;
  //   items.push({id:9,product:"shoes",count:3});
  //   this.setState({
  //     items:[{id:9,product:"shoes",count:3}]
  //   })
  // }

  render(){
    // console.log("render");
    return (
      <BrowserRouter>
        <div className="App">
          {/* Hello React {s+y} {Tes()} */}
          {/* <Child/> */}
          {/* {this.Test()} */}
          {/* <button onClick={this.handleClick.bind(this)} >click</button> */}
          {/* <button onClick={this.change} >change state</button>
          <p>{this.state.name }{this.state.age}</p> */}
          {/* <Child test={this.state.name}/> */}
          {/* <p>Items</p>http://localhost:3000 */}
          {/* <Items id="1" product="T-shirt" />
          <Items id="2" product="jaket" /> */}
          {/* <Items items={this.state.items}/>
          <button onClick={this.handleClick}>add</button>
          <button onClick={this.handleDelete}>delete</button> */}

          {/* form
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange}>
              <option value="value1">value 1</option>
              <option value="value2">value 2</option>
              <option value="value3">value 3</option>

            </select> */}
            {/* <input type="text" onChange={this.handleChange}/> */}
            {/* <textarea type="text" onChange={this.handleChange}/> */}
            {/* <input type="submit" value="send" /> */}
            {/* <button>submit</button> */}
          {/* </form>
          {this.state.name} */}
          <Nav />
          {/* <Home/>
          <About/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/:test_params" element={<Rout />} />

              {/* <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;