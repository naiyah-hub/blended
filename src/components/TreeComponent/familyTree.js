import React, { Component } from "react";
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

const FamilyTree = ({ members, level = 0, onMemberClick, isParents = false }) => {
  const renderParents = (member) => {
    if (member.partner && member.partner.parents) {
      return (
        <FamilyTree
          members={member.partner.parents}
          level={level - 1}
          onMemberClick={onMemberClick}
          isParents
        />
      );
    }
    return null;
  };

  return (
    <>
      <StyledWrapper level={level}>
        {members.map((member, i) => (
          <div key={`level-${level}-${i}`}>
            {!isParents && renderParents(member)}
            <div style={{ display: "flex" }}>
              <Member {...member} onMemberClick={onMemberClick} />
              {member.partner && (
                <Member
                  {...member.partner}
                  onMemberClick={onMemberClick}
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