import React from "react";

export function registrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthdate);
    props.onUserRegister(username, password); //create onUserRegister
  };

  return (
    <form>
      <label>
        Create Username:
        <input
          type="text"
          placeholder="Create a username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Create Password:
        <input
          type="password"
          placeholder="Create a password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Enter Email:
        <input
          type="email"
          palceholder="Please enter a valid email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        <input
          type="date"
          placeholder="Please enter your birthdate."
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
