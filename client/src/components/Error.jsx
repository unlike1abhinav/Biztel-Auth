
const Error = ({ message }) => {
    return message ? <div style={{ color: "red", marginTop: "10px" }}>{message}</div> : null;
  };
  
  export default Error;