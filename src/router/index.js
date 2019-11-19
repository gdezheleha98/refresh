import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import mainPage from '../components/mainPage'
import tariffsPage from '../components/tariffsPage'
import getCard from '../components/cards/getCard'
import beneficiariesPage from '../components/beneficiariesPage'
import cardsDescription from '../components/cards/cardsDescription'
import municipal from '../components/cards/cardsTypes/municipal'
import privilege from '../components/cards/cardsTypes/privilege'
import pupillary from '../components/cards/cardsTypes/pupillary'
import student from '../components/cards/cardsTypes/student'
import travel from '../components/cards/cardsTypes/travel'
import orderCard from '../components/cards/orderCard'
import onlineQueue from '../components/onlineQueue'
import serviceCenter from '../components/serviceCenter'
import addFunds from '../components/addFunds'
import CardPayment from '../components/Payment/CardPayment'
import SuccessfulPayment from '../components/Payment/SuccessfulPayment'
import FailedPayment from '../components/Payment/FailedPayment'
import ConfirmPayment from '../components/Payment/ConfirmPayment'
// import newsPage from '../components/newsComponent'
// import userAccount from '../components/userAccount'
import specificNewsFull from '../components/mainPage/newsComponent/specificNewsFull'

import StudentCard from '../components/cards/orderCard/StudentCard'
import PupilCard from '../components/cards/orderCard/PupilCard'
import MunicipalCard from '../components/cards/orderCard/MunicipalCard'
import UserAuthorization from '../components/UserAuthorization'
import CardProgress from '../components/CardProgress'
import NormativeDocuments from '../components/NormativeDocuments'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: mainPage,
      meta: {
        title: 'Про нас - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/tariffs',
      component: tariffsPage,
      alias: ['/taryfy', '/тарифи'],
      meta: {
        title: 'Тарифи - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/cards-description',
      component: cardsDescription,
      alias: ['/картки', '/kartky'],
      meta: {
        title: 'Картки - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/beneficiaries',
      component: beneficiariesPage,
      alias: ['/пільгові-категорії', '/pilhovi-katehoriyi'],
      meta: {
        title: 'Пільгові категорії - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/get-card',
      component: getCard,
      alias: ['/otrumannya', '/отримання'],
      meta: {
        title: 'Отримати картку - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/municipal',
      component: municipal,
      alias: ['/zahalna', '/загальна'],
      meta: {
        title: 'Загальна картка  - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/privilege',
      component: privilege,
      alias: ['/pilhova', '/пільгова'],
      meta: {
        title: 'Пільгова картка - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/pupillary',
      component: pupillary,
      alias: ['/uchnivska', '/учнівська'],
      meta: {
        title: 'Учнівська картка - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/student',
      component: student,
      alias: ['/studentska', '/студентська'],
      meta: {
        title: 'Студентська картка - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/travel',
      component: travel,
      alias: ['/proyiznyy', '/проїзний'],
      meta: {
        title: 'Проїзний документ - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/online-queue',
      component: onlineQueue,
      alias: ['/elektronna-cherha', 'електронна-черга'],
      meta: {
        title: 'Електронна черга - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/order-card',
      component: orderCard,
      alias: ['zamovyty-kartku', 'замовити-картку'],
      meta: {
        title: 'Замовити картку - Муніципальна картка вінничанина'
      },
      children: [
        {
          path: 'student',
          component: StudentCard,
          meta: {
            index: store.getters.getStudentCardID
          }
        },
        {
          path: 'pupil',
          component: PupilCard,
          meta: {
            index: store.getters.getPupilCardID
          }
        },
        {
          path: 'municipal',
          component: MunicipalCard,
          meta: {
            index: store.getters.getMunicipalCardID
          }
        }
      ]
    },
    {
      path: '/service-center',
      component: serviceCenter,
      meta: {
        title: 'Центри обслуговування - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/add-funds',
      component: addFunds
    },
    {
      path: '/news/:newsName',
      component: specificNewsFull,
      alias: ['/новини'],
      meta: {
        title: 'Новини - Муніципальна картка вінничанина'
      }
    },
    {
      path: '/successful-payment',
      component: SuccessfulPayment
    },
    {
      path: '/card-payment',
      component: CardPayment
    },
    {
      path: '/failed-payment',
      component: FailedPayment
    },
    {
      path: '/confirm-payment',
      component: ConfirmPayment
    },
    {
      path: '/4ec',
      component: UserAuthorization
    },
    {
      path: '/card-progress',
      component: CardProgress
    },
    {
      path: '/normative-documents',
      component: NormativeDocuments
    }
  ],
  mode: 'history'

})

router.beforeEach((to, from, next) => {
  // debugger;
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Муніципальна карта вінничанина - Про нас'
  }
  next()
})

export default router
