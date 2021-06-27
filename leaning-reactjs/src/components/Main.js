import { useState } from 'react';
import  UserRow from './UserRow';

export default function Main() {
  const [form, setForm] = useState({
    email: '',
    pass: '',
    country: '',
    gender: '',
    orther: ''
  });
  const [arrRegister, setResgisterList] = useState([])
  function handleChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setForm({
      ...form,
      [name]: value
    });
  }
  function onSubmit (event) {
    event.preventDefault();
    const id = arrRegister.length + 1;
    arrRegister.push({...form, id: id})
    setResgisterList(arrRegister);
    setForm({email: '',
    pass: '',
    country: '',
    gender: '',
    orther: ''})
  }
  function handleDeleUser (id) {
    var newUsers = arrRegister.filter((x) => {
      return x.id !== id;
    })
    setResgisterList(newUsers);
  }
  return (
    <main className="main-page">
      <div className="container flex">
        <form className="form-register">
          <h2 className="title">REGISTER</h2>
          <div className="form-group">
            <label className="form-label">Email Address:</label>
            <input name="email" type="text" value={form.email} className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
            <input name="pass" type="password" value={form.pass} className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Your country:</label>
            <select className="form-control" name="country" onChange={handleChange}>
              <option value="Ha Noi">Ha Noi</option>
              <option value="Da Nang">Da Nang</option>
              <option value="Ho Chi Minh">Ho Chi Minh</option>
              <option value="Tam Ky">Tam Ky</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Gender:</label>
            <div className="flex" onChange={handleChange}>
              <div className="mr-20">
                <input type="radio" id="male" value="male" name="gender" />
                <label for="male">Male</label>
              </div>
              <div className="mr-20">
                <input type="radio" id="female" value="female" name="gender" />
                <label for="female">Female</label>
              </div>
              <div>
                <input type="radio" id="orther" value="orther" name="gender" />
                <label for="orther">Orther</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Orther Information:</label>
            <textarea name="orther" value={form.orther} onChange={handleChange} />
          </div>
          <button className="btn-submit" onClick={onSubmit}>Submit</button>
        </form>
        <table className="table-register">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email Address</th>
              <th>Password</th>
              <th>Your country</th>
              <th>Gender</th>
              <th>Orther Information</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              arrRegister.map((item) => 
              <UserRow  key={ item.id } user={item} handleDeleUser={handleDeleUser}/>
              )
            }
          </tbody>
        </table>
      </div>
      <div>
      </div>
    </main>
  )
}
