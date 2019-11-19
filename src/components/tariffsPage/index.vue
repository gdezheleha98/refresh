<template>
    <div class="container">
        <div class="row">
            <div class="content">
                <page-header>Тарифи</page-header>
                <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col" rowspan="2">Тип оплати\Тип транспорту</th>
                        <th scope="col" rowspan="2">Пакети </th>
                        <th scope="col" rowspan="2">Термін дії пакету</th>
                        <th scope="col" colspan="3">Вартість (грн)</th>
                    </tr>
                    <tr>
                        <th>Трамвай Тролейбус</th>
                        <th>Автобус</th>
                        <th>Приватні перевізники</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-bold">Квиток у водія</td>
                            <td>Готівка</td>
                            <td>Разовий (без пересадки)</td>
                            <td class="text-bold text-center">4</td>
                            <td class="text-bold text-center">5</td>
                            <td class="text-bold text-center">6</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td class="text-bold">Банківська картка з можливістю безконтактної оплати, Google Pay чи Apple Pay</td>
                            <td>Безготівковий</td>
                            <td>Разовий (без пересадки)</td>
                            <td class="text-bold text-center">4</td>
                            <td class="text-bold text-center">5</td>
                            <td class="text-bold text-center">6</td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr class="gray">
                        <td rowspan="3" class="text-bold">Неперсоніфікована картка</td>
                        <td>Проїзний "Безлім" (Необмежена кількість поїздок, можливість пересадки упродовж 30 хв з моменту оплати проїзду)</td>
                        <td>30 днів з моменту придбання</td>
                        <td colspan="2" class="text-bold text-center">500</td>
                        <td class="text-bold text-center">-</td>
                    </tr>
                    <tr class="gray">
                        <td>Проїзний (130 поїздок, можливість пересадки продовж 30 хв з моменту оплати проїзду)</td>
                        <td>30 днів з моменту придбання</td>
                        <td colspan="2" class="text-bold text-center">340</td>
                        <td class="text-bold text-center">-</td>
                    </tr>
                    <tr class="gray">
                        <td>Гаманець</td>
                        <td></td>
                        <td class="text-bold text-center">4</td>
                        <td class="text-bold text-center">5</td>
                        <td class="text-bold text-center">6<br/><span>(без пересадки)</span></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr class="green">
                        <td rowspan="2" class="text-bold">Пільгова</td>
                        <td>Пакет поїздок</td>
                        <td>&nbsp;</td>
                        <td colspan="2" class="text-bold text-center">Гарантує місто</td>
                        <td class="text-bold text-center">-</td>
                    </tr>
                    <tr class="green">
                        <td>Гаманець (гривні)</td>
                        <td></td>
                        <td class="text-bold text-center">4</td>
                        <td class="text-bold text-center">5</td>
                        <td class="text-bold text-center">6<br/><span>(без пересадки)</span></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr class="blue">
                        <td rowspan="2" class="text-bold">Студентська</td>
                        <td>Проїзний (130 поїздок, можливість пересадки продовж 30 хв з моменту оплати проїзду) </td>
                        <td>30 днів з моменту придбання</td>
                        <td colspan="2" class="text-bold text-center">170</td>
                        <td class="text-bold text-center">-</td>
                    </tr>
                    <tr class="blue">
                        <td>Гаманець (гривні)</td>
                        <td></td>
                        <td class="text-bold text-center">4</td>
                        <td class="text-bold text-center">5</td>
                        <td class="text-bold text-center">6<br/><span>(без пересадки)</span></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr class="gray">
                        <td rowspan="2" class="text-bold">Учнівська</td>
                        <td>Проїзний (130 поїздок, можливість пересадки упродовж 30 хв з моменту оплати проїзду)</td>
                        <td>30 днів з моменту придбання</td>
                        <td colspan="2" class="text-bold text-center">110</td>
                        <td class="text-bold text-center">-</td>
                    </tr>
                    <tr class="gray">
                        <td>Гаманець (гривні)</td>
                        <td></td>
                        <td class="text-bold text-center">4</td>
                        <td class="text-bold text-center">5</td>
                        <td class="text-bold text-center">6<br/><span>(без пересадки)</span></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr class="madgenta">
                        <td rowspan="3" class="text-bold">Муніципальна карта вінничанина</td>
                        <td>Проїзний "Безлім" (необмежена кількість поїздок, можливість пересадки упродовж 30 хв з моменту оплати проїзду)</td>
                        <td>30 днів з моменту придбання</td>
                        <td colspan="2" class="text-bold text-center">500</td>
                        <td class="text-bold text-center">-</td>
                    </tr>
                    <tr class="madgenta">
                        <td>Проїзний (130 поїздок, можливість пересадки продовж 30 хв з моменту оплати проїзду)</td>
                        <td>30 днів з моменту придбання</td>
                        <td colspan="2" class="text-bold text-center">340</td>
                        <td class="text-bold text-center">-</td>
                    </tr>
                    <tr class="madgenta">
                        <td>Гаманець</td>
                        <td></td>
                        <td class="text-bold text-center">4</td>
                        <td class="text-bold text-center">5</td>
                        <td class="text-bold text-center">6<br/><span>(без пересадки)</span></td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <p>* Зазначені тарифи є орієнтовними та можуть змінитися</p>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '../commonComponents/PageHeader'

export default {
  components: {
    PageHeader

  }
}
</script>

<style scoped src="./style.scss" lang="scss"></style>
