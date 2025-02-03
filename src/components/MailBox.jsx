import { useEffect } from "react";

function MailBox({ emails, onClose, onLogMail, onDeleteMail, emailCounter }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
      console.log(`You clicked on some button ${event.code}`);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return (
    <div>
      <h2>
        MailBox<b>{emailCounter}</b>
        <button onClick={onClose}>Close MailBox</button>
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
