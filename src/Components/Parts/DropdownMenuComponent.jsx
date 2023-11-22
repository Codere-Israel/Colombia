import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Предположим, что JSON-объект имеет формат { "name": "Link name", "path": "/link/path" }

const DropdownMenuComponent = ({ menuItems }) => {
	return (
		<Dropdown>
			<Dropdown.Toggle className="header_btn">
				<FontAwesomeIcon icon={faAngleDown}/>
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{menuItems.map((item, index) => (
					<Dropdown.Item as={Link} to={item.path} key={index}>
						{item.name}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default DropdownMenuComponent;
