import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    mobile:"",
    birthday:"",
    Gender: "",
    password: "",
    confirmPassword: "",
    accepttermscondition:"",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "UserName",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "UserName",
      pattern: "^[A-Za-z0-9-_]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id:3,
      name:"mobile",
      type:"number",
      placeholder:"Mobile",
      errorMessage:"Only Number are allowed",
      label:"Mobile No",
      pattern:"^[0-9]{10}",
      required:true,
    },
  
 { id:4,
name: "birthday",
type :"date",
placeholder:" birthday",
label: "Birthday",

  },
  {id:5,
    label:"Gender",
    type:"hidden",

  },
    {
  id:6,
name:"optional",
label:"Male",
type:"radio",
gender:"Male",
required: true,

    },
    {
     id:7,
      name:"optional",
      label:"Female",
      type:"radio",
      gender:"Female",
      errorMessage:"This field is mandatory",
      required: true,
          },
   
    {
      id: 8,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 9,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id :10,
      type:"checkbox",
       label:" Accept terms conditions",
      
      errorMessage :"Accept term and condition",
      
      required:true,
      
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data =new FormData(e.target)
 console.log(Object.fromEntries(data.entries())) 
  };

  const onChange = (e) => {// Change the value here set values
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app"> 
      
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            //
            onChange={onChange}
          />
        ))}
        <button>Register</button>

      </form>
    </div>
  );
};

export default App;


