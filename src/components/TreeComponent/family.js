const family = [
  {
    id: 1,
    name: "Bob",
    partner: {
      id: 2,
      name: "Emma",
    },
    dob: "03/03/1892",
    isAlive: false,
    children: [
      {
        id: 3,
        name: "Ashley",
        partner: {
          id: 4,
          name: "Manish",
          parents: [
            { id: 5, name: "Samantha", dob: "01/01/1900", isAlive: false },
            { id: 6, name: "Vincent", dob: "01/01/1895", isAlive: false },
          ],
        },
        dob: "15/12/1922",
        isAlive: false,
        children: [
          {
            id: 7,
            name: "smita",
            dob: "03/04/1950",
            isAlive: true,
            children: [
              { id: 8, name: "Prashant", dob: "03/04/1980", isAlive: true },
              { id: 9, name: "Mohan", dob: "28/02/1985", isAlive: true },
            ],
          },
          { id: 10, name: "pushpa", dob: "18/07/1955", isAlive: true },
        ],
      },
      {
        id: 11,
        name: "Logan",
        partner: {
          id: 12,
          name: "Olivia",
          parents: [
            { id: 13, name: "George", dob: "01/01/1910", isAlive: false },
            { id: 14, name: "Sophie", dob: "01/01/1915", isAlive: false },
          ],
        },
        dob: "10/02/1927",
        isAlive: true,
        children: [
          { id: 15, name: "Frank", dob: "02/12/1945", avatar: "", isAlive: true },
          { id: 16, name: "Jasmine", dob: "04/03/1947", isAlive: true },
        ],
      },
    ],
  },
];


export function addChild(family, parentId, newChild) {
  return family.map(member => {
    if (member.id === parentId) {
      return {
        ...member,
        children: [...(member.children || []), newChild]
      };
    }

    if (member.children && member.children.length) {
      return {
        ...member,
        children: addChild(member.children, parentId, newChild)
      };
    }

    return member;
  });
}


export function addPartner(family, memberId, newPartner) {
  return family.map(member => {
    if (member.id === memberId) {
      if (member.partner) {
        console.warn(`Member with id ${memberId} already has a partner. Partner not added.`);
        return member;
      } else {
        return {
          ...member,
          partner: newPartner
        };
      }
    }

    if (member.children && member.children.length) {
      return {
        ...member,
        children: addPartner(member.children, memberId, newPartner)
      };
    }

    return member;
  });
}

export default family;