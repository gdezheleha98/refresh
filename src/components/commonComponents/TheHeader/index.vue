<template>
    <div class="mainHeader">
        <div class="container-fluid top">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="social">
                            Ми у соцмережах:
                            <a href="https://www.facebook.com/VinnytsiaKS/">
                                <span class="icon-facebook-letter"></span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-inline"><span class="icon-telephone-receiver"></span>
                            <li class="list-inline-item"><a href="tel:0800330155">(0800)330-155</a></li>
                            <li class="list-inline-item"><a href="tel:+380432655155">(0432)655-155</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--/top-->
        <!--header-->
        <div class="header" @click.prevent="changeRoute($event.target)">
            <div class="container">
                <div class="row">
                    <!--logo-->
                    <div class="logo">
                        <a href="#">
                            <img src="../../../assets/logo.png"/>
                        </a>
                    </div>
                    <!--/logo-->
                    <div class="cabinet">
                        <span class="icon-private-office"></span>
                        <a href="#" data-url="/user-account">Особистий кабінет</a>
                    </div>
                    <!--menu-->
                    <div class="container menu">

                        <nav class="navbar navbar-expand-lg navbar-light">
                            <button
                                    ref="toggleButton"
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item dropdown">
                                        <a
                                                class="nav-link dropdown-toggle"
                                                href="#"
                                                id="navbarDropdownAboutUs"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                        >
                                            Про нас
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownAboutUs">
                                            <div class="divider-menu">
                                                <a
                                                        class="dropdown-item"
                                                        href="/"
                                                        data-url="/"
                                                >
                                                    Наша діяльність
                                                </a>
                                                <!--<div class="dropdown-divider"></div>-->
                                                <a
                                                        class="dropdown-item"
                                                        href="/normative-documents"
                                                        data-url="/normative-documents"
                                                >
                                                    Нормативні документи
                                                </a>
                                                <!--<a class="dropdown-item" href="/travel" data-url="/travel">Проїзний документ</a>-->
                                                <!--<a class="dropdown-item" href="/student" data-url="/student">Студентська МКВ</a>-->
                                                <!--<a class="dropdown-item" href="/pupillary" data-url="/pupillary">Учнівська МКВ</a>-->
                                                <!--<a class="dropdown-item" href="/privilege" data-url="/privilege">Пільгова МКВ</a>-->
                                            </div>
                                        </div>
                                    </li>
                                    <!--<li class="nav-item dropdown">
                                        <a
                                                class="nav-link dropdown-toggle"
                                                href="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                :class="{active: currentRoute === '/cards-description'}"
                                        >
                                            Картки
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <div class="divider-menu">
                                                <a
                                                        class="dropdown-item"
                                                        href="/cards-description"
                                                        data-url="/cards-description"
                                                >
                                                    Як отримати картку?
                                                </a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="/municipal" data-url="/municipal">
                                                    Загальна МКВ
                                                </a>
                                                <a class="dropdown-item" href="/travel" data-url="/travel">
                                                    Проїзний документ
                                                </a>
                                                <a class="dropdown-item" href="/student" data-url="/student">
                                                    Студентська МКВ
                                                </a>
                                                <a class="dropdown-item" href="/pupillary" data-url="/pupillary">
                                                    Учнівська МКВ
                                                </a>
                                                <a class="dropdown-item" href="/privilege" data-url="/privilege">
                                                    Пільгова МКВ
                                                </a>
                                            </div>
                                        </div>
                                    </li>-->
                                    <li class="nav-item">
                                        <a
                                                class="nav-link"
                                                href="#"
                                                data-url="/cards-description"
                                                :class="{active: currentRoute === '/cards-description'}"
                                        >
                                            Картки
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                                class="nav-link"
                                                href="#"
                                                data-url="/tariffs"
                                                :class="{active: currentRoute === '/tariffs'}"
                                        >
                                            Тарифи
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" data-url="/service-center">
                                            Центри обслуговування
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                                class="nav-link"
                                                href="#"
                                                data-url="/beneficiaries"
                                                :class="{active: currentRoute === '/beneficiaries'}"
                                        >
                                            Пільгові категорії
                                        </a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav navbar-right">
                                    <li class="nav-item">
                                        <span class="icon-queue"></span>
                                        <a
                                                class="nav-link"
                                                href="http://176.102.49.157:30080/registration.html"
                                                @click.stop data-url="/online-queue"
                                        >
                                            Записатись до електронної черги
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <span class="icon-order"></span>
                                        <a class="nav-link" href="#" data-url="/order-card">Замовити картку</a>
                                    </li>
                                    <!--<li class="nav-item">-->
                                    <!--<span class="icon-refill"></span>-->
                                    <!--<a class="nav-link" href="#" data-url="/add-funds">Поповнити картку</a>-->
                                    <!--</li>-->
                                </ul>
                            </div>
                        </nav>

                    </div>
                    <!--/menu-->
                </div>
            </div>
        </div>
        <!--/header-->
    </div>
    <!--mainHeader-->
</template>

<script src="./app.js"></script>

<style scoped src="./styles.scss" lang="scss"></style>
