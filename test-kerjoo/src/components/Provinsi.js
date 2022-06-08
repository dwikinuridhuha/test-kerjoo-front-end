// https://api.kerjoo.com/api/v1/reference/provinces

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector, useDispatch } from "react-redux";
import { getProvinsi } from "../app/store";

function Provinsi() {
  const [provinsi, setProvinsi] = useState([]);
  const [provinsiID, setProvinsiID] = useState();

  const dispatch = useDispatch();
  //we're not using data in this component
  //const data = useSelector((state) => state.theStore.value);

  const sendData = () => {
    dispatch(getProvinsi(provinsiID));
  };

  const onChangeValue = (e) => {
    setProvinsiID(e.target.value);
  };

  const getProvinsiData = async () => {
    const response = await axios.get(
      "https://api.kerjoo.com/api/v1/reference/provinces"
    );
    setProvinsi(response.data);
  };

  useEffect(() => {
    getProvinsiData();
  }, []);

  return (
    <>
      <button onClick={sendData}>Send data</button>
      <label htmlFor="inputProvinsi">Pilih Provinsi</label>
      <Form.Select aria-label="Provinsi" onChange={onChangeValue}>
        <option>Pilih Provinsi</option>
        {provinsi &&
          provinsi.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </Form.Select>
    </>
  );
}

export default Provinsi;
