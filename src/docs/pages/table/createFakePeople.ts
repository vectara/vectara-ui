const firstNames = [
  "John",
  "Jane",
  "Joe",
  "Jill",
  "Jack",
  "Jim",
  "Jenny",
  "Jerry",
  "Judd",
  "José",
  "Jade",
  "Jada",
  "Jasper",
  "Jax",
  "Jaxson",
  "Jace",
  "Joan",
  "Jessie",
  "Jensen",
  "Jett"
] as const;

const lastNames = [
  "Doe",
  "Dane",
  "Dawson",
  "Dawkins",
  "Davenport",
  "David",
  "Davidson",
  "Daniels",
  "Danielle",
  "Danvers",
  "Darcy",
  "Darnell",
  "Darwin",
  "Dashwood",
  "Day"
] as const;

const roles = [
  "Admin",
  "User",
  "Guest",
  "Owner",
  "Manager",
  "Editor",
  "Viewer",
  "Member",
  "Moderator",
  "Tester",
  "Developer",
  "Support",
  "Sales",
  "Marketing"
] as const;

const statuses = ["Active", "Inactive", "Pending"] as const;

const getIndex = (max: number) => Math.floor(Math.random() * max);

const getName = () => {
  const firstName = firstNames[getIndex(firstNames.length)];
  const lastName = lastNames[getIndex(lastNames.length)];
  return `${firstName} ${lastName}`;
};

const getId = () => {
  const id = Math.floor(Math.random() * 1000000);
  return id.toString();
};

const getRoles = () => {
  const numberRoles = getIndex(3);
  const userRoles = [];
  for (let i = 0; i < numberRoles; i++) {
    userRoles.push(roles[getIndex(roles.length)]);
  }
  return userRoles;
};

const getStatus = () => statuses[getIndex(statuses.length)];

export const createFakePeople = (count: number) => {
  const fakePeople = [];

  for (let i = 0; i < count; i++) {
    fakePeople.push({
      name: getName(),
      id: getId(),
      role: getRoles(),
      status: getStatus()
    });
  }

  return fakePeople;
};
