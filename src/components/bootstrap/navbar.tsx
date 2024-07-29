import { component$, useOn, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export const Navbar = component$(() => {
  useOn(
    "qvisible",
    $(() => import("bootstrap")),
  );

  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/bootstrap">Контур спорт</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link href="/bootstrap/self" class="nav-link">Профиль</Link>
          </li>
          <li class="nav-item">
            <Link href="/bootstrap/sections" class="nav-link">Спортивные секции</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Мои вызовы [СКОРО]</a>
          </li>
          <li class="nav-item">
            <Link href="/bootstrap/sections" class="nav-link">Диета [СКОРО]</Link>
          </li>
          <li class="nav-item">
            <Link href="/bootstrap/sections" class="nav-link">AI тренер [СКОРО]</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
});
