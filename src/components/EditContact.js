// Entire EditContact component was added in this feature

import { Link, useParams } from 'react-router-dom';

const EditContact = () => {
    const {id} = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="display-3 text-center">
          <h1>Edit Contact {id}</h1>
        </div>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group">
              <input type="text" placeholder="name" className="form-control" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-control" />
            </div>
            <div className="form-group">
              <input type="number" placeholder="Phone Number" className="form-control" />
            </div>
            <div className="form-group">
              <input type="submit" value="Update Contact" className="btn btn-dark mr-3" />
              <Link to="/" className="btn btn-danger ml-3">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditContact