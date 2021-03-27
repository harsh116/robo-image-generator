const initialState={
	inputField: 'Type your name in box',
	inputField_id: 'yash',
	imagetype: 1,
	special_img: false
}

let isContains=(word,a,b,c)=>
{
	if(word.includes(a)&&word.includes(b)&&word.includes(c))
		return true;
	else
		return false;
}

export const changeImage=(state=initialState,action={})=>
{
	console.log('action in reducer: ',action)
	switch(action.type)
	{
		case "CHANGE_INPUT_FIELD_NAME":
		if(action.payload.length==0)
				return Object.assign({},state,{inputField: initialState.inputField})
			return Object.assign({},state,{inputField: action.payload});
			break;
		case "CHANGE_INPUT_FIELD_ID":
			if(action.payload.length===0)
				return Object.assign({},state,{inputField_id: 'yash'})
			else if(isContains(action.payload,'yash','ki','lulli')||isContains(action.payload,'yash','ki','pp')||
			        isContains(action.payload,'small','peepee','pee_pee')||
			        isContains(action.payload,'yash','of','pp')
			        )
				 return Object.assign({},state,{special_img: true})
			return Object.assign({},state,{inputField_id: action.payload,special_img: false });
			break;
		case "CHANGE_IMAGE_TYPE":
			let type=state.imagetype;
			type=(type+1)%5
			if(type===0)
				type=1;
			return Object.assign({},state,{imagetype: type});
		default:
			return state;
	}
}