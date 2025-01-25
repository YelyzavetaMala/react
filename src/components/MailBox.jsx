function MailBox() {
  const handleClick = (event) => {
    console.log(event);
  };
  const handleDelete = (mailId) => {
    console.log("mailId: ", mailId);
  };
  return (
    <div>
      <h2>MailBox</h2>
      <ul>
        <li>
          Mail 1 <button onClick={() => handleDelete(1)}>X</button>
        </li>
        <li>
          Mail 2 <button onClick={() => handleDelete(2)}>X</button>
        </li>
        <li>
          Mail 3 <button onClick={() => handleDelete(3)}>X</button>
        </li>
      </ul>
      <button onClick={handleClick} type="button">
        Send mail
      </button>
    </div>
  );
}

export default MailBox;
