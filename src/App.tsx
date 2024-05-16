import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "./component/InputField";
const customLabelStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
  display: "inline-block",
  width: "60px",
};

const customInputStyle = {
  border: "1px solid #ccc",
  padding: "5px 10px",
  borderRadius: "4px",
  marginTop: "5px",
  width: "calc(100% - 120px)",
  height: "32px",
};
const rowStyle = {
  alignItems: "center",
  marginBottom: "15px", // Added margin between rows
};

interface IFormInput {
  name: string;
  email: string;
  age: number;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "500px", margin: "auto" }}
    >
      <div style={rowStyle}>
        <InputField
          id="name"
          label="Name"
          register={register}
          rules={{ required: "Vui lòng nhập tên" }}
          error={errors.name}
          labelStyle={customLabelStyle}
          inputStyle={customInputStyle}
        />
        <InputField
          id="email"
          type="email"
          label="Email"
          register={register}
          rules={{
            required: "Vui lòng nhập email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Địa chỉ email không hợp lệ",
            },
          }}
          error={errors.email}
          labelStyle={customLabelStyle}
          inputStyle={customInputStyle}
        />
        <InputField
          id="age"
          type="number"
          label="Age"
          register={register}
          rules={{
            required: "Vui lòng nhập tuổi",
            min: {
              value: 18,
              message: "Tuổi của bạn ít nhất là 18",
            },
            max: {
              value: 65,
              message: "Tuổi của bạn lớn nhất là 65",
            },
          }}
          error={errors.age}
          labelStyle={customLabelStyle}
          inputStyle={customInputStyle}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        />
        <input
          type="button"
          onClick={() => reset()}
          value="Reset Form"
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            marginLeft: "10px",
          }}
        />
      </div>
    </form>
  );
}
