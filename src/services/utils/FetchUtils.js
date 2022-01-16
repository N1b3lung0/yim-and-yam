// const manageResponse = async (res, retryParams) => {
const manageResponse = async (res) => {
  if (res.ok) {
    if (res.status != 204) {
      try {
        return await res.json();
      } catch (error) {
        return Promise.reject(error);
      }
    } else {
      return;
    }
  } else {
    const error = res.json();
    console.log(error);
  }
};

const buildHeaders = () => {
  const token = localStorage.getItem("user_token");
  return process.env.APP_AUTH === "required"
    ? {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      }
    : { "Content-Type": "application/json" };
};

const doFetch = async (url, method) => {
  try {
    const res = await fetch(url, { method, headers: buildHeaders() });
    return manageResponse(res, { url, method });
  } catch (error) {
    return Promise.reject(error);
  }
};

const doFetchWithBody = async (url, method, bodyToStringify) => {
  try {
    const body = bodyToStringify ? JSON.stringify(bodyToStringify) : "";
    const res = await fetch(url, { method, headers: buildHeaders(), body });
    return manageResponse(res, { url, method, bodyToStringify });
  } catch (error) {
    return Promise.reject(error);
  }
};

const FetchUtils = {
  get: async (url) => await doFetch(url, "GET"),
  post: async (url, body) => await doFetchWithBody(url, "POST", body),
  patch: async (url, body) => await doFetchWithBody(url, "PATCH", body),
  delete: async (url) => await doFetch(url, "DELETE"),
};

export default FetchUtils;
