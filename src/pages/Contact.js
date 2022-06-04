import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import '../styles/Contact.scss';

export default function Contact() {
  const {isSubmitted, setIsSubmitted} = useState(false);
  const {name, setName} = useState('');
  const {email, setEmail} = useState('');
  const {message, setMessage} = useState('');
  const [errorMessages, setErrorMessage] = useState([]);
  const form = useRef();
  var content;

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const sendEmail = (e) => {
    if (name !== '' || email !== '' || message !== '' ){
      e.preventDefault();

      emailjs.sendForm('service_pe7sgfz', 'template_qs9zwjr', form.current, 'k8BQF6HD_FzXSUPJN').then(() => {
      handleSubmit();
    }, (error) => {
      console.log(error.text);
    });
    }
    setErrorMessage([]);
    if (name === '') {
      setErrorMessage({mes: '名前が入っていません'})
    }
    if (email === '') {
      setErrorMessage(...errorMessages, {mes: 'メールアドレスがありません'})
    }
    if (message === '') {
      setErrorMessage(...errorMessages, {mes: '内容がありません'})
    }

  };

  if (isSubmitted === true) {
    content = (
      <div className="thx-modal">
        <p>お問い合わせありがとうございます。</p>
      </div>
    )
  } else {
    content = (<div className="mail-container">
    <h3>お問い合わせフォーム</h3>
    <div className="error-message">
      {errorMessages.map((error) => {
        return <p>{error.mes}</p>
      })}
    </div>
    <form onSubmit={sendEmail} ref={form} className="form">
      <input type="text" className="form-control" placeholder="名前" name="name" onChange={(event) => {handleName(event)}} />
      <input type="email" className="form-control" placeholder="メールアドレス" name="email" onChange={(event) => {handleEmail(event)}} />
      <p className="form-letter">内容</p>
      <textarea className="form-control" cols="30" rows="8" name="message" onChange={(event) => {handleMessage(event)}}></textarea>
      <input type="submit" value="送信"></input>
    </form>
  </div>)
  }

  return(
    <div className="contact">
      {content}
    </div>
  );
}