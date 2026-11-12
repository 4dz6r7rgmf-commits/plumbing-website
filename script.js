const business = window.CLEARFLOW_BUSINESS;

if (business) {
  document.querySelectorAll("[data-business]").forEach((element) => {
    const key = element.dataset.business;
    if (business[key]) element.textContent = business[key];
  });

  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.href = `tel:${business.phoneHref}`;
  });

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.href = `mailto:${business.email}`;
  });

  document.querySelector(".floating-call")?.setAttribute(
    "aria-label",
    `Call ${business.name} now`
  );
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".form-feedback").textContent =
    "This demo form isn't connected yet, so your message was not sent. Please call or email us instead.";
});
