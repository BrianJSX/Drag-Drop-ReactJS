import React from "react";
import Card from "./Card";
import { Container, Draggable } from "react-smooth-dnd";

function Collums(props) {
  const { item, onDropCard, getCardPayload} = props;


  return (
    <div className="collums flex-col m-2 w-[300px] border p-1 cursor-pointer bg-white h-[300px] overflow-y-auto">
      <div className="flex">{item?.name}</div>
      <Container
        groupName="col"
        onDrop={(dropResult) => onDropCard(item.collum_id, dropResult)}
        getChildPayload={(index) => getCardPayload(item.collum_id, index)}
        dropPlaceholder={{
          animationDuration: 150,
          // showOnTop: true,
          className: "w-full border-black bg-blue-100 ",
        }}
      >
        {item.cards.map((data, index) => {
          return (
            <Draggable key={index}>
              <Card data={data}></Card>
            </Draggable>
          );
        })}
      </Container>
    </div>
  );
}

export default Collums;
