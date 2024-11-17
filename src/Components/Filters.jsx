import { Dropdown } from "react-bootstrap";

const Filters = () => {
  return (
    <div className="d-flex flex-wrap gap-5 mt-4 mb-4">
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className="rounded-pill px-4 py-2 border"
        >
          All Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Backpacks</Dropdown.Item>
          <Dropdown.Item>Totes</Dropdown.Item>
          <Dropdown.Item>Accessories</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className="rounded-pill px-4 py-2 border"
        >
          All Colors
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Black</Dropdown.Item>
          <Dropdown.Item>Gray</Dropdown.Item>
          <Dropdown.Item>Yellow</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className="rounded-pill px-4 py-2 border"
        >
          All Features
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Laptop Compartment</Dropdown.Item>
          <Dropdown.Item>Water Resistant</Dropdown.Item>
          <Dropdown.Item>USB Port</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className="rounded-pill px-4 py-2 border"
        >
          From &#8358;0 - &#8358;1000
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>&#8358;0 - &#8358;100</Dropdown.Item>
          <Dropdown.Item>&#8358;100 - &#8358;200</Dropdown.Item>
          <Dropdown.Item>&#8358;200 - &#8358;300</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="ms-auto">
        <Dropdown.Toggle
          variant="light"
          className="rounded-pill px-4 py-2 border"
        >
          New In
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Price: Low to High</Dropdown.Item>
          <Dropdown.Item>Price: High to Low</Dropdown.Item>
          <Dropdown.Item>Most Popular</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Filters;
