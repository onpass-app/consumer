![](https://media.discordapp.net/attachments/839926811295350794/859971215825174548/unknown.png?width=1920&height=480)

> ![](https://img.shields.io/static/v1?label=Built%20With&message=Expo&style=for-the-badge&logo=expo&color=black) ![](https://img.shields.io/static/v1?label=Built%20With&message=React%20Native&style=for-the-badge&logo=react&color=blue) ![](https://img.shields.io/static/v1?label=Built%20With&message=Firebase&style=for-the-badge&logo=firebase&color=orange) ![](https://img.shields.io/static/v1?label=Built%20With&message=Google%20Cloud&style=for-the-badge&logo=googlecloud&color=darkblue)

## What is ONPass?
We'll keep it short and simple, ONPass is a vaccine passport and contact tracing system.

## What inspired ONPass?
In light of the COVID-19 pandemic and the Ontario governments push to accelerate vaccinations, there is still a clear need for a system which can verify vaccination status of individuals and streamline the contact tracing / outbreak reporting process for organizations and the government. Our applications provides an elegant solution to both of these challenges.

## What does the consumer side do?
At a high level the consumer app is responsible for retrieving and storing all vaccination data.
<br><br>
On a more minute level it's responsible for:
* Sending an image capture of the user's vaccination receipt to Google Cloud Vision for optical character recognition, alongside parsing the returned result.
* Verifying the parsed vaccination data through Firebase (our mock government servers) to ensure that the receipt or vaccination data is not forged.
* Saving verified data for future use and generating a QR Code for the contact tracing functionality in the enterprise app.

## What does it look like?
<table>
  <tr>
    <td>Welcome Page</td>
    <td>Vaccine Receipt Scanner Page</td>
    <td>Main Profile Page</td>
    <td>Vaccination Details Page</td>
  </tr>
  <tr>
    <td><img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/578/521/datas/original.png" /></td>
    <td><img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/578/522/datas/original.png" /></td>
    <td><img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/578/518/datas/original.png" /></td>
    <td><img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/578/544/datas/original.png" /></td>
  </tr>
 </table>

## Want to see it live in action?
[![ONPass Consumer Demo Thumbnail](http://img.youtube.com/vi/sqD_1Dkz3qM/0.jpg)](http://www.youtube.com/watch?v=sqD_1Dkz3qM "ONPass Consumer Demo")


## Contributors
* [Anmol Brar](https://www.github.com/brarsanmol)
* [Luca Bastone-Mohabir](https://www.github.com/lbstne)

## License
Copyright &copy; 2021, Anmol Brar and Luca Bastone-Mohabir, All Rights Reserved
