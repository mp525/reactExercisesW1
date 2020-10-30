function makeOptions(method, body) {
  method = method ? method : "GET";
  var opts = {
    method: method,
    headers: {
      // "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function errorCheck(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}
async function fetchAny(url, callback, method, body) {
  const options = makeOptions(method, body);
  const response = await fetch(url, options);
  const data = await errorCheck(response);

  callback(data);
  // .then((res) => errorCheck(res))
  // .then((data) => callback(data))
  // .catch((err) => {
  //   if (err.status) {
  //     err.fullError.then((e) => console.log(e.detail));
  //   } else {
  //     console.log("Network error");
  //   }
  // });
}

export default fetchAny;
