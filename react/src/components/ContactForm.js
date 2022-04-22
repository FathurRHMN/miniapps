import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios"

const ContactForm = () => {
  const [getFullname, setFullname] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getNote, setNote] = useState("");

  const inputHandlerFullname = (Fullname) => {
    return setFullname(Fullname);
       };

  const inputHandlerPhone = (phone) => {
    return setPhone(phone);
  };

  const inputHandlerNote = (note) => {
    return setNote(note);
  };

  function saveContact() {
    if(getFullname == '') {
      alert('Nama Harus Terisi')
      return false
    } else if (getPhone == ''){
      alert('Nomer Telephone Harus Terisi')
      return false
    } else {
    axios({
      method : "post",
      url : "http://localhost:3001/api/contact",
      data : {
        "fullname" : getFullname,
        "phone" : getPhone,
        "note" : getNote
    }
    }).then((results) =>{
      if(results.data.status == 200){
        alert("data berhasil ditambahkan");
        window.location.href = "/list-contact";
      } else {
        alert("data gagal ditambahkan");
      }
    })
  }
  }

  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="fullname" className="required">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                required="required"
                onChange={(e) => inputHandlerFullname(e.target.value)}
              />
            </div>
            <div className="col-sm m-10">
              <label htmlFor="phone" className="required">
                Nomor Telepon
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => inputHandlerPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="fullname">Catatan</label>
              <textarea
                type="text"
                className="form-control"
                onChange={(e) => inputHandlerNote(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => saveContact()}
                style={{ cursor: "pointer" }}
              >
                Tambahkan Kontak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
