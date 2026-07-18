(() => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".visually-hidden").textContent = "Menü öffnen";
    mobileNav.hidden = true;
    header?.classList.remove("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.querySelector(".visually-hidden").textContent = isOpen ? "Menü öffnen" : "Menü schließen";
    mobileNav.hidden = isOpen;
    header?.classList.toggle("menu-open", !isOpen);
  });

  mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  const revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const galleryItems = [
    {
      src: "assets/images/HQZN6305-1920w.JPG",
      alt: "Großzügiger Wohnraum mit tiefviolettem Farbkonzept",
      title: "Farbe als Architektur",
      caption: "Wohnraum / Farbkonzept"
    },
    {
      src: "assets/images/Stuhhi-mit-Lasuren-077aab10-1920w.JPG",
      alt: "Helles Treppenhaus mit marmorierter Wandgestaltung",
      title: "Marmor im Licht",
      caption: "Treppenraum / Stuhhi"
    },
    {
      src: "assets/images/Glittzerputz-mit-Lasuren-1920w.JPG",
      alt: "Wellnessraum mit schimmernder mineralischer Wandoberfläche",
      title: "Schimmernde Tiefe",
      caption: "Wellnessraum / Lasur"
    },
    {
      src: "assets/images/IMG_0464-270ae91a-1920w.JPG",
      alt: "Wohnraum mit silbrig strukturierter Spachtelwand",
      title: "Silbrige Struktur",
      caption: "Wohnraum / Spachteltechnik"
    },
    {
      src: "assets/images/IMG_4313-1920w.JPG",
      alt: "Akzentwand mit großformatigem ornamentalen Tapetenmuster",
      title: "Musteranschluss",
      caption: "Akzentwand / Tapete"
    },
    {
      src: "assets/images/IMG_2457-1920w.JPG",
      alt: "Handgearbeitete Wandoberfläche in Rostoptik",
      title: "Rost als Oberfläche",
      caption: "Detail / Effekttechnik"
    }
  ];

  const dialog = document.querySelector("[data-gallery-dialog]");
  const dialogImage = dialog?.querySelector("[data-gallery-image]");
  const dialogTitle = dialog?.querySelector("[data-gallery-title]");
  const dialogCaption = dialog?.querySelector("[data-gallery-caption]");
  const dialogCounter = dialog?.querySelector("[data-gallery-counter]");
  let currentGalleryIndex = 0;

  const renderGalleryItem = (index) => {
    if (!dialogImage || !dialogTitle || !dialogCaption || !dialogCounter) return;
    currentGalleryIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentGalleryIndex];
    dialogImage.src = item.src;
    dialogImage.alt = item.alt;
    dialogTitle.textContent = item.title;
    dialogCaption.textContent = item.caption;
    dialogCounter.textContent = `${String(currentGalleryIndex + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;
  };

  document.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      renderGalleryItem(Number(button.dataset.galleryIndex));
      dialog?.showModal();
      document.body.style.overflow = "hidden";
    });
  });

  const closeDialog = () => {
    dialog?.close();
    document.body.style.overflow = "";
  };

  dialog?.querySelector("[data-gallery-close]")?.addEventListener("click", closeDialog);
  dialog?.querySelector("[data-gallery-prev]")?.addEventListener("click", () => renderGalleryItem(currentGalleryIndex - 1));
  dialog?.querySelector("[data-gallery-next]")?.addEventListener("click", () => renderGalleryItem(currentGalleryIndex + 1));
  dialog?.addEventListener("close", () => {
    document.body.style.overflow = "";
  });
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") renderGalleryItem(currentGalleryIndex - 1);
    if (event.key === "ArrowRight") renderGalleryItem(currentGalleryIndex + 1);
  });

  const form = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");
  const fieldMessages = {
    name: "Bitte geben Sie Ihren Namen ein.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    message: "Bitte beschreiben Sie Ihr Vorhaben kurz."
  };

  const showFieldError = (field) => {
    const error = document.querySelector(`#${field.id}-error`);
    if (!error) return;
    error.textContent = field.validity.valid ? "" : fieldMessages[field.id];
    field.setAttribute("aria-describedby", `${field.id}-error`);
  };

  form?.querySelectorAll("[required]").forEach((field) => {
    field.addEventListener("blur", () => showFieldError(field));
    field.addEventListener("input", () => {
      if (field.validity.valid) showFieldError(field);
    });
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const requiredFields = [...form.querySelectorAll("[required]")];
    requiredFields.forEach(showFieldError);
    const firstInvalid = requiredFields.find((field) => !field.validity.valid);

    if (firstInvalid) {
      formStatus.textContent = "Bitte prüfen Sie die markierten Felder.";
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`Projektanfrage von ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nTelefon: ${data.get("phone") || "nicht angegeben"}\nE-Mail: ${data.get("email")}\n\nVorhaben:\n${data.get("message")}`
    );

    formStatus.textContent = "Ihr E-Mail-Programm wird geöffnet.";
    window.location.href = `mailto:raumdesign-rudek@t-online.de?subject=${subject}&body=${body}`;
  });

  document.querySelectorAll("[data-year]").forEach((year) => {
    year.textContent = new Date().getFullYear();
  });
})();
