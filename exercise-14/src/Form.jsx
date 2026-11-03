import { useState, useReducer,} from "react";

const initialState = {
  step: 1,
  fristName: "",
  lastName: "",
  email: "",
  phone: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
        fristName: action.payload.fristName,
        lastName: action.payload.lastName,
      };
    case "NEXT_STEP_CONTACT":
      return {
        ...state,
        step: state.step + 1,
        phone: action.payload.phone,
        email: action.payload.email,
      };

    case "PREV_STEP":
      return { ...state, step: state.step - 1 };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function resetForm() {
    if (window.confirm("Form submitted successfully!")) {
      dispatch({ type: "RESET_FORM" });
      setFristName("");
      setLastName("");
      setEmail("");
      setPhone("");
    }
  }

  return (
    <>
      {state.step === 1 && (
        <div>
          <h1>Multi-Step Registration</h1>
          <h1>Step 1: Profile</h1>
          <label>Frist Name:</label>
          <input
            type="text"
            placeholder="Enter your frist name"
            onChange={(e) => setFristName(e.target.value)}
            value={fristName}
          />{" "}
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />{" "}
          <br />
          <button
            onClick={() =>
              dispatch({ type: "NEXT_STEP", payload: { fristName, lastName } })
            }
          >
            Next
          </button>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <h1>Multi-Step Registration</h1>
          <h1>Step 2: Contact</h1>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />{" "}
          <br />
          <label>Phone:</label>
          <input
            type="number"
            placeholder="Enter your phone number "
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />{" "}
          <br />
          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
          <button
            onClick={() =>
              dispatch({
                type: "NEXT_STEP_CONTACT",
                payload: { email, phone },
              })
            }
          >
            Next
          </button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h1>Multi-Step Registration</h1>
          <h1>Step 3: Review</h1>

          <p>
            <strong>Frist Name:</strong> <span>{state.fristName}</span>
          </p>
          <p>
            <strong>Last Name:</strong> <span>{state.lastName}</span>
          </p>
          <p>
            <strong>Email:</strong> <span>{state.email}</span>
          </p>
          <p>
            <strong>Phone:</strong> <span>{state.phone}</span>
          </p>

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
          <button onClick={resetForm}>Confirm</button>
        </div>
      )}
    </>
  );
};
