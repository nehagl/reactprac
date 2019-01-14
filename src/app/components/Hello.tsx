import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import {DragComponent} from './DragComponent';
import {DropComponent} from './DropComponent';
import  './customstyle.css';
import { render } from 'react-dom';
interface IProps {
   compiler:string,
   bundler:string,
   framework: string
}
export  class Hello extends React.Component<IProps,{}> {


   state={ RemoveItem:{"id":1,"first_name":"Heller","last_name":"Dacke","email":"ldacke0@bandcamp.com","gender":"Female","ip_address":"138.177.159.99"},
   Index:0,List:[<li></li>],manipulationList:[{"id":1,"first_name":"Davidovicz","last_name":"Dacke","email":"ldacke0@bandcamp.com","gender":"Female","ip_address":"138.177.159.99"}],
    //  RemoveItem:{"id":1,"first_name":"Liesa","last_name":"Dacke","email":"ldacke0@bandcamp.com","gender":"Female","ip_address":"138.177.159.99"},
      Data:[{"id":1,"first_name":"Hayes","last_name":"Dacke","email":"ldacke0@bandcamp.com","gender":"Female","ip_address":"138.177.159.99"},
      {"id":2,"first_name":"Dyhouse","last_name":"Reason","email":"breason1@nps.gov","gender":"Male","ip_address":"234.163.11.159"},
       {"id":3,"first_name":"Whithorn","last_name":"Voase","email":"svoase2@gnu.org","gender":"Male","ip_address":"127.141.166.51"},
       {"id":4,"first_name":"Nickola","last_name":"Whithorn","email":"nwhithorn3@addthis.com","gender":"Male","ip_address":"248.186.197.43"},
      {"id":5,"first_name":"Manny","last_name":"Von Welldun","email":"mvonwelldun4@tuttocitta.it","gender":"Male","ip_address":"167.77.187.96"},
      {"id":6,"first_name":"Ginnie","last_name":"Fink","email":"gfink5@devhub.com","gender":"Female","ip_address":"31.164.31.222"},
      {"id":7,"first_name":"Rodrique","last_name":"Dalliwater","email":"rdalliwater6@reverbnation.com","gender":"Male","ip_address":"112.182.73.26"},
      {"id":8,"first_name":"Welbie","last_name":"Hayes","email":"whayes7@pinterest.com","gender":"Male","ip_address":"214.105.118.192"},{"id":16,"first_name":"Corina","last_name":"Bims","email":"cbimsf@webmd.com","gender":"Female","ip_address":"36.244.35.182"},
      {"id":17,"first_name":"Joe","last_name":"Kirley","email":"jkirleyg@cbslocal.com","gender":"Male","ip_address":"167.224.216.66"},
      {"id":18,"first_name":"Ely","last_name":"Dienes","email":"edienesh@engadget.com","gender":"Male","ip_address":"187.184.73.159"},
      {"id":19,"first_name":"Jessalyn","last_name":"Dyhouse","email":"jdyhousei@bloglovin.com","gender":"Female","ip_address":"169.137.19.47"},
      {"id":20,"first_name":"Vite","last_name":"Monte","email":"vmontej@ow.ly","gender":"Male","ip_address":"61.65.93.128"},
       {"id":21,"first_name":"Tove","last_name":"Kinneir","email":"tkinneirk@cocolog-nifty.com","gender":"Female","ip_address":"50.42.171.122"},
       {"id":22,"first_name":"Ingar","last_name":"Davidovicz","email":"idavidoviczl@bandcamp.com","gender":"Male","ip_address":"22.209.67.136"},
      {"id":23,"first_name":"Louie","last_name":"Heller","email":"lhellerm@fema.gov","gender":"Male","ip_address":"88.115.60.38"}]
     
      }


   constructor(props:any){
      super(props);
     // this.setState({Data:Data.first_name})
  }
componentDidMount(){
  this.state.manipulationList=this.state.Data;
}
componentWillUpdate(){
 console.log("this is in hellow update" ,this.state.Data);
}

   render() {
  
   return ( 
   
   <div className="container extraPadding">
    
      <DragComponent onDragList={this.state.Data} onRemoveItem={this.RemoveItem} ItemList={this.getItemList} updateList={this.state.List}> </DragComponent>
      <DropComponent onDrop={this.drop} onDragOver={this.allowDrop} onRemove={this.RemoveItemFromDrop}> </DropComponent>
      {/* <DropComponent onDrop={this.drop} onDragOver={this.allowDrop} onDropList={this.DropCount}> </DropComponent> */}
      </div>)
   }

  RemoveItem=(element:any,index:number)=>{
    this.state.RemoveItem=element;
    this.state.Index=index;
    this.setState({RemoveItem:this.state.RemoveItem,Index:this.state.Index});
    console.log("removeItem method ele",this.state.RemoveItem);
  }

 allowDrop=(ev:any) =>{
   ev.preventDefault();
   console.log('id in allowdrop',ev.target.id);
   //console.log("allow drop droplist",this.state.DropList);
  
 }
  drop=(ev:any) =>{
	ev.preventDefault();
	if(document.getElementById(ev.target.id).innerHTML == ''){
  var data = ev.dataTransfer.getData("text");
  var m=this.state.RemoveItem;
  var node = document.createElement("li");
  node.setAttribute('class','listElement');
  node.innerHTML= m.first_name;
  console.log("value of m",this.state.RemoveItem);
  console.log("sender drop",data+"receiving id "+ ev.target.id );
    ev.target.appendChild(node);
  //ev.target.appendChild(document.getElementById(data));
  
	document.getElementById(ev.target.id).style.borderColor='#ab2859';
	var remove=document.createElement('li');
	remove.innerHTML='X';
	remove.setAttribute('id','removeElement'+ev.target.id);
	remove.setAttribute('class','removeIcon');
	remove.setAttribute('onclick','removeItem(event)');
  ev.target.appendChild(remove);
  //console.log("List",Array.from(this.state.List));
  
   this.state.Data=this.state.Data.filter(ele=>{
     return ele.id != this.state.RemoveItem.id;
   });
   this.setState({Data:this.state.Data});
   //this.componentWillUpdate();
   //this.render();
   console.log("in drop data",this.state.Data);
   
	  var x = document.getElementsByClassName('cell');
  for(var i in x){
	  if(x[i].innerHTML==''){
		 //  x[i].style.border='1px solid black'; 
	  }
}
	}
	else{
		ev.preventDefault();
		  var x = document.getElementsByClassName('cell');
  for(var i in x){
	  if(x[i].innerHTML==''){
		//   x[i].style.border='1px solid black'; 
	  }
}
		}
}


RemoveItemFromDrop=(event:any)=>{
	//event.stopPropagation();
	console.log("clickable ele is",document.getElementById(event.target.id));
	 var x=document.getElementById(event.target.id).previousElementSibling;
   x.parentElement.style.borderColor='#a29e9e';
   this.setState({RemovedItem:x});
  console.log("sibling element", x);
  this.state.manipulationList.forEach(ele=>{
       if (ele.first_name==x.innerHTML)
         this.state.Data.push(ele);
  }
  );
  //this.componentWillUpdate();
  //this.render();
 // this.state.List.appendChild(x);
 this.setState({Data:this.state.Data});
  console.log("list in removeItem",this.state.Data);
	x.remove();
	document.getElementById(event.target.id).remove();
}


getItemList=(list:any)=>{
  this.state.List=list;
//  this.setState({List:this.state.List});
  console.log("List",this.state.List);
}


}