import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players' ;

Meteor.startup(function(){
  Players.insert({
    name: 'Simaaawaw',
    score:'90'
  });
  console.log(Players.find().fetch());
});
