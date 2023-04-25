import React from "react";
import Navbar from "./Navbar";
import './Dashboard.css';

function dashboard() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col">
            <table class="table">
              <thead>
                <tr>
                  <div className="tablehead">
                    <th>
                      <div class="btn">
                        <h1>Today</h1>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          4<span class="visually-hidden">unread messages</span>
                        </span>
                      </div>
                    </th>
                  </div>
                </tr>
              </thead>
              
              
              <tbody className="body">
                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={""} className="button">
                      click
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="btn position-relative">
                      <h1>Suggested Actions</h1>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        8<span class="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <button onClick={""} className="button">
                      View All
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col">
            <table class="table">
              <thead>
                <tr>
                  <div className="tablehead">
                    <th>
                      <div class="btn position-relative">
                        <h1>Tasks</h1>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          10
                          <span class="visually-hidden">unread messages</span>
                        </span>
                      </div>
                    </th>
                  </div>
                </tr>
              </thead>
              <tbody className="body">
                <tr>
                  <td>
                    <div class="card-text1">
                      <div class="card-body">
                        <h5 class="card-title">
                          the end data is fast apporacing
                        </h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="card-texts">
                      <div class="card-body">
                        <h5 class="card-title">the time is already lapsed</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="card text-white bg-success mb-3">
                      <div class="card-body">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="card text-dark bg-info mb-3">
                      <div class="card-body">
                        <h5 class="card-title">Info card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="card text-dark bg-warning mb-3">
                      <div class="card-body">
                        <p class="card-text">
                          you have no credits lefts upgrade your account to more
                          details
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={""} className="button">
                      View All
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          
          <div class="col">
            <table class="table">
              <thead>
                <tr>
                  <div className="tablehead">
                    <th>
                      <h1>Later this week</h1>
                    </th>
                  </div>
                </tr>
              </thead>
              <tbody className="body">
                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="card-body">
                      <h5 class="card-title">Dark card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <button onClick={""} className="button">
                      View All
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
