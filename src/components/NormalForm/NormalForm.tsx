import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const double = true;
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(" w-full mx-auto p-2", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}>
        <div
          className={cn("grid grid-cols-1  gap-5 justify-items-center", {
            "md:grid-cols-2 ": double,
          })}>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input id="name" type="text" {...register("email")} />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className=" w-full max-w-md">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input id="name" type="text" {...register("password")} />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className=" w-full max-w-md">
            <label className="block" htmlFor="select">
              Select
            </label>
            <select id="name">
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>
          </div>
          <div className=" w-full max-w-md">
            <label className="block" htmlFor="textarea">
              Text Area
            </label>
            <textarea name="pera" id="textarea"></textarea>
          </div>

          <div className=" w-full max-w-md">
            <label className="block" htmlFor="name">
              Checkbox
            </label>
            <input type="checkbox" />
          </div>
        </div>
        <div
          className={cn("grid grid-cols-1 justify-items-center gap-5 my-8", {
            "md:grid-cols-2": double,
          })}>
          <div className="w-full max-w-md cols-start-1 md:col-start-2 flex justify-end">
            <Button className="w-full md:w-fit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NormalForm;
