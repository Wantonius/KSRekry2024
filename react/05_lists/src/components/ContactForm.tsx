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
}

export default ContactForm;