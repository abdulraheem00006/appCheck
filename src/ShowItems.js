import { Link } from "react-router-dom";
import { useState } from "react";

function ShowItems({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (label) => {
    if (selectedItem === label) {
      setSelectedItem(null);
    } else {
      setSelectedItem(label);
    }
  };

  const renderItems = items.map((item) => {
    return (
      <div className="card" key={item.label}>
        <div className="card-body">
          <Link
            to={`/showitems/${item.label}`}
            key={item.label}
            onClick={() => handleClick(item.label)}
          >
            {item.label}
          </Link>
          {selectedItem === item.label && (
            <div className="content">{item.content}</div>
          )}
        </div>
      </div>
    );
  });

  return <div>{renderItems}</div>;
}

export default ShowItems;
