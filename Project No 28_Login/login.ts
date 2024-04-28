let user_name: string[] = [
  "anan1864.7",
  "bon.bon.dee3",
  "asania456_t",
  "burin222111",
  "admin",
];

if (user_name.includes("admin")) {
  console.log(`grettings to Admin, like to observe reports\n`);
}

for (let i = 0; i < user_name.length; i++) {
  if (user_name[i] == "admin") {
    continue;
  }

  console.log(`Hi '${user_name[i]}'! Happy To See You Again \n`);
}
