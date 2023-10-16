import React from "react";

const ListOrder = ({ lists }) => {
  return (
    <ol className="list-disc">
      {lists.map((list) => (
        <li key={list.id} className="py-2 capitalize font-semibold">
          upholstery service {list.number}
        </li>
      ))}
    </ol>
  );
};

export default ListOrder;
