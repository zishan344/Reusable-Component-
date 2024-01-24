import { Children, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import NormalForm from "./components/NormalForm/NormalForm";
import { Form, FormSection, FormSubmit } from "./components/ReusableForm";
import { FieldValues, useForm } from "react-hook-form";

function App() {
  /*   const [modal, setModal] = useState(false);
  const handleMOdalClose = () => {
    setModal((prev) => !prev);
  }; */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormSection>
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
          </FormSection>
          <FormSubmit></FormSubmit>
        </Form>
      </Container>
    </>
  );
}

export default App;
