export default {
  state: {
    taxNumbers: [
      { id: 1, text: 'Отриманий' },
      { id: 2, text: 'Не отримувався' },
      { id: 3, text: 'Оформлено відмову від ІПН' }
    ],
    regionsList: [
      { id: 1, text: 'Автономна республіка Крим' },
      { id: 2, text: 'Вінницька область' },
      { id: 3, text: 'Волинська область' },
      { id: 4, text: 'Дніпропетровська область' },
      { id: 5, text: 'Донецька область' },
      { id: 6, text: 'Житомирська область' },
      { id: 7, text: 'Закарпатська область' },
      { id: 8, text: 'Запорізька область' },
      { id: 9, text: 'Івано-Франківська область' },
      { id: 10, text: 'Київська область' },
      { id: 11, text: 'Кіровоградська область' },
      { id: 12, text: 'Луганська область' },
      { id: 13, text: 'Львівська область' },
      { id: 14, text: 'Миколаївська область' },
      { id: 15, text: 'Одеська область' },
      { id: 16, text: 'Полтавська область' },
      { id: 17, text: 'Рівненська область' },
      { id: 18, text: 'Сумська область' },
      { id: 19, text: 'Тернопільська область' },
      { id: 20, text: 'Харківська область' },
      { id: 21, text: 'Херсонська область' },
      { id: 22, text: 'Хмельницька область' },
      { id: 23, text: 'Черкаська область' },
      { id: 24, text: 'Чернівецька область' },
      { id: 25, text: 'Чернігівська область' }
    ],
    schools: [
      { id: 1, text: 'НВК: СЗШ І ст. - гуманітарна гімназія №1' },
      { id: 2, text: 'НВК: ЗШ І-ІІІ ступенів - гімназія №2' },
      { id: 3, text: 'ЗШ І-ІІІ ст. №3' },
      { id: 4, text: 'ЗШ І-ІІІ ст. №4' },
      { id: 5, text: 'ЗШ І-ІІІ ст. №5' },
      { id: 6, text: 'НВК: ЗШ І-ІІІ ступенів - гімназія №6' },
      { id: 7, text: 'НВК: ЗШ І-ІІ ступенів - ліцей №7' },
      { id: 8, text: 'ЗШ І-ІІІ ст. №8' },
      { id: 9, text: 'ЗШ І-ІІІ ст. №9' },
      { id: 10, text: 'ЗШ І-ІІІ ст. №10' },
      { id: 11, text: 'ЗШ І-ІІІ ст. №11' },
      { id: 12, text: 'ЗШ І-ІІІ ст. №12' },
      { id: 13, text: 'ЗШ І-ІІІ ст. №13' },
      { id: 14, text: 'ЗШ І-ІІІ ст. №14' },
      { id: 15, text: 'ЗШ І-ІІІ ст. №15' },
      { id: 16, text: 'ЗШ І-ІІІ ст. №16' },
      { id: 17, text: 'ФМГ №17' },
      { id: 18, text: 'ЗШ І-ІІІ ст. №18' },
      { id: 19, text: 'ЗШ І-ІІІ ст. №19' },
      { id: 20, text: 'ЗШ І-ІІІ ст. №20' },
      { id: 21, text: 'ЗШ І-ІІІ ст. №21' },
      { id: 22, text: 'ЗШ І-ІІІ ст. №22' },
      { id: 23, text: 'НВК: ЗШ І-ІІІ ступенів - гімназія №23' },
      { id: 24, text: 'ВЗШ ІІ-ІІІ ст. №24' },
      { id: 25, text: 'ЗШ І-ІІІ ст. №25' },
      { id: 26, text: 'ЗШ І-ІІІ ст. №26' },
      { id: 27, text: 'ЗШ І-ІІІ ст. №27' },
      { id: 28, text: 'Вінницький Технічний Ліцей' },
      { id: 29, text: 'НВК: ЗШ І-ІІІ ступенів - ГЕК №29' },
      { id: 30, text: 'НВК: ЗШ І-ІІІ ступенів - гімназія №30' },
      { id: 31, text: 'ЗШ І-ІІІ ст. №31' },
      { id: 32, text: 'ЗШ І-ІІІ ст. №32' },
      { id: 33, text: 'ЗШ І-ІІІ ст. №33' },
      { id: 34, text: 'ЗШ І-ІІІ ступенів із спеціалізованими класами з поглибленим вивченням математики та фізики №34' },
      { id: 35, text: 'ЗШ І-ІІІ ст. №35' },
      { id: 36, text: 'ЗШ І-ІІІ ст. №36' },
      { id: 100, text: 'Подільський науково-технічний ліцей для обдарованої молоді' },
      { id: 101, text: 'Спец. ЗШ І-ІІІ ст. з дошкільним відділенням ВМР' },
      { id: 102, text: 'Приватний православний НВК Св. Миколая' },
      { id: 103, text: 'Обласний науковий ліцей-інтернат' }
    ],
    universitiesList: [
      { id: 1, text: 'Вінницький державний педагогічний університет ім.М.Коцюбинського', type: '1' },
      { id: 2, text: 'Вінницький національний аграрний університет', type: '1' },
      { id: 3, text: 'Вінницький національний медичний університет ім.М.Пирогова', type: '1' },
      { id: 4, text: 'Вінницький національний технічний університет', type: '1' },
      { id: 5, text: 'Донецький національний університет імені Василя Стуса', type: '1' },
      { id: 6, text: 'Вінницький торговельно-економічний інститут КНТЕУ', type: '1' },
      { id: 7, text: 'Вінницький фінансово-економічний університет', type: '1' },
      { id: 8, text: 'Вінницький кооперативний інститут', type: '1' },
      {
        id: 9,
        text: 'Вінницький інститут економіки Тернопільського національного економічного університету',
        type: '1'
      },
      { id: 10, text: 'Вінницький інститут конструювання одягу і підприємництва', type: '1' },
      { id: 11, text: 'Вінницький інститут Міжрегіональної академії управління персоналом', type: '1' },
      {
        id: 12,
        text: 'Вінницький соціально-економічний інститут "Відкритого міжнародного університету розвитку людини "Україна"',
        type: '1'
      },
      {
        id: 13,
        text: 'Вінницька філія приватного навчального закладу "Європейський університет фінансів, інформаційних систем, менеджменту і бізнесу"',
        type: '1'
      },
      { id: 14, text: 'Вінницька філія Київського інституту бізнесу та технологій', type: '1' },
      { id: 15, text: 'Вінницький факультет Київського національного університету культури і мистецтв', type: '1' },
      { id: 16, text: 'Вінницька філія Університету сучасних знань', type: '1' },
      {
        id: 17,
        text: 'Вінницьке відділення Київського фінансово-економічного коледжу Національного університету Державної податкової служби України',
        type: '1'
      },
      { id: 18, text: 'Вінницький коледж культури і мистецтв ім.Л.Д.Леонтовича', type: '1' },
      { id: 19, text: 'Вінницький коледж будівництва і архітектури КНУБА', type: '1' },
      { id: 20, text: 'Вінницький коледж менеджменту', type: '1' },
      { id: 21, text: 'Вінницький коледж Національного університету харчових технологій', type: '1' },
      { id: 22, text: 'Вінницький коледж економіки і права Вінницького кооперативного інституту', type: '1' },
      { id: 23, text: 'Вінницький коледж економіки та підприємництва ТНЕУ', type: '1' },
      { id: 24, text: 'Вінницький медичний коледж ім.акад.Д.К.Заболотного', type: '1' },
      { id: 25, text: 'Вінницький обласний комунальний гуманітарно-педагогічний коледж', type: '1' },
      { id: 26, text: 'Вінницький технічний коледж', type: '1' },
      { id: 27, text: 'Вінницький технологічно-промисловий коледж ВНАУ', type: '1' },
      { id: 28, text: 'Вінницький торговельно-економічний коледж КНТЕУ', type: '1' },
      { id: 29, text: 'Вінницький транспортний коледж', type: '1' },
      {
        id: 30,
        text: 'ДНЗ "Вінницький центр професійно-технічної освіти торгівлі та харчових технологій"',
        type: '2'
      },
      { id: 31, text: 'ДНЗ “Центр професійно-технічної освіти №1 м.Вінниці”', type: '2' },
      { id: 32, text: 'ДПТНЗ "Вінницьке міжрегіональне вище професійне училище"', type: '2' },
      { id: 33, text: 'Вище художнє професійно-технічне училище №5 м.Вінниці', type: '2' },
      { id: 34, text: 'ДНЗ "Вище професійне училище №7 м.Вінниці"', type: '2' },
      { id: 35, text: 'Вище професійне училище №11 м.Вінниці', type: '2' },
      { id: 36, text: 'ДНЗ "Вінницький центр професійно технічної освіти технологій та дизайну"', type: '2' },
      { id: 37, text: 'ДПТНЗ "Вінницьке вище професійне училище сфери послуг"', type: '2' },
      { id: 38, text: 'ДНЗ "Вінницький центр професійно-технічної освіти переробної промисловості"', type: '2' },
      { id: 39, text: 'Вінницька академія неперервної освіти', type: '1' }

    ],
    /* representatorDocumentsList: [
            {id: 1, text: 'Паспорт громадянина України'},
            {id: 2, text: 'ID картка'},
        ], */
    representetiveRelationshipsList: [
      { id: 1, text: 'мати' },
      { id: 2, text: 'батько' },
      { id: 3, text: 'опікун' }
    ],
    adultOfficialDocumentsList: [
      { id: 1, text: 'ID картка' },
      { id: 2, text: 'Паспорт громадянина України' }
    ],
    pupilOfficialDocumentsList: [
      { id: 1, text: 'ID картка' },
      { id: 2, text: 'Свідоцтво про народження' }
    ],
    sexList: [
      { id: 1, text: 'чоловіча' },
      { id: 2, text: 'жіноча' }
    ],
    basisList: [
      { id: 1, text: 'Перша видача' },
      { id: 2, text: 'Карту втрачено чи пошкоджено' },
      { id: 3, text: 'Карта несправна' },
      { id: 4, text: 'Перевипуск по закінченню терміну дії' },
      { id: 5, text: 'Заводський брак' },
      { id: 6, text: 'Помилка персоналізації' }
    ],
    cardsTypes: [
      // 'Пільгова МКВ',
      { id: 1, text: 'Студентська МКВ' },
      { id: 2, text: 'Учнівська МКВ' },
      { id: 3, text: 'Загальна МКВ' }
    ],
    STUDENT_ID: 1,
    PUPIL_ID: 2,
    MUNICIPAL_ID: 3,
    privilegeDocumentTypes: [
      { id: 1, text: 'учасники бойових дій (стаття 12)' },
      { id: 2, text: 'особи з інвалідністю внаслідок війни (стаття 13) (для осіб з інвалідністю ІІІ групи)' },
      { id: 3, text: 'особи з інвалідністю внаслідок війни (стаття 13) (для осіб з інвалідністю ІІ групи)' },
      { id: 4, text: 'особи з інвалідністю внаслідок війни (стаття 13) (для осіб з інвалідністю І групи)' },
      { id: 5, text: 'постраждалий учасник революції гідності (стаття 12)' },
      { id: 6, text: 'ветерани військової служби (стаття 6)' },
      { id: 7, text: 'ветерани органів внутрішніх справ (стаття 6)' },
      { id: 8, text: 'ветерани Національної поліції (стаття 6)' },
      { id: 9, text: 'ветерани податкової міліції (стаття 6)' },
      { id: 10, text: 'ветерани державної пожежної охорони (стаття 6)' },
      { id: 11, text: 'ветерани Державної кримінально-виконавчої служби України (стаття 6)' },
      { id: 12, text: 'ветерани служби цивільного захисту (стаття 6)' },
      { id: 13, text: 'ветерани Державної служби спеціального зв’язку та захисту інформації України (стаття 6)' },
      {
        id: 14,
        text: 'реабілітовані особи, які отримали інвалідність внаслідок репресій або є пенсіонерами (стаття 6)'
      },
      { id: 15, text: 'жертви нацистських переслідувань (стаття 6-1) УБД' },
      { id: 16, text: 'жертви нацистських переслідувань (стаття 6-2) особам з інвалідністю 1 групи)' },
      { id: 17, text: 'жертви нацистських переслідувань (стаття 6-2) особам з інвалідністю 2 групи)' },
      { id: 18, text: 'жертви нацистських переслідувань (стаття 6-2) особам з інвалідністю 3 групи)' },
      {
        id: 19,
        text: 'особи, які постраждали внаслідок Чорнобильської катастрофи, віднесені до категорії 1 (стаття 20)'
      },
      {
        id: 20,
        text: 'учасники ліквідації наслідків аварії на Чорнобильській АЕС, віднесені до категорії 2 (стаття 21)'
      },
      {
        id: 21,
        text: 'діти віком від шести років, потерпілі від Чорнобильської катастрофи, яким встановлено інвалідність (стаття 30)'
      },
      { id: 22, text: 'особи з інвалідністю І групи (по зору та ОРА) (стаття 38-1)' },
      {
        id: 23,
        text: 'учасники ліквідації наслідків аварії на Чорнобильській АЕС, віднесені до категорії 2 (стаття 21)'
      },
      { id: 24, text: 'особи з інвалідністю ІІ групи (по зору та ОРА) (стаття 38-1)' },
      { id: 25, text: 'особи з інвалідністю ІІ групи (крім зору та ОРА) (стаття 38-1)' },
      { id: 26, text: 'діти з інвалідністю віком від шести років (стаття 38-1)' },
      { id: 27, text: 'діти віком від шести років з багатодітних сімей (стаття 13)' },
      {
        id: 28,
        text: 'батьки військовослужбовців, які загинули чи померли або пропали безвісти під час проходження військової служби (стаття 14)'
      },
      { id: 29, text: 'пенсіонери за віком (пункт 1)' },
      { id: 30, text: 'особи з інвалідністю ІІІ групи' },
      {
        id: 31,
        text: 'діти-сироти та діти, позбавлені батьківського піклування, віком від шести років (пункт 11)'
      },
      {
        id: 32,
        text: 'члени сімей (батьки, вдови (вдівці) та діти, віком від шести років) загиблих учасників бойових дій'
      },
      { id: 33, text: 'батьки багатодітних сімей, в яких виховується п’ятеро і більше дітей віком до 18 років' }
    ],
    pupilPrivilegeDocument: [
      { id: 1, text: 'Учнівський квиток' }
    ],
    studentPrivilegeDocument: [
      { id: 2, text: 'Студентський квиток' }
    ],
    registrationList: [
      { id: 1, text: 'Об\'єднана територіальна громада м. Вінниця' },
      { id: 2, text: 'смт. Десна' }
    ],
    imageRequirements: [
      'Фото повинне бути зроблене не пізніше, як за 6 місяців.',
      'Зображення повинне бути високої якості, різке та контрастне.',
      'На фото не повинно бути зайвих об’єктів (рук, людей, об’єктів інтер’єру тощо).',
      'Обличчя на фотографії має розміщуватись у центрі, на світлому фоні, точно в анфас, без поворотів голови.',
      'Вираз обличчя має бути нейтральним, посмішки та кривляння не допускаються.',
      'Погляд має бути направлений прямо у камеру.',
      'Обличчя має бути відкритим: волосся не може закривати очі, без головних уборів і темних окулярів.',
      'Якщо Ви постійно носите оптичні окуляри, то і фотографуватись потрібно в окулярах (без затемнення).',
      'Фотографія невідповідної якості прирівнюється до невірно поданих даних.'
    ],
    statusesList: [
      {
        id: 1,
        text: 'Створено самостійно'
      },
      {
        id: 2,
        text: 'Створено адміністратором'
      },
      {
        id: 3,
        text: 'Перевірено самостійно'
      },
      {
        id: 4,
        text: 'Зауваження'
      },
      {
        id: 5,
        text: 'Перевірка (здійснюється адміністратором)'
      },
      {
        id: 6,
        text: 'Перевірено'
      },
      {
        id: 7,
        text: 'Очікує відправки до друку'
      },
      {
        id: 8,
        text: 'Відправлено в друк'
      },
      {
        id: 9,
        text: 'Картка очікує в офісі'
      },
      {
        id: 10,
        text: 'Видана'
      },
      {
        id: 11,
        text: 'Знищена'
      },
      {
        id: 100,
        text: 'Відмінена з-за неоплати'
      }
    ],
    paymentsList: [
      {
        id: 0,
        text: 'Не оплачено'
      },
      {
        id: 1,
        text: 'Очікується оплата'
      },
      {
        id: 2,
        text: 'Оплачено'
      }
    ]
  },
  getters: {
    getStatusesList (state) {
      return state.statusesList
    },
    getPaymentList (state) {
      return state.paymentsList
    },
    femaleGender (state) {
      return state.sexList[1].id
    },
    getStudentCardID (state) {
      return state.STUDENT_ID
    },
    getPupilCardID (state) {
      return state.PUPIL_ID
    },
    getMunicipalCardID (state) {
      return state.MUNICIPAL_ID
    },
    getImageRequirements (state) {
      return state.imageRequirements
    },
    taxNumbers (state) {
      return state.taxNumbers
    },
    regionsList (state) {
      return state.regionsList
    },
    schools (state) {
      return state.schools
    },
    /* representatorDocumentsList(state) {
             return state.representatorDocumentsList;
         }, */
    universitiesList (state) {
      return state.universitiesList
    },
    representetiveRelationshipsList (state) {
      return state.representetiveRelationshipsList
    },
    getRepresentetiveRelationshipsList: state => id => {
      return state.representetiveRelationshipsList.find(item => item.id === id).text
    },
    adultOfficialDocumentsList (state) {
      return state.adultOfficialDocumentsList
    },
    getAdultOfficialDocument: state => id => {
      return state.adultOfficialDocumentsList.find(item => item.id === id).text
    },
    sexList (state) {
      return state.sexList
    },
    getUserGender: state => id => {
      return state.sexList.find(item => item.id === id).text
    },
    basisList (state) {
      return state.basisList
    },
    cardsTypes (state) {
      return state.cardsTypes
    },
    getCardType: state => id => {
      return state.cardsTypes.find(item => item.id === id).text
    },
    privilegeDocumentTypes (state) {
      return state.privilegeDocumentTypes
    },
    getPrivilegeDocument: state => id => {
      return state.pupilPrivilegeDocument[0].id === id ? state.pupilPrivilegeDocument[0].text : state.studentPrivilegeDocument[0].text
      // s.find(item => item.id === id).text;
    },
    studentPrivilegeDocument (state) {
      return state.studentPrivilegeDocument
    },
    registrationList (state) {
      return state.registrationList
    },
    pupilOfficialDocumentsList (state) {
      return state.pupilOfficialDocumentsList
    },
    getPupilOfficialDocument: state => id => {
      return state.pupilOfficialDocumentsList.find(item => item.id === id).text
    },
    pupilPrivilegeDocument (state) {
      return state.pupilPrivilegeDocument
    },
    getIdCardID (state) {
      return state.adultOfficialDocumentsList[0].id
    },
    getPassportID (state) {
      return state.adultOfficialDocumentsList[1].id
    },
    /* getPupilCardID(state) {
            return state.cardsTypes[1].id;
        },
        getStudentCardID(state) {
            return state.cardsTypes[0].id;
        },
        getMunicipalCard(state) {
            return state.cardsTypes[2].id;
        }, */
    getReceivedTaxNumberID (state) {
      return state.taxNumbers[0].id
    },
    getAbandonedTaxNumberID (state) {
      return state.taxNumbers[1].id
    },
    getPupilIdCardID (state) {
      return state.pupilOfficialDocumentsList[0].id
    },
    getPupilBirthCertificateID (state) {
      return state.pupilOfficialDocumentsList[1].id
    },
    getStudentPrivilegeDocumentID (state) {
      return state.studentPrivilegeDocument[0].id
    },
    getPupilPrivilegeDocumentID (state) {
      return state.pupilPrivilegeDocument[0].id
    },
    getCurrentUniversityType: state => id => {
      return state.universitiesList.find(elem => elem.id === Number(id)).type
    },
    getUserRegion: state => id => {
      return state.regionsList.find(item => item.id === id).text
    }
  }
}
