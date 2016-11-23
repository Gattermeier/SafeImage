import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';

export default class SafeImage extends Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }
  componentDidMount() {
    const image = this.refs.image;

    image.addEventListener('error', (e) => {
      this.setState({ error: true })
      this.props.onError && this.props.onError(e);
    });

  }
  render() {
    const { src, children, style, onError, ...rest } = this.props
    const { error } = this.state
    if (src && !error) return <img src={src} style={style} ref='image' {...rest} />
    if (error && children) return (<div>{children}</div>)
    return (<div></div>)
  }
}
