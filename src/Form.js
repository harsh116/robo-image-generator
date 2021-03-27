import {Component} from 'react';
import 'tachyons';

 const Form=({changeName,changeId,stringType,changeType})=>
{
	return(
	       <div className="">
        
	          <form >
                <p className="dib pd2 ma2 light_shade b"
                >Enter your id: </p>
                <input className="dib pd2 ma2 f4 h2 w-20" type="text" id="id" //defaultValue="yash@"
                 onInput={changeId} placeholder="Type your id to generate image"
                 
                />
                <div className="dib mt3 shadow-5 white b h0 ph3  bg-gray hover-bg-mid-gray bn br2
                 hover-shadow-inner pointer"
                  title="Click here to change image type"
                  style = {{}}>
                    <p 
                     className="f4 "
                    
                     onClick={changeType}>{stringType}</p>
                 </div>
                <br/>
                <p className="dib pd2 ma2 light_shade b">Enter your name: </p>
                <input className="dib pd2 ma2 " type="text" id="name" onInput={changeName}
                />   
              </form> 
              <br/><br/><br/>
	       </div>
	    );
}

export default Form;