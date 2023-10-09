import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import * as S from "./ChatStyles";
import Logo from "../../assets/images/FCAURA-Logo.png";
import GobackNav from "../../components/common/GoBackNav/GobackNav";
import { useAuth } from "../../context/auth/auth";
function Chat() {
  const auth = useAuth();
  if (!auth.user || auth.user?.registrationStatus !== "Accepted") return null;
  return (
    <>
      <S.Header>
        <GobackNav title="FC AURA" />
        <img src={Logo} alt="fcaura" />
      </S.Header>
      <S.ChatContainer>
        <MessageList />
        <S.MessageInDiv>
          <MessageInput />
        </S.MessageInDiv>
      </S.ChatContainer>
    </>
  );
}

export default Chat;
