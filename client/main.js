import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players =[{
  _id:'1',
  name:'Siman',
  score:99
  }, {
  _id:'2',
  name:'Luke',
  score: 60
  }, {
  _id:'3',
  name:'haha',
  score:-12
}];

const renderPlayers = function(playersList){
  let numbers = [{val:1}, {val:2}, {val:3}];

let newNumbers= numbers.map(function(number) {
    return number.val -1;
  });
  console.log(newNumbers);

  return [<p key="1">1</p>, <p key="2">2</p>, <p key="3">3</p>]
};

Meteor.startup(function(){
  let title = 'Score Keep';
  let name = 'Luke Lan';
  let jsx =(
    <div>
      <h1>{title}</h1>
      <p>Hello {name}</p>
      <p>This is my second p.</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
