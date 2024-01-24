import { Children, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import NormalForm from "./components/NormalForm/NormalForm";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
function App() {
  /*   const [modal, setModal] = useState(false);
  const handleMOdalClose = () => {
    setModal((prev) => !prev);
  }; */
  const double = false;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const TTestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });
  type TTest = z.infer<typeof TTestSchema>;
  return (
    <>
      <Container>
        <Form
          double={double}
          onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
          <FormSection>
            <Input
              ID={"name"}
              errors={errors}
              label={"name"}
              register={register}
              types={"text"}
            />
            <Input
              ID={"email"}
              errors={errors}
              label={"email"}
              register={register}
              types={"email"}
            />
          </FormSection>
          <FormSubmit></FormSubmit>
        </Form>
      </Container>
    </>
  );
}

export default App;
