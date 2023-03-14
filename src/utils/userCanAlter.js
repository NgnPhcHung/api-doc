export const userCanAlter = (instance, user, res) => {
  if (!instance) { res.status(404).send("Document does not exist."); return false}
  if (instance.user != user) { res.status(401).send("User unauthorized"); return false}
  else return true;
}