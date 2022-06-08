import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector, useDispatch } from "react-redux";
import { getKecamatan } from "../app/store";

function Kecamatan() {
  const [kecamatan, setkecamatan] = useState([]);
  const [kecamatanID, setkecamatanID] = useState();

  const getkecamatanData = async () => {
    const response = await axios.get(
      `https://api.kerjoo.com/api/v1/reference/districts_of/${dataIdKota}`
    );
    setkecamatan(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getkecamatanData();
  }, []);

  const dispatch = useDispatch();
  //we're not using data in this component
  const dataIdKota = useSelector((state) => state.theStore.kota);

  const sendData = () => {
    dispatch(getKecamatan(kecamatanID));
  };

  const onChangeValue = (e) => {
    setkecamatanID(e.target.value);
  };

  return (
    <>
      <div>
        <button onClick={sendData}>Send data</button>
      </div>
      <label htmlFor="inputkecamatan">Pilih kecamatan</label>
      <Form.Select aria-label="kecamatan" onChange={onChangeValue}>
        <option>Pilih kecamatan</option>
        {kecamatan &&
          kecamatan.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </Form.Select>
    </>
  );
}

export default Kecamatan;
