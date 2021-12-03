import React, { useEffect } from "react";

const useCombinedRefs = (
  innerRef,
  fwdRef
) => {
  useEffect(() => {
    [innerRef, fwdRef].forEach((ref) => {
      if (ref) {
        if (typeof ref === "function") {
          ref(innerRef.current || null);
        } else {
          ref.current = innerRef.current || null;
        }
      }
    });
  }, [innerRef, fwdRef]);
  return innerRef;
};

export default useCombinedRefs