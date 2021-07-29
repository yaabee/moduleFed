import React, { ChangeEvent, useState } from "react";
import { Button, Input } from "antd";

//@ts-ignore

const ItemList = () => {
  const [List, setList] = useState<string[]>([]);
  const [In, setIn] = useState<string>("");
  return (
    <div>
      <Input
        value={In}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setIn(e.target.value)}
      ></Input>
      <Button
        type="primary"
        onClick={() => {
          setList([...List, In]);
          setIn("");
        }}
      >
        add item
      </Button>
      <header></header>
      <ul>
        {List.map((l) => (
          <li key={l + Math.random()}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
