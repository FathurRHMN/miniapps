import NavigationBar from "./NavigationBar";
import axios from "axios"
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const EditForm = () => {
  const [getFullname, setFullname] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getNote, setNote] = useState("");
  const { id } = useParams(); 

  const inputHandlerFullname = (Fullname) => {
    return setFullname(Fullname);
       };

  const inputHandlerPhone = (phone) => {
    return setPhone(phone);
  };

  const inputHandlerNote = (note) => {
    return setNote(note);
  };

  useEffect(() =>{
    getContactById()
  }, [])

  function editContact() {
    axios({
      method : "put",
      url : `http://localhost:3001/api/contact/${id}`,
      data : {
        "fullname" : getFullname,
        "phone" : getPhone,
        "note" : getNote
    }
    }).then((results) =>{
      if(results.data.status == 200){
        alert("data berhasil diedit");
        window.location.href = "/list-contact";
      } else {
        alert("data gagal diedit");
      }
    })
  }

  function getContactById() {
    axios({
      method : "get",
      url : `http://localhost:3001/api/contact/${id}`,
    }).then((results) => {
      if(results.data.status == 200){
        setFullname(results.data.payload[0].fullname)
        setPhone(results.data.payload[0].phone)
        setNote(results.data.payload[0].note)
      } else {
        alert("data tidak ada");
      }
    })
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
                value = { getFullname }
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
                value = { getPhone }
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
                value = { getNote }
                onChange={(e) => inputHandlerNote(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => editContact()}
                style={{ cursor: "pointer" }}
              >
                Edit Kontak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
