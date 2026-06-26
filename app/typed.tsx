import Typed from "typed.js";

export function initTypedDomains(): void {
  const container = document.querySelector<HTMLDivElement>(".all__domains");
  if (!container) return;

  container.innerHTML = `<p class="domain"><span id="typed-domain"></span></p>`;

  new Typed("#typed-domain", {
    strings: ["Front-end", "Back-end", "Full-stack"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    smartBackspace: true,
  });
}