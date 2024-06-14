export function setDataFromLocalStorage(key, value) {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  if (data === undefined || data === null) {
    data = [];
    data[0] = value;
  } else {
    data = [...data, value];
  }
  localStorage.setItem(key, JSON.stringify(data));
}

export function getDataFromLocalStorage(key) {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  return data;
}

export function revomeAndUpdateDataFromLocalStorage(key, index, newValue) {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  data.splice(index, 1);
  data.push(newValue);
  localStorage.setItem(key, JSON.stringify(data));
}

export function revomeDataFromLocalStorage(key, index) {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);
  data.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(data));
}

export function loggedInUser(user) {
  if (user) {
    localStorage.setItem("logedIn", JSON.stringify(user));
  }
  return getDataFromLocalStorage("logedIn");
}

export function logoutUser() {
    localStorage.removeItem("logedIn");
}

