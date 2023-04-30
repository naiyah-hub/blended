export default [
  {
    id: 1,
    name: "Bob",
    partner: {
      id: 2,
      name: "Emma",
    },
    dob: "03/03/1892",
    dod: "02/06/1966",
    children: [
      {
        id: 3,
        name: "Ashley",
        partner: {
          id: 4,
          name: "Manish",
          parents: [
            { id: 5, name: "Samantha", dob: "01/01/1900", dod: "01/01/1980" },
            { id: 6, name: "Vincent", dob: "01/01/1895", dod: "01/01/1975" },
          ],
        },
        dob: "15/12/1922",
        dod: "2002",
        children: [
          {
            id: 7,
            name: "smita",
            dob: "03/04/1950",
            children: [
              { id: 8, name: "Prashant", dob: "03/04/1980" },
              { id: 9, name: "Mohan", dob: "28/02/1985" },
            ],
          },
          { id: 10, name: "pushpa", dob: "18/07/1955" },
        ],
      },
      {
        id: 11,
        name: "Logan",
        partner: {
          id: 12,
          name: "Olivia",
          parents: [
            { id: 13, name: "George", dob: "01/01/1910", dod: "01/01/1990" },
            { id: 14, name: "Sophie", dob: "01/01/1915", dod: "01/01/2000" },
          ],
        },
        dob: "10/02/1927",
        children: [
          { id: 15, name: "Frank", dob: "02/12/1945", avatar: "" },
          { id: 16, name: "Jasmine", dob: "04/03/1947" },
        ],
      },
    ],
  },
];

export const addChild = (members, parentId, child) => {
  const findAndUpdateParent = (members) => {
    for (let i = 0; i < members.length; i++) {
      if (members[i].id === parentId) {
        members[i].children.push(child);
        return true;
      } else if (members[i].children.length > 0) {
        if (findAndUpdateParent(members[i].children)) {
          return true;
        }
      }
    }
    return false;
  };

  const newMembers = JSON.parse(JSON.stringify(members)); // Create a deep copy of members
  findAndUpdateParent(newMembers);
  return newMembers;
};