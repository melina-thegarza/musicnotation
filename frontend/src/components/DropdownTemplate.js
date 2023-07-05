import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types'; 

function DropdownTemplate({title, item1, item2, item3, item4, direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  }

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>{selectedItem ? selectedItem : title}</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>{title}</DropdownItem>
          <DropdownItem onClick = {() => handleItemClick(item1)}>{item1}</DropdownItem>
          <DropdownItem onClick = {() => handleItemClick(item2)}>{item2}</DropdownItem>
          <DropdownItem onClick = {() => handleItemClick(item3)}>{item3}</DropdownItem>
          <DropdownItem onClick = {() => handleItemClick(item4)}>{item4}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropdownTemplate.propTypes = {
  direction: PropTypes.string,
};

export default DropdownTemplate;