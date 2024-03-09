import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails({ items }) {
  const { label } = useParams();

  const selectedItem = items.find((item) => item.label === label);

  return (
    <div>
      {selectedItem && (
        <div>
          <h2>{selectedItem.label}</h2>
          <p>{selectedItem.content}</p>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;
