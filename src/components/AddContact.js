// All imports added in this feature
import { useState } from "react";
import { useSelector } from "react-redux" 
import { toast } from "react-toastify";

const AddContact = () => {
  // All the following fields up to "return" added in this feature
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector((state) => state); 
  console.log(contacts)

  // Validations
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
  // "form onSubmit={handleSubmit}" as well as "value={(whatever)} onChange={(e) => setName(e.target.value)}"
  // added to name, email and number fields in this feature.
}

export default AddContact