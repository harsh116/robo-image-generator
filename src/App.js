import {Component} from 'react';
import Form from './Form';
import './App.css';
import Card from './Card';
import {connect} from 'react-redux';
import {setInputField,setInputField_id,setImageType} from './actions'


const mapStateToProps=(state)=>
{console.log('state: ',state)
	return {
		inputField: state.inputField,
		inputField_id: state.inputField_id,
		imagetype: state.imagetype,
		special_img: state.special_img
		
	}
}

const mapDispatchToProps=(dispatch)=>{
	// debugger;
	return {
		dispatch,
		
		changeId: (event)=>(
			// debugger;
			// console.log('id event:', event.target.value)
			//return
			 dispatch(setInputField_id(event.target.value))
		),
		changeName: (event)=>(
			// console.log('name event:', event.target.value)
			//return
			 dispatch(setInputField(event.target.value))
		),
		changeType: ()=>dispatch(setImageType()),
		dispatch,

		

	}
}

class App extends Component
{
	render()
	{
		const {inputField,inputField_id,changeId,special_img}=this.props;
		const {changeName,changeType,imagetype}=this.props;
		let obj=
		{
			name: inputField,
			id: inputField_id,
			imgType: imagetype,
			special_img: special_img
			
		}
		console.log('name: ',obj.name);
		console.log('id: ',obj.id);
		let stringType="";
		switch (obj.imgType) {
			case  1: 
				// statements_1
				stringType="Robots"
				break;
			case  2: 
				// statements_1
				stringType="Monster"
				break;
			case  3: 
				// statements_1
				stringType="Disembodied Head"
				break;
			case  4: 
				// statements_1
				stringType="Kitten"
				break;
			default:
				// statements_def
				break;
		}
		return(
		     <div className="tc">
				<Form changeName={changeName} 
					  changeId={changeId}
					  changeType={changeType}
					  stringType={stringType}
				/>
				<Card obj={obj}/>
			</div>

		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);