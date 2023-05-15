import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
// const ref = <div></div>;
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <>
      <div ref={ref}></div>
    </>
  );
};
