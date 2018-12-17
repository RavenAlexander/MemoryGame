//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import monster from "./monster.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    monster,
    clickedMonster: [],
    score: 0
  };

//when you click on a card ... the monster is taken out of the array
  imageClick = event => {
    const currentMonster = event.target.alt;
    const MonsterAlreadyClicked =
      this.state.clickedMonster.indexOf(currentMonster) > -1;

//if you click on a monster that has already been selected, the game is reset and cards reordered
    if (MonsterAlreadyClicked) {
      this.setState({
        monster: this.state.monster.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedMonster: [],
        score: 0
      });
        alert("You're a third rate duelist with a fourth rate deck! \n Get out of my sight!");

//if you click on an available monster, your score is increased and cards reordered
    } else {
      this.setState(
        {
          monster: this.state.monster.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedMonster: this.state.clickedMonster.concat(
            currentMonster
          ),
          score: this.state.score + 1
        },
//if you get all 12 monsters correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("You win! You are the new King of Games!");
            this.setState({
              monster: this.state.monster.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedMonster: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.monster.map(monster => (
            <FriendCard
              imageClick={this.imageClick}
              id={monster.id}
              key={monster.id}
              image={monster.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;