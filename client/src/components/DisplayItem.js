import React,{Component}from 'react';class DisplayItem extends Component{constructor(props){super(props);this.state={spans:0};this.imageRef=React.createRef()}
componentDidMount(){if(!this.imageRef.current){return null}
this.imageRef.current.addEventListener('load',this.setSpans)}
setSpans=()=>{if(!this.imageRef.current){return null}
const height=this.imageRef.current.clientHeight;const spans=Math.ceil(height/10);this.setState({spans})};render(){return(<div
className='tc dib br3 pa3 ma2 grow bw2'
style={{gridRowEnd:`span ${this.state.spans}`}}><img ref={this.imageRef}alt='' src={this.props.image}/></div>)}}
export default DisplayItem