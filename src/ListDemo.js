import React, { useState } from "react";

function MemberTable(props) {
  const members = props.members;
  const readyMembers = members.map((member) => {
    return (
      <tr key={member.name}>
        <td>{member.name}</td>
        <td>{member.age}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{readyMembers}</tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}

export default function MembersApp() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 },
  ];

  const [members, setMembers] = useState(initialMembers);

  return <MemberDemo members={members} />;
}
