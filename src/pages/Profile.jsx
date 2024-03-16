import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import profile from '../assets/img/profile.png'

const Profile = ()=>{
    return (
        <div className="px-2 py-5 d-flex flex-column  align-items-center">
      <img
        src={profile}
        style={{ width: "90px", height: "90px", borderRadius: "100%" }}
      />
      <div className="mt-3 d-flex align-items-center gap-2">
        <i class="fa-solid fa-wallet"></i>
        <span>K 9,850</span>
      </div>
      <Form className="my-4" >
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name..."
            readOnly
            value={'Testing User'}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Phone..."
            value={'0912345689'}
           
          />
        </Form.Group>
        <button
          className="btn float-end text-light p-2 border border-none fw-bold"
          style={{background:'linear-gradient(#fe4e36,#ff7715)'}}
          type="submit"
        >
          ပြောင်းမည်
        </button>

        <NavLink to={'/changepassword'}
          className="btn float-end text-light p-2 border border-none fw-bold"
          style={{background:'linear-gradient(#fe4e36,#ff7715)'}}
          type="submit"
        >
          Change Password
        </NavLink>
      </Form>
    </div>
    );
}

export default Profile