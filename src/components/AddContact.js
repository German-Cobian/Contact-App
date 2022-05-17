import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

const AddContact = () => {
 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector((state) => state); 
  const dispatch = useDispatch();
  const history = useHistory();
 
  const checkEmail = contacts.find(contact => contact.email === email && email);
  const checkNumber = contacts.find(contact => contact.number === parseInt(number));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !number) {
      return toast.warning("Please fill in all fields")
    }
    if(checkEmail) {
      return toast.error("This e-mail already exists")
    }
    if(checkNumber) {
      return toast.error("This number already exists")
    }

    const data = {
      id: contacts[contacts.length -1].id + 1,
      name,
      email,
      number
    }
    dispatch({type: 'ADD_CONTACT', payload: data});
    toast.success("Contact entered successfully");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="display-3 text-center">
          <h1>Add Contact</h1>
        </div>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="name" className="form-control" 
              value={(name)} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-control"
              value={(email)} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <input type="number" placeholder="Phone Number" className="form-control"
              value={(number)} onChange={(e) => setNumber(e.target.value)}/>
            </div>
            <div className="form-group">
              <input type="submit" value="Add Contact" className="btn btn-block btn-dark" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact