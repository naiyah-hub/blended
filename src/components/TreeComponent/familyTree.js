import React from "react";
import styled from "styled-components";
import Member from "./member";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => `${props.level * 20}px`};
`;

const hasChildren = (member) => {
  return member.children && member.children.length;
};

const FamilyTree = ({ members, level = 0, onMemberClick }) => {
  return (
    <>
      <StyledWrapper level={level}>
        {members && members.map((member, i) => (
          <div key={`level-${level}-${i}`}>
            <div style={{ display: "flex" }}>
              <Member {...member} onMemberClick={onMemberClick} />
              {member.partner && (
                <Member
                  {...member.partner}
                  disableClick
                  // onMemberClick={onMemberClick} // Disabled partner clicking
                />
              )}
            </div>
            {hasChildren(member) && (
              <FamilyTree
                members={member.children}
                level={level + 1}
                onMemberClick={onMemberClick}
              />
            )}
          </div>
        ))}
      </StyledWrapper>
    </>
  );
};

export default FamilyTree;
