import { createContext } from "react";
import cn from "../../utils/cn";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);
export const Form = ({ children, onSubmit, double }) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <div
        onSubmit={onSubmit}
        className={cn(" w-full mx-auto p-2", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}>
        {children}
      </div>
      ;
    </FormElementContext.Provider>
  );
};

export default Form;
