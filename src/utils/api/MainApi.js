export class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(response) {
    return response.then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 409 || res.status === 404 || res.status === 400) {
        return Promise.reject({
          status: res.status,
        });
      }
      return Promise.reject(new Error(`Ошибка получения данных: ${res.status} ${res.statusText}`));
    });
  }
  // регистрация
  register(name, email, password) {
    return this._getResponseData(
      fetch(`${this._baseUrl}/signup`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          login: email,
          password: password,
        }),
      })
    );
  }
  //авторизация
  login(login, password) {
    return this._getResponseData(
      fetch(`${this._baseUrl}/signin`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      })
    );
  }
  //провека токена
  checkToken(token) {
    return this._getResponseData(
      fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
      })
    );
  }
  //данные пользователя
  getCurrentUser(token) {
    return this._getResponseData(
      fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
      })
    );
  }
  saveProfile(data) {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: data.name,
          login: data.login,
          dayTwo: data.dayTwo,
          dayThree: data.dayThree,
          dayFour: data.dayFour,
          dayFive: data.dayFive,
          daySix: data.daySix,
          daySeven: data.daySeven,
        }),
      })
    );
  }
  //все Пользователи
  getAllUsers() {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/users/all`, {
        method: "GET",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
      })
    );
  }
  // Убить юзера по Id
  deleteUser(userId) {
    console.log(userId)
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/users/${userId}`, {
        method: "DELETE",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: userId
        }),
      })
    );
  }
  // обновить пароль юзера по Id
  updatePassword(data, userId) {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/users/${data.userId}`, {
        method: "PATCH",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password: data,
          id: userId
        }),
      })
    );
  }
  // обновить логuин юзера по Id
  updateLogin(data, userId) {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/users/login/${userId}`, {
        method: "PATCH",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          login: data,
          id: userId
        }),
      })
    );
  }
//cоздать историю
saveHistory(data){
  const token = localStorage.getItem("token");
  return this._getResponseData(
    fetch(`${this._baseUrl}/history/send`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        login: data.login,
        lesson: data.lesson,
        text: data.text
      }),
    })
  );
}
//получить все истории
  getAllHistories() {
    const token = localStorage.getItem("token");
    return this._getResponseData(
      fetch(`${this._baseUrl}/history/get`, {
        method: "GET",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
      })
    );
  }
  //Удалить историю
  delHistories(data) {
    const token = localStorage.getItem("token");
    console.log(data.text)
    return this._getResponseData(
      fetch(`${this._baseUrl}/history/delete`, {
        method: "DELETE",
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          text: data.text
        }),
      })
    );
  }
}
const mainApi = new MainApi({
  baseUrl: "http://api.course.tmweb.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
