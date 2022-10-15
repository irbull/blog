import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";
export function Footer() {
  return (
    <footer class="w-full pt-10 pb-4">
      <Container>
        <div>
          <p class="text-center pt-4 flex items-center justify-center">
            <span class="px-2">
              <svg
                height="18px"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd">
                  <path
                    stroke="#ff5d01"
                    fill="#ff5d01"
                    d="m67 25.281c-318.36 427.66 597.47 645.24 666.21 931.23-27.859-463.08-822.51-463.15-666.21-931.23z"
                  />
                  <path d="m278.03 620.2c16.875 84.355 65.164 160.92 148.31 160.92 39.188 0 257.37 239.29 245.81 288.43-23.297 98.98-139.29 2.668-133.64-105.69-100.14 191.49 157.18 291.15 207.62 130.92 47.906-152.17-353.44-468.14-468.09-474.57z" />
                  <path d="m998.27 610.67c0.54297 57.547-77.883 178.55-149.62 144.81-10.188-4.793-93.289 101.58-99.551 71.09-2.5547-12.445-7.668-37.336-10.734-51.652-11.926-55.637 252.73-172.55 259.91-164.25z" />
                  <path d="m641.8 643.38c9.543 14.656 34.773 39.887 47.391 52.504 1.9648 1.9688 727.37-213.93 445.93-659.57 150.48 470.92-553.61 514.48-493.32 607.07z" />
                </g>
              </svg>
            </span>
            <a
              class="hover:text-underline"
              href="https://ianbull.com"
              target="_blank"
              rel="noopener"
            >
              ianbull.com
            </a>
          </p>
        </div>
        <div class="text-center">
          <p>
            &copy; {new Date().getFullYear()} {site.copyrightName} •{" "}
            <a class="hover:text-underline" href={site.viewSourceUrl}>
              View Source
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
