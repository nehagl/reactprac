import * as React from'react';
import  './customstyle.css';
interface IProps {
  //  onDragOver:any,
  //first_name:string;
    onDrag:any,
   empList: any,
   onItemList:any,
   updateList:any
   //onDraggable:Boolean;
  //  bundler: string
 }
export class ItemComponent extends React.Component<IProps,{}>{
State={
}
constructor(props:any){
    super(props);
   // console.log("this.props.name",this.props.empList)
}

render(){
    return   this.props.empList.map((ele:any,index:number)=>{
      return <li className="listElement" id={`drag${index}`} draggable onDragStart={(e)=>{this.props.onDrag(e,ele,index)}}>{ele.first_name}</li>  
}

)
 
 
}
componentDidMount(){
  let x=document.getElementsByClassName("listElement");
  this.props.onItemList(x);
  console.log("ItemList",x +" length"+x.length);
}
componentWillReceiveProps(){
console.log("this is updated emp list",this.props.empList);

}
}

