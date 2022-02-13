import styled from "styled-components";

type PropsType = {
  children: React.ReactNode;
};

const UiCommentsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 95%;
  gap: 5px;
`;

export const UiCountDisplayer = (props: PropsType) => {
  return <UiCommentsContainer>{props.children}</UiCommentsContainer>;
};
