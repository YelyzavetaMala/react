function MailBox({ onLogMail, onDeleteMail }) {
  return (
    <div>
      <h2>MailBox</h2>
      <ul>
        <li>
          Mail 1 <button onClick={() => onDeleteMail(1)}>X</button>
        </li>
        <li>
          Mail 2 <button onClick={() => onDeleteMail(2)}>X</button>
        </li>
        <li>
          Mail 3 <button onClick={() => onDeleteMail(3)}>X</button>
        </li>
      </ul>
      <button onClick={onLogMail} type="button">
        Send mail
      </button>
    </div>
  );
}

export default MailBox;
