import React from 'react'

export default React.createClass({
  render() {
    return (
        <div id="ehr" className="ehr">
            {this.props.children}
        </div>
    )
  }
})
