const required = 'Це поле є обов\'язковим'
/* const max20 = 'Максимальний розмір 20' */
const numeric = 'Введіть тільки числа'
const max10 = 'Максимальний розмір 10'
const email = 'Введіть коректну email адресу'
const included = 'Оберіть пункт з випадаючого меню'
const imgSize = 'Картинка не повинна перевищувати 2 мб'
const max200 = 'Максимальний розмір 200 символів'
const dateFormat = 'Введіть дату в форматі mm/dd/yyyy'
const validPhoneNumber = 'Введіть коректний номер телефону'
const regex = 'Введіть коректні символи'
const max30 = 'Максимальний розмір 30'
const max50 = 'Максимальний розмір 50'
const max70 = 'Максимальний розмір 70'
const digits9 = 'Введіть 9 цифр'
const digits6 = 'Введіть 6 цифр'
const digits4 = 'Введіть 4 цифри'
const digits8 = 'Введіть 8 цифр'
const passportSerias = 'Введіть 2 символи'
const regexBuilding = 'Введіть коректній номер'

function lengthMsg (n) {
  return `Введіть ${n} символів`
}

export default {
  en: {
    custom: {
      // queueEmail: {
      //     required,
      //     email,
      // },
      // userName: {
      //     required,
      //     regex,
      // },
      // cardType: {
      //     required,
      //     included,
      // },
      // firstName: {
      //     required,
      //     max: max20
      // },
      // secondName: {
      //     required,
      //     max: max20
      // },
      // middleName: {
      //     required,
      //     max: max20
      // },
      // birthDay: {
      //     required,
      //     after: '',
      //     date_format: dateFormat
      // },
      // sex: {
      //     required,
      //     included,
      // },
      // registration: {
      //     required,
      // },
      // street: {
      //     required,
      // },
      // buildingNumber: {
      //     required,
      //     numeric
      // },
      // flatNumber: {
      //     required,
      //     numeric
      // },
      // officialDocumentType: {
      //     required,
      //     included,
      // },
      // officialDocumentSeries: {
      //     required,
      // },
      // officialDocumentNumber: {
      //     required,
      //     numeric,
      // },
      // officialDocumentSpecifyData: {
      //     required,
      // },
      // privilegeDocumentType: {
      //     required,
      //     excluded: included,
      // },
      // privilegeDocumentNumber: {
      //     required,
      //     numeric,
      //     max: max10,
      // },
      // privilegeDocumentAdditionalInfo: {
      //     max: max200,
      // },
      // idTaxes: {
      //     required,
      //     numeric,
      //
      // },
      // phoneNumber: {
      //     required,
      //     numeric,
      //     min: 'Введіть коректний номер телефону',
      //     max: 'Введіть коректний номер телефону',
      //     length: validPhoneNumber,
      // },
      // email: {
      //     required,
      //     email,
      // },
      // file: {
      //     required,
      //     size: imgSize,
      // },
      // allowPersonalData: {
      //     required,
      // },
      region: {
        required
      },
      documentValidTill: {
        required
      },
      officialDocumentInfo: {
        required,
        digits: digits4
      },
      chooseSchoolClass: {
        required,
        digits: digits4
      },
      chooseSchool: {
        required
      },
      askBasis: {
        required,
        excluded: included
      },
      chooseCard: {
        required,
        excluded: included
      },
      officialDocumentNumberID: {
        required,
        digits: digits9
      },
      officialDocumentSeriasPassport: {
        required,
        regex,
        length: passportSerias
        // min: passportSerias,
      },
      officialDocumentNumberPassport: {
        required,
        digits: digits6
      },

      officialDocumentSeries: {
        required,
        length: passportSerias,
        // min: passportSerias,
        regex
      },
      privilegeDocumentSeriasPup: {
        required,
        // max: passportSerias,
        length: passportSerias,
        regex
      },
      privilegeDocumentNumberPup: {
        required,
        digits: digits8
      },
      phoneNumber1: {
        required,
        length: validPhoneNumber
      },
      allowPersonalInfo: {
        required
      },
      allowPersonalInfo2: {
        required
      },
      phoneNumber2: {
        length: validPhoneNumber
      },
      chooseEnterYear: {
        required,
        digits: digits4
      },
      queueEmail: {
        required,
        email
      },
      firstName: {
        required,
        max: max70,
        regex
      },
      secondName: {
        required,
        max: max30,
        regex
      },
      middleName: {
        required,
        max: max50,
        regex
      },
      representativeMiddleNameInput: {
        required,
        max: max50,
        regex
      },
      personMiddleNameInput: {
        required,
        max: max50,
        regex
      },
      chooseSex: {
        required,
        excluded: included
      },
      userName: {
        required,
        regex
      },
      cardType: {
        required,
        included
      },

      birthDay: {
        required,
        after: '',
        date_format: dateFormat
      },
      sex: {
        required,
        included
      },
      registration: {
        required,
        max: max50,
        regex
      },
      street: {
        required,
        regex
      },
      buildingNumber: {
        required,
        regex: regexBuilding
      },
      flatNumber: {
        required,
        regex: regexBuilding
      },
      officialDocumentType: {
        required,
        included
      },

      officialDocumentNumber: {
        required,
        digits: digits6
      },
      officialDocumentSpecifyData: {
        required
      },
      privilegeDocumentType: {
        required,
        excluded: included
      },
      privilegeDocumentSeries: {
        required,
        length: 'Введіть 2 символи',
        regex
      },
      privilegeDocumentNumber: {
        required,
        numeric,
        max: max10
      },
      privilegeDocumentNumberPUP: {
        required,
        digits: digits8,
        numeric,
        max: max10
      },
      privilegeDocumentAdditionalInfo: {
        max: max200
      },
      idTaxes: {
        required,
        numeric,
        length: lengthMsg(10)
      },
      phoneNumber: {
        required,
        numeric,
        // length: 'Введіть коректний номер телефону',
        // max: 'Введіть коректний номер телефону',
        length: validPhoneNumber
      },
      email: {
        required,
        email
      },
      file: {
        required,
        size: imgSize
      },
      allowPersonalData: {
        required
      },
      representatorSecondName: {
        required,
        max: max70,
        regex
      },
      representatorFirstName: {
        required,
        max: max70,
        regex
      },
      representatorMiddleName: {
        required,
        max: max70,
        regex
      },
      representatorMRelationship: {
        required,
        excluded: included
      },
      representatorRelationship: {
        required,
        excluded: included
      },
      officialDocumentTermReprID: {
        required
      },
      officialDocumentSeriasRepr: {
        required,
        length: passportSerias,
        regex
      },
      officialDocumentNumberRepr: {
        required,
        digits: digits6
      },
      officialDocumentNumberReprID: {
        required,
        digits: digits9
      },
      privilegeDocumentTerm: {
        required
      },
      officialDocumentTerm: {
        required
      },
      officialDocumentValidTill: {
        required
      },
      birthDayPick: {
        required
      },
      registrationDatePick: {
        required
      },
      chooseUniversity: {
        required
      },
      cellPhoneNumber: {
        required,
        length: validPhoneNumber
      },
      personPhone: {},
      representativeDocumentValidTill: {
        required
      },
      personDocumentIssuedDate: {
        required
      },
      IdCardPersonDocumentIssuedDate: {
        required
      },
      IdCardOfficialDocumentValidTill: {
        required
      },
      orderNumber: {
        required,
        digits: digits8
      },
      authPin: {
        required,
        digits: digits4
      }
    }
  }
}
