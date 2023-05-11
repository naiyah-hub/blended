import React from "react";
import styled from "styled-components";
import { MdPerson } from "react-icons/md";

const StyledWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid; 
`;

const StyledAvatar = styled.div`
  min-width: 20px;
  border: 1px solid;
  border-radius: 50%;
`;


const Member = (member) => {
  const defaultAvatar = <MdPerson style={{ fontSize: 80 }} />;
  const { name, avatar, onMemberClick, disableClick } = member;
  return (
    <StyledWrapper onClick={() => !disableClick && onMemberClick(member)}>
      <StyledAvatar>
        {avatar ? <img src={avatar} alt="" /> : defaultAvatar}
      </StyledAvatar>
      <span>{name}</span>
    </StyledWrapper>
  );
};

export default Member;


// const StyledLine = styled.div`
//   position: "absolute";
//   right: 0;
//   bottom: 0;
//   /* height: 10px;
//   width: 10px; */
//   /* background-color: red; */
// `;

