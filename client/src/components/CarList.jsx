import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function CarList() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/car/")
      .then((res) => {
        console.log(res.data);
        setCarList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>Car List</h1>

      <div class="table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Car Number</th>
              <th scope="col">Car Model</th>
              <th scope="col">Made Year</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {carList.map((val, key) => {
              return (
                <tr>
                  <th scope="row">{val.carNumber}</th>
                  <td>{val.carModel}</td>
                  <td>{val.madeYear}</td>
                  <td>
                    <button type="button" class="btn btn-outline-danger">
                      Delete
                    </button>
                    <button type="button" class="btn btn-outline-warning">
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button type="button" class="btn btn-outline-danger">
                  Delete
                </button>
                <button type="button" class="btn btn-outline-warning">
                  Update
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <button type="button" class="btn btn-outline-danger">
                  Delete
                </button>
                <button type="button" class="btn btn-outline-warning">
                  Update
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>
                <button type="button" class="btn btn-outline-danger">
                  Delete
                </button>
                <button type="button" class="btn btn-outline-warning">
                  Update
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CarList;
