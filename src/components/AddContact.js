// The entire AddContact Component was added in this feature

const AddContact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="display-3 text-center">
          <h1>Add Contact</h1>
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
              <input type="submit" value="Add Student" className="btn btn-block btn-dark" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact