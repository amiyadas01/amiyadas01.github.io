// Project data
const projectData = {
  rabbitm: {
    title: "Eduvoro",
    status: "In Production",
    overview:
      "Eduvoro is India's emerging educational directory and discovery platform, dedicated to helping students and parents find the right institutions with ease and confidence.",
    features: [
      "Role-Based Access Control (RBAC) for Admin, Teachers, and Students",
      "Secure Authentication with Auth0 & JWT",
      "Messaging Queue integration for async operations",
      "React Services & Redux Toolkit for state management",
      "Smooth navigation with React Router & Context API",
    ],
    challenges:
      "Still in development phase, challenges and solutions will be documented post launch.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Auth0",
      "JWT",
      "Axios",
      "Messaging Queue",
      "Swagger API",
      "Postman",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://eduvoro.com/",
      },
    ],
  },

  "csv-ai": {
    title: "CSV Bulk Processing with AI Insights",
    status: "Completed",
    overview:
      "A tool to process large CSV files, upload bulk data to a database via backend APIs, and generate structured logs for error/success tracking.",
    features: [
      "Bulk data upload from CSV to database",
      "Thread Pool implementation for handling concurrent processing",
      "Detailed log files for success and error entries",
      "Error tracking with backend APIs",
      "AI-powered insights on processed data",
    ],
    challenges:
      "The main challenge was optimizing bulk CSV uploads without server overload. Implementing thread pools solved concurrent requests, while log files ensured transparency.",
    technologies: [
      "GPT - 4o mini",
      "Node.js",
      "CSV Parser",
      "Thread Pool",
      "Logging System",
    ],
    links: [
      {
        label: "Private Repository (Not Public)",
        url: "Private Repository (Not Public)",
      },
    ],
  },

  "netflix-clone": {
    title: "Netflix Clone",
    status: "Demo",
    overview:
      "A Netflix-like movie listing platform built with TMDB API, providing an interactive UI for browsing trending, popular, and upcoming movies.",
    features: [
      "Movie search and listing from TMDB API",
      "Responsive design with Tailwind CSS",
      "Category-based filtering (Trending, Popular, Upcoming)",
      "Demo authentication flow",
    ],
    challenges:
      "Main challenge was efficiently fetching data from TMDB API and handling pagination without performance issues.",
    technologies: ["Vite", "React", "Tailwind CSS", "TMDB API"],
    links: [
      {
        label: "🌐 Live Demo",
        url: "https://github.com/amiyadas01/",
      },
    ],
  },
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

function downloadResume() {
  // Show the download modal
  const downloadModal = document.getElementById("downloadModal");
  if (downloadModal) {
    downloadModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Add these new functions
function closeDownloadModal() {
  const downloadModal = document.getElementById("downloadModal");
  if (downloadModal) {
    downloadModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function performDownload() {
  const link = document.createElement("a");
  link.href = "./AMIYA-KUMAR-DAS-SOFTWARE-DEVELOPER-RESUME.pdf";
  link.download = "AMIYA_KUMAR_DAS_SOFTWARE_DEVELOPER_RESUME.pdf";

  // Add downloading state to confirm button
  const confirmBtn = document.getElementById("confirmDownload");
  if (confirmBtn) {
    confirmBtn.classList.add("downloading-state");
    confirmBtn.innerHTML = "<span>⏳</span> Downloading...";
  }

  // Trigger download
  link.click();

  // Close modal after short delay
  setTimeout(() => {
    closeDownloadModal();
    // Reset button
    if (confirmBtn) {
      confirmBtn.classList.remove("downloading-state");
      confirmBtn.innerHTML = "<span>⬇️</span> Download Resume";
    }
  }, 1500);
}

function openModal(projectKey) {
  const p = projectData[projectKey];
  if (!p || !modal || !modalTitle || !modalBody) return;

  modalTitle.textContent = p.title;
  modalBody.innerHTML = `
    <div class="project-detail-section">
      <div class="detail-title">📋 Overview</div>
      <div class="detail-content">${p.overview}</div>
    </div>
    <div class="project-detail-section">
      <div class="detail-title">✨ Features</div>
      <div class="detail-content"><ul>${p.features
        .map((f) => `<li>${f}</li>`)
        .join("")}</ul></div>
    </div>
    <div class="project-detail-section">
      <div class="detail-title">🚧 Challenges</div>
      <div class="detail-content">${p.challenges}</div>
    </div>
    <div class="project-detail-section">
      <div class="detail-title">🛠️ Tech Stack</div>
      <div class="tech-stack">${p.technologies
        .map((t) => `<span class="tech-pill">${t}</span>`)
        .join("")}</div>
    </div>
    <div class="project-detail-section">
      <div class="detail-title">🔗 Links</div>
      <div class="project-links">${p.links
        .map(
          (l) =>
            `<a href="${l.url}" class="project-link" target="_blank">${l.label}</a>`
        )
        .join("")}</div>
    </div>
  `;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Add event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Project card click handlers
  document.querySelectorAll(".project-card").forEach((card) => {
    card.onclick = () => openModal(card.dataset.project);
  });

  // Modal close handlers
  const closeModalBtn = document.getElementById("closeModal");
  if (closeModalBtn) {
    closeModalBtn.onclick = closeModal;
  }

  if (modal) {
    modal.onclick = (e) => e.target === modal && closeModal();
  }

  // Download modal handlers
  const closeDownloadBtn = document.getElementById("closeDownloadModal");
  if (closeDownloadBtn) {
    closeDownloadBtn.onclick = closeDownloadModal;
  }

  const confirmDownloadBtn = document.getElementById("confirmDownload");
  if (confirmDownloadBtn) {
    confirmDownloadBtn.onclick = performDownload;
  }

  const cancelDownloadBtn = document.getElementById("cancelDownload");
  if (cancelDownloadBtn) {
    cancelDownloadBtn.onclick = closeDownloadModal;
  }

  const downloadModal = document.getElementById("downloadModal");
  if (downloadModal) {
    downloadModal.onclick = (e) => {
      if (e.target.id === "downloadModal") {
        closeDownloadModal();
      }
    };
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (downloadModal && downloadModal.classList.contains("active")) {
        closeDownloadModal();
        return;
      }
      if (modal && modal.classList.contains("active")) {
        closeModal();
        return;
      }
    }
  });
});