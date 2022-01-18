import { useEffect, useState } from 'react'; // Added in this feature
import { useSelector, useDispatch } from 'react-redux'; // Added in this feature
import { Link, useParams, useHistory } from 'react-router-dom'; // "useHistory" added in this feature
import { toast } from "react-toastify"; // Added in this feature

const EditContact = () => {
  const {id} = useParams();

  // Everything below and up to "return" was added in this feature
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentContact = contacts.find(contact => contact.id === parseInt(id));

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name)
      setEmail(currentContact.email)
      setNumber(currentContact.number)
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email);
    const checkNumber = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number !== parseInt(number));
    
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
      id: parseInt(id),
      name,
      email,
      number
    }
    dispatch({type: 'UPDATE_CONTACT', payload: data});
    toast.success("Contact updated successfully");
    history.push("/");
  };
 
  return (
    <div className="container">
      {currentContact? (
        <>
        <div className="row">
          <div className="display-3 text-center">
            <h1>Edit Contact {id}</h1>
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
              <div className="form-group mt-3">
                <input type="submit" value="Update Contact" className="btn btn-dark mx-3" />
                <Link to="/" className="btn btn-danger mx-3">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
        </>
      ):(
        <h1 className="display-2 my-5 text-center">Contact with id: {id} does not exist</h1>
      )}
    </div>
  )
}

// "{currentContact? () : ()}" and "onSubmit={handleSubmit}"in <form>, as well as 
// "value={(whatever)} onChange={(e) => setWhatever(e.target.value)}" snippets added in this feature

export default EditContact