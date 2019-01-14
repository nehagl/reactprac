import * as React from 'react';
import  './customstyle.css';
interface IProps {
   onDrop: any,
   onDragOver:any,
   onRemove:any
  // onDropList:any
   
}

export  class DropComponent extends React.Component<IProps, {}> {
   state={list:[1,2,3,4,5,6,7,8]}
    constructor(props:any){
        super(props);
    }


   render() {
   return( <div className="dropContainer">
   <div className="cell oneThirdWidth" id="drop1" onClick={this.props.onRemove} 
onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}></div>
<div className="cell oneThirdWidth" id="drop2"  onClick={this.props.onRemove} 
onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}></div>
<div className="cell oneThirdWidth" id="drop3"  onClick={this.props.onRemove} 
onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}></div>
<div className="cell oneThirdWidth" id="drop4"  onClick={this.props.onRemove} 
onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}></div>
<div className="cell oneThirdWidth" id="drop5" onClick={this.props.onRemove} 
onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}></div>
<div className="cell oneThirdWidth" id="drop6"  onClick={this.props.onRemove} 
onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}></div>
<div className="cell oneThirdWidth" id="drop7"  onClick={this.props.onRemove} 
onDrop={this.props.onDrop} onDragOver={this.props.onDragOver}></div>
   </div>
   )
   }
   
}

