import { useState, forwardRef, useImperativeHandle } from "react";

const Togglable = forwardRef(({ closedLabel, openLabel, children }, refs) => {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState(closedLabel);

  const hide = { display: visible ? "" : "none" };

  const handleClick = (e) => {
    setVisible(!visible);

    if (visible) {
      setLabel(closedLabel);
    } else {
      setLabel(openLabel);
    }
  };

  const toggleVisibility = () => {
    setVisible(!visible);
    handleClick("");
  };

  useImperativeHandle(refs, () => {
    return { toggleVisibility };
  });

  return (
    <>
      <button onClick={handleClick}>{label}</button>
      <div style={hide}>{children}</div>
    </>
  );
});

export default Togglable;
