import storage from "./StorageObject"
import Constants from "expo-constants"

interface VaccinationReceipt {
  name: string
  healthCardNumber: number
  dateOfBirth: string
  vaccinationDate: string
  agent: string
  productName: string
  diluentProduct: string
  lot: string
  dosage: string
  route: string
  site: string
  vaccineAdministeredBy: string
  authorizedOrganization: string
  phoneNumber: string
}

const getParsedVaccinationReceipt = async (
  image: string,
): Promise<VaccinationReceipt> => {
  return await fetch(
    `https://vision.googleapis.com/v1/images:annotate?key=${Constants.manifest.extra.googleCloudVisionKey}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [
          {
            image: {
              content: image,
            },
            features: [
              {
                type: "DOCUMENT_TEXT_DETECTION",
                maxResults: 1,
              },
            ],
          },
        ],
      }),
    },
  )
    .then((response) => response.json())
    .then((data) => data.responses[0].textAnnotations[0].description)
    .then((data: string) => data.split("\n"))
    .then((data: string[]) => data.filter((item: string) => item.includes(":")))
    .then((data: string[]) =>
      data.map((item: string) => item.substring(item.indexOf(":") + 1)),
    )
    .then((data: string[]) => {
      return {
        name: data[0].trim(),
        healthCardNumber: Number(data[1].slice(-4)),
        dateOfBirth: data[2].trim(),
        vaccinationDate: data[3].trim(),
        agent: data[4].trim(),
        productName: data[5].trim(),
        diluentProduct: data[6].trim(),
        lot: data[7].trim(),
        dosage: data[8].trim(),
        route: data[9].substring(0, data[9].indexOf("/")).trim(),
        site: data[10].substring(0, data[10].indexOf("/")).trim(),
        vaccineAdministeredBy: data[11].trim(),
        authorizedOrganization: data[12].trim(),
        phoneNumber: "+1 (000) 000-0000",
      }
    })
}

const isParsedVaccinationReceiptValid = async ({
  dateOfBirth,
  name,
  healthCardNumber,
}: {
  dateOfBirth: string
  name: string
  healthCardNumber: number
}): Promise<boolean> => {
  return await fetch(
    Constants.manifest.extra.firebaseDatabaseUrl +
      '?orderBy="dateOfBirth"&equalTo="' +
      dateOfBirth +
      '"&orderBy="name"&equalTo="' +
      name +
      '"&orderBy="healthCardNumber"&equalTo="' +
      healthCardNumber +
      '"',
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  )
    .then((response) => response.json())
    .then((data) => data[Object.keys(data)[0]])
    .then((data) => saveVaccinationReceiptToDevice(data))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const saveVaccinationReceiptToDevice = async (receipt: any) => {
  if (receipt.phoneNumber == null) return false
  await storage.save({
    key: "profiles",
    id: String(receipt.healthCardNumber),
    data: receipt,
  })
  return true
}

export { getParsedVaccinationReceipt, isParsedVaccinationReceiptValid }
