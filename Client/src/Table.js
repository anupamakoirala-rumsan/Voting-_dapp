import Table from "react-bootstrap/Table";
import React from "react";
function Tables() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Candidate</th>
          <th>Total Vote</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ram</td>
          <td id="candidate-1"></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Elona</td>
          <td id="candidate-2"></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Nick</td>
          <td id="candidate-3"></td>
        </tr>
      </tbody>
    </Table>
  );
}
export default Tables;
