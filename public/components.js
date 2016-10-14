var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM

var HelloMessage = React.createClass({
  handleClick() {
    alert('Clickety')
  },
  render() {
    return <div onClick={this.handleClick}>Jello {this.props.name}</div>
  }
})

if (isNode) {
  exports.HelloMessage = HelloMessage
} else {
  ReactDOM.render(<HelloMessage name="Unnamed" />, document.getElementById('react-root'))
}
