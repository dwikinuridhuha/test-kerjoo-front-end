import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector, useDispatch } from "react-redux";
import { getKecamatan } from "../app/store";

function Desa() {
  const [desa, setDesa] = useState([]);
  const [desaID, setDesaID] = useState();

  const getdesaData = async () => {
    const response = await axios.get(
      `https://api.kerjoo.com/api/v1/reference/villages_of/${dataIdKecamatan}`
    );
    setDesa(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getdesaData();
  }, []);

  const dispatch = useDispatch();
  //we're not using data in this component
  const dataIdKecamatan = useSelector((state) => state.theStore.kecamatan);

  const sendData = () => {
    dispatch(getKecamatan(desaID));
  };

  const onChangeValue = (e) => {
    setDesaID(e.target.value);
  };

  return (
    <>
      <div>
        <button onClick={sendData}>Send data</button>
      </div>
      <label htmlFor="inputdesa">Pilih desa</label>
      <Form.Select aria-label="desa" onChange={onChangeValue}>
        <option>Pilih desa</option>
        {desa &&
          desa.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </Form.Select>
    </>
  );
}

export default Desa;
