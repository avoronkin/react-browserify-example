/** @jsx React.DOM */ 

var React = require('react');
var Showdown = require('showdown');
var converter = new Showdown.converter();

var Comment = React.createClass({displayName: 'Comment',
    render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        var time = (new Date()).getTime();
        
        return (
            React.DOM.div( {className:"comment"}, 
            time, " 454545",
            React.DOM.h2( {className:"commentAuthor"}, 
            this.props.author
            ),
                React.DOM.span( {dangerouslySetInnerHTML:{__html: rawMarkup}} )
            )
        );
    }
});

module.exports = Comment;
