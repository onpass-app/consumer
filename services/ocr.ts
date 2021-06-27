import storage from "../storage";

export async function parseJSON(base64Image: string): Promise<Array<string>> {
  var toReturn = null;
    let response = await fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC1d1x6C568LCfXC4ZY7Vdncw5zWNaEOIA', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requests: [{
            image: {
              content: base64Image
            },
            features: [{
              type:"DOCUMENT_TEXT_DETECTION",
              maxResults: 1 
            }]
          }]
        }),
      })
      .then((response) => response.json())
      .then(data => {
        console.log(JSON.stringify(data))
        return data
      })
      .then(data => {
        toReturn = data.responses[0].textAnnotations[0].description
        .split("\n")
        .filter((item: string) => item.includes(":"))
        .map((item: string) => item.substring(item.indexOf(":") + 1))
      })
        .catch(error => console.log(error))
      return toReturn
}

export async function verifyState(state: any) {
  var toReturn = null
  await fetch ('https://onpass-b9abc-default-rtdb.firebaseio.com/people.json?orderBy="dateOfBirth"&equalTo="' + state.dateOfBirth + '"&orderBy="name"&equalTo="' + state.name + '"&orderBy="healthCardNumber"&equalTo="' + state.healthCardNumber + '"', {
    method: 'GET',
    headers: {
      Accept: "application/json",
    }
  }).then(response => response.json()).then(response => {
    console.log(JSON.stringify(response))
    toReturn = response
  })

  return toReturn[0].phoneNumber
}

export async function createProfileState(data: Array<string>) {
  const state = {
    name: data[0].trim(),
    healthCardNumber: Number(data[1].slice(-4)),
    dateOfBirth: data[2].trim(),
    vaccinationDate: data[3].trim(),
    agent: data[4].trim(),
    productName: data[5].trim(),
    diluentProduct: data[6].trim(),
    lot: data[7].trim(),
    dosage: data[8].trim(),
    route: data[9].substring(0, data[9].indexOf('/')).trim(),
    site: data[10].substring(0, data[10].indexOf('/')).trim(),
    vaccineAdministeredBy: data[11].trim(),
    authorizedOrganization: data[12].trim(),
    phoneNumber: "+1 (000) 000-0000"
  }

  return state
  /*await storage.save({
    key: 'profiles',
    id: String(state.healthCardNumber),
    data: state
  })*/
}

export async function saveProfileState(state: any) {
    await storage.save({
    key: 'profiles',
    id: String(state.healthCardNumber),
    data: state
  })
}

export async function updateProfileState() {
  await storage.save({
    key: 'shouldUpdateProfiles',
    data: true
  })
}