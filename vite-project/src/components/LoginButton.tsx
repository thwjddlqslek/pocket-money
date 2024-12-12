import { useEffect, useState } from "react";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import * as h from "../styles/headerStyle";
import supabase from "../supabaseClient";
import { fetchIncomeReports } from "../store/incomeSlice";
import { fetchSpendReports } from "../store/spendSlice";

const LoginButton = ({ className }: { className?: string }) => {
  const [isJoinBttClicked, setIsJoinBttClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setShowEmail(true);
        setUserEmail(user.user_metadata.email.split("@")[0]);
      }
    };
    getUserData();
  }, [dispatch]);

  const handleJoin = () => {
    setIsJoinBttClicked(!isJoinBttClicked);
  };

  const handleCloseModal = () => {
    setIsJoinBttClicked(false);
    setEmail("");
    setPassword("");
    setPasswordRe("");
  };

  const handleJoinIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (password === passwordRe) {
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
          // 회원가입 성공 후, 사용자 정보를 users 테이블에 추가
          const user = data.user;
          if (user) {
            const { error: insertError } = await supabase
              .from("users")
              .insert([
                { id: user.id, email: user.email, created_at: new Date() },
              ]);

            if (insertError) {
              console.error(insertError);
              Swal.fire({
                position: "center",
                icon: "error",
                title: "회원 정보를 저장하는 데 실패했습니다.",
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
              handleCloseModal();
            }
          }
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "비밀번호가 일치하지 않아요!",
          showConfirmButton: true,
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
          title: "로그인에 성공하였습니다!",
          showConfirmButton: false,
          timer: 1500,
        });
        handleCloseModal();
        setShowEmail(true);
        setUserEmail(data.user.user_metadata.email.split("@")[0]);
        dispatch(fetchIncomeReports());
        dispatch(fetchSpendReports());
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "로그아웃 중 오류가 발생했습니다!",
        showConfirmButton: true,
      });
      return;
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "로그아웃 성공!",
      showConfirmButton: false,
      timer: 1500,
    });
    setShowEmail(false);
    setUserEmail("");
    dispatch(fetchIncomeReports());
    dispatch(fetchSpendReports());
  };

  return (
    <div className={className}>
      {!showEmail ? (
        <>
          <h.JoinButtonStyle onClick={handleJoin} className={className}>
            <p>Login</p>
          </h.JoinButtonStyle>
          {isJoinBttClicked && (
            <h.LoginModal $isVisible={isJoinBttClicked} className={className}>
              <h1>가입해서 따로 관리해보자!</h1>
              <div className="inputs">
                <p>EMAIL</p>
                <input
                  type="email"
                  placeholder="이메일 형식에 맞게 입력해주세요."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>PW</p>
                <input
                  type="password"
                  placeholder="비밀번호 6자 이상 입력해주세요."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>PW-RE</p>
                <input
                  type="password"
                  placeholder="회원가입 경우에만 입력해주세요."
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
      ) : (
        <>
          <h.MyContainer>
            <h.LogoutButtonStyle onClick={handleLogout}>
              <div>Logout</div>
            </h.LogoutButtonStyle>
            <h1>안녕하세요!</h1>
            <p>{userEmail}님</p>
          </h.MyContainer>
        </>
      )}
    </div>
  );
};

export default LoginButton;
