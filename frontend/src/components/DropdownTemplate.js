import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import PropTypes from 'prop-types'; 

function DropdownTemplate({title, items, direction, value, name, onChange, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value || null);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
    onChange({ target: { name, value: item } });
  }

  const dropdownItems = items.map((item) => (
    <DropdownItem key={item} onClick={() => handleItemClick(item)}>
        {item}
    </DropdownItem>
  ));

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>{selectedItem ? selectedItem : title}</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>{title}</DropdownItem>
          {dropdownItems}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropdownTemplate.propTypes = {
  direction: PropTypes.string,
};

export default DropdownTemplate;