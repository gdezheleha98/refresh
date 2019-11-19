<template>
    <div class="container">
        <div class="row">
            <div class="content">
                <page-header>Картки</page-header>
                <h3>для оплати проїзду у громадському транспорті</h3>
                <p>Шановні мешканці об'єднаної територіальної громади міста Вінниця та гості міста, з жовтня 2019 року у місті почне діяти автоматизована система обліку
                   оплати проїзду в громадському транспорті – оплата за проїзд здійснюватиметься за допомогою електронних квитків.</p>
                <p>Для зручності користування муніципальним транспортом та збереження наявних пільг  необхідно отримати Муніципальну картку вінничанина.</p>
            </div>

            <div class="content content_bg_none" >
                <h2>Оберіть картку</h2>
                <div class="row row-cards">
                    <div class="col-md-6 col-card">
                        <div class="card" @click="showConcreteCard('/municipal')">
                            <h3>Муніципальна картка<br/>вінничанина (загальна)</h3>
                            <div class="row">
                                <div class="col-md-5 midd">
                                    <img src="../../../assets/Card_Magenta.jpg"/>
                                    <div class="person"><span class="magenta icon-personalization"></span>Персоніфікована</div>
                                </div>
                                <div class="col-md-7">
                                    <ul>
                                        <li><span class="magenta icon-lowered"></span>Знижена вартість проїзду</li>
                                        <li><span class="magenta icon-transfer"></span>З пересадкою протягом 30 хв</li>
                                        <li><span class="magenta icon-balance-recovery"></span>Відновлення балансу при втраті картки</li>
                                        <li><span class="magenta icon-calendar"></span>Термін дії поточного поповнення - 30 календарних днів</li>
                                        <li><span class="magenta icon-purse"></span>Гаманець для поповнення рахунку</li>
                                        <li><span class="magenta icon-making"></span>Виготовлення - 60 грн.</li>
                                        <li><span class="magenta icon-payment"></span>Оплата - безготівкова</li>
                                        <li><span class="magenta icon-usage-term"></span>Термін використання - 5 років</li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div class="icon-group"><span class="magenta icon-tram"></span><span class="magenta icon-trolley-bus"></span><span class="magenta icon-bus"></span></div>
                            <table class="table">
                                <tbody class="magenta">
                                <tr>
                                    <td>Проїзний "Безлім"</td>
                                    <td>&nbsp;</td>
                                    <td>500 грн.</td>
                                </tr>
                                <tr>
                                    <td>Проїзний</td>
                                    <td>130 <span>поїздок</span></td>
                                    <td>340 грн.</td>
                                </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <div class="row row-purse">
                                <div class="col-md-4">
                                    <span class="icon-purse magenta"></span>
                                    <div class="purse">Гаманець</div>
                                </div>
                                <div class="col-md-7">
                                    <div class="price">
                                        <div class="price"><span class="magenta icon-tram"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="magenta icon-trolley-bus"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="magenta icon-bus"></span><div>5 грн.</div></div>
                                    </div>
                                    <div class="minibus">
                                        <span class="magenta icon-minibus"></span>
                                        <div>6 грн., без пересадки <span>приватні перевізники</span></div>
                                    </div>
                                </div>
                            </div>
                            <hr class="visiblyMob"/>
                            <div class="row">
                                <div class="order-btn">
                                    <button type="button" class="btn btn-pink" @click="navigateUrl('/municipal')">Детальніше</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 col-card" @click="showConcreteCard('/travel')">
                        <div class="card">
                            <h3>Проїзний<br/>
                                <span>тривалого користування</span></h3>
                            <div class="row">
                                <div class="col-md-5 midd">
                                    <img src="../../../assets/Card_Gray.jpg"/>
                                    <div class="person"><span class="grey icon-personalization"></span>Неперсоніфікований</div>
                                </div>
                                <div class="col-md-7">
                                    <ul>
                                        <li><span class="grey icon-lowered"></span>Знижена вартість проїзду</li>
                                        <li><span class="grey icon-transfer"></span>З пересадкою протягом 30 хв</li>
                                        <li><span class="grey icon-hand-card"></span>Можливість використання іншими особами</li>
                                        <li><span class="grey icon-calendar"></span>Термін дії поточного поповнення - 30 календарних днів</li>
                                        <li><span class="grey icon-purse"></span>Гаманець для поповнення рахунку</li>
                                        <li><span class="grey icon-making"></span>Виготовлення - 60 грн.</li>
                                        <li><span class="grey icon-payment"></span>Оплата - безготівкова</li>
                                        <li><span class="grey icon-usage-term"></span>Термін використання - 5 років</li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div class="icon-group"><span class="grey icon-tram"></span><span class="grey icon-trolley-bus"></span><span class="grey icon-bus"></span></div>
                            <table class="table">
                                <tbody class="grey">
                                <tr>
                                    <td>Проїзний "Безлім"</td>
                                    <td>&nbsp;</td>
                                    <td>500 грн.</td>
                                </tr>
                                <tr>
                                    <td>Проїзний</td>
                                    <td>130 <span>поїздок</span></td>
                                    <td>340 грн.</td>
                                </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <div class="row  row-purse">
                                <div class="col-md-4">
                                    <span class="grey icon-purse"></span>
                                    <div class="purse">Гаманець</div>
                                </div>
                                <div class="col-md-7">
                                    <div class="price">
                                        <div class="price"><span class="grey icon-tram"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="grey icon-trolley-bus"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="grey icon-bus"></span><div>5 грн.</div></div>
                                    </div>
                                    <div class="minibus">
                                        <span class="grey icon-minibus"></span>
                                        <div>6 грн., без пересадки <span>приватні перевізники</span></div>
                                    </div>
                                </div>
                            </div>
                            <hr class="visiblyMob"/>
                            <div class="row">
                                <div class="order-btn">
                                    <button type="button" class="btn btn-pink" @click="navigateUrl('/travel')">Детальніше</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cards" >
                    <div class="col-md-6 col-card" @click="showConcreteCard('/student')">
                        <div class="card">
                            <h3>Студентська<br/>Муніципальна картка вінничанина</h3>
                            <div class="row">
                                <div class="col-md-5 midd">
                                    <img src="../../../assets/Card_Blue.jpg"/>
                                    <div class="person"><span class="blue icon-personalization"></span>Персоніфікована</div>
                                </div>
                                <div class="col-md-7">
                                    <ul>
                                        <li><span class="blue icon-lowered"></span>Знижена вартість проїзду</li>
                                        <li><span class="blue icon-transfer"></span>З пересадкою протягом 30 хв</li>
                                        <li><span class="blue icon-balance-recovery"></span>Відновлення балансу при втраті картки</li>
                                        <li><span class="blue icon-calendar"></span>Термін дії поточного поповнення - 30 календарних днів</li>
                                        <li><span class="blue icon-purse"></span>Гаманець для поповнення рахунку</li>
                                        <li><span class="blue icon-making"></span>Виготовлення - 60 грн.</li>
                                        <li><span class="blue icon-payment"></span>Оплата - безготівкова</li>
                                        <li><span class="blue icon-usage-term"></span>Термін використання - протягом навчання</li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div class="icon-group"><span class="blue icon-tram"></span><span class="blue icon-trolley-bus"></span><span class="blue icon-bus"></span></div>
                            <table class="table">
                                <tbody class="blue">
                                <tr>
                                    <td>Проїзний</td>
                                    <td>130 <span>поїздок</span></td>
                                    <td>170 грн.</td>
                                </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <div class="row  row-purse">
                                <div class="col-md-4">
                                    <span class="blue icon-purse"></span>
                                    <div class="purse">Гаманець</div>
                                </div>
                                <div class="col-md-7">
                                    <div class="price">
                                        <div class="price"><span class="blue icon-tram"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="blue icon-trolley-bus"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="blue icon-bus"></span><div>5 грн.</div></div>
                                    </div>
                                    <div class="minibus">
                                        <span class="blue icon-minibus"></span>
                                        <div>6 грн., без пересадки <span>приватні перевізники</span></div>
                                    </div>
                                </div>
                            </div>
                            <hr class="visiblyMob"/>
                            <div class="row">
                                <div class="order-btn">
                                    <button type="button" class="btn btn-pink" @click="navigateUrl('/student')">Детальніше</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-card" @click="showConcreteCard('/pupillary')">
                        <div class="card">
                            <h3>Учнівська<br/>Муніципальна картка вінничанина</h3>
                            <div class="row">
                                <div class="col-md-5 midd">
                                    <img src="../../../assets/Card_Green.jpg"/>
                                    <div class="person"><span class="green icon-personalization"></span>Персоніфікована</div>
                                </div>
                                <div class="col-md-7">
                                    <ul>
                                        <li><span class="green icon-lowered"></span>Знижена вартість проїзду</li>
                                        <li><span class="green icon-transfer"></span>З пересадкою протягом 30 хв</li>
                                        <li><span class="green icon-balance-recovery"></span>Відновлення балансу при втраті картки</li>
                                        <li><span class="green icon-calendar"></span>Термін дії поточного поповнення - 30 календарних днів</li>
                                        <li><span class="green icon-purse"></span>Гаманець для поповнення рахунку</li>
                                        <li><span class="green icon-making"></span>Виготовлення - 60 грн.</li>
                                        <li><span class="green icon-payment"></span>Оплата - безготівкова</li>
                                        <li><span class="green icon-usage-term"></span>Термін використання - протягом навчання</li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div class="icon-group"><span class="green icon-tram"></span><span class="green icon-trolley-bus"></span><span class="green icon-bus"></span></div>
                            <table class="table">
                                <tbody class="green">
                                <tr>
                                    <td>Проїзний</td>
                                    <td>130 <span>поїздок</span></td>
                                    <td>110 грн.</td>
                                </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <div class="row  row-purse">
                                <div class="col-md-4">
                                    <span class="icon-purse green"></span>
                                    <div class="purse">Гаманець</div>
                                </div>
                                <div class="col-md-7">
                                    <div class="price">
                                        <div class="price"><span class="green icon-tram"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="green icon-trolley-bus"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="green icon-bus"></span><div>5 грн.</div></div>
                                    </div>
                                    <div class="minibus">
                                        <span class="green icon-minibus"></span>
                                        <div>6 грн., без пересадки <span>приватні перевізники</span></div>
                                    </div>
                                </div>
                            </div>
                            <hr class="visiblyMob"/>
                            <div class="row">
                                <div class="order-btn">
                                    <button type="button" class="btn btn-pink" @click="navigateUrl('/pupillary')">Детальніше</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row row-cards" @click="showConcreteCard('/privilege')">
                    <div class="col-md-6 col-card">
                        <div class="card">
                            <h3>Пільгова<br/>Муніципальна картка вінничанина</h3>
                            <div class="row">
                                <div class="col-md-5 midd">
                                    <img src="../../../assets/Card_Yellow.jpg"/>
                                    <div class="person"><span class="yellow icon-personalization"></span>Персоніфікована</div>
                                </div>
                                <div class="col-md-7">
                                    <ul>
                                        <li><span class="yellow icon-calendar-year"></span>Термін дії - 1 рік, з 1-го січня, без накопичення на наступний рік</li>
                                        <li><span class="yellow icon-transfer"></span>З пересадкою протягом 30 хв</li>
                                        <li><span class="yellow icon-balance-recovery"></span>Відновлення балансу при втраті картки</li>
                                        <li><span class="yellow icon-calendar"></span>Термін дії поточного поповнення - 30 календарних днів</li>
                                        <li><span class="yellow icon-purse"></span>Гаманець для поповнення рахунку</li>
                                        <li><span class="yellow icon-making"></span>Виготовлення - перший випуск 0 грн., повторний випуск - 60 грн.</li>
                                        <li><span class="yellow icon-payment"></span>Оплата - безготівкова</li>
                                        <li><span class="yellow icon-usage-term"></span>Термін використання - 5 років</li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div class="icon-group"><span class="yellow icon-tram"></span><span class="yellow icon-trolley-bus"></span><span class="yellow icon-bus"></span></div>
                            <table class="table">
                                <tbody class="yellow">
                                <tr>
<!--                                     <td>Пакет "730"</td>
                                    <td>365 <span>+ із супроводом</span></td>
                                    <td>0 грн.</td> -->
                                     <td>
                                         Реєструйте електронний квиток, заходячи у транспорт, та впродовж 2019 року їздіть без обмежень.
                                    </td>
                                </tr>
<!--                                 <tr>
                                    <td>Пакет "365"</td>
                                    <td>365 <span>поїздок/на рік</span></td>
                                    <td>0 грн.</td>
                                </tr> -->
                                </tbody>
                            </table>
                            <hr/>
                            <div class="row  row-purse">
                                <div class="col-md-4">
                                    <span class="icon-purse yellow"></span>
                                    <div class="purse">Гаманець</div>
                                </div>
                                <div class="col-md-7">
                                    <div class="price">
                                        <div class="price"><span class="yellow icon-tram"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="yellow icon-trolley-bus"></span><div>4 грн.</div></div>
                                        <div class="price"><span class="yellow icon-bus"></span><div>5 грн.</div></div>
                                    </div>
                                    <div class="minibus">
                                        <span class="yellow icon-minibus"></span>
                                        <div>6 грн., без пересадки <span>приватні перевізники</span></div>
                                    </div>
                                </div>
                            </div>
                            <hr class="visiblyMob"/>
                            <div class="row">
                                <div class="order-btn">
                                    <button type="button" class="btn btn-pink" @click="navigateUrl('/privilege')">Детальніше</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '../../commonComponents/PageHeader'

export default {
  methods: {
    showConcreteCard (url) {
      if (url) {
        this.$router.push(url)
      }
    }
  },
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
