import React from 'react';
import { Jumbotron, Card, CardText, CardBody, Button } from 'reactstrap';

const Splashpage = () => {
	return (
		<div>
			<Jumbotron>
				Click on the card below to get an adventure hook
				<Card>
					<CardBody>
						<CardText>
							content goes here
						</CardText>
					</CardBody>
				</Card>
			</Jumbotron>
		</div>
	)
}

export default Splashpage;