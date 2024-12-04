import React, { useId } from "react";

const Input = React.forwardRef(
  ({ type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div>
        <input
          className={`w-full  rounded-md indent-1 ${className}`}
          type={type}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
