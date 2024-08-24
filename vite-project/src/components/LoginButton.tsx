import { useState } from "react";
import Swal from "sweetalert2";
import * as h from "../styles/headerStyle";
import supabase from "../supabaseClient";

const LoginButton = () => {
  const [isJoinBttClicked, setIsJoinBttClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState(""); // PW-RE 입력 필드 추가

  const handleJoinButton = () => {
    setIsJoinBttClicked(true);
  };

  const handleCloseModal = () => {
    setIsJoinBttClicked(false);
    setEmail("");
    setPassword("");
    setPasswordRe(""); // PW-RE 필드 초기화
  };

  const handleJoinIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(data);
      if (error) {
        console.error(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "아이디와 비밀번호를 확인해주세요!",
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "회원가입 성공! 로그인 해주세요.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data);
      if (error) {
        console.error(error);
        alert("일치하지 않습니다");
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "로그인에 성공하였습니다!",
          showConfirmButton: false,
          timer: 1500,
        });
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h.JoinButtonStyle onClick={handleJoinButton}>
        <div>Join!</div>
      </h.JoinButtonStyle>
      {isJoinBttClicked && (
        <h.LoginModal>
          <h1>가입해서 더 간편하게!</h1>
          <div className="inputs">
            <p>EMAIL</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>PW</p>
            <input
              type="password"
              placeholder="비밀번호 6자 이상 입력하시오."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>PW-RE</p>
            <input
              type="password"
              placeholder="비밀번호를 재입력하시오."
              value={passwordRe}
              onChange={(e) => setPasswordRe(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button type="button" onClick={handleCloseModal} id="close">
              닫기
            </button>
            <button onClick={handleSignIn} id="login">
              로그인
            </button>
            <button onClick={handleJoinIn} id="join">
              회원가입
            </button>
          </div>
        </h.LoginModal>
      )}
    </>
  );
};

export default LoginButton;
