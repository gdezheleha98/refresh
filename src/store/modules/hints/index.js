export default {
  state: {
    dateHint: 'Дата у форматі дд.мм.рррр',
    lastName: 'Заповнюється, як вказано у документі, що посвідчує особу',
    name: 'Заповнюється, як вказано у документі, що посвідчує особу',
    middleName: 'Поле "По батькові" обов\'язкове для заповнення, якщо в документі, що посвідчує особу, по батькові є',
    idNumber: 'Номер повинен містити 9 цифр',
    idIssuedBy: 'Орган, що видав повинен містити 4 цифри',
    passportNumber: 'Номер повинен містити 6 цифр',
    passportSeries: 'Серія повинна містити прописні літери',
    IPN: 'Ідентифікаційний податковий номер повинен містити 10 цифр',
    student: {
      // lastName: 'Заповнюється, як вказано у документі, що посвідчує особу',
      // name: 'Заповнюється, як вказано у документі, що посвідчує особу',
      // middleName: 'Поле "По батькові" обов\'язкове для заповнення, якщо в документі, що посвідчує особу, по-батькові є',
      // idNumber: 'Номер повинен містити 9 цифр',
      // idIssuedBy: 'Орган, що видав повинен містити 4 цифри',
      // passportNumber: 'Номер повинен містити 6 цифр',
      // passportSeries: 'Серія повинна містити прописні літери',
      // IPN: 'Ідентифікаційний податковий номер повинен містити 10 цифр',
      privilegeDocSeries: 'Серія повинна містити прописні літери',
      privilegeDocNumber: 'Номер повинен містити 8 цифр',
      privilegeDocValidTill: 'Дата у форматі дд.мм.рррр'
    },
    pupil: {
      // lastName: 'Заповнюється, як вказано у документі, що посвідчує особу',
      // name: 'Заповнюється, як вказано у документі, що посвідчує особу',
      // middleName: 'Поле "По батькові" обов\'язкове для заповнення, якщо в документі, що посвідчує особу, по-батькові є',
      // idNumber: 'Номер повинен містити 9 цифр',
      // idIssuedBy: 'Орган, що видав повинен містити 4 цифри',
      // idValidTill: 'Дата у форматі дд.мм.рррр',
      // idIssuedDate: 'Дата у форматі дд.мм.рррр',
      certificateNumber: 'Номер повинен містити 6 цифр',
      certificateSeries: 'Серія повинна містити прописні літери',
      certificateIssuedBy: 'Дата у форматі дд.мм.рррр',
      privilegeDocSeries: 'Серія повинна містити прописні літери',
      privilegeDocNumber: 'Номер повинен містити 8 цифр',
      privilegeDocValidTill: 'Дата у форматі дд.мм.рррр'
    }

  },
  getters: {
    getLastNameHint (state) {
      return state.lastName
    },
    getNameHint (state) {
      return state.name
    },
    getMiddleNameHint (state) {
      return state.middleName
    },
    getIdNumberHint (state) {
      return state.idNumber
    },
    getIdIssuedByHint (state) {
      return state.idIssuedBy
    },
    getPassportNumberHint (state) {
      return state.passportNumber
    },
    getPassportSeriesHint (state) {
      return state.passportSeries
    },
    getIPNHint (state) {
      return state.IPN
    },
    getStudentPrivilegeDocSeries (state) {
      return state.student.privilegeDocSeries
    },
    getStudentPrivilegeDocNumber (state) {
      return state.student.privilegeDocNumber
    },
    getStudentPrivilegeDocValidTill (state) {
      return state.student.privilegeDocValidTill
    },
    getPupilPrivilegeDocSeriesHint (state) {
      return state.pupil.privilegeDocSeries
    },
    getPupilPrivilegeDocNumberHint (state) {
      return state.pupil.privilegeDocNumber
    },
    getPupilPrivilegeDocValidTill (state) {
      return state.pupil.privilegeDocValidTill
    }
    /* getPupilCertificateNumberHint (state) {
      state.pupil.certificateNumber
    },
    getPupilCertificateSeriesHint (state) {
      state.pupil.certificateSeries
    },
    getPupilCertificateIssuedByHint (state) {
      state.pupil.certificateIssuedBy
    }
    */

  }
}
