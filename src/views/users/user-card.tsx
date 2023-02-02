import { Fragment, useState } from "react";
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const UserCard = ({ currentItems = [] }) => {
  const [showDetails, setShowDetails] = useState([]);
  
 /**
  * We're creating a copy of the showDetails array, then we're toggling the value of the item at the
  * index of the id that was passed in
  * @param {number} id - number - the id of the item that was clicked
  */
  const handleDetails = (id: number) => {
    let showItems: any = showDetails.slice();
    showItems[id] = !showItems[id];
    setShowDetails(showItems);
  };

  return (
    <Fragment>
      <h3 className="text-center mb-2 mt-5">
        Users
      </h3>
      {currentItems &&
        currentItems.map((item: any) => {
          const { address, company } = item;
          return (
            <Card
              key={item.name}
              className="my-5 py-5 shadow-sm border-0 rounded mx-2"
            >
              <CardBody>
                <Row className="align-items-center">
                  <Col className="mb-2">{item.name}</Col>
                  <Col className="d-flex flex-column mb-2">
                    <b>CONTACT</b>
                    {item.username}
                  </Col>
                  <Col className="d-flex flex-column mb-2">
                    <b>SUITE</b>
                    {address.suite}
                  </Col>
                  <Col className="d-flex flex-column mb-2">
                    <b>CITY</b>
                    {address.city}
                  </Col>
                  <Col className="d-flex justify-content-end h-100">
                    <Button
                      color="primary"
                      data-cy="view-details"
                      className="text-white rounded-5"
                      onClick={() => handleDetails(item.id)}
                    >
                      {`${showDetails[item.id] ? "Hide" : "View"} Details`}
                    </Button>
                  </Col>
                </Row>
              </CardBody>
              {showDetails[item.id] ? (
                <Card key={item.name} className="shadow-sm mx-2">
                  <CardBody>
                    <Row>
                      <Col lg={4}>
                        <CardTitle className="fw-bold">
                          <hr />
                          CONTACT DETAILS
                          <hr />
                        </CardTitle>
                        <div className="my-2">
                          <b> Phone: </b>
                          {item.phone}
                        </div>
                        <div className="my-2">
                          <b> Website: </b>
                          {item.website}
                        </div>
                        <div className="my-2">
                          <b> Email: </b>
                          {item.email}
                        </div>
                        <div className="my-2">
                          <b> Username: </b>
                          {item.username}
                        </div>
                      </Col>
                      <Col lg={4}>
                        <CardTitle className="fw-bold">
                          <hr />
                          COMPANY DETAILS
                          <hr />
                        </CardTitle>
                        <div className="my-2">
                          <b> Name: </b>
                          {company.name}
                        </div>
                        <div className="my-2">
                          <b> Catch Phrase: </b>
                          {company.catchPhrase}
                        </div>
                        <div className="my-2">
                          <b> Description: </b>
                          {company.bs}
                        </div>
                      </Col>
                      <Col lg={4}>
                        <CardTitle className="fw-bold">
                          <hr />
                          ADDRESS DETAILS
                          <hr />
                        </CardTitle>
                        <div className="my-2">
                          <b> Description: </b>
                          {address.street}
                        </div>
                        <div className="my-2">
                          <b> Suite: </b>
                          {address.suite}
                        </div>
                        <div className="my-2">
                          <b> City: </b>
                          {address.city}
                        </div>
                        <div className="my-2">
                          <b> Zip Code: </b>
                          {address.zipcode}
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              ) : null}
            </Card>
          );
        })}
    </Fragment>
  );
};
export default UserCard;
