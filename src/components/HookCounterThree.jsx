import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      {/* this won't work as it will not merge the other property in the state variable, it will take only property which we're passing in setName functin */}
      {/* <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ lastName: e.target.value })}
      /> */}

      {/* this will work fine cz it's manually merged the property with the spread operator */}
      {/* this is not require in case of class component and it will work fine without manual merge */}
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h2>Your first Name is - {name.firstName}</h2>
      <h2>Your last Name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default HookCounterThree;
