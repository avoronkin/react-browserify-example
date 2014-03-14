/** @jsx React.DOM */ 

var React = require('react');
var Showdown = require('showdown');
var converter = new Showdown.converter();

var Comment = React.createClass({
    render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        var time = (new Date()).getTime();
        
        return (
            <div className='comment'>
            {time} 454545
            <h2 className='commentAuthor'>
            {this.props.author}
            </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
        );
    }
});

module.exports = Comment;
