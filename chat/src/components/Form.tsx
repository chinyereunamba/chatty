import { FormEvent } from "react";
import Input, { InputProps } from "./Input";
import { FormButton } from "./Button";
import FormContainer from "./FormContainer";

type FormProps = {
  submitFnc: (e: FormEvent) => void;
  inputList: InputProps[];
  buttonLabel: string;
};

const Form = ({ submitFnc, inputList, buttonLabel }: FormProps) => {
  return (
    <FormContainer>
      <form onSubmit={submitFnc}>
        {inputList.map((input, index) => (
          <Input
            key={index}
            label={input.label}
            name={input.name}
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
            change={input.change}
          />
        ))}
        <FormButton buttonLabel={buttonLabel} />
      </form>
    </FormContainer>
  );
};

export default Form;
