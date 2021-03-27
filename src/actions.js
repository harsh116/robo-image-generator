
const setInputField=(text)=>
{
	console.log('name text: ',text)
	return {
		type: "CHANGE_INPUT_FIELD_NAME",
		payload: text
	};
}

const setInputField_id=(text)=>
{
	console.log('id text: ',text)
	return{
		type: "CHANGE_INPUT_FIELD_ID",
		payload: text
	}
}

const setImageType=()=>
{
	return{
		type: "CHANGE_IMAGE_TYPE"
	}
}

export {setInputField,setInputField_id,setImageType};

