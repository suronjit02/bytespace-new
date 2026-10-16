import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-lime rounded-full text-ink p-3 px-5  font-semibold">
      {text}
    </button>
  );
};

export default Button;
