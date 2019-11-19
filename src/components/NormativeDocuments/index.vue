<template>
    <div class="normative-documents">
        <div class="container">
            <div class="row">
                <div class="content">
                    <page-header>
                        Нормативні документи
                    </page-header>
                    <ol class="normative-documents__list">
                        <li>
                            Закон України №1812-VIII від 17.01.2017
                            <a href="https://zakon.rada.gov.ua/laws/show/1812-19">
                                «Про внесення змін до деяких законодавчих актів України
                                щодо впровадження автоматизованої системи обліку оплати проїзду в міському пасажирському транспорті»
                            </a>
                        </li>
                        <li>
                            Постанова Кабінету Міністрів України №812 від 25 жовтня 2017 р.
                            <a href="https://zakon.rada.gov.ua/laws/show/812-2017-п">
                                «Про внесення змін до деяких постанов Кабінету Міністрів України»
                            </a>
                        </li>
                        <li>
                            Наказ Директора КП «Вінницякартсервіс»
                            <a href="/static/order.pdf" target="_blank">
                                №23 від 08 липня 2019
                            </a>
                        </li>
                        <li>
                            Договір про надання агентських послуг (Договір приєднання),
                            <a href="/static/agent_agreement.pdf" target="_blank">
                                редакція від 04 листопада 2019 року
                            </a>.
                        </li>
                    </ol>
                </div>
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

<style scoped lang="scss">
    .normative-documents {
        width: 100%;
    }

    .container {
        /*background-color: #fff;*/
    }

    .normative-documents__header {
        width: 100%;
        text-align: left;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: #C33D83;
        font-family: Century Gothic, Arial, sans-serif;
        text-transform: uppercase;
        padding-left: 20px;
    }

    .normative-documents__list {
        width: 100%;
        padding-bottom: 2rem;
        font-size: 1.1rem;
        a {
            color: #C33D83;

        }
    }
</style>
