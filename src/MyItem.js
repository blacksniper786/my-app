import React from "react";
class Item extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                clicks: 0
            }
        }

    clickMe(){
       // console.log("i was clicked",this.props.name)
       this.setState({
        clicks: this.state.clicks + 1
       })
    }
    render () {
      return (
        <div>
            <h1 onClick={() => this.clickMe()}> hello from {this.props.name} </h1>
            <p>{this.state.clicks} nombre of clicks</p>
        </div>
      )
    }
  
  }
export default Item;