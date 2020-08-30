const urlAPI = 'http://localhost:5000/api/v1';
// const urlAPI = 'https://learningexperieceapi.azurewebsites.net/api/v1';
export const urls = {
    URL_API: `${urlAPI}`,
    URL_LOGINUSER: `${urlAPI}/Auth`,
    URL_GETALLADVISOR:  `${urlAPI}/Advisor/GetAll`,
    URL_GETALLPATIENT: `${urlAPI}/Patient/GetAll`,
    URL_GETUSERBYID: `${urlAPI}/User/GetUserById`,
    URL_SIGNUPADVISOR: `${urlAPI}/Advisor/RegisterAdvisor`,
    URL_SIGNUPPATIENT: `${urlAPI}/Patient/RegisterPatient`,
    URL_GETADVISORBYID: `${urlAPI}/Advisor/GetAdvisorById`,
    URL_GETPATIENTBYID: `${urlAPI}/Patient/GetPatientById`,
    URL_UPDATEADVISOR: `${urlAPI}/Advisor/UpdateAdvisor`,
    URL_UPDATEPATIENT: `${urlAPI}/Patient/UpdatePatient`,
    URL_REGISTERUSER: `${urlAPI}/Auth/RegisterLogin`
};
