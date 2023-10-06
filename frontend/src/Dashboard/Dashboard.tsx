import { useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_TEAMMEMBERS,
  UPDATE_USER_REGISTRATION,
} from "../Mutations/Mutations";
import { StatusIndicator } from "./DashboardStyles";
import * as S from "./DashboardStyles";
import Button from "../components/common/Button/Button";
import { ButtonType } from "../components/common/Button/ButtonTypes";
import { useState } from "react";
const Dashboard = () => {
  const { data, loading } = useQuery(GET_ALL_TEAMMEMBERS);
  const [changeRegistrationStatus] = useMutation(UPDATE_USER_REGISTRATION);
  const [popup, setPopUp] = useState(false);
  const [pendingAction, setPendingAction] = useState<{
    id: string;
    status: string;
  } | null>(null);

  const handleStatus = (id: string, status: string) => {
    setPendingAction({ id, status });
    setPopUp(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };
  const confirmAction = async () => {
    if (pendingAction) {
      try {
        const response = await changeRegistrationStatus({
          variables: {
            input: {
              id: pendingAction.id,
              registrationStatus: pendingAction.status,
            },
          },
        });
        if (response.data) {
          console.log("Status changed", pendingAction.status);
        }
      } catch (error: string | unknown) {
        console.log(error);
      }
    }
    setPopUp(false);
    setPendingAction(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };
  const cancelAction = () => {
    setPopUp(false);
    setPendingAction(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };
  if (loading) return <p>...Loading</p>;
  const sortedData = [...data?.teamMembers].sort((a, b) => {
    if (
      a.registrationStatus === "Accepted" &&
      b.registrationStatus !== "Accepted"
    ) {
      return -1;
    }
    if (
      b.registrationStatus === "Accepted" &&
      a.registrationStatus !== "Accepted"
    ) {
      return 1;
    }
    return 0;
  });

  return (
    <S.DashboardContainer>
      <h1>Dashboard</h1>
      <>
        {sortedData.map((teamMemb: any) => {
          return (
            <S.DashBoardTable key={teamMemb.id}>
              <h4>{teamMemb.name}</h4>
              <p>{teamMemb.email}</p>
              <S.DashboardBtnDiv>
                <Button
                  buttontypes={ButtonType.Reject}
                  onClick={() => handleStatus(teamMemb.id, "Rejected")}
                >
                  Avvisa
                </Button>
                <Button
                  buttontypes={ButtonType.Accept}
                  onClick={() => handleStatus(teamMemb.id, "Accepted")}
                >
                  Acceptera
                </Button>
                <StatusIndicator $status={teamMemb.registrationStatus} />
              </S.DashboardBtnDiv>
            </S.DashBoardTable>
          );
        })}
        {popup && (
          <S.Backdrop>
            <S.ConfirmDiv>
              <h4>Är du säker ?</h4>
              <S.DashboardBtnDiv>
                <Button buttontypes={ButtonType.Reject} onClick={cancelAction}>
                  Nej
                </Button>
                <Button buttontypes={ButtonType.Accept} onClick={confirmAction}>
                  Ja
                </Button>
              </S.DashboardBtnDiv>
            </S.ConfirmDiv>
          </S.Backdrop>
        )}
      </>
    </S.DashboardContainer>
  );
};

export default Dashboard;
