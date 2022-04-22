import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const ListContact = () => {
  const [getDatas, setDatas] = useState([]);

  useEffect(() =>{
    axios({
      method:"GET",
      url:"http://localhost:3001/api/contact"
    }).then((results) =>{
        setDatas(results.data.payload);
      }
    )
  }, [])

  function deteleContact(ContactId){
    confirmAlert({
      title: 'Konfirmasi hapus',
      message: 'Yakin hapus data ini?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios({
              method : "delete",
              url : `http://localhost:3001/api/contact/${ContactId}`,
            }).then(res =>{
              window.location.href = "/list-contact";
            })
            .catch(err =>{
              alert('err',err)
            })
          }
        },
        {
          label: 'No',
        }
      ]
    });
  }

  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container-fluid">
          <h3 className="text-center">Daftar Kontak Saya</h3>
          <div className="w-full mw-full">
            <div className="card p-0 bg-very-dark-dm">
              <div className="table-responsive">
                <table className="table table-inner-bordered">
                  <thead>
                    <tr>
                      <th>Nomer</th>
                      <th>Name Lengkap</th>
                      <th>Nomor Telepon</th>
                      <th>Catatan</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getDatas.map((data,index)=>{
                      return (
                      <tr key = {data.id}>
                        <th>{index+1}</th>
                        <td>{data.fullname}</td>
                        <td>{data.phone}</td>
                        <td>{data.note}</td>
                        <td>
                          <Link
                          to={`/edit-contact/${data.id}`}
                          >
                            🔍
                          </Link>
                          <span
                          style={{ cursor: "pointer" }}
                          onClick={() => deteleContact(data.id)}
                          >
                            ❌
                          </span>
                        </td>
                      </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContact;
