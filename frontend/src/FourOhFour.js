import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function FourOhFour() {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">Oh no!</CardTitle>
          <CardText>
            Not sure what you're looking for, but it isn't here.
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default FourOhFour;
