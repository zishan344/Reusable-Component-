import { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from ".";
import Button from "../ui/Button";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div>
      <div
        className={cn("grid grid-cols-1 justify-items-center gap-5 my-8", {
          "md:grid-cols-2": double,
        })}>
        <div className="w-full max-w-md cols-start-1 md:col-start-2 flex justify-end">
          <Button className="w-full md:w-fit">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
