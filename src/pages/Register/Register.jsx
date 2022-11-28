import React, { useState } from 'react';
import './Register.scss';
import { useNavigate, Link } from "react-router-dom";
//import {MdAdd} from "react-icons/md";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {uid} from 'react-uid';


const Register = () => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Создаем персонажа
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //даем логин
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //обновляем данные
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //добавляем в firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            //создаем чат
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (error) {
            console.log(error);
            setError(true);
            setLoad(false);
          }
        });
      });
    } catch (error) {
      setError(true);
      setLoad(false);
    }
  };

    return(
    <div className="formReg">
    <div className="wrapperReg">
      <span className="logo">Уютненький чат</span>
      <span className="title">Регистрация</span>
      <form onSubmit={handleSubmit}></form>
        <input required type="text" placeholder="логин" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="пароль" />
        <input type="file" id="fileInput" />
        <button>Регистрация</button>
        <p>
          Нет аккаунта? Не проблема <Link to="/register">Войти</Link>
        </p>
    </div>
  </div>
);
};

export default Register;