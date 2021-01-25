import React from 'react';
/**
 * @class Header
 * @description Gere le haut du site
 */
class Cultuero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div>
        <h2>Cultuero</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquid
          necessitatibus eligendi libero commodi repellat ut velit, officiis,
          sed officia deleniti magni voluptas vel neque non maxime omnis.
          Deserunt, quis!
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-primary">
          En voir plus
        </button>
      </div>
    );
  };
}

export default Cultuero;
