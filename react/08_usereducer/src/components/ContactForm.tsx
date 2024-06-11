import React,{useState} from 'react';
import Contact from '../models/Contact';

interface State {
	firstname:string;
	lastname:string;
	email:string;
	phone:string;
}

interface Props {
	addContact(contact:Contact):void;
}

const ContactForm = (props:Props) => {
	
	const [state,setState] = useState<State>({
		firstname:"",
		lastname:"",
		email:"",
		phone:""
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		if(state.firstname === "" || state.lastname === "" || state.email === "" || state.phone === "") {
			return;
		}
		const contact = new Contact(state.firstname,state.lastname,state.email,state.phone,0);
		props.addContact(contact);
		setState({
			firstname:"",
			lastname:"",
			email:"",
			phone:""
		})
	}
	return(
		<div style={{"width":"40%","backgroundColor":"lightgreen","margin":"auto","textAlign":"center"}}>
			<form onSubmit={onSubmit} className="m-3">
				<label htmlFor="firstname" className="form-label">First Name</label>
				<input type="text"
						name="firstname"
						id="firstname"
						onChange={onChange}
						className="form-control"
						value={state.firstname}/>
				<label htmlFor="lastname" className="form-label">Last Name</label>
				<input type="text"
						name="lastname"
						id="lastname"
						onChange={onChange}
						className="form-control"
						value={state.lastname}/>
				<label htmlFor="email" className="form-label">Email</label>
				<input type="email"
						name="email"
						id="email"
						onChange={onChange}
						className="form-control"
						value={state.email}/>
				<label htmlFor="phone" className="form-label">Phone</label>
				<input type="tel"
						name="phone"
						id="phone"
						onChange={onChange}
						className="form-control"
						value={state.phone}/>
				<input type="submit" className="btn btn-secondary" value="Add"/>
			</form>
		</div>
	)
	
}

export default ContactForm;