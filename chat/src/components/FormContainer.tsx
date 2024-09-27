import React from "react";

function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-sm:w-3/4 w-[512px]">
      {children}
    </div>
  );
}

export default FormContainer;
