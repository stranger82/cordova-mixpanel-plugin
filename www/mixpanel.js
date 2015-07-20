'use strict';

var exec = require('cordova/exec'),
  mixpanel = {
    people: {}
  };


// MIXPANEL API


mixpanel.alias = mixpanel.createAlias = function(alias, originalId, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'alias', [alias, originalId]);
};

mixpanel.flush = function(onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'flush', []);
};

mixpanel.identify = function(id, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'identify', [id]);
};

mixpanel.init = function(token, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'init', [token]);
};

mixpanel.reset = function(onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'reset', []);
};

mixpanel.track = function(eventName, eventProperties, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'track', [eventName, eventProperties]);
};

mixpanel.super = function(eventProperties, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'super', [eventProperties]);
};

mixpanel.superOnce = function(eventProperties, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'super_once', [eventProperties]);
};


mixpanel.timeEvent = function(eventName, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'time_event', [eventName]);
};



// PEOPLE API


mixpanel.people.identify = function(distinctId, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'people_identify', [distinctId]);
};

mixpanel.people.set = function(peopleProperties, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'people_set', [peopleProperties]);
};

mixpanel.people.increment = function(incrementProperty, incrementValue, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'people_increment', [incrementProperty, incrementValue]);
};

mixpanel.people.trackCharge = function(value, properties, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'people_track_charge', [value, properties]);
};

mixpanel.people.initPushHandling = function(token, onSuccess, onFail) {
  exec(onSuccess, onFail, 'Mixpanel', 'people_init_push_notifications', [initPushHandling]);
};




// Exports


module.exports = mixpanel;