import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Navbar } from "~/components/bootstrap";

// Add bootstrap styles

import bootstrapStyles from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css?inline";

export const onGet: RequestHandler = async ({ cacheControl, redirect, cookie}) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });

  if(cookie.get('auth')?.value !== 'token') {
    throw redirect(302, '/login');
  }
};

export default component$(() => {
  useStyles$(bootstrapStyles);
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row mb-2 mt-4">
          <p>
            Тренды и топы!
          </p>
        </div>
        <Slot />
      </div>
    </>
  );
});
