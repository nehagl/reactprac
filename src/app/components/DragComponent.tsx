import * as React from 'react';
import {ItemComponent} from './ItemComponent';
import  './customstyle.css';

interface IProps{
    onRemoveItem:any,
    onDragList:any,
    ItemList:any,
    updateList:any;
}

export  class DragComponent extends React.Component<IProps,{}> {

    
    constructor(props:any){
        super(props);
       // console.log(".name",this.state);
    }
    render() {
        
          return ( 
              
                <ul id="listnew">
                <ItemComponent empList={this.props.onDragList} onDrag={this.drag} onItemList={this.getItemList} updateList={this.props.updateList}/>     
            </ul>
            )
        }

        drag=(ev:any,ele:any,index:number)=> {
            ev.dataTransfer.setData("text", ev.target.id);
            console.log("in drag method",ev.target.id+"objectcurrent"+ele.id);
            this.props.onRemoveItem(ele,index);
            }
          
      getItemList=(list:any)=>{
          this.props.ItemList(list);
      }
      componentWillReceiveProps(){
         console.log("in drag update", this.props.onDragList);
         
      }
}