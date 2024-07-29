import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import authStore from "~/core/authSote";


function useSetCookie(name: string, value: string, options : any = {}) {
    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}


export default component$(() => {
    const navigator = useNavigate();
    return (
        <div class="container">
            <div class="row gap-10 vh-100">
                <div class="justify-content-center align-items-center col-8">

                </div>
                <div class="row justify-content-center align-items-center col-4 h-100">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Login:</label>
                            <input type="email" class="form-control" id="login"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="col-form-label">Password:</label>
                            <input type="password" class="form-control" id="password"/>
                        </div>
                        <button type="button" class="btn btn-primary" onClick$={() => {useSetCookie("auth", "token"); navigator("/bootstrap");}}>Вход</button>
                    </form>
                </div>
            </div>
        </div>
    );
})
