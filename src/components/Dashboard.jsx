import React, { useEffect, useState } from "react";
import Collums from "./Collums";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../utils";

let dataBoard = [
  {
    collum_id: 1,
    name: "collum-1",
    cards: [
      {
        card_id: 1,
        name: "card 1",
      },
      {
        card_id: 2,
        name: "card 2",
      },
      {
        card_id: 3,
        name: "card 3",
      },
      {
        card_id: 4,
        name: "card 4",
      },
    ],
  },
  {
    collum_id: 2,
    name: "collum-2",
    cards: [
      {
        card_id: 1,
        name: "card 1",
      },
      {
        card_id: 2,
        name: "card 2",
      },
      {
        card_id: 3,
        name: "card 3",
      },
      {
        card_id: 4,
        name: "card 4",
      },
    ],
  },
  {
    collum_id: 3,
    name: "collum-3",
    cards: [
      {
        card_id: 1,
        name: "card 1",
      },
      {
        card_id: 2,
        name: "card 2",
      },
      {
        card_id: 3,
        name: "card 3",
      },
      {
        card_id: 4,
        name: "card 4",
      },
    ],
  },
];

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataBoard);
  }, []);

  const onDrop = (dropResult) => {
    let newData = [...data];
    let dataUpdate = applyDrag(newData, dropResult);
    setData(dataUpdate);
  };

  const onDropCard = (collumId, dropResult) => {
    if (dropResult.removedIndex != null || dropResult.addedIndex != null) {
    //   console.log(">>>> inside function:" + collumId, dropResult);
        let newData = [...data];
        let collumIndex = newData.findIndex((data) => data.collum_id == collumId);
        let currentCollum = newData.find((data) => data.collum_id == collumId);
        currentCollum.cards = applyDrag(currentCollum.cards, dropResult);
        // newData.slice(collumIndex);
        newData.splice(collumIndex, 1, currentCollum);
        setData(newData);
    }
  };

  const getCardPayload = (collumId, index) => {
    let newData = [...data];
    let currentCollum = newData.find(
      (collum) => collum.collum_id == collumId
    );
    return currentCollum.cards[index];
  };

  return (
    <div className="flex">
      <Container
        orientation="horizontal"
        onDrop={onDrop}
        getChildPayload={(index) => data[index]}
      >
        {data.map((item, index) => {
          return (
            <Draggable key={index}>
              <Collums
                item={item}
                onDropCard={onDropCard}
                getCardPayload={getCardPayload}
              ></Collums>
            </Draggable>
          );
        })}
      </Container>
    </div>
  );
}

export default Dashboard;
