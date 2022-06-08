import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector, useDispatch } from "react-redux";
import { getKota } from "../app/store";

function Kota() {
  const [kota, setKota] = useState([]);
  const [kotaID, setKotaID] = useState();

  const getKotaData = async () => {
    const response = await axios.get(
      `https://api.kerjoo.com/api/v1/reference/regencies_of/${dataIdProvince}`
    );
    setKota(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getKotaData();
  }, []);

  const dispatch = useDispatch();
  //we're not using data in this component
  const dataIdProvince = useSelector((state) => state.theStore.provinsi);

  const sendData = () => {
    dispatch(getKota(kotaID));
  };

  const onChangeValue = (e) => {
    setKotaID(e.target.value);
  };

  return (
    <>
      <div>
        <button onClick={sendData}>Send data</button>
      </div>
      <label htmlFor="inputKota">Pilih Kota</label>
      <Form.Select aria-label="Kota" onChange={onChangeValue}>
        <option>Pilih Kota</option>
        {kota &&
          kota.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </Form.Select>
    </>
  );
}

export default Kota;
