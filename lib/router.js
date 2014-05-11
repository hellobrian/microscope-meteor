// loadingTemplate provides the name of a loading template to redirect to 
// while this app is waiting for data

// waitOn function returns our posts subscription
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});

Router.map(function() {
  this.route('postsList', { path: '/' });
  this.route('postPage', { 
    path: '/posts/:_id', 
    data: function() { return Posts.findOne(this.params._id); }
  });
});

// Enables a built in loading hook
// Router will ensure that the posts subscription is loaded before 
// sending the user through to the route they requested
Router.onBeforeAction('loading');