import { useEffect } from "react";

function MailBox({ emails, onLogMail, onDeleteMail, emailCounter }) {
  useEffect(() => {
    const onMouseMove = () => {
      console.log("moving");
    };
    window.addEventListener("mausemove", onMouseMove);
    return () => {
      window.removeEventListener("mausemove", onMouseMove);
    };
  }, []);
  return (
    <div>
      <h2>
        MailBox<b>{emailCounter}</b>
      </h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>
            {email.email}{" "}
            <button onClick={() => onDeleteMail(email.id)}>X</button>
          </li>
        ))}
        {/*<li>
          Mail 1 <button onClick={() => onDeleteMail(1)}>X</button>
        </li>
        <li>
          Mail 2 <button onClick={() => onDeleteMail(2)}>X</button>
        </li>
        <li>
          Mail 3 <button onClick={() => onDeleteMail(3)}>X</button>
        </li>*/}
      </ul>
      <button onClick={onLogMail} type="button">
        Send mail
      </button>
    </div>
  );
}

export default MailBox;
