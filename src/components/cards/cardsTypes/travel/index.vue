<template>
    <div class="container">
        <div class="row">
            <div class="content">
                <router-link href="" to="/student"><div class="prv_b"></div></router-link>
                <router-link href="" to="/municipal"><div class="nxt_b"></div></router-link>
                <h1>Проїзний тривалого користування</h1>
                <div class="row row-card">
                    <div class="col-md-6 col-card">
                        <div class="row">
                            <div class="col-md-5 midd">
                                <img src="../../../../assets/Card_Gray.jpg"/>
                                <div class="person"><span class="icon-personalization"></span>Неперсоніфікована</div>
                            </div>
                            <div class="col-md-7">
                                <ul>
                                    <li><span class="icon-lowered"></span>Знижена вартість проїзду</li>
                                    <li><span class="icon-transfer"></span>З пересадкою протягом 30 хв</li>
                                    <li><span class="icon-hand-card"></span>Можливість використання іншими особами</li>
                                    <li><span class="icon-calendar"></span>Термін дії поточного поповнення - 30 календарних днів</li>
                                    <li><span class="icon-purse"></span>Гаманець для поповнення рахунку</li>
                                    <li><span class="icon-making"></span>Виготовлення - 60 грн.</li>
                                    <li><span class="icon-payment"></span>Оплата - безготівкова</li>
                                    <li><span class="icon-usage-term"></span>Термін використання - 5 років</li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <div  class="icon-group"><span class="icon-tram"></span><span class="icon-trolley-bus"></span><span class="icon-bus"></span></div>
                        <table class="table table-striped">
                            <tbody>
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
                                <span class="icon-purse"></span>
                                <div class="purse">Гаманець</div>
                            </div>
                            <div class="col-md-7">
                                <div class="price">
                                    <div class="price"><span class="icon-tram"></span><div>4 грн.</div></div>
                                    <div class="price"><span class="icon-trolley-bus"></span><div>4 грн.</div></div>
                                    <div class="price"><span class="icon-bus"></span><div>5 грн.</div></div>
                                </div>
                                <div class="minibus">
                                    <span class="icon-minibus"></span>
                                    <div>6 грн., без пересадки <span>приватні перевізники</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-card">
                        <div class="about-card">
                            Проїзний тривалого користування – неперсоналізована картка, на певну кількість поїздок з визначеним терміном дії надання транспортних послуг.<br/>
                            Проїзний документ тривалого користування можна придбати в роздрібній мережі
                        </div>
                        <div class="about-card">

                        </div>
                      <!--  <div class="order-btn">
                            <button type="button" class="btn btn-pink" disabled>Замовити онлайн</button>
                            <button type="button" class="btn btn-pink" disabled>Записатись до електронної черги</button>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
<style scoped lang="scss" src="../commonStyles.scss"></style>
