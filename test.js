function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replaceAll(/[^a-z0-9-_.]/gi, "")
    .replace(/\.{2,}/g, ".")
    .replaceAll(/^\.|\.$/g, "");
  if (id === "") id += "a";
  id = id.substring(0, 15).replace(/\.$/, "");
  if (id.length <= 2) {
    while (id.length < 3) {
      id += id[id.length - 1];
    }
  }
  return id;
}
