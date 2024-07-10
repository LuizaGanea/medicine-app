rint("Started Adding the Users.");
db = db.getSiblingDB("admin");
db.createUser({
  user: "luiza",
  pwd: "luiza",
  roles: [{ role: "readWrite", db: "admin" }],
});
print("End Adding the User Roles.");
