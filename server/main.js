import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players' ;

Meteor.startup(function(){
  Players.insert({
    name: 'Luke',
    score:'80'
  });
  console.log(Players.find().fetch());
});
