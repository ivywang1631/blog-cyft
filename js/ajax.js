'use strict'
var api = {
  url: 'http://localhost:3000',
  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  createPost: function(postInfo, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/v1/posts',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(postInfo),
      dataType: 'json'
    }, callback);
  },

  listArchive: function(callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/v1/posts',
      dataType: 'json'
    }, callback);
  },

  listPost: function(id, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/v1/posts' + id,
      dataType: 'json'
    }, callback);
  },

  updatePost: function(id, editInfo, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/v1/posts/' + id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(editInfo),
      dataType: 'json'
    }, callback);
  },

  deletePost: function(id, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/v1/posts/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
    }, callback);
  }
}; // end of api object
