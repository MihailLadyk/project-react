import axios from "axios";

export function fetchAppsByQuery(query, page = 1) {
  return axios({
    method: "get",
    url: "/apps/all",
    params: {
      page,
      query,
      perPage: 3,
    },
  }).then((res) => res.data);
}

export function fetchAppDetails(appId) {
  return axios({
    method: "get",
    url: `/apps/${appId}`,
  }).then((res) => res.data);
}

export function createApp(data) {
  return axios({
    method: "post",
    url: "/apps",
    data,
  }).then((res) => res.data);
}

export function editApp(appId, newData) {
  return axios({
    method: "put",
    url: `/apps/${appId}`,
    data: newData,
  }).then((res) => res.data);
}

export function deleteApp(appId) {
  return axios({
    method: "delete",
    url: `/apps/${appId}`,
  }).then((res) => res.data);
}
