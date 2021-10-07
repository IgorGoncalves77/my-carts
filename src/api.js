export function getItensComFrete() {
  return new Promise(function (resolve, reject) {
    fetch('./ComFrete.json', {headers: {
      Accept: "application/json"
    }})
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function getItensSemFrete() {
  return new Promise(function (resolve, reject) {
    fetch('./SemFrete.json', {headers: {
      Accept: "application/json"
    }})
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}
