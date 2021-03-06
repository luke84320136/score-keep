import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';


import {Players} from './../imports/api/players' ;

const renderPlayers = function(playersList){
  return playersList.map(function(player) {
    return <p key={player._id}> {player.name} has {player.score} point(s)</p>;
  });
};

const handleSubmit =function(e) { //e=>event
  e.preventDefault();
};

Meteor.startup(function(){
  Tracker.autorun(function(){
    let players= Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Luke Lan';
    let jsx =(
      <div>
        <h1>{title}</h1>
        <p>Hello {name}</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="輸入名字"/>
          <button>增加</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

  //Insert new doc into players collection
  Players.insert({
    name: 'Parker',
    score: 1
  });
});
