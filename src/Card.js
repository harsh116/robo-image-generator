import {Component} from 'react';
import './Card.css';
import 'tachyons';

const Card=({obj})=>
{
	let source=`https://robohash.org/${obj.id}? 200x200&set=set${obj.imgType}`;
	if(obj.special_img===true)
		source='data:image/jpeg;base64,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';
	return(
		<div className="br3 cardStyle">
			<img src={source} alt="image"/>
			<p>{obj.name}</p>
			
		</div>
	    )
}

export default Card;